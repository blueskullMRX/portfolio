import { useEffect, useRef } from "react";
import { EXPERIENCE } from "../data";
import Reveal from "./motion/Reveal";
import { prefersReducedMotion } from "../lib/motion";

const Experience = () => {
  const line = useRef(null);
  useEffect(() => {
    const el = line.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      el.style.setProperty("--p", 1);
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const p = (window.innerHeight * 0.65 - r.top) / r.height;
      el.style.setProperty("--p", Math.max(0, Math.min(1, p)));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
  <section className="section wrap" id="experience" aria-labelledby="exp-h">
    <h2 id="exp-h">Experience</h2>
    <ol className="timeline" ref={line}>
      {EXPERIENCE.map((job) => (
        <Reveal as="li" key={job.company} className="job">
          <p className="job-period">{job.period}</p>
          <div className="job-body">
            <h3>
              {job.role} <span className="at">at {job.company}</span>
            </h3>
            <p className="job-context">{job.context}</p>
            <ul className="points">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="stack">{job.stack.join(", ")}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  </section>
  );
};

export default Experience;
