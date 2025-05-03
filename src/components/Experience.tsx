'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaChevronRight } from 'react-icons/fa';
import experienceData from '@/data/experience.json';

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto" id="experience">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey through the digital landscape, building products that matter.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900 hidden sm:block"></div>

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-blue-500 transform -translate-x-1/2 hidden sm:block"></div>
                
                <div className="sm:ml-16">
                  <div 
                    onClick={() => toggleExpand(exp.id)}
                    className={`
                      bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 cursor-pointer
                      transition-all duration-300 border-l-4 hover:shadow-lg
                      ${expandedId === exp.id ? 'border-blue-500' : 'border-transparent hover:border-blue-300'}
                    `}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex gap-4 items-center">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400 hidden sm:block">
                          <FaBriefcase />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                          {exp.company && (
                            <div className="text-blue-600 dark:text-blue-400 font-medium">
                              {exp.company}
                            </div>
                          )}
                          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{exp.period}</div>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedId === exp.id ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-gray-400 dark:text-gray-500"
                      >
                        <FaChevronRight />
                      </motion.div>
                    </div>
                    
                    <AnimatePresence>
                      {expandedId === exp.id && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 mt-4 border-t border-gray-200 dark:border-gray-700">
                            <ul className="space-y-3">
                              {exp.responsibilities.map((item, i) => (
                                <motion.li 
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex gap-3 items-baseline"
                                >
                                  <span className="text-blue-500 text-lg">•</span>
                                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
