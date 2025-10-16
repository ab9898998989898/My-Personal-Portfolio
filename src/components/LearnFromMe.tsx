import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Users, Clock, Award, CheckCircle } from 'lucide-react';

const LearnFromMe: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const courses = [
    {
      title: 'Web Development Fundamentals',
      description: 'Master HTML, CSS, and JavaScript with practical projects',
      duration: '12 weeks',
      level: 'Beginner to Intermediate',
      highlights: [
        'HTML5 & CSS3 best practices',
        'JavaScript fundamentals and ES6+',
        'Responsive design principles',
        'Real-world project development'
      ],
    },
    {
      title: 'Full Stack Development',
      description: 'Learn to build complete web applications with MERN stack',
      duration: '20 weeks',
      level: 'Intermediate to Advanced',
      highlights: [
        'React.js development',
        'Node.js & Express.js',
        'MongoDB database design',
        'API development and integration'
      ],
    },
    {
      title: 'Digital Marketing Masterclass',
      description: 'Comprehensive digital marketing strategies and implementation',
      duration: '8 weeks',
      level: 'All Levels',
      highlights: [
        'SEO optimization techniques',
        'Social media marketing',
        'Google Analytics & AdWords',
        'Content marketing strategies'
      ],
    },
    {
      title: 'Web Development(PHP/Laravel & MySQL)',
      description: 'Master HTML, CSS, and JavaScript with practical projects',
      duration: '12 weeks',
      level: 'Beginner to Intermediate',
      highlights: [
        'HTML5 & CSS3 best practices',
        'JavaScript fundamentals and ES6+',
        'Responsive design principles',
        'Real-world project development'
      ],
    }
  ];

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="learn" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-primary-800 dark:text-primary-400">Learn From Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Take your skills to the next level with my comprehensive courses. Learn from my experience
            and get certified in web development and digital marketing.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                  {course.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {course.description}
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Clock size={20} className="text-primary-600 dark:text-primary-400 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={20} className="text-primary-600 dark:text-primary-400 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">{course.level}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {course.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {course.price}
                  </span>
                  <a
                    href="#contact"
                    className="btn-primary"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
            Why Learn With Me?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary-100 dark:bg-primary-900 mx-auto">
                <Award size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                Certified Instructor
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Learn from a Google Certified professional with university credentials
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary-100 dark:bg-primary-900 mx-auto">
                <BookOpen size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                Practical Learning
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Hands-on projects and real-world applications of concepts
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary-100 dark:bg-primary-900 mx-auto">
                <Users size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                1-on-1 Mentoring
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Personal attention and guidance throughout your learning journey
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearnFromMe;
