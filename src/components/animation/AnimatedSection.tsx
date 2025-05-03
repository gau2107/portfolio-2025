'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export function AnimatedSection({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}: AnimatedSectionProps) {
  
  // Define animation variants based on direction
  const getVariants = (): Variants => {
    const directions = {
      up: { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
      down: { hidden: { y: -50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
      left: { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } },
      right: { hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } },
      none: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    };
    
    return directions[direction];
  };
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: delay }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Additional animation components for specific elements

interface AnimatedTitleProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedTitle({ children, delay = 0, className = '' }: AnimatedTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative ${className}`}
    >
      {children}
      <motion.span
        className="absolute -bottom-2 left-0 h-1 bg-blue-500"
        initial={{ width: 0 }}
        whileInView={{ width: "60px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.3 }}
      />
    </motion.h2>
  );
}

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedCard({ children, delay = 0, className = '' }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)"
      }}
      className={`bg-white dark:bg-gray-900 rounded-lg shadow-md ${className}`}
    >
      {children}
    </motion.div>
  );
}
