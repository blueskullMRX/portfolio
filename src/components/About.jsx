import photo from "../assets/zakaria-code212.jpg";
import { PROFILE } from "../data";
import { useInView } from "../lib/motion";
import Reveal from "./motion/Reveal";

// Face position inside the photo, as percentages of its width and height.
const FACE = { left: 38.3, top: 24.2, width: 18.9, height: 19.9 };

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.35 });

  return (
    <section className="section wrap about" id="about" aria-labelledby="about-h">
      <figure ref={ref} className={`photo ${inView ? "locked" : ""}`}>
        <img src={photo} alt="Zakaria Amgrout standing under a neon CODE'212 sign" width="900" height="1055" loading="lazy" />
        <div className="photo-scan" aria-hidden="true" />
        <div
          className="detect"
          aria-hidden="true"
          style={{
            "--l": `${FACE.left}%`,
            "--t": `${FACE.top}%`,
            "--w": `${FACE.width}%`,
            "--h": `${FACE.height}%`,
          }}
        >
          <span className="detect-tag">face · zakaria</span>
        </div>
      </figure>

      <Reveal className="about-text">
        <h2 id="about-h">About</h2>
        <p>
          I'm an AI engineer with a Master's in Artificial Intelligence and Data Science from the Faculty of Science and
          Technology in Tangier. My work spans healthcare AI, real-time big-data analytics and LLM-driven automation, and I
          care most about taking systems from prototype to something people actually run.
        </p>
        <p>
          Most recently, at NTT DATA, I built a platform that writes JUnit tests for Spring Boot projects by combining static
          analysis with retrieval-augmented generation. Before that I built ML and LLM features for a healthcare platform at
          DIGIUP.
        </p>
        <dl className="about-facts">
          <div><dt>Based in</dt><dd>{PROFILE.location}</dd></div>
          <div><dt>Languages</dt><dd>Arabic, English, French</dd></div>
          <div><dt>Looking for</dt><dd>AI Engineer or Data Scientist roles</dd></div>
        </dl>
      </Reveal>
    </section>
  );
};

export default About;
