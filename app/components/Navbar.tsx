'use client';

export const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-12 mix-blend-difference">
    <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
      <div className="flex flex-col">
        <span className="text-white text-lg font-bold tracking-tighter interactive cursor-none">
          GroundWorks
        </span>
        <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase">
          Digital Agency
        </span>
      </div>
      <div className="hidden md:flex gap-8">
        {['Services', 'Agency', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="interactive text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      <button className="md:hidden text-white interactive">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </button>
    </div>
  </nav>
);
