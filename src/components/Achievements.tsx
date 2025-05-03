'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaMedal, FaAward } from 'react-icons/fa';

interface Achievement {
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: 'trophy' | 'certificate' | 'medal' | 'award';
}

const achievements: Achievement[] = [
  {
    title: "Best Developer Award",
    organization: "TechCorp Annual Awards",
    date: "2023",
    description: "Recognized for outstanding contributions to product development and technical leadership.",
    icon: "trophy"
  },
  {
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    date: "2022",
    description: "Professional certification validating expertise in designing and deploying secure applications on AWS.",
    icon: "certificate"
  },
  {
    title: "Hackathon Winner",
    organization: "Global Code Challenge",
    date: "2021",
    description: "First place for developing an innovative solution for sustainable urban living.",
    icon: "medal"
  },
  {
    title: "Open Source Contributor Award",
    organization: "GitHub Community",
    date: "2020",
    description: "Recognized for significant contributions to open source projects in the JavaScript ecosystem.",
    icon: "award"
  }
];

export function Achievements() {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'trophy': return <FaTrophy className="text-yellow-500 text-2xl" />;
      case 'certificate': return <FaCertificate className="text-blue-500 text-2xl" />;
      case 'medal': return <FaMedal className="text-amber-500 text-2xl" />;
      case 'award': return <FaAward className="text-purple-500 text-2xl" />;
      default: return <FaTrophy className="text-yellow-500 text-2xl" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Achievements & Certifications
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Recognition and milestones from my professional journey
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border-l-4 border-blue-500 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    {getIcon(achievement.icon)}
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{achievement.title}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{achievement.date}</span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 text-sm mb-3">{achievement.organization}</p>
                    <p className="text-gray-700 dark:text-gray-300">{achievement.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
