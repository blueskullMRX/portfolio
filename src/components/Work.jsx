import { PROJECTS, DOMAINS } from "../data";
import { FaGithub } from "react-icons/fa";
import ProjectMap from "./ProjectMap";
import Reveal from "./motion/Reveal";
import { useInView } from "../lib/motion";

const Arch = ({ cols }) => {
  const [ref, inView] = useInView({ threshold: 0.4 });
  return (
  <ol ref={ref} className={`arch ${inView ? "flowing" : ""}`} aria-label="Architecture">
    {cols.map((col, i) => (
      <li key={i} className="arch-col" style={{ "--i": i }}>
        {col.map((n) => (
          <span key={n} className={`arch-node ${i === cols.length - 1 ? "arch-out" : ""}`}>{n}</span>
        ))}
      </li>
    ))}
  </ol>
  );
};

const Work = () => {
  const featured = PROJECTS.filter((p) => p.featured);
  const more = PROJECTS.filter((p) => !p.featured);

  return (
    <section className="section wrap" id="work" aria-labelledby="work-h">
      <h2 id="work-h">Project space</h2>
      <ProjectMap />

      <h2 className="sub-h">Selected work</h2>
      <div className="cases">
        {featured.map((p) => (
          <Reveal as="article" key={p.id} id={`p-${p.id}`} className="case">
            <div className="case-head">
              <p className="case-domain" style={{ color: DOMAINS[p.domain].color }}>{DOMAINS[p.domain].label}</p>
              <h3>{p.title}</h3>
              <p className="case-meta">{p.meta}</p>
              {p.link ? (
                <a className="code-link" href={p.link} target="_blank" rel="noreferrer">
                  <FaGithub aria-hidden="true" /> View code
                </a>
              ) : (
                p.note && <p className="case-note">{p.note}</p>
              )}
            </div>
            <div className="case-body">
              <p>{p.summary}</p>
              <p className="result">{p.result}</p>
              {p.arch && <Arch cols={p.arch} />}
              <p className="stack">{p.stack.join(", ")}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <h3 className="more-h">More projects</h3>
      <ul className="more">
        {more.map((p) => (
          <li key={p.id} id={`p-${p.id}`}>
            <span className="dot" style={{ background: DOMAINS[p.domain].color }} aria-hidden="true" />
            <div>
              <p className="more-title">
                {p.link ? <a href={p.link} target="_blank" rel="noreferrer">{p.title}</a> : p.title}
                {p.meta && <span className="more-meta"> · {p.meta}</span>}
                {p.status && <span className="status-pill">{p.status}</span>}
              </p>
              <p className="more-desc">{p.summary}{p.result ? ` ${p.result}` : ""}</p>
            </div>
            <p className="stack">{p.stack.join(", ")}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Work;
