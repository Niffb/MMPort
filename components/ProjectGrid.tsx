
import React, { useState, useEffect } from 'react';
import { ARTWORKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ArrowUpRight } from 'lucide-react';

const ProjectGrid: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedArtwork = ARTWORKS.find(a => a.id === selectedId);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedId]);

  return (
    <>
      <div className="grid grid-cols-1 gap-32">
        {ARTWORKS.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center"
          >
              {/* Image Area */}
              <div className={`lg:col-span-7 relative overflow-hidden rounded-none ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <div className="aspect-[4/5] md:aspect-[4/3] overflow-hidden bg-stone-200 relative shadow-xl shadow-stone-200/50">
                      <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-500 z-10 pointer-events-none"></div>
                      <motion.img 
                          src={work.imageUrl} 
                          alt={work.title} 
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                      />
                  </div>
              </div>

              {/* Content Area */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                       <span className="text-xs font-bold tracking-widest uppercase text-stone-400 border-b border-stone-200 pb-1">
                          NO. 0{index + 1}
                       </span>
                       <div className="h-px flex-1 bg-stone-200"></div>
                       <span className="text-xs font-serif italic text-stone-400">{work.year}</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 group-hover:italic transition-all duration-300">
                      {work.title}
                  </h3>
                  
                  <p className="text-stone-500 leading-relaxed mb-8 font-light line-clamp-3">
                      {work.description}
                  </p>

                  <div className="mb-10 space-y-2 border-l-2 border-stone-200 pl-4">
                      <div className="text-xs uppercase tracking-wider text-stone-900 font-medium">
                          {work.medium}
                      </div>
                      {work.dimensions && (
                          <div className="text-xs uppercase tracking-wider text-stone-400">
                              {work.dimensions}
                          </div>
                      )}
                  </div>

                  <div className="flex gap-8">
                      <button 
                        onClick={() => setSelectedId(work.id)}
                        className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-stone-900 hover:text-stone-500 transition-colors group/btn"
                      >
                          View Detail <Maximize2 size={16} className="group-hover/btn:scale-110 transition-transform"/>
                      </button>
                  </div>
              </div>
          </motion.div>
        ))}
      </div>

      {/* Full Screen Detail Overlay */}
      <AnimatePresence>
        {selectedId && selectedArtwork && (
          <motion.div 
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-cream flex flex-col overflow-y-auto overflow-x-hidden"
          >
             {/* Close Button */}
             <div className="fixed top-6 right-6 md:top-10 md:right-10 z-50">
                <button 
                  onClick={() => setSelectedId(null)}
                  className="w-12 h-12 rounded-full bg-stone-900 text-cream flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
                >
                   <X size={20} />
                </button>
             </div>

             <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                
                {/* Left: Image */}
                <div className="relative h-[50vh] lg:h-auto bg-stone-200">
                    <img 
                      src={selectedArtwork.imageUrl} 
                      alt={selectedArtwork.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent pointer-events-none"></div>
                </div>

                {/* Right: Details */}
                <div className="relative bg-cream p-8 md:p-16 lg:p-24 flex flex-col justify-center">
                   <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.2, duration: 0.8 }}
                   >
                      <div className="flex items-center gap-4 mb-8">
                         <span className="text-xs uppercase tracking-[0.2em] text-stone-400">The Collection</span>
                         <div className="h-px w-12 bg-stone-300"></div>
                         <span className="text-xs font-serif italic text-stone-400">{selectedArtwork.year}</span>
                      </div>

                      <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 mb-6 leading-[0.9]">
                        {selectedArtwork.title}
                      </h2>

                      <div className="flex flex-wrap gap-y-2 gap-x-8 mb-12 text-xs uppercase tracking-widest font-medium text-stone-500 border-y border-stone-200 py-4">
                          <span>{selectedArtwork.medium}</span>
                          {selectedArtwork.dimensions && <span>{selectedArtwork.dimensions}</span>}
                      </div>

                      <div className="prose prose-stone prose-lg mb-12">
                        <p className="font-light text-stone-600 leading-relaxed">
                          {selectedArtwork.description}
                        </p>
                        <div className="my-8 h-px bg-stone-200 w-1/2"></div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-4">Curator's Note</h4>
                        <p className="font-serif italic text-stone-700 text-lg leading-loose">
                          "{selectedArtwork.curatorNote || "No specific curator notes available for this piece."}"
                        </p>
                      </div>

                      <button 
                         onClick={() => setSelectedId(null)}
                         className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-stone-900 hover:opacity-60 transition-opacity"
                      >
                         <ArrowUpRight size={16} /> Back to Gallery
                      </button>
                   </motion.div>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectGrid;
