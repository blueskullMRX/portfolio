import { useMemo, useState } from "react";
import { PROJECTS, DOMAINS } from "../data";
import { buildIndex, cosine, pca2 } from "../lib/vectors";
import { useInView, useSpotlight } from "../lib/motion";

const W = 1000;
const H = 460;
const PAD = 48;

const TOP_SKILLS = ["RAG", "Qdrant", "LLM", "Kafka", "Docker", "FastAPI", "React", "TensorFlow", "scikit-learn", "Python"];

const hasSkill = (p, skill) => {
  const s = skill.toLowerCase();
  return p.stack.some((x) => x.toLowerCase() === s || (s === "llm" && /llm|openai/i.test(x)));
};

const ProjectMap = () => {
  const { points, explained, edges } = useMemo(() => {
    // Stack terms are repeated so tools weigh as much as prose in the vectors.
    const docs = PROJECTS.map((p) => `${p.title} ${p.summary} ${p.result || ""} ${p.stack.join(" ")} ${p.stack.join(" ")}`);
    const idx = buildIndex(docs);
    const { coords, explained } = pca2(idx.vectors, idx.vocab.length);
    const xs = coords.map((c) => c[0]);
    const ys = coords.map((c) => c[1]);
    const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
    const points = PROJECTS.map((p, i) => ({
      ...p,
      x: PAD + ((coords[i][0] - x0) / (x1 - x0 || 1)) * (W - 2 * PAD),
      y: PAD + ((coords[i][1] - y0) / (y1 - y0 || 1)) * (H - 2 * PAD),
    }));
    // Nudge points apart in screen space so none overlap; the layout stays the PCA layout.
    for (let it = 0; it < 80; it++) {
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i], b = points[j];
          const min = a.featured && b.featured ? 84 : a.featured || b.featured ? 56 : 36;
          const dx = b.x - a.x, dy = b.y - a.y;
          const d = Math.hypot(dx, dy) || 0.01;
          if (d < min) {
            const push = (min - d) / 2;
            a.x -= (dx / d) * push; a.y -= (dy / d) * push;
            b.x += (dx / d) * push; b.y += (dy / d) * push;
          }
        }
      }
      points.forEach((p) => {
        p.x = Math.max(PAD, Math.min(W - PAD, p.x));
        p.y = Math.max(PAD, Math.min(H - PAD / 2, p.y));
      });
    }
    // Link each project to its most similar project (cosine in the full TF-IDF space).
    const seen = new Set();
    const edges = [];
    idx.vectors.forEach((v, i) => {
      let best = -1, bestS = 0;
      idx.vectors.forEach((u, j) => {
        if (i === j) return;
        const s = cosine(v, u);
        if (s > bestS) { bestS = s; best = j; }
      });
      const key = [i, best].sort().join("-");
      if (best >= 0 && !seen.has(key)) {
        seen.add(key);
        edges.push({ a: points[i], b: points[best], s: bestS });
      }
    });
    return { points, explained, edges };
  }, []);

  const [skill, setSkill] = useState(null);
  const [canvasRef, inView] = useInView({ threshold: 0.3 });
  const spot = useSpotlight();
  const [hover, setHover] = useState(null);
  const active = hover ? points.find((p) => p.id === hover) : null;
  const matches = skill ? points.filter((p) => hasSkill(p, skill)).length : null;

  const go = (p) => {
    const el = document.getElementById(`p-${p.id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={`map spotlight ${inView ? "projected" : ""}`} ref={spot}>
      <div className="map-controls">
        <p className="map-label" id="skill-filter">Highlight projects by skill</p>
        <div className="chips" role="group" aria-labelledby="skill-filter">
          {TOP_SKILLS.map((s) => (
            <button
              key={s}
              type="button"
              className={`chip ${skill === s ? "chip-on" : ""}`}
              aria-pressed={skill === s}
              onClick={() => setSkill(skill === s ? null : s)}
            >
              {s}
            </button>
          ))}
        </div>
        <p className="map-status" aria-live="polite">
          {skill ? `${matches} of ${points.length} projects use ${skill}.` : `${points.length} projects plotted.`}
        </p>
      </div>

      <div className="map-canvas" ref={canvasRef}>
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Projects plotted by text similarity, colored by domain">
          <line x1={PAD / 2} y1={H / 2} x2={W - PAD / 2} y2={H / 2} className="axis" />
          <line x1={W / 2} y1={PAD / 2} x2={W / 2} y2={H - PAD / 2} className="axis" />
          <text x={W - PAD / 2} y={H / 2 - 8} className="axis-label" textAnchor="end">
            PC1 · {(explained[0] * 100).toFixed(1)}%
          </text>
          <text x={W / 2 + 8} y={PAD / 2 + 4} className="axis-label">
            PC2 · {(explained[1] * 100).toFixed(1)}%
          </text>
          {edges.map((e, i) => {
            const len = Math.hypot(e.b.x - e.a.x, e.b.y - e.a.y);
            const dim = skill && !(hasSkill(e.a, skill) && hasSkill(e.b, skill));
            return (
              <line
                key={i}
                x1={e.a.x} y1={e.a.y} x2={e.b.x} y2={e.b.y}
                className={`edge ${dim ? "edge-dim" : ""}`}
                style={{ "--len": len, "--d": `${900 + i * 60}ms`, strokeOpacity: 0.15 + e.s * 0.6 }}
              />
            );
          })}
          {points.map((p, i) => {
            const dim = skill && !hasSkill(p, skill);
            const r = p.featured ? 10 : 6.5;
            return (
              <g
                key={p.id}
                className={`pt ${dim ? "pt-dim" : ""} ${hover === p.id ? "pt-hover" : ""}`}
                style={{ "--tx": `${p.x}px`, "--ty": `${p.y}px`, "--cx": `${W / 2}px`, "--cy": `${H / 2}px`, "--d": `${i * 45}ms` }}
                tabIndex={0}
                role="button"
                aria-label={`${p.title}, ${DOMAINS[p.domain].label}`}
                onMouseEnter={() => setHover(p.id)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(p.id)}
                onBlur={() => setHover(null)}
                onClick={() => go(p)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), go(p))}
              >
                <circle r={r + 6} className="pt-hit" />
                <circle r={r + 6} className="pt-halo" />
                {p.status ? (
                  <circle r={r} fill="var(--panel)" stroke={DOMAINS[p.domain].color} strokeWidth="2" strokeDasharray="3 2" />
                ) : (
                  <circle r={r} fill={DOMAINS[p.domain].color} />
                )}
                {p.featured && (
                  <text
                    y={-r - 8}
                    textAnchor={p.x < W * 0.15 ? "start" : p.x > W * 0.85 ? "end" : "middle"}
                    className="pt-label"
                  >
                    {p.short}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
        <div className={`map-tip ${active ? "show" : ""}`} aria-hidden="true">
          {active && (
            <>
              <p className="tip-title">{active.title}</p>
              <p className="tip-domain" style={{ color: DOMAINS[active.domain].color }}>
                {DOMAINS[active.domain].label}{active.status ? ` · ${active.status}` : ""}
              </p>
              <p className="tip-stack">{active.stack.slice(0, 6).join(", ")}</p>
            </>
          )}
        </div>
      </div>

      <ul className="legend">
        {Object.entries(DOMAINS).map(([k, d]) => (
          <li key={k}><span style={{ background: d.color }} />{d.label}</li>
        ))}
        <li><span className="legend-progress" />In progress</li>
      </ul>
      <p className="map-note">
        Each project is a TF-IDF vector of its description and stack, projected to two dimensions with PCA. Lines join each
        project to its most similar one by cosine similarity. Click a point to jump to it.
      </p>
    </div>
  );
};

export default ProjectMap;
