import { motion } from "framer-motion"
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa"

const experiences = [
  {
    company: "DIGIUP",
    role: "Artificial Intelligence Engineer",
    period: "Jul 2025 - Aug 2025",
    location: "Rabat, Morocco",
    description: [
      "Developed SEHATOKA, an AI-driven healthcare platform that improved patient diagnosis accuracy by 30% and reduced workflow processing time by 40%.",
      "Designed and deployed machine learning models for symptom-based patient routing, disease risk prediction, and an NLP-powered doctor chatbot, enhancing patient triage efficiency and improving risk assessment accuracy.",
      "Integrated Large Language Models (LLMs) for clinical decision support and automated patient management, leading to faster decision-making and improved patient care management."
    ],
    technologies: ["Python", "NLP", "LLMs", "FastAPI", "React", "PostgreSQL", "Docker"]
  },
  {
    company: "Smart Automation Technologies Pvt. Ltd.",
    role: "Web Developer",
    period: "Apr 2024 - Jun 2024",
    location: "Tangier, Morocco",
    description: [
      "Developed a solution for auditing and managing the inventory of hardware and logistics resources using the MEAN stack, improving resource tracking efficiency.",
      "Achieved key milestones by designing and developing the resource management section of the platform, and performed testing and debugging to ensure reliability and performance, enhancing system stability."
    ],
    technologies: ["Angular", "Node.js", "Express.js", "MongoDB", "JavaScript"]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 border-b border-neutral-800/50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-purple-400 font-medium">Where I've Worked</span>
        <h2 className="text-4xl sm:text-5xl font-bold mt-2 text-gradient">Experience</h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 via-pink-500 to-purple-600"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row items-start mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-neutral-900 z-10"></div>

            {/* Content */}
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 pl-8 md:pl-0" : "md:pl-12 pl-8 md:pr-0"}`}>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-purple-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-neutral-400 text-sm">
                      <FaCalendarAlt className="text-purple-400" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-neutral-400 text-sm mt-1">
                      <FaMapMarkerAlt className="text-pink-400" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-3 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-300 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
