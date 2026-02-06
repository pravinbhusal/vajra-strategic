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

  // STYLE: Bold, All-Caps, SN Pro (Matching Reference Style)
  const navItemStyles = "text-[13px] font-bold tracking-[0.15em] uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer h-full font-sans whitespace-nowrap";
  const baseLinkColor = "text-white";
  const hoverColor = "text-[#FDA481]";

  return (
    <nav 
      className="fixed top-0 w-full z-[999] border-b border-white/5"
      style={{ backgroundColor: COLORS.VOID }} 
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
        
        {/* LOGO (LEFT ALIGNED - AS PER REFERENCE) */}
        <Link href="/" className="flex items-center gap-4 group shrink-0">
          <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
            <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" fill={COLORS.PEACH}/>
          </svg>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-widest uppercase text-white font-sans leading-none">Vajra</span>
            <span className="text-[9px] tracking-[0.4em] uppercase text-[#FDA481] font-bold mt-1">Strategic</span>
          </div>
        </Link>

        {/* DESKTOP LINKS (RIGHT ALIGNED - AS PER REFERENCE) */}
        <div className="hidden xl:flex items-center gap-8 h-full">
          {navLinks.map((link) => (
            link.name === 'Services' ? (
              <div 
                key={link.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => setIsDesktopServicesOpen(true)}
                onMouseLeave={() => setIsDesktopServicesOpen(false)}
              >
                <span className={`${navItemStyles} ${isDesktopServicesOpen ? hoverColor : baseLinkColor} hover:text-[#FDA481]`}>
                  Services
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform duration-300 ${isDesktopServicesOpen ? 'rotate-180' : ''}`}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>

                <AnimatePresence>
                  {isDesktopServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 w-[800px] grid grid-cols-3 gap-6 p-12 shadow-2xl border border-white/5"
                      style={{ backgroundColor: COLORS.DUSK, backdropFilter: 'blur(40px)' }}
                    >
                      {serviceItems.map((s) => (
                        <Link key={s} href="/services" className="group flex items-center gap-4">
                          <div className="w-1.5 h-1.5 rounded-full border transition-all" style={{ borderColor: COLORS.CRIMSON }} />
                          <span className="text-[11px] font-bold text-white/70 group-hover:text-[#FDA481] tracking-widest uppercase">{s}</span>
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

        {/* MOBILE TRIGGER (HAMBURGER) */}
        <button 
          className="xl:hidden flex flex-col gap-2 p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <div className="w-8 h-[2px] bg-white" />
          <div className="w-8 h-[2px] bg-white" />
          <div className="w-8 h-[2px] bg-white" />
        </button>
      </div>

      {/* MOBILE FULL-SCREEN MENU (MATCHING MOBILE REFERENCE) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex flex-col items-center justify-center"
            style={{ backgroundColor: COLORS.VOID }}
          >
            {/* CLOSE BUTTON (THE 'X' FROM REFERENCE) */}
            <button 
              onClick={() => {setIsMobileMenuOpen(false); setIsMobileServicesOpen(false);}}
              className="absolute top-8 right-8 text-white p-4"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* CENTERED LINKS (MATCHING REFERENCE) */}
            <div className="flex flex-col items-center gap-10 text-center">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col items-center">
                  {link.name === 'Services' ? (
                    <>
                      <button 
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="text-2xl font-bold tracking-[0.3em] uppercase text-white hover:text-[#FDA481] flex items-center gap-4"
                      >
                        SERVICES
                        <svg width="14" height="8" viewBox="0 0 10 6" fill="none" className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}>
                          <path d="M1 1L5 5L9 1" stroke="#FDA481" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col gap-4 mt-6"
                          >
                            {serviceItems.map((s) => (
                              <Link key={s} href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-[10px] tracking-[0.2em] uppercase text-white/40 hover:text-[#FDA481]">
                                {s}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link 
                      href={link.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-bold tracking-[0.3em] uppercase text-white hover:text-[#FDA481]"
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