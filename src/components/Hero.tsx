import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Database, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
  id="home"
  className="relative min-h-[70vh] md:min-h-screen flex items-center pt-24 md:pt-20 pb-10 md:pb-0 overflow-hidden"
>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/80 z-10"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center"></div>
      
      <div className="container relative z-20">
        {/* Using a responsive grid: 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
          {/* Column 1: Text Content (This is the original text block) */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-white mb-6">
                <span className="block">Hello, I'm</span>
                <span className="block text-accent-400 font-bold">Abdullah Nadeem</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl text-white/90 mb-8">
                Full Stack Developer & Digital Marketing Specialist
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16 flex flex-wrap gap-8"
            >
              <div className="flex items-center">
                <div className="p-3 bg-white/10 rounded-full mr-4">
                  <Code size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Frontend</p>
                  <p className="text-white/70 text-sm">HTML, CSS, React</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-white/10 rounded-full mr-4">
                  <Database size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Backend</p>
                  <p className="text-white/70 text-sm">Node.js, Express, MongoDB</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-white/10 rounded-full mr-4">
                  <Globe size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Marketing</p>
                  <p className="text-white/70 text-sm">Google Certified</p>
                </div>
              </div>
            </motion.div>
          </div>


{/* Column 2: The new image section */}
<motion.div 
  className="flex justify-center items-center" // Use flex to center the image
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 0.8 }}
>
  {/* This new div controls the maximum size of the image */}
  <div className="w-full max-w-xs sm:max-w-sm md:max-w-xl">
    <img 
      src="/public/imagee-removebg-preview.png" 
      alt="Abdullah Nadeem"
      className="rounded-[100%] shadow-2xl w-full h-[550px] object-cover transform transition-transform duration-500 hover:scale-105"
    />
  </div>
</motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-white/80 mb-2 text-sm">Scroll Down</span>
          <ArrowDown className="text-white/80" size={20} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

