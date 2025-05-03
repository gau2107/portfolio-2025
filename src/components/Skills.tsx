'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SkillsData } from '@/types';

export function Skills() {
  const [skills, setSkills] = useState<SkillsData | null>(null);

  useEffect(() => {
    const getSkillsData = async () => {
      const skillsData = await import('@/data/skills.json');
      setSkills(skillsData.default);
    };
    
    getSkillsData();
  }, []);

  if (!skills) return null;

  // Custom animation for progress bars
  const ProgressBar = ({ percentage, name }: { percentage: number; name: string }) => {
    return (
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <motion.div 
            className="bg-blue-500 h-2.5 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
      </motion.div>
    );
  };

  // Tag component with hover effects
  const Tag = ({ text }: { text: string }) => {
    return (
      <motion.span 
        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium px-3 py-1.5 rounded-full mr-2 mb-2 inline-block"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ scale: 1.05, backgroundColor: "#3b82f6", color: "#ffffff" }}
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.span>
    );
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div id="skills" className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-12 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
          <motion.div 
            className="absolute -bottom-2 left-0 h-1 bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Language Skills with Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <motion.h3 
              className="text-xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Programming Languages
            </motion.h3>
            <div className="space-y-4">
              {skills.languages.map((language, index) => (
                <ProgressBar 
                  key={index} 
                  percentage={language.percentage} 
                  name={language.name} 
                />
              ))}
            </div>
          </motion.div>

          {/* Frameworks */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <motion.h3 
              className="text-xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Frameworks & Libraries
            </motion.h3>
            <div className="flex flex-wrap">
              {skills.frameworks.map((framework, index) => (
                <Tag key={index} text={framework} />
              ))}
            </div>
          </motion.div>

          {/* Databases & Data */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <motion.h3 
              className="text-xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Databases & Tools
            </motion.h3>
            <div className="flex flex-wrap">
              {skills.databases.map((db, index) => (
                <Tag key={index} text={db} />
              ))}
              {skills.tools.map((tool, index) => (
                <Tag key={`tool-${index}`} text={tool} />
              ))}
            </div>
          </motion.div>

          {/* Professional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.h3 
              className="text-xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Professional Skills
            </motion.h3>
            <div className="flex flex-wrap">
              {skills.professional.map((skill, index) => (
                <Tag key={index} text={skill} />
              ))}
              {skills.competencies.map((comp, index) => (
                <Tag key={`comp-${index}`} text={comp} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
