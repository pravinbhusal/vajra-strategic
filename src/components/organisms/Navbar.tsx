"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const COLORS = {
  VOID: '#181A2F',
  DUSK: '#242E49',
  SLATE: '#37415C',
  PEACH: '#FDA481',
  CRIMSON: '#B4182D'
};

const serviceItems = [
  "Content Writing", "Digital Marketing", "Social Media Marketing",
  "SEO Services", "Website Design & Development", "Website Maintenance",
  "AI-Integrated Solutions", "Graphic Designing", "Talent Management", "Media Relations"
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Training', href: '/training' },
  { name: 'Career', href: '/career' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' }
];

export default function Navbar() {
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  // FIXED: added whitespace-nowrap to prevent the two-line "fucked" look
  const navItemStyles = "text-[11px] font-bold tracking-[0.22em] uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer h-full font-sans whitespace-nowrap";
  const baseLinkColor = "text-white/90";
  const hoverColor = "text-[#FDA481]";

  return (
    <nav 
      className="fixed top-0 w-full z-[100] border-b border-white/10"
      style={{ backgroundColor: 'rgba(24, 26, 47, 0.85)', backdropFilter: 'blur(25px)' }}
    >
      <div className="max-w-[1536px] mx-auto px-10 h-24 flex items-center justify-between relative">
        
        {/* 1. LOGO */}
        <Link href="/" className="flex items-center gap-4 group z-[110] shrink-0">
          <svg width="28" height="28" viewBox="0 0 40 40" fill="none" className="group-hover:rotate-90 transition-transform duration-700">
            <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" fill={COLORS.PEACH}/>
          </svg>
          <span className="text-xl font-bold tracking-[0.4em] uppercase text-white font-sans">Vajra</span>
        </Link>

        {/* 2. DESKTOP CENTER NAVIGATION (Laptops/TVs) */}
        {/* Fixed: Wider gap and absolute centering with no-wrap */}
        <div className="hidden xl:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 2xl:gap-10 h-full">
          {navLinks.map((link) => (
            link.name === 'Services' ? (
              <div 
                key={link.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => setIsDesktopServicesOpen(true)}
                onMouseLeave={() => setIsDesktopServicesOpen(false)}
              >
                <span className={`${navItemStyles} ${isDesktopServicesOpen ? 'text-[#FDA481]' : baseLinkColor} hover:text-[#FDA481]`}>
                  Services
                  <svg width="8" height="5" viewBox="0 0 10 6" fill="none" className={`mt-0.5 transition-transform duration-300 ${isDesktopServicesOpen ? 'rotate-180' : ''}`}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>

                <AnimatePresence>
                  {isDesktopServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-[96px] left-1/2 -translate-x-1/2 w-[1000px] grid grid-cols-3 gap-y-10 gap-x-16 p-16 shadow-2xl border-t border-white/5"
                      style={{ backgroundColor: 'rgba(24, 26, 47, 0.98)', backdropFilter: 'blur(40px)' }}
                    >
                      {serviceItems.map((s) => (
                        <Link key={s} href="/services" className="group flex items-center gap-5">
                          <div className="w-2 h-2 rounded-full border border-[#B4182D] group-hover:bg-[#FDA481] group-hover:border-[#FDA481] transition-all duration-300" />
                          <span className="text-[12px] font-medium text-white/70 group-hover:text-[#FDA481] tracking-widest uppercase font-sans transition-colors">
                            {s}
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={link.name} href={link.href} className={`${navItemStyles} ${baseLinkColor} hover:text-[#FDA481]`}>
                {link.name}
              </Link>
            )
          ))}
        </div>

        {/* 3. MOBILE TRIGGER */}
        <button 
          className="xl:hidden flex flex-col gap-2 z-[110] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.div animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 9 : 0 }} className="w-7 h-[1.5px]" style={{ backgroundColor: COLORS.PEACH }} />
          <motion.div animate={{ opacity: isMobileMenuOpen ? 0 : 1 }} className="w-7 h-[1.5px]" style={{ backgroundColor: COLORS.PEACH }} />
          <motion.div animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -9 : 0 }} className="w-7 h-[1.5px]" style={{ backgroundColor: COLORS.PEACH }} />
        </button>

        {/* Placeholder to maintain symmetry when center is absolute */}
        <div className="hidden xl:block w-[120px]"></div>
      </div>

      {/* 4. MOBILE DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[100] flex flex-col pt-32 px-10 overflow-y-auto"
            style={{ backgroundColor: COLORS.VOID }}
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.name === 'Services' ? (
                    <div className="flex flex-col">
                      <button 
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="text-4xl font-light tracking-tighter text-white flex items-center justify-between uppercase font-sans"
                      >
                        Services
                        <svg width="20" height="12" viewBox="0 0 10 6" fill="none" className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}>
                          <path d="M1 1L5 5L9 1" stroke={COLORS.PEACH} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col gap-6 pt-6 pl-4 border-l mt-4" style={{ borderColor: COLORS.SLATE }}
                          >
                            {serviceItems.map((s) => (
                              <Link key={s} href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-[11px] tracking-[0.3em] uppercase text-[#37415C] hover:text-[#FDA481] font-sans">
                                {s}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      href={link.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-4xl font-light tracking-tighter text-white hover:text-[#FDA481] uppercase font-sans"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}