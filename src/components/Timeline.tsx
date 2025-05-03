'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'work' | 'education';
  technologies?: string[];
}

const timelineData: TimelineItem[] = [
  {
    title: "Senior Frontend Developer",
    organization: "Tech Innovators Inc.",
    period: "2022 - Present",
    description: "Leading frontend development for enterprise applications, managing a team of developers, and implementing modern web technologies to improve performance and user experience.",
    type: "work",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"]
  },
  {
    title: "Frontend Developer",
    organization: "Digital Solutions Ltd",
    period: "2020 - 2022",
    description: "Developed responsive web applications, collaborated with UX designers to implement user-friendly interfaces, and optimized web performance for better user engagement.",
    type: "work",
    technologies: ["JavaScript", "React", "Redux", "Sass"]
  },
  {
    title: "Masters in Computer Science",
    organization: "University of Technology",
    period: "2018 - 2020",
    description: "Specialized in web technologies and human-computer interaction. Completed thesis on optimizing web application performance in resource-constrained environments.",
    type: "education"
  },
  {
    title: "Junior Web Developer",
    organization: "StartUp Ventures",
    period: "2017 - 2018",
    description: "Built and maintained websites for small businesses, implemented responsive designs, and performed website optimizations for improved SEO.",
    type: "work",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"]
  },
  {
    title: "Bachelor's in Computer Science",
    organization: "Tech University",
    period: "2013 - 2017",
    description: "Core studies in algorithms, data structures, and software engineering principles. Participated in web development club and hackathons.",
    type: "education"
  }
];

export function Timeline() {
  return (
    <section id="journey" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Professional Journey
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A timeline of my professional experience and education
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Timeline center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/4 items-center justify-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    item.type === 'work' 
                      ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300' 
                      : 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300'
                  }`}>
                    {item.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                  </div>
                </div>
                
                {/* Content */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:mr-0 md:ml-auto'}`}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-2">
                      <div className="md:hidden mr-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          item.type === 'work' 
                            ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300' 
                            : 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300'
                        }`}>
                          {item.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400">{item.organization}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{item.period}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{item.description}</p>
                    
                    {item.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 text-xs bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
