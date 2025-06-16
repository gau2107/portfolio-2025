'use client';

import { AboutData } from '@/types';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMountain, FaBookOpen, FaUtensils, FaLeaf, FaCode } from 'react-icons/fa';
import { JSX } from 'react';
import { InterestModal } from './InterestModal';

export function About() {
  const [about, setAbout] = useState<AboutData | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<{ title: string; images: string[] }>({ title: '', images: [] });

  useEffect(() => {
    const getAboutData = async () => {
      const aboutData = await import('@/data/about.json');
      setAbout(aboutData.default);
    };
    
    getAboutData();
  }, []);

  // Function to get the correct icon component
  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: JSX.Element } = {
      FaLaptopCode: <FaLaptopCode />,
      FaMountain: <FaMountain />,
      FaBookOpen: <FaBookOpen />,
      FaUtensils: <FaUtensils />,
      FaLeaf: <FaLeaf />,
      FaCode: <FaCode />
    };

    return icons[iconName] || <FaCode />; // Default to FaCode if not found
  };

  const handleInterestClick = (item: any) => {
    setModalData({ title: item.text, images: item.images || [] });
    setModalOpen(true);
  };

  if (!about) return null;

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div id="about" className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
          <motion.div 
            className="absolute -bottom-2 left-0 h-1 bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {about.bio.map((paragraph, index) => (
              <motion.p 
                key={index} 
                className="text-lg text-gray-600 dark:text-gray-400 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)" }}
          >
            <motion.h3 
              className="text-xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Outside of Coding
            </motion.h3>
            <ul className="space-y-4">
              {about.interests.map((item, index) => {
                // Enable modal only for "Cooking and trying new cuisines"
                const enableModal = item.text === "Cooking and trying new cuisines";

                return (
                  <motion.li 
                    key={index} 
                    className={`flex items-center${enableModal ? ' cursor-pointer' : ''}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={enableModal ? { scale: 1.03, x: 5 } : undefined}
                    onClick={enableModal ? () => handleInterestClick(item) : undefined}
                    tabIndex={enableModal ? 0 : -1}
                    onKeyDown={enableModal ? (e => {
                      if (e.key === 'Enter' || e.key === ' ') handleInterestClick(item);
                    }) : undefined}
                    role={enableModal ? "button" : undefined}
                    aria-label={enableModal ? `Show more about ${item.text}` : undefined}
                  >
                    <motion.span 
                      className="text-blue-500 mr-3"
                      whileHover={enableModal ? { rotate: 10, scale: 1.2 } : undefined}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {getIconComponent(item.icon)}
                    </motion.span>
                    <span className="text-gray-600 dark:text-gray-400">{item.text}</span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
      <InterestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalData.title}
        images={modalData.images}
      />
    </section>
  );
}
