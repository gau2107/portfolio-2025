'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Certificate {
  id: number;
  title: string;
  src: string;
  isExternal: boolean;
  provider: string;
}

export function Certificates() {
  const [expandedCert, setExpandedCert] = useState<number | null>(null);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load certificates data from the JSON file
  useEffect(() => {
    const loadCertificates = async () => {
      try {
        setIsLoading(true);
        // Dynamic import to get the certificates data
        const certData = await import('@/data/certificates.json');
        setCertificates(certData.default);
      } catch (error) {
        console.error('Error loading certificates:', error);
        setCertificates([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadCertificates();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
          I am committed to continuous learning and professional development. Here are some of the certifications I&apos;ve earned to expand my skills and knowledge.
        </p>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse text-gray-400">Loading certifications...</div>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {certificates.map((cert) => (
              <motion.div 
                key={cert.id} 
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-all duration-300"
                variants={itemVariants}
              >
                <div className="relative aspect-[16/10] cursor-pointer" onClick={() => setExpandedCert(expandedCert === cert.id ? null : cert.id)}>
                  <div className="relative h-full w-full">
                    <Image
                      src={cert.src}
                      alt={cert.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{cert.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{cert.provider} Certification</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        
        {/* Certificate modal for expanded view */}
        <AnimatePresence>
          {expandedCert !== null && (
            <motion.div 
              className="fixed inset-0 backdrop-blur-md bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setExpandedCert(null)}
            >
              <motion.div 
                className="max-w-4xl max-h-[90vh]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25 }}
              >
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <motion.div
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image 
                      src={certificates.find(c => c.id === expandedCert)?.src || ''}
                      alt={certificates.find(c => c.id === expandedCert)?.title || ''}
                      width={1000}
                      height={700}
                      className="w-full h-auto"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
