import React from 'react';

export const PAGES = [
  { path: '/work', label: 'Work' },
  { path: '/exhibitions', label: 'Exhibitions' },
  { path: '/shop', label: 'Shop' },
  { path: '/contact', label: 'Contact' },
];

const Nav: React.FC<{ current: string; overImage?: boolean }> = ({ current, overImage }) => {
  // Over the home photo the nav is white + difference-blended so it stays readable on black and cream.
  const base = overImage ? 'text-white' : 'text-stone-500 hover:text-stone-900';
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 ${
        overImage ? 'bg-transparent mix-blend-difference' : 'bg-cream/90 backdrop-blur-md border-b border-stone-200'
      }`}
    >
      <div className="container mx-auto px-6 md:px-16 py-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <a
          href="#/"
          className={`text-lg font-serif italic font-bold tracking-tight whitespace-nowrap ${overImage ? 'text-white' : 'text-stone-900'}`}
        >
          Mia Maya
        </a>
        <div className="flex gap-4 md:gap-10 items-center">
          {PAGES.map((p) => (
            <a
              key={p.path}
              href={`#${p.path}`}
              className={`text-[11px] md:text-xs tracking-widest uppercase font-medium transition-colors ${
                current === p.path ? 'text-stone-900 border-b border-stone-900 pb-0.5' : `${base} hover:opacity-70`
              }`}
            >
              {p.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
