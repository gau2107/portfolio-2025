'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setCursorVariant("click");
    const handleMouseUp = () => setCursorVariant("default");
    
    const handleMouseEnterLink = () => setCursorVariant("hover");
    const handleMouseLeaveLink = () => setCursorVariant("default");
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    // Add event listeners to all links and buttons
    const links = document.querySelectorAll('a, button, .interactive-element');
    links.forEach(link => {
      link.addEventListener("mouseenter", handleMouseEnterLink);
      link.addEventListener("mouseleave", handleMouseLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      
      links.forEach(link => {
        link.removeEventListener("mouseenter", handleMouseEnterLink);
        link.removeEventListener("mouseleave", handleMouseLeaveLink);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      mixBlendMode: "difference" as const
    },
    hover: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      height: 50,
      width: 50,
      backgroundColor: "rgba(59, 130, 246, 0.4)",
      mixBlendMode: "difference" as const
    },
    click: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(59, 130, 246, 0.6)",
      mixBlendMode: "difference" as const
    }
  };

  // Only show custom cursor on desktop devices
  const [showCursor, setShowCursor] = useState(false);
  
  useEffect(() => {
    // Check if device has a mouse
    const hasCoarse = window.matchMedia('(pointer:coarse)').matches;
    setShowCursor(!hasCoarse);
    
    // Apply cursor:none to body if we're using custom cursor
    if (!hasCoarse) {
      document.body.style.cursor = 'none';
    }
    
    return () => {
      document.body.style.cursor = '';
    };
  }, []);

  if (!showCursor) return null;

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 rounded-full pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", mass: 0.3, stiffness: 800, damping: 30 }}
    />
  );
}
