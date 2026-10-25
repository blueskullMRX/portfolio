import { PROFILE, EXPERIENCE, PROJECTS, SKILLS, EDUCATION, LANGUAGES } from "../data.js";

// Every passage the "Ask my portfolio" demo can retrieve, built from the same data the page renders.
export function buildCorpus() {
  const chunks = [];
  const add = (source, text, href) => chunks.push({ id: chunks.length, source, text, href });

  add("Profile", `${PROFILE.name} is an ${PROFILE.role} based in ${PROFILE.location}. ${PROFILE.intro}`, "#top");
  add("Profile", "Seeking an AI Engineer or Data Scientist role building machine-learning and LLM systems.", "#contact");
  add("Contact", `Email ${PROFILE.email}, phone ${PROFILE.phone}, LinkedIn and GitHub (blueskullMRX). The CV can be downloaded from this site.`, "#contact");

  EXPERIENCE.forEach((job) => {
    add(`${job.company}`, `${job.role} at ${job.company} (${job.period}), ${job.context}.`, "#experience");
    job.points.forEach((p) => add(`${job.company}`, p, "#experience"));
  });

  PROJECTS.forEach((p) => {
    add(p.title, `${p.status ? `${p.status}: ` : ""}${p.summary}${p.result ? " " + p.result : ""}`, `#p-${p.id}`);
    add(p.title, `${p.title} uses ${p.stack.join(", ")}.`, `#p-${p.id}`);
  });

  SKILLS.forEach((s) => add("Skills", `${s.group}: ${s.items}.`, "#skills"));
  EDUCATION.forEach((e) => add("Education", `${e.degree}, ${e.school}, ${e.period}.`, "#skills"));
  add("Languages", `Languages: ${LANGUAGES}.`, "#skills");

  return chunks;
}
