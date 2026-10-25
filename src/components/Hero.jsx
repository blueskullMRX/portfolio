import { PROFILE } from "../data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AskPortfolio from "./AskPortfolio";
import VectorField from "./motion/VectorField";
import DecodeText from "./motion/DecodeText";

const FACTS = [
  { k: "97–98%", v: "validation score on LLM-generated JUnit suites at NTT DATA" },
  { k: "+30%", v: "diagnosis accuracy on the SEHATOKA healthcare platform" },
  { k: "−40%", v: "clinical workflow processing time on the same platform" },
];

const Hero = () => (
  <div className="hero-shell">
  <VectorField />
  <header className="hero wrap" id="top">
    <div className="hero-text">
      <p className="hero-role">{PROFILE.role}</p>
      <h1><DecodeText text={PROFILE.headline} /></h1>
      <p className="lede intro-step" style={{ "--delay": "900ms" }}>{PROFILE.intro}</p>
      <div className="actions intro-step" style={{ "--delay": "1050ms" }}>
        <a className="btn btn-primary" href={`mailto:${PROFILE.email}`}>Email me</a>
        <a className="btn" href={PROFILE.cv} download="Zakaria_Amgrout_CV.pdf">Download CV</a>
        <a className="icon-link" href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a className="icon-link" href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
      <dl className="facts intro-step" style={{ "--delay": "1200ms" }}>
        {FACTS.map((f) => (
          <div key={f.k}>
            <dt>{f.k}</dt>
            <dd>{f.v}</dd>
          </div>
        ))}
      </dl>
    </div>
    <AskPortfolio />
  </header>
  </div>
);

export default Hero;
