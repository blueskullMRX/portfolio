import {ABOUT_TEXT} from "../constants/index"
import aboutImg from "../assets/code212.jpg"
import {motion} from "framer-motion"

const About = () => {
  return <>
  <div className="border-b border-l-neutral-900 pb-4">
    <h2 className="my-20 text-center text-4xl">
        <span className="bg-gradient-to-r from-purple-950 via-slate-500 to-gray-300 bg-clip-text text-4xl -tracking-tight text-transparent" >About Me</span>
    </h2>
    <div className="flex flex-wrap">
        <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:0.8}}
          className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <img className="rounded-2xl" src={aboutImg} alt="about" />
            </div>
        </motion.div>
        <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:100}}
          transition={{duration:0.8}}
          className="w-full lg:w-1/2 " >
              <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-lg">
                {ABOUT_TEXT}
              </p>
        </motion.div>
    </div>
  </div>
  </>
}

export default About
