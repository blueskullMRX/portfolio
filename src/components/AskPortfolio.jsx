import { useMemo, useRef, useState } from "react";
import { buildIndex, cosine, expandQuery } from "../lib/vectors";
import { buildCorpus } from "../lib/corpus";
import { useSpotlight } from "../lib/motion";
import CountUp from "./motion/CountUp";

const SUGGESTIONS = [
  "What RAG systems has he built?",
  "Has he used Kafka and Spark?",
  "What did he do at NTT DATA?",
  "Which languages does he speak?",
];

const STAGES = ["Tokenize", "Vectorize", "Retrieve", "Answer"];
const TOP_K = 3;
const MIN_SCORE = 0.08;
// Prefer concrete evidence (projects, roles) over the generic skills list.
const WEIGHT = { Skills: 0.7 };
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

const AskPortfolio = () => {
  const { chunks, index } = useMemo(() => {
    const chunks = buildCorpus();
    return { chunks, index: buildIndex(chunks.map((c) => c.text)) };
  }, []);

  const [query, setQuery] = useState("");
  const [stage, setStage] = useState(-1);
  const [run, setRun] = useState(null);
  const runId = useRef(0);
  const spot = useSpotlight();
  const scanning = run && stage < STAGES.length - 1;

  const ask = async (q) => {
    const text = q.trim();
    if (!text) return;
    const id = ++runId.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const step = reduce ? 0 : 260;

    const t0 = performance.now();
    const tokens = expandQuery(text);
    const qv = index.vectorize(tokens);
    const hits = chunks
      .map((c, i) => ({ ...c, score: cosine(qv, index.vectors[i]) * (WEIGHT[c.source] ?? 1) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, TOP_K)
      .filter((h) => h.score > 0);
    const ms = performance.now() - t0;

    setRun({ text, tokens, nnz: qv.size, hits, ms });
    for (let s = 0; s < STAGES.length; s++) {
      if (runId.current !== id) return;
      setStage(s);
      await wait(step);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    ask(query);
  };

  const best = run?.hits[0];
  const answered = best && best.score >= MIN_SCORE;

  return (
    <section ref={spot} className={`ask spotlight intro-step ${scanning ? "scanning" : ""}`} style={{ "--delay": "500ms" }} aria-labelledby="ask-h">
      <div className="ask-head">
        <h2 id="ask-h">Ask my portfolio</h2>
        <p>
          Retrieval runs in your browser: TF-IDF vectors and cosine similarity over {chunks.length} passages from this
          site, {index.vocab.length.toLocaleString()} terms. No API calls.
        </p>
      </div>

      <form className="ask-form" onSubmit={onSubmit} role="search">
        <label htmlFor="ask-input" className="sr-only">Question</label>
        <input
          id="ask-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask about skills, projects, experience…"
          autoComplete="off"
        />
        <button type="submit">Ask</button>
      </form>
      <div className="chips" aria-label="Example questions">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            type="button"
            className="chip"
            onClick={() => {
              setQuery(s);
              ask(s);
            }}
          >
            {s}
          </button>
        ))}
      </div>

      {run && (
        <div className="ask-run" aria-live="polite">
          <ol className="stages">
            {STAGES.map((s, i) => (
              <li key={s} className={i <= stage ? "on" : ""}>{s}</li>
            ))}
          </ol>

          {stage >= 0 && (
            <p className="trace">
              <span className="k">tokens</span> {run.tokens.slice(0, 12).join(" ") || "none"}
              {run.tokens.length > 12 && " …"}
            </p>
          )}
          {stage >= 1 && (
            <p className="trace">
              <span className="k">query vector</span> {run.nnz} non-zero of {index.vocab.length} dims
              <span className="k"> latency</span> {run.ms.toFixed(1)} ms
            </p>
          )}

          {stage >= 2 && (
            <ul className="hits">
              {run.hits.length === 0 && <li className="hit-empty">No passage shares a term with that question.</li>}
              {run.hits.map((h, i) => (
                <li key={h.id} className="hit">
                  <div className="hit-top">
                    <span className="hit-rank">[{i + 1}]</span>
                    <a href={h.href} className="hit-source">{h.source}</a>
                    <span className="hit-score"><CountUp value={h.score} /></span>
                  </div>
                  <div className="bar" aria-hidden="true">
                    <span style={{ width: `${Math.min(100, h.score * 140)}%` }} />
                  </div>
                  <p className="hit-text">{h.text}</p>
                </li>
              ))}
            </ul>
          )}

          {stage >= 3 && (
            <div className="answer">
              {answered ? (
                <p>
                  {best.text} <a href={best.href} className="cite">[1]</a>
                  {run.hits[1] && run.hits[1].score >= MIN_SCORE && (
                    <> See also <a href={run.hits[1].href} className="cite">{run.hits[1].source} [2]</a>.</>
                  )}
                </p>
              ) : (
                <p>
                  Nothing on this site matches that well. Try asking about RAG, Kafka, computer vision, NTT DATA or
                  how to get in touch.
                </p>
              )}
              <p className="answer-note">Extractive answer from the top passage. No text is generated.</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default AskPortfolio;
