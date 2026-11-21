import React from 'react';
import { motion } from 'framer-motion';
import { PAGES } from '../components/Nav';

const Home: React.FC = () => (
  <>
    {/* Title over background image */}
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <img
        src="/images/home-background.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* No z-index here: it would isolate the title and break its mix-blend-difference. */}
      <div className="relative container mx-auto px-6 md:px-16 pb-16 md:pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[18vw] md:text-[12vw] leading-[0.85] font-serif tracking-tighter text-white mix-blend-difference"
        >
          Mia Maya
        </motion.h1>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          {PAGES.map((p) => (
            <a
              key={p.path}
              href={`#${p.path}`}
              className="text-sm md:text-base tracking-widest uppercase font-medium bg-stone-900 text-cream px-5 py-2 hover:bg-cream hover:text-stone-900 transition-colors"
            >
              {p.label}
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Artist info */}
    <section id="about" className="py-32 bg-cream">
      <div className="container mx-auto px-6 md:px-16 max-w-3xl">
        <span className="text-xs font-serif italic text-stone-500 mb-6 block">About</span>
        {/* TODO(Mia): replace with the artist introduction */}
        <p className="text-2xl md:text-3xl font-serif text-stone-400 leading-relaxed">
          Artist introduction coming soon.
        </p>
      </div>
    </section>
  </>
);

export default Home;
