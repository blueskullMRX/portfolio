import { ABOUT_TEXT } from "../constants/index"
import aboutImg from "../assets/code212.jpg"
import { motion } from "framer-motion"
import { FaCode, FaBrain, FaRocket, FaLightbulb } from "react-icons/fa"

const highlights = [
  { icon: <FaCode />, title: "Full-Stack Dev", desc: "End-to-end solutions" },
  { icon: <FaBrain />, title: "Data Science", desc: "ML & AI expertise" },
  { icon: <FaRocket />, title: "Innovation", desc: "Cutting-edge tech" },
  { icon: <FaLightbulb />, title: "Problem Solver", desc: "Creative solutions" }
]

const About = () => {
  return (
    <section id="about" className="py-20 border-b border-neutral-800/50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-purple-400 font-medium">Get to Know</span>
        <h2 className="text-4xl sm:text-5xl font-bold mt-2 text-gradient">About Me</h2>
      </motion.div>

      <div className="flex flex-wrap items-center gap-12">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-5/12"
        >
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <img
              className="relative rounded-2xl w-full h-auto object-cover shadow-2xl"
              src={aboutImg}
              alt="About me"
            />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-6/12"
        >
          <div className="grid grid-cols-2 gap-4 mb-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-4 rounded-xl hover:bg-white/10 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-2xl text-purple-400 mb-2 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-neutral-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
