'use client';

import { useCallback } from 'react';

interface ScrollOptions {
  offset?: number;
  duration?: number;
  easing?: (t: number) => number;
}

// Easing functions
const easings = {
  // No easing, no acceleration
  linear: (t: number) => t,
  // Accelerating from zero velocity
  easeInQuad: (t: number) => t * t,
  // Decelerating to zero velocity
  easeOutQuad: (t: number) => t * (2 - t),
  // Acceleration until halfway, then deceleration
  easeInOutQuad: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  // Smooth spring-like animation
  easeOutBack: (t: number) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
};

export function useSmoothScroll() {
  const scrollToElement = useCallback((elementId: string, options: ScrollOptions = {}) => {
    const {
      offset = 0,
      duration = 200,
      easing = easings.easeOutQuad,
    } = options;

    const targetElement = document.getElementById(elementId);
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    function animateScroll(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easing(progress);

      window.scrollTo(0, startPosition + distance * easedProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  }, []);

  const scrollToTop = useCallback((options: Omit<ScrollOptions, 'offset'> = {}) => {
    const {
      duration = 800,
      easing = easings.easeOutQuad,
    } = options;

    const startPosition = window.scrollY;
    let startTime: number | null = null;

    function animateScroll(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easing(progress);

      window.scrollTo(0, startPosition * (1 - easedProgress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  }, []);

  return { scrollToElement, scrollToTop };
}