'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from './ThemeProvider';

interface NavItem {
  name: string;
  href: string;
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggle } = useTheme();
  const { scrollToElement } = useSmoothScroll();
  
  // Fix: Use isDark directly from the context instead of undefined theme
  // const isDarkMode = theme === 'dark';

  const navItems: NavItem[] = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigationClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    scrollToElement(id, { offset: 80 });
    if (isOpen) setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-md py-3 dark:bg-gray-900 dark:text-white' 
        : 'bg-transparent py-5 dark:text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="text-xl font-bold text-gray-900 dark:text-white"
            onClick={(e) => handleNavigationClick(e, '#home')}
          >
            Gaurav Solanki
          </a>
          
          <div className="flex items-center space-x-4">
            {/* Theme toggle button */}
            <button
              onClick={toggle}
              className={`p-2 rounded-full ${
                isDark 
                  ? 'bg-gray-800 text-yellow-300' 
                  : 'bg-gray-100 text-gray-700'
              } transition-colors duration-200`}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
            </button>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigationClick(e, item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            
            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-md md:hidden text-gray-700 dark:text-gray-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Open menu"
            >
              <FaBars className="text-xl" />
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed top-0 left-0 right-0 bottom-0 bg-white dark:bg-gray-900 z-50 flex flex-col"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
          >
            <div className="flex justify-between items-center p-4 border-b dark:border-gray-800">
              <motion.button
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close menu"
              >
                <FaTimes className="text-xl text-gray-700 dark:text-gray-300" />
              </motion.button>
            </div>
            
            <div className="flex flex-col space-y-4 p-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigationClick(e, item.href)}
                  className="text-lg py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}