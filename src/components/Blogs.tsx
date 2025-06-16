'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaMedium, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import blogsData from '@/data/Blogs.json';
import { SectionTitle } from './SectionTitle';

export function Blogs() {
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
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Blog</SectionTitle>
        
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Check out my latest articles and thoughts on software development, technology trends, and more.
        </p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {blogsData.map((blog, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={blog.img}
                  alt={blog.alt || blog.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {blog.description}
                </p>
                <div className="flex space-x-4">
                  {blog.medium && (
                    <a 
                      href={blog.medium} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400"
                      aria-label={`Medium article for ${blog.title}`}
                    >
                      <FaMedium size={22} />
                    </a>
                  )}
                  {blog.link && (
                    <a 
                      href={blog.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                      aria-label={`External link for ${blog.title}`}
                    >
                      <FaExternalLinkAlt size={18} />
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
}
