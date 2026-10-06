'use client';

import { useLayoutEffect, useRef, lazy, Suspense } from 'react';
import gsap from 'gsap';

const PatternWaves = lazy(() => import('./PatternWaves'));

interface HeroWordProps {
  text: string;
  baseColor: string;
  hoverColor: string;
}

const HeroWord = ({ text, baseColor, hoverColor }: HeroWordProps) => (
  <span
    className={`inline-block mr-[0.25em] ${baseColor} ${hoverColor} transition-colors duration-500 ease-out cursor-default`}
  >
    {text.split('').map((char, i) => (
      <span key={i} className="hero-char inline-block">
        {char}
      </span>
    ))}
  </span>
);

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-char', {
        y: 100,
        opacity: 0,
        rotateX: -90,
        stagger: 0.02,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.5,
      });
      gsap.from('.hero-fade', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1.5,
        stagger: 0.2,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-screen w-full flex flex-col justify-center px-6 md:px-12 max-w-screen-2xl mx-auto relative overflow-hidden"
    >
      <Suspense fallback={null}>
        <div className="absolute inset-0 z-0 opacity-40">
          <PatternWaves
            preset="silk"
            color="#ffffff"
            backgroundColor="transparent"
            fade="edges"
            interactive
            cursorSize={50}
            cursorStrength={0.6}
          />
        </div>
      </Suspense>

      <div className="relative z-10 space-y-2 md:space-y-4 select-none">
        <div className="overflow-hidden">
          <h1 className="text-[13vw] leading-[0.8] font-semibold tracking-tighter uppercase flex flex-wrap">
            <HeroWord text="WE" baseColor="text-white" hoverColor="hover:text-zinc-800" />
            <HeroWord text="BUILD" baseColor="text-white" hoverColor="hover:text-zinc-800" />
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="text-[13vw] leading-[0.8] font-semibold tracking-tighter uppercase flex flex-wrap">
            <HeroWord text="DIGITAL" baseColor="text-zinc-600" hoverColor="hover:text-zinc-900" />
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="text-[13vw] leading-[0.8] font-semibold tracking-tighter uppercase text-glow flex flex-wrap">
            <HeroWord text="LEGACIES" baseColor="text-white" hoverColor="hover:text-zinc-800" />
          </h1>
        </div>
      </div>

      <div className="absolute bottom-12 w-full left-0 px-6 md:px-12 flex flex-col md:flex-row justify-between items-end gap-6 z-20">
        <div className="hero-fade max-w-sm">
          <p className="text-sm text-zinc-400 leading-relaxed font-light">
            <span className="text-white font-medium">GroundWorks</span> crafts
            high-performance websites and bespoke digital experiences for
            forward-thinking brands.
          </p>
        </div>
        <div className="hero-fade flex items-center gap-4">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
            Scroll to Explore
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-zinc-500"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
      </div>
    </section>
  );
};
