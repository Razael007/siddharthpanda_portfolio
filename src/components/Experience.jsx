import React from 'react';
import { EXPERIENCES } from '../constants';
import {motion} from "framer-motion";
const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 whileInView={{opacity:1, y: 0}} initial={{opacity:0, y:-100}} transition={{duration:0.5}} className="my-20 text-center text-4xl">Experience</motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col items-center lg:flex-row lg:items-start lg:justify-start"
          >
            <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity:0, x:-100}} transition={{duration: 1}} className="w-full max-w-xl flex justify-center lg:justify-start lg:pl-32">
              <p className="mb-2 text-sm text-neutral-400 text-center lg:text-left">
                {experience.year}
              </p>
            </motion.div>
            <motion.div whileInView={{opacity:1, x: 0}} initial={{opaciyt:0, x:100}} transition={{duration: 1}} className="w-full max-w-xl flex flex-col items-center lg:items-start lg:ml-12">
              <h6 className="mb-2 font-semibold text-center lg:text-left">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">{experience.company}</span>
              </h6>
              {/* Description will be center-aligned on mobile */}
              <p className="mb-4 text-center lg:text-left text-neutral-400">
                {experience.description}
              </p>
              {/* Tech tags will be center-aligned on mobile */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
