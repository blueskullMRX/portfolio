import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { 
  SiDotnet, SiDjango, SiFlutter, SiPython, SiTensorflow, SiPostgresql, SiMongodb, SiDocker, SiGit,
  SiPytorch, SiKeras, SiHuggingface, SiNumpy, SiPandas, SiScikitlearn, SiMysql, SiSqlite,
  SiFastapi, SiFlask, SiOpencv, SiLinux, SiCplusplus, SiJavascript, SiTalend
} from "react-icons/si";
import { FaNodeJs, FaJava, FaDatabase, FaChartBar, FaLanguage } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

const techCategories = [
  {
    title: "Programming Languages",
    technologies: [
      { icon: <SiPython />, name: "Python", color: "text-yellow-400" },
      { icon: <TbBrandCSharp />, name: "C#", color: "text-purple-500" },
      { icon: <SiCplusplus />, name: "C++", color: "text-blue-500" },
      { icon: <FaJava />, name: "Java", color: "text-red-500" },
      { icon: <SiJavascript />, name: "JavaScript", color: "text-yellow-300" },
    ]
  },
  {
    title: "ML / Deep Learning",
    technologies: [
      { icon: <SiPytorch />, name: "PyTorch", color: "text-orange-500" },
      { icon: <SiKeras />, name: "Keras", color: "text-red-600" },
      { icon: <SiTensorflow />, name: "TensorFlow", color: "text-orange-400" },
      { icon: <SiHuggingface />, name: "Hugging Face", color: "text-yellow-500" },
      { icon: <FaLanguage />, name: "NLTK", color: "text-blue-300" },
      { icon: <SiNumpy />, name: "NumPy", color: "text-blue-400" },
      { icon: <SiPandas />, name: "Pandas", color: "text-blue-600" },
      { icon: <SiScikitlearn />, name: "Scikit-learn", color: "text-orange-500" },
    ]
  },
  {
    title: "Databases",
    technologies: [
      { icon: <SiMysql />, name: "MySQL", color: "text-blue-500" },
      { icon: <SiPostgresql />, name: "PostgreSQL", color: "text-blue-400" },
      { icon: <FaDatabase />, name: "SQL Server", color: "text-red-500" },
      { icon: <SiSqlite />, name: "SQLite", color: "text-blue-300" },
      { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500" },
    ]
  },
  {
    title: "Web Frameworks",
    technologies: [
      { icon: <SiDotnet />, name: ".NET Core", color: "text-purple-600" },
      { icon: <SiDjango />, name: "Django", color: "text-green-600" },
      { icon: <SiFastapi />, name: "FastAPI", color: "text-teal-400" },
      { icon: <SiFlask />, name: "Flask", color: "text-white" },
      { icon: <RiReactjsLine />, name: "React", color: "text-cyan-400" },
      { icon: <FaNodeJs />, name: "Node.js", color: "text-green-400" },
    ]
  },
  {
    title: "Tools & Others",
    technologies: [
      { icon: <SiGit />, name: "Git", color: "text-orange-600" },
      { icon: <SiDocker />, name: "Docker", color: "text-blue-500" },
      { icon: <SiLinux />, name: "Linux", color: "text-yellow-500" },
      { icon: <SiOpencv />, name: "OpenCV", color: "text-green-500" },
      { icon: <FaChartBar />, name: "Power BI", color: "text-yellow-400" },
      { icon: <SiTalend />, name: "Talend", color: "text-blue-400" },
      { icon: <SiFlutter />, name: "Flutter", color: "text-cyan-300" },
    ]
  }
];

const Tech = () => {
  return (
    <section id="tech" className="py-20 border-b border-neutral-800/50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-purple-400 font-medium">What I Work With</span>
        <h2 className="text-4xl sm:text-5xl font-bold mt-2 text-gradient">Technologies</h2>
      </motion.div>

      <div className="space-y-12">
        {techCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-medium text-neutral-400 mb-6 text-center">
              {category.title}
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {category.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <div className="glass rounded-xl p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-purple-500/10">
                    <div className={`text-4xl ${tech.color} transition-all duration-300 group-hover:scale-110`}>
                      {tech.icon}
                    </div>
                  </div>
                  <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-neutral-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tech
