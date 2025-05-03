'use client';

import { FaGraduationCap } from 'react-icons/fa';
import { EducationData } from '@/types';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Convert to client component with enhanced animations
export function Education() {
  // We'll fetch the data during the component mount
  const [education, setEducation] = useState<EducationData | null>(null);

  useEffect(() => {
    // Import dynamically to keep this working with SSR
    const getEducationData = async () => {
      const educationData = await import('@/data/education.json');
      setEducation(educationData.default);
    };
    
    getEducationData();
  }, []);

  if (!education) return null;

  return (
    <section  className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto" id="education">
        <motion.h2 
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Education
        </motion.h2>
        
        <div className="space-y-12">
          {education.degrees.map((degree, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col md:flex-row md:items-start relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
            >
              <motion.div 
                className="flex-shrink-0 mb-4 md:mb-0 md:mr-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-blue-500 p-3 rounded-full inline-flex shadow-lg">
                  <FaGraduationCap className="text-white text-2xl" />
                </div>
              </motion.div>
              <div className="max-w-lg">
                <motion.h3 
                  className="text-xl font-bold mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {degree.degree}
                </motion.h3>
                <motion.h4 
                  className="text-lg text-gray-700 dark:text-gray-300 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {degree.institution}
                </motion.h4>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                  className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mb-3"
                />
                <motion.p 
                  className="text-gray-600 dark:text-gray-400 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {degree.period}
                </motion.p>
                <motion.p 
                  className="text-gray-600 dark:text-gray-400 font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {degree.grade}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section with enhanced animations */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-8 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Achievements
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-blue-500"
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              transition={{ delay: 0.6, duration: 0.6 }}
            />
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.achievements.map((achievement, index) => (
              <motion.div 
                key={index} 
                className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-center">
                  <motion.div 
                    className="w-3 h-3 bg-blue-500 rounded-full mr-3"
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <p className="font-medium">{achievement}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
