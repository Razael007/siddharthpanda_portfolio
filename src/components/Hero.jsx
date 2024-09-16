import { HERO_CONTENT } from "../../react-portfolio-assets-kevin-main/constants";
import profilePic from "/Users/siddharthpanda/Productivity/Coding/react-portfolio/src/assets/1000020882.jpg";
import {motion} from "framer-motion";
const container = (delay)=>({
  hidden: {x: -100, opacity: 0},
  visible: {x: 0, opacity: 1, transition: {duration: 0.5, delay: delay},
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-col items-center lg:items-start lg:flex-row lg:pr-4">
        <div className="flex flex-col items-center lg:items-start lg:w-1/2 lg:pl-20">
          <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="text-5xl font-thin tracking-tight lg:text-7xl mb-4 text-center lg:text-left">
            Siddharth Panda
          </motion.h1>
          <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent mb-2 text-center lg:text-left">
            Data Scientist
          </motion.span>
          <motion.p variants={container(1)} initial="hidden" animate="visible" className="max-w-xl py-6 font-light tracking-tighter text-center lg:text-left">
            {HERO_CONTENT}
          </motion.p>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-start px-4 lg:px-0">
          <motion.img
            initial={{x:100, opacity: 0}}
            animate={{x:0, opacity: 1}}
            transition={{duration: 1, delay: 1.2}}
            src={profilePic} 
            alt="Profile Picture" 
            className="object-cover w-2/3 lg:w-3/4 rounded-lg" // Smaller width for mobile view
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;