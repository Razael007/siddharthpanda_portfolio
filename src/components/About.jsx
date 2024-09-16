import React from 'react';
import aboutImg from '/Users/siddharthpanda/Productivity/Coding/react-portfolio/src/assets/IMG_6622.jpg';
import { ABOUT_TEXT } from '../../react-portfolio-assets-kevin-main/constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap items-center">
        <motion.div 
          className="w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={aboutImg} 
            alt="about"
            className="object-cover w-3/4 lg:w-2/3 rounded-lg"
          />
        </motion.div>
        
        <motion.div 
          className="w-full lg:w-1/2 p-4 lg:p-8"
          initial={{ opacity: 0, x: 100 }} // Initial state
          whileInView={{ opacity: 1, x: 0 }} // Animation state when in view
          transition={{ duration: 0.5 }} // Animation duration
          viewport={{ once: true }} // Only trigger once when in view
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-center lg:text-left">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
