'use client';

export const GridLines = () => (
  <div className="fixed inset-0 w-full h-full pointer-events-none z-0 max-w-screen-2xl mx-auto border-x border-zinc-800/30 flex justify-between">
    <div className="h-full w-px bg-zinc-800/10 hidden md:block" />
    <div className="h-full w-px bg-zinc-800/10" />
    <div className="h-full w-px bg-zinc-800/10 hidden md:block" />
  </div>
);
