import {HERO_CONTENT} from "../constants/index"
import Profile from "../assets/Profile.png"
import {motion } from "framer-motion"
const container = (delay) => ({
    hidden: {x:-100, opacity:0},
    visible: {
        x:0,
        opacity:1,
        transition:{
            delay:delay,
            duration:0.8
        }
    }
    })
const Hero = () => {
  return <div className="boder-b border-neutral-900 pb-4 lg:mb-36">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visible"

                className="pd-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Zakaria Amgrout</motion.h1>
                <motion.span
                
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl -tracking-tight text-transparent">Software Developer</motion.span>
                <motion.p 
                
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-tighter text-lg">{HERO_CONTENT}</motion.p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 ">
            <div className="flex justify-center ">
                <motion.img
                initial = {{x:100, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{delay:1 , duration:0.8}}
                className="rounded-2xl w-3/4" src={Profile} alt="profilepic" />
            </div>
        </div>
    </div>
  </div>  
}

export default Hero
