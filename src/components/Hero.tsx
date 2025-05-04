'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface KnockKnockJoke {
  setup: string;
  response: string;
  punchline: string;
  followup: string;
  finalPunch: string;
}

export function Hero() {
  // Easter egg state
  const [clickCount, setClickCount] = useState(0);
  const [showJoke, setShowJoke] = useState(false);
  const [jokeStep, setJokeStep] = useState(0);
  const audioElementsRef = useRef<HTMLAudioElement[]>([]);
  const currentAudioIndexRef = useRef(0);
  const [jokes, setJokes] = useState<KnockKnockJoke[]>([]);
  const [currentJoke, setCurrentJoke] = useState<KnockKnockJoke | null>(null);
  // Add state to track the current joke index
  const [jokeIndex, setJokeIndex] = useState(0);
  
  // Load jokes from JSON file
  useEffect(() => {
    const loadJokes = async () => {
      try {
        const jokesData = await import('@/data/knockKnockJokes.json');
        setJokes(jokesData.default);
      } catch (error) {
        console.error('Error loading knock knock jokes:', error);
        // Fallback to a default joke if JSON loading fails
        setJokes([{
          setup: "Knock knock!",
          response: "Who's there?",
          punchline: "Error.",
          followup: "Error who?",
          finalPunch: "Error loading jokes. Please try again!"
        }]);
      }
    };
    
    loadJokes();
  }, []);
  
  // New approach: use multiple audio elements
  useEffect(() => {
    // Skip during SSR
    if (typeof window === 'undefined') return;
    
    // Create a pool of audio elements for rapid succession playback
    const audioCount = 5; // Pool size
    const audioElements: HTMLAudioElement[] = [];
    
    for (let i = 0; i < audioCount; i++) {
      // Create audio element
      const audio = new Audio("/knock.mp3");
      
      // Configure for best compatibility
      audio.preload = 'auto';
      audio.volume = 1.0;
      audio.autoplay = false;
      
      // Trigger load
      audio.load();
      
      // Store in array
      audioElements.push(audio);
    }
    
    // Store in ref
    audioElementsRef.current = audioElements;
    
    // Clean up
    return () => {
      audioElements.forEach(audio => {
        audio.oncanplaythrough = null;
        audio.pause();
      });
      audioElementsRef.current = [];
    };
  }, []);

  // Track triple clicks
  useEffect(() => {
    if (clickCount >= 3 && jokes.length > 0) {
      // Get the next joke in sequence instead of random
      const nextJoke = jokes[jokeIndex];
      setCurrentJoke(nextJoke);
      setShowJoke(true);
      setJokeStep(0);
      
      // Update joke index for next time, with wrap-around
      setJokeIndex((prevIndex) => (prevIndex + 1) % jokes.length);
      
      // Reset click count
      setClickCount(0);
    }
  }, [clickCount, jokes, jokeIndex]);

  const handleNameClick = () => {
    setClickCount(prevCount => prevCount + 1);
    
    // Very simple audio playback strategy
    if (typeof window !== 'undefined' && audioElementsRef.current.length > 0) {
      // Get the next audio element in the pool
      const audioIndex = currentAudioIndexRef.current;
      const audio = audioElementsRef.current[audioIndex];
      
      if (audio) {
        // Reset to beginning 
        audio.currentTime = 0;
        
        // Try to play (no fancy error handling, keep it simple)
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // If autoplay is blocked, try to play on next user interaction
            const resumeAudio = () => {
              audio.play().catch(() => {});
              window.removeEventListener('click', resumeAudio);
              window.removeEventListener('touchstart', resumeAudio);
            };
            
            window.addEventListener('click', resumeAudio, { once: true });
            window.addEventListener('touchstart', resumeAudio, { once: true });
          });
        }
      }
      
      // Move to next audio element in pool for next click
      currentAudioIndexRef.current = (audioIndex + 1) % audioElementsRef.current.length;
    }
    
    // Set a timeout to reset the counter if user doesn't complete the triple click
    setTimeout(() => {
      setClickCount(0);
    }, 1000);
  };

  const handleJokeClick = () => {
    if (jokeStep < 2) {
      setJokeStep(jokeStep + 1);
    } else {
      setShowJoke(false);
      setJokeStep(0);
    }
  };

  const getJokeContent = () => {
    if (!currentJoke) return { title: "", content: "" };
    
    switch (jokeStep) {
      case 0:
        return { 
          title: currentJoke.setup, 
          content: currentJoke.response 
        };
      case 1:
        return { 
          title: currentJoke.punchline,
          content: currentJoke.followup
        };
      case 2:
        return {
          title: "",
          content: currentJoke.finalPunch
        };
      default:
        return { title: "", content: "" };
    }
  };

  const jokeContent = getJokeContent();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Hi, I&apos;m{" "}
              <motion.span 
                className="text-blue-500 cursor-pointer select-none"
                initial={{ color: "#3B82F6" }}
                whileHover={{ 
                  color: "#2563EB",
                  textShadow: "0 0 8px rgba(59, 130, 246, 0.5)"
                }}
                transition={{ duration: 0.3 }}
                onClick={handleNameClick}
              >
                Gaurav Solanki
              </motion.span>
            </h1>
            <h2 className="text-2xl sm:text-3xl mb-6">Senior Frontend Engineer</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Results-driven Frontend Engineer with 6+ years of experience in developing 
              modern, scalable, and high-performance web applications. Expert in TypeScript, 
              React, Next.js, Svelte, and Electron.js.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:solankigaurav2107@gmail.com" 
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="https://www.linkedin.com/in/gaurav-p-solanki/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
            <motion.div 
              className="w-48 h-48 rounded-full overflow-hidden relative border-4 border-blue-500 shadow-lg"
              whileHover={{ 
                scale: 1.05,
                rotate: 5,
                borderColor: "#2563EB",
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              <Image
                src="/profile.jpg"
                alt="Gaurav Solanki"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Knock Knock Joke Modal */}
      <AnimatePresence>
        {showJoke && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl max-w-md w-full"
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                {jokeContent.title && (
                  <motion.h3 
                    className="text-xl font-bold mb-4 text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={`title-${jokeStep}`}
                  >
                    {jokeContent.title}
                  </motion.h3>
                )}
                
                <motion.p 
                  className="text-lg mb-4 text-gray-700 dark:text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={`content-${jokeStep}`}
                >
                  {jokeContent.content}
                </motion.p>
                
                <motion.button
                  className="mt-6 bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleJokeClick}
                >
                  {jokeStep < 2 ? "Continue" : "Close"}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
