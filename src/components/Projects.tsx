'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import projectsData from '@/data/Projects.json';
import { SectionTitle } from './SectionTitle';

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Projects</SectionTitle>
        
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Explore some of the projects I&apos;ve built. Each project reflects my passion for creating 
          meaningful applications that solve real problems.
        </p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.alt || project.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="flex flex-col flex-grow p-4">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 flex-grow">
                  {project.description}
                </p>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-800 flex justify-end">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
