'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && followerRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
        });
        gsap.to(followerRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    };

    const handleHoverStart = () => {
      if (followerRef.current && cursorRef.current) {
        gsap.to(followerRef.current, {
          scale: 3,
          backgroundColor: 'rgba(255,255,255,0.1)',
          mixBlendMode: 'difference',
          duration: 0.3,
        });
        gsap.to(cursorRef.current, { scale: 0, duration: 0.3 });
      }
    };

    const handleHoverEnd = () => {
      if (followerRef.current && cursorRef.current) {
        gsap.to(followerRef.current, {
          scale: 1,
          backgroundColor: 'transparent',
          mixBlendMode: 'normal',
          duration: 0.3,
        });
        gsap.to(cursorRef.current, { scale: 1, duration: 0.3 });
      }
    };

    window.addEventListener('mousemove', moveCursor);

    const observer = new MutationObserver(() => {
      const interactives = document.querySelectorAll('a, button, .interactive');
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[99] -translate-x-1/2 -translate-y-1/2 transition-colors"
      />
    </>
  );
};
