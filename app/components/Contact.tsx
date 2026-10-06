'use client';

export const Contact = () => (
  <section
    id="contact"
    className="min-h-[80vh] flex flex-col justify-between pt-24 pb-8 px-6 md:px-12 max-w-screen-2xl mx-auto relative overflow-hidden"
  >
    <div className="relative z-10 flex-grow flex flex-col justify-center items-center text-center">
      <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">
        Start Your Journey
      </span>
      <h2 className="text-6xl md:text-9xl text-white font-semibold tracking-tighter mb-12 mix-blend-difference hover:scale-105 transition-transform duration-500 cursor-none">
        Let&apos;s Talk
      </h2>
      <a
        href="mailto:hello@GroundWorks.com"
        className="interactive group relative px-8 py-4 bg-zinc-100 text-zinc-950 rounded-full font-medium overflow-hidden"
      >
        <span className="relative z-10 group-hover:text-white transition-colors">
          Launch Project
        </span>
        <div className="absolute inset-0 bg-zinc-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
      </a>
    </div>

    <footer className="w-full flex flex-col md:flex-row justify-between items-end border-t border-zinc-900 pt-8 gap-4">
      <div>
        <h4 className="text-white font-bold tracking-tight">GroundWorks</h4>
        <p className="text-[10px] text-zinc-600 font-mono mt-1">
          © 2024. All Rights Reserved.
        </p>
      </div>
      <div className="flex gap-6">
        {[
          { label: 'Twitter', href: '#' },
          { label: 'Instagram', href: '#' },
          { label: 'LinkedIn', href: '#' },
        ].map((social) => (
          <a
            key={social.label}
            href={social.href}
            className="text-xs text-zinc-500 hover:text-white transition-colors interactive"
          >
            {social.label}
          </a>
        ))}
      </div>
    </footer>
  </section>
);
