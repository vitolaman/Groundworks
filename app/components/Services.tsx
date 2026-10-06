'use client';

import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  desc: string;
}

const ServiceCard = ({ icon, title, desc }: ServiceCardProps) => (
  <div className="interactive border border-zinc-900 p-8 hover:border-zinc-700 hover:bg-zinc-900/20 transition-all duration-300 group">
    <div className="bg-zinc-900/50 w-12 h-12 flex items-center justify-center rounded-full mb-6 group-hover:scale-110 transition-transform">
      <IconComponent icon={icon} />
    </div>
    <h3 className="text-xl text-white font-medium mb-4 tracking-tight">
      {title}
    </h3>
    <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
      {desc}
    </p>
  </div>
);

const IconComponent = ({ icon }: { icon: string }): ReactNode => {
  const icons: Record<string, ReactNode> = {
    'lucide:monitor': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    'lucide:smartphone': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    'lucide:box': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    'lucide:pen-tool': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
        <path d="M13.75 11.75L19 6.5a2 2 0 0 1 2.83 2.83l-5.25 5.25M6.5 19H2.5v-4L15 2.5a2 2 0 0 1 2.83 2.83L5.33 19" />
      </svg>
    ),
  };
  return icons[icon] || null;
};

export const Services = () => (
  <section id="services" className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-4">
          Our Expertise
        </span>
        <h2 className="text-4xl md:text-5xl text-white font-semibold tracking-tighter mb-8">
          Engineering <br />
          <span className="text-zinc-600">Perfection</span>
        </h2>
        <p className="text-zinc-400 font-light leading-relaxed mb-8">
          We don&apos;t just build websites; we construct digital ecosystems. From
          high-speed code to immersive visuals, we handle the full stack of
          digital presence.
        </p>
      </div>
      <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900">
        <ServiceCard
          icon="lucide:monitor"
          title="Web Development"
          desc="Responsive, high-performance websites built with React, Tailwind, and cutting-edge frameworks."
        />
        <ServiceCard
          icon="lucide:smartphone"
          title="App Development"
          desc="Native and cross-platform mobile applications that provide seamless user experiences."
        />
        <ServiceCard
          icon="lucide:box"
          title="3D WebGL"
          desc="Immersive Three.js experiences that add depth and interactivity to your brand story."
        />
        <ServiceCard
          icon="lucide:pen-tool"
          title="UI/UX Design"
          desc="Pixel-perfect interfaces designed for conversion, accessibility, and visual impact."
        />
      </div>
    </div>
  </section>
);
