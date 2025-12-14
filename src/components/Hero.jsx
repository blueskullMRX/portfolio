import { HERO_CONTENT } from "../constants/index"
import Profile from "../assets/Profile.png"
import { motion } from "framer-motion"
import { FaDownload, FaArrowDown } from "react-icons/fa"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.8,
      ease: "easeOut"
    }
  }
})

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex items-center border-b border-neutral-800/50 pb-8 lg:pb-20">
      <div className="flex flex-wrap items-center w-full">
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="flex flex-col items-center lg:items-start">
            <motion.p
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-purple-400 font-medium text-lg mb-2"
            >
              👋 Hello, I'm
            </motion.p>
            
            <motion.h1
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white mb-4"
            >
              Zakaria
              <span className="block text-gradient">Amgrout</span>
            </motion.h1>
            
            <motion.div
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[2px] w-12 bg-gradient-to-r from-purple-500 to-pink-500"></span>
              <span className="text-2xl sm:text-3xl font-light bg-gradient-to-r from-pink-300 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Software Developer & Data Scientist
              </span>
            </motion.div>
            
            <motion.p
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="max-w-xl py-4 text-neutral-400 text-base sm:text-lg leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p>
            
            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 mt-6"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 glass rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300"
              >
                View Projects
              </motion.a>
            </motion.div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-10 lg:mb-0">
          <motion.div
            className="flex justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border border-purple-500/20 animate-spin" style={{ animationDuration: '20s' }}></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border border-cyan-500/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            </div>
            
            <motion.img
              whileHover={{ scale: 1.05 }}
              className="relative z-10 rounded-full w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover ring-4 ring-purple-500/30 hover:ring-purple-400/50 transition-all duration-500 shadow-2xl shadow-purple-500/20"
              src={Profile}
              alt="Zakaria Amgrout"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-neutral-500 text-sm mb-2">Scroll Down</span>
        <FaArrowDown className="text-purple-400" />
      </motion.div>
    </div>
  )
}

export default Hero
