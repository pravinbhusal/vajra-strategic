"use client";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      
      {/* Background Gradients using #54162B and #242E49 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] right-[-5%] w-[50%] h-[50%] bg-[#54162B] opacity-[0.05] blur-[150px] rounded-full" />
        <div className="absolute bottom-[0%] left-[-10%] w-[60%] h-[60%] bg-[#242E49] opacity-[0.4] blur-[150px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="z-10"
      >
        <span className="text-[10px] tracking-[0.7em] uppercase text-[#FDA481] mb-10 block font-semibold opacity-80">
          Digital Legacy Agency
        </span>
        
        <h1 className="text-7xl md:text-[9.5rem] font-extralight tracking-tighter text-white leading-[0.85] mb-10">
          Digital <br />
          <span className="italic font-light opacity-90 text-[#FDA481]">Enlightenment</span>
        </h1>

        <p className="max-w-xl mx-auto text-[#37415C] text-sm md:text-base font-medium leading-relaxed tracking-wider mb-14">
          Merging Himalayan heritage with high-performance algorithms. <br />
          We build digital paths that stand as tall as the peaks we call home.
        </p>

        {/* CTA Button in #B4182D */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="bg-[#B4182D] text-white px-14 py-6 rounded-full text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-[#FDA481] hover:text-[#181A2F] transition-all duration-700 shadow-2xl shadow-[#B4182D]/10"
        >
          Begin Your Ascent
        </motion.button>
      </motion.div>

      {/* Aesthetic Detail line in #37415C */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30">
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#FDA481] to-transparent" />
      </div>
      
    </main>
  );
}