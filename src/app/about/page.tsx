"use client";
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#181A2F] pt-40 pb-20 px-10 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-[#242E49] opacity-30 blur-[150px] rounded-full" />
        <div className="absolute bottom-[0%] left-[-5%] w-[400px] h-[400px] bg-[#54162B] opacity-[0.05] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#FDA481] font-bold">
            The Vajra Ethos
          </span>
          <h1 className="text-6xl md:text-8xl font-extralight tracking-tighter text-white mt-6 mb-12 font-sans">
            Crafting Digital <br />
            <span className="italic text-[#FDA481]">Legacies.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#37415C] text-xl leading-relaxed font-sans"
          >
            Based in the heart of Kathmandu, Vajra Strategic is more than a digital agency. We are architects of identity, merging ancient Himalayan wisdom with the high-velocity precision of modern algorithms. 
            <br /><br />
            We believe that every brand has a summit to reach. Our mission is to provide the strategy, technology, and creative vision to ensure your ascent is both inevitable and legendary.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative p-1 border border-[#37415C]/30 rounded-3xl"
          >
            <div className="aspect-video bg-[#242E49] rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Subtle Geometric Vajra Pattern */}
                <svg width="100" height="100" viewBox="0 0 40 40" fill="none" className="opacity-10 animate-pulse">
                    <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" fill="#FDA481"/>
                </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}