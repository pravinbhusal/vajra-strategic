"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-[#181A2F]">
      
      {/* 1. ATMOSPHERIC BACKGROUND (Strict Palette) */}
      <div className="absolute inset-0 -z-10">
        {/* Deep Crimson Glow (Top Right) */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#B4182D] opacity-[0.07] blur-[150px] rounded-full" />
        {/* Deep Dusk Glow (Bottom Left) */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-[#242E49] opacity-[0.4] blur-[150px] rounded-full" />
        
        {/* Slowly Rotating Mandala Wireframe (#FDA481) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] right-[-10%] w-[100%] h-auto opacity-[0.03] pointer-events-none"
        >
          <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="400" r="350" stroke="#FDA481" strokeWidth="0.5" />
            <path d="M400 50 L750 400 L400 750 L50 400 Z" stroke="#FDA481" strokeWidth="0.5" />
            <rect x="150" y="150" width="500" height="500" stroke="#FDA481" strokeWidth="0.3" transform="rotate(45 400 400)" />
          </svg>
        </motion.div>
      </div>

      {/* 2. MAIN HERO CONTENT */}
      <div className="max-w-7xl mx-auto text-center z-10 pt-20">
        {/* Minimalist Label */}
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[10px] tracking-[0.7em] uppercase text-[#FDA481] mb-8 block font-bold"
        >
          Est. Kathmandu • Global Reach
        </motion.span>
        
        {/* Huge High-Contrast Headline (SN Pro) */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-[9.5rem] font-extralight tracking-tighter text-white leading-[0.85] mb-10 font-sans"
        >
          Digital <br />
          <span 
            style={{ fontStyle: 'italic', fontFamily: 'serif' }} 
            className="font-light opacity-90 text-[#FDA481] lowercase"
          >
            Enlightenment
          </span>
        </motion.h1>

        {/* Sophisticated Subtext (Slate #37415C) */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-xl mx-auto text-[#37415C] text-sm md:text-lg font-medium leading-relaxed tracking-wider mb-16 font-sans"
        >
          Merging Himalayan heritage with high-performance algorithms. <br />
          We build digital paths that stand as tall as the peaks we call home.
        </motion.p>

        {/* CTA BUTTONS (MPA Links) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-8 justify-center items-center"
        >
          <Link href="/services">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#B4182D] text-white px-14 py-6 rounded-full text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-[#FDA481] hover:text-[#181A2F] transition-all duration-700 shadow-2xl shadow-[#B4182D]/10 font-sans"
            >
              Begin Your Ascent
            </motion.button>
          </Link>

          <Link href="/portfolio">
            <motion.button 
              whileHover={{ color: "#FDA481" }}
              className="text-white/60 text-[11px] font-bold tracking-[0.4em] uppercase transition-colors duration-500 font-sans"
            >
              View The Portfolio
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* 3. AESTHETIC SCROLL INDICATOR (#37415C) */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#FDA481] to-transparent" />
      </motion.div>

      {/* 4. GRAIN OVERLAY (For that "Silk" texture) */}
      <div className="grain-overlay" />
    </main>
  );
}