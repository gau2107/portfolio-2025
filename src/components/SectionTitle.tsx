import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <motion.h2 
      className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
      <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full"></div>
    </motion.h2>
  );
}
