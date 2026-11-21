import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MediaItem } from '../types';

// Horizontal scroll-snap strip: swipe/scroll on touch, arrows or click on desktop.
const MediaCarousel: React.FC<{ media: MediaItem[]; title: string }> = ({ media, title }) => {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => setIndex(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  // Pause any video that scrolls out of view.
  useEffect(() => {
    track.current?.querySelectorAll('video').forEach((v, i) => {
      if (Number(v.dataset.index) !== index) v.pause();
    });
  }, [index]);

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const next = Math.max(0, Math.min(media.length - 1, i));
    el.scrollTo({ left: next * el.clientWidth, behavior: 'smooth' });
  };

  return (
    <div className="relative group">
      <div
        ref={track}
        className="flex overflow-x-auto snap-x snap-mandatory bg-stone-900 aspect-[4/3] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {media.map((m, i) => (
          <div key={m.src} className="snap-center shrink-0 w-full h-full flex items-center justify-center">
            {m.type === 'image' ? (
              <img
                src={m.src}
                alt={`${title} — ${i + 1}`}
                loading="lazy"
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <video
                data-index={i}
                src={m.src}
                poster={m.poster}
                controls
                playsInline
                preload="none"
                className="max-w-full max-h-full"
              />
            )}
          </div>
        ))}
      </div>

      {media.length > 1 && (
        <>
          <button
            aria-label="Previous"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/90 text-stone-900 flex items-center justify-center disabled:opacity-0 transition-opacity"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            aria-label="Next"
            onClick={() => go(index + 1)}
            disabled={index === media.length - 1}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/90 text-stone-900 flex items-center justify-center disabled:opacity-0 transition-opacity"
          >
            <ChevronRight size={20} />
          </button>
          <div className="mt-3 text-xs tracking-widest text-stone-400">
            {index + 1} / {media.length}
          </div>
        </>
      )}
    </div>
  );
};

export default MediaCarousel;
