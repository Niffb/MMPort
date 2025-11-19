import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import NeuralInterface from './components/NeuralInterface';
import { ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-stone-900 relative selection:bg-stone-900 selection:text-white">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-noise mix-blend-multiply"></div>
      
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${scrolled ? 'py-4 bg-cream/80 backdrop-blur-md border-b border-stone-200' : 'py-8 bg-transparent'}`}>
        <div className="container mx-auto px-8 md:px-16 flex items-center justify-between">
            <a href="#" className="text-xl font-serif italic font-bold tracking-tight text-stone-900 z-50 relative">
                Mia Maya.
            </a>
            <div className="hidden md:flex gap-10 items-center z-50 relative">
                <a href="#home" className="text-xs tracking-widest uppercase font-medium text-stone-500 hover:text-stone-900 transition-colors">Index</a>
                <a href="#gallery" className="text-xs tracking-widest uppercase font-medium text-stone-500 hover:text-stone-900 transition-colors">Gallery</a>
                <a href="#studio" className="text-xs tracking-widest uppercase font-medium text-stone-500 hover:text-stone-900 transition-colors">Studio</a>
                <a href="#contact" className="text-xs tracking-widest uppercase font-bold text-stone-900 border-b border-stone-900 pb-0.5 hover:opacity-70 transition-opacity">Inquire</a>
            </div>
        </div>
      </nav>

      <main className="relative z-10">
        <Hero />

        {/* Gallery Section */}
        <section id="gallery" className="py-32 bg-cream relative">
            <div className="container mx-auto px-8 md:px-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-stone-200 pb-8">
                    <div>
                         <span className="text-xs font-serif italic text-stone-500 mb-2 block">01 — Works</span>
                        <h2 className="text-5xl md:text-6xl font-serif text-stone-900">Selected Pieces</h2>
                    </div>
                    <p className="max-w-xs text-stone-500 text-sm leading-relaxed">
                        A curated collection of recent paintings and digital studies exploring light, form, and memory.
                    </p>
                </div>
                <ProjectGrid />
            </div>
        </section>

        {/* Studio/Expertise Section */}
        <section id="studio" className="py-32 bg-stone-100 border-t border-stone-200">
            <div className="container mx-auto px-8 md:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-5 flex flex-col justify-center">
                         <span className="text-xs font-serif italic text-stone-500 mb-6 block">02 — Studio Practice</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">
                            Emotion meets <br/> <span className="italic text-stone-400">Canvas.</span>
                        </h2>
                        
                        <div className="space-y-8 text-stone-600 font-light leading-relaxed">
                            <p>
                                My practice is rooted in the observation of the mundane. Through layers of oil and digital texture, I attempt to freeze the ephemeral feeling of a passing moment.
                            </p>
                            <p>
                                Whether working with traditional pigments or generative algorithms, the goal remains the same: to evoke a sense of quiet recognition in the viewer.
                            </p>
                        </div>

                         <div className="mt-12 grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-serif text-2xl text-stone-900">8+</h4>
                                <span className="text-xs uppercase tracking-widest text-stone-400">Years</span>
                            </div>
                            <div>
                                <h4 className="font-serif text-2xl text-stone-900">12</h4>
                                <span className="text-xs uppercase tracking-widest text-stone-400">Exhibitions</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7 relative min-h-[500px]">
                        <div className="absolute inset-0 bg-stone-200 overflow-hidden">
                             <img 
                                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop" 
                                alt="Studio Atmosphere" 
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s] ease-in-out"
                             />
                             <div className="absolute bottom-0 right-0 bg-stone-900 text-stone-50 text-[10px] uppercase tracking-widest px-4 py-2">
                                Fig 2.1 — Studio Atmosphere
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-stone-900 text-cream">
            <div className="container mx-auto px-8 md:px-16 text-center">
                <span className="text-xs font-serif italic text-stone-400 mb-8 block">03 — Contact</span>
                <h2 className="text-6xl md:text-8xl font-serif mb-12 tracking-tight">
                    Acquire <br/> <span className="italic text-stone-600">something timeless.</span>
                </h2>
                
                <a href="mailto:art@maya.gallery" className="group inline-flex items-center gap-4 text-xl md:text-2xl border border-stone-700 px-10 py-5 rounded-full hover:bg-cream hover:text-stone-900 transition-all duration-500">
                    <span>art@maya.gallery</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
                
                <div className="mt-24 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500 border-t border-stone-800 pt-12 gap-4">
                    <p>© 2025 Mia Maya. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-cream transition-colors">Instagram</a>
                        <a href="#" className="hover:text-cream transition-colors">Artsy</a>
                        <a href="#" className="hover:text-cream transition-colors">Behance</a>
                    </div>
                </div>
            </div>
        </section>
      </main>

      <NeuralInterface />
    </div>
  );
};

export default App;