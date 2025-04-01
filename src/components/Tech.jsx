import {motion} from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { SiDotnet } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiFlutter } from "react-icons/si";



const iconVariants=(duration) => ({
  initial :{y:-10},
  animate : {y:[10,-10],transition:{duration: duration ,ease :"linear",repeat:Infinity,repeatType:"reverse"}},
  repeatType : "reverse"
})
const Tech = () => {
  return (
    <div className="border-b border-l-neutral-900 pb-24">
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.2}}
      className="my-20 text-center text-4xl">
        Technologies
      </motion.h1>
      <motion.div 
      whileInView = {{opacity:1,x:0}}
      initial={{opacity:0 , x:-300}}
      transition={{duration:1.2}}

      className="flex flex-wrap items-center justify-center gap-4 ">
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiDotnet className="text-7xl text-purple-800"/>
        </motion.div>
        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiDjango className="text-7xl text-green-600"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-500"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiFlutter className="text-7xl text-cyan-500"/>
        </motion.div>
        
      </motion.div>
    </div>
  )
}

export default Tech
