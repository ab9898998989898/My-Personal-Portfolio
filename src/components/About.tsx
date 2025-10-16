import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Code, PenTool, BarChart, Database } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="mb-4 text-primary-800 dark:text-primary-400">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a passionate full-stack developer and digital marketing specialist with expertise
              in building responsive web applications and implementing effective digital marketing strategies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Who I Am
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                I'm a versatile professional with a strong foundation in both software development and 
                digital marketing. My background includes formal education from the University of Michigan
                in HTML and CSS, complemented by practical experience with modern technologies like
                React, Node.js, and MongoDB.
              </p>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                As a Google Certified digital marketer, I understand how to create applications that not only
                function flawlessly but also attract and engage users. This dual expertise allows me to
                bridge the gap between development and marketing strategies.
              </p>
              <a
                href="/resume.pdf"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                What I Do
              </h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                      <Code size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">Web Development</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Building responsive websites and web applications using modern JavaScript frameworks.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-400">
                      <Database size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">Backend Development</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Creating robust server-side applications with Node.js, Express, and MongoDB.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400">
                      <BarChart size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">Digital Marketing</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Implementing SEO strategies and digital marketing campaigns as a Google Certified specialist.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;