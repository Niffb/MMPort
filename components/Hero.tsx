import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const textVariants = {
    hidden: { y: "100%" },
    visible: { 
      y: "0%",
      transition: { 
        duration: 1.4, 
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Abstract Animated Background Shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
         {/* Soft Gradient Orb */}
         <motion.div 
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 2, ease: "easeOut" }}
           className="absolute top-[-10%] right-[-5%] w-[70vh] h-[70vh] rounded-full bg-gradient-to-b from-stone-200/40 to-transparent blur-[120px]"
         />
         
         {/* Architectural Circles */}
         <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 0.15 }}
           transition={{ duration: 1, delay: 0.5 }}
           className="absolute top-1/4 right-10 md:right-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px]"
         >
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-stone-900 fill-none stroke-[0.3]">
               <motion.circle cx="50" cy="50" r="45" 
                 initial={{ pathLength: 0, rotate: -90 }}
                 animate={{ pathLength: 1, rotate: 0 }}
                 transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
               />
               <motion.circle cx="50" cy="50" r="30" 
                 initial={{ pathLength: 0, rotate: 90 }}
                 animate={{ pathLength: 1, rotate: 0 }}
                 transition={{ duration: 3, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
               />
               <motion.circle cx="50" cy="50" r="15" 
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: 1 }}
                 transition={{ duration: 2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                 className="stroke-[0.5]"
               />
            </svg>
         </motion.div>
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Main Headline Area */}
          <div className="lg:col-span-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-8 pl-1"
            >
               <span className="inline-flex items-center gap-3 border-b border-stone-300 pb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-stone-900"></span>
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-stone-500 font-medium">Commissions Open</span>
               </span>
            </motion.div>

            {/* Masked Typography for Name */}
            <motion.div 
              className="flex flex-col relative"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <div className="overflow-hidden pb-2">
                <motion.h1 variants={textVariants} className="text-[16vw] md:text-[13vw] leading-[0.85] font-serif text-stone-900 tracking-tighter">
                  Mia
                </motion.h1>
              </div>
              {/* Added padding-bottom to prevent clipping of the 'y' descender */}
              <div className="overflow-hidden pb-8 -mt-2">
                <motion.h1 variants={textVariants} className="text-[16vw] md:text-[13vw] leading-[0.85] font-serif text-stone-900 tracking-tighter md:ml-32 lg:ml-48">
                  Maya<span className="text-stone-400">.</span>
                </motion.h1>
              </div>
            </motion.div>
            
            {/* Subtitle / Intro */}
            <div className="mt-12 flex flex-col md:flex-row gap-12 md:items-start">
              <div className="overflow-hidden">
                 <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="md:w-72 pl-1"
                  >
                    <h2 className="text-xl font-serif italic text-stone-500 leading-relaxed">
                      Visual narratives in <br/> oil, acrylic, and pixels.
                    </h2>
                  </motion.div>
              </div>
              
              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1, delay: 1.4 }}
                 className="h-px w-12 bg-stone-300 mt-4 hidden md:block"
              ></motion.div>

              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                className="max-w-md text-sm font-sans text-stone-600 leading-loose tracking-wide pt-1"
              >
                A multidisciplinary artist exploring the intersection of classical technique and modern solitude. Capturing the ephemeral moments of life in San Francisco.
              </motion.p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="hidden lg:col-span-2 lg:flex flex-col justify-end items-end h-full pb-2">
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 2 }}
               className="flex flex-col items-center gap-6"
             >
                <span style={{ writingMode: 'vertical-rl' }} className="text-[10px] uppercase tracking-widest text-stone-400 font-medium rotate-180">Enter Gallery</span>
                <div className="h-20 w-px bg-stone-200 overflow-hidden relative">
                    <motion.div 
                        className="absolute top-0 left-0 w-full bg-stone-900 h-1/3"
                        animate={{ top: ['-100%', '100%'] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
             </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;