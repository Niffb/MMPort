import React from 'react';
import { PROJECTS } from '../projects';
import MediaCarousel from '../components/MediaCarousel';

const Work: React.FC = () => (
  <section className="pt-36 pb-32 bg-cream min-h-screen">
    <div className="container mx-auto px-6 md:px-16">
      <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-20">Work</h1>
      <div className="space-y-28">
        {PROJECTS.map((p) => (
          <article
            key={p.slug}
            id={p.slug}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start border-t border-stone-200 pt-12"
          >
            <div className="lg:col-span-8">
              <MediaCarousel media={p.media} title={p.title} />
            </div>
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">{p.title}</h2>
              <p className="text-stone-500 leading-relaxed font-light">{p.description}</p>
              {p.links?.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-6 text-xs uppercase tracking-widest font-bold text-stone-900 border-b border-stone-900 pb-0.5 hover:opacity-60"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
