import { SKILLS, EDUCATION, LANGUAGES } from "../data";
import Reveal from "./motion/Reveal";

const Skills = () => (
  <section className="section wrap" id="skills" aria-labelledby="skills-h">
    <h2 id="skills-h">Skills &amp; education</h2>
    <Reveal className="split">
      <dl className="skills">
        {SKILLS.map((s) => (
          <div key={s.group}>
            <dt>{s.group}</dt>
            <dd>{s.items}</dd>
          </div>
        ))}
      </dl>
      <div className="edu">
        {EDUCATION.map((e) => (
          <div key={e.degree} className="edu-item">
            <p className="edu-degree">{e.degree}</p>
            <p className="edu-school">{e.school}</p>
            <p className="edu-period">{e.period}</p>
          </div>
        ))}
        <div className="edu-item">
          <p className="edu-degree">Languages</p>
          <p className="edu-school">{LANGUAGES}</p>
        </div>
      </div>
    </Reveal>
  </section>
);

export default Skills;
