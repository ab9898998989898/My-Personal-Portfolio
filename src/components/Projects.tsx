import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code, PaintBucket, Database } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string[];
  liveLink?: string;
  githubLink?: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product listings, shopping cart, and payment integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: ['frontend', 'backend', 'fullstack'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/ab9898998989898',
    },
    {
      id: 2,
      title: 'Digital Marketing Dashboard',
      description: 'An analytics dashboard for tracking digital marketing campaigns and SEO performance.',
      image: 'https://images.pexels.com/photos/7654579/pexels-photo-7654579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'Chart.js', 'Node.js', 'Google Analytics API'],
      category: ['frontend', 'marketing'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/ab9898998989898',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      category: ['frontend', 'fullstack'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/ab9898998989898',
    },
    {
      id: 4,
      title: 'Content Management System',
      description: 'A custom CMS built for a publishing company with advanced editing capabilities.',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Python', 'Django', 'PostgreSQL', 'React'],
      category: ['backend', 'fullstack'],
      githubLink: 'https://github.com/ab9898998989898',
    },
    {
      id: 5,
      title: 'Weather Application',
      description: 'A weather forecast application with location detection and 5-day predictions.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
      category: ['frontend'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/ab9898998989898',
    },
    {
      id: 6,
      title: 'Social Media Analytics Tool',
      description: 'A tool for analyzing social media engagement and audience insights.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'Node.js', 'Express', 'Social Media APIs'],
      category: ['fullstack', 'marketing'],
      liveLink: 'https://example.com',
    },
  ];

  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

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

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'marketing', label: 'Marketing' },
  ];

  const getTechIcon = (tech: string) => {
    if (tech.toLowerCase().includes('react') || tech.toLowerCase().includes('javascript') || tech.toLowerCase().includes('html')) {
      return <Code size={16} />;
    } else if (tech.toLowerCase().includes('css') || tech.toLowerCase().includes('tailwind')) {
      return <PaintBucket size={16} />;
    } else if (tech.toLowerCase().includes('node') || tech.toLowerCase().includes('mongo') || tech.toLowerCase().includes('firebase') || tech.toLowerCase().includes('express')) {
      return <Database size={16} />;
    }
    return <Code size={16} />;
  };

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-primary-800 dark:text-primary-400">My Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my skills in web development and digital marketing.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12 flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                filter === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300"
                    >
                      <span className="mr-1">{getTechIcon(tech)}</span>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;