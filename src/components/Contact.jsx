import { PROFILE } from "../data";

const Contact = () => (
  <footer className="contact" id="contact">
    <div className="wrap">
      <h2>Hiring for an AI engineer or data scientist?</h2>
      <a className="contact-email" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
      <ul className="contact-links">
        <li><a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>{PROFILE.phone}</a></li>
        <li><a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href={PROFILE.cv} download="Zakaria_Amgrout_CV.pdf">Download CV</a></li>
      </ul>
      <p className="fine">© {new Date().getFullYear()} {PROFILE.name}, {PROFILE.location}</p>
    </div>
  </footer>
);

export default Contact;
