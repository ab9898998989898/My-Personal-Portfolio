import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, CheckCircle } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  certified?: boolean;
  certificationFrom?: string;
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const frontendSkills: Skill[] = [
    { name: 'HTML', level: 95, certified: true, certificationFrom: 'University of Michigan' },
    { name: 'CSS', level: 90, certified: true, certificationFrom: 'University of Michigan' },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'PHP/Laravel', level: 70 }
  ];

  const backendSkills: Skill[] = [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'MYSQL', level: 60 }
  ];

  const otherSkills: Skill[] = [
    { name: 'Digital Marketing', level: 90, certified: true, certificationFrom: 'Google' },
    { name: 'SEO', level: 85 },
    { name: 'Content Creation', level: 80 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Wordpress', level: 60 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
    <motion.div
      variants={itemVariants}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span className="font-medium text-gray-800 dark:text-white">{skill.name}</span>
          {skill.certified && (
            <div className="ml-2 flex items-center text-xs text-primary-600 dark:text-primary-400">
              <CheckCircle size={14} className="mr-1" />
              <span>{skill.certificationFrom}</span>
            </div>
          )}
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full animate-progress ${
            skill.certified 
              ? 'bg-gradient-to-r from-primary-600 to-primary-400' 
              : 'bg-primary-600 dark:bg-primary-500'
          }`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-primary-800 dark:text-primary-400">My Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I've developed a diverse set of skills throughout my career, with formal education and certifications
            in key areas. Here's an overview of my technical abilities and expertise.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <motion.div variants={itemVariants} className="flex items-center mb-6">
              <div className="p-2 bg-primary-100 dark:bg-primary-900/50 rounded-lg mr-3">
                <BookOpen className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Frontend</h3>
            </motion.div>
            <div>
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <motion.div variants={itemVariants} className="flex items-center mb-6">
              <div className="p-2 bg-secondary-100 dark:bg-secondary-900/50 rounded-lg mr-3">
                <BookOpen className="text-secondary-600 dark:text-secondary-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Backend</h3>
            </motion.div>
            <div>
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <motion.div variants={itemVariants} className="flex items-center mb-6">
              <div className="p-2 bg-accent-100 dark:bg-accent-900/50 rounded-lg mr-3">
                <BookOpen className="text-accent-600 dark:text-accent-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Other Skills</h3>
            </motion.div>
            <div>
              {otherSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;