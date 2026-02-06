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

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navItemStyles = "text-[11px] font-bold tracking-[0.25em] uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer h-full font-sans whitespace-nowrap";

  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-white/10" style={{ backgroundColor: 'rgba(24, 26, 47, 0.9)', backdropFilter: 'blur(20px)' }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-20 md:h-24 flex items-center justify-between relative">
        
        {/* LOGO - Always stays on top */}
        <Link href="/" className="flex items-center gap-4 group z-[1001] shrink-0">
          <svg width="24" height="24" viewBox="0 0 40 40" fill="none" className="group-hover:rotate-90 transition-transform duration-700">
            <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" fill={COLORS.PEACH}/>
          </svg>
          <span className="text-xl font-bold tracking-[0.4em] uppercase text-white font-sans">Vajra</span>
        </Link>

        {/* DESKTOP MENU - Hidden on Mobile */}
        <div className="hidden xl:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 h-full">
          {navLinks.map((link) => (
            link.name === 'Services' ? (
              <div key={link.name} className="relative h-full flex items-center" onMouseEnter={() => setIsDesktopServicesOpen(true)} onMouseLeave={() => setIsDesktopServicesOpen(false)}>
                <span className={`${navItemStyles} ${isDesktopServicesOpen ? 'text-[#FDA481]' : 'text-white/90'} hover:text-[#FDA481]`}>
                  Services
                  <svg width="8" height="5" viewBox="0 0 10 6" fill="none" className={`mt-0.5 transition-transform duration-300 ${isDesktopServicesOpen ? 'rotate-180' : ''}`}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <AnimatePresence>
                  {isDesktopServicesOpen && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-[96px] left-1/2 -translate-x-1/2 w-[1000px] grid grid-cols-3 gap-y-10 gap-x-16 p-16 shadow-2xl border-t border-white/5" style={{ backgroundColor: 'rgba(24, 26, 47, 0.98)', backdropFilter: 'blur(40px)' }}>
                      {serviceItems.map((s) => (
                        <Link key={s} href="/services" className="group flex items-center gap-5">
                          <div className="w-2 h-2 rounded-full border border-[#B4182D] group-hover:bg-[#FDA481] transition-all" />
                          <span className="text-[12px] font-medium text-white/70 group-hover:text-[#FDA481] tracking-widest uppercase font-sans">{s}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={link.name} href={link.href} className={`${navItemStyles} text-white/90 hover:text-[#FDA481]`}>{link.name}</Link>
            )
          ))}
        </div>

        {/* MOBILE HAMBURGER / X ICON MORPH */}
        <button className="xl:hidden flex flex-col gap-2 z-[1001] p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <motion.div 
            animate={isMobileMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
            className="w-8 h-[1.5px]" style={{ backgroundColor: COLORS.PEACH }} 
          />
          <motion.div 
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-8 h-[1.5px]" style={{ backgroundColor: COLORS.PEACH }} 
          />
          <motion.div 
            animate={isMobileMenuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
            className="w-8 h-[1.5px]" style={{ backgroundColor: COLORS.PEACH }} 
          />
        </button>
      </div>

      {/* FULL-SCREEN MOBILE DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex flex-col bg-[#181A2F] p-10 pt-40"
          >
            <div className="flex flex-col gap-10 overflow-y-auto pb-20">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.name === 'Services' ? (
                    <div className="flex flex-col">
                      <button 
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} 
                        className="text-4xl font-light tracking-tighter text-white flex items-center justify-between uppercase font-sans"
                      >
                        Services
                        <motion.svg 
                          animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                          width="24" height="12" viewBox="0 0 10 6" fill="none"
                        >
                          <path d="M1 1L5 5L9 1" stroke={COLORS.PEACH} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </motion.svg>
                      </button>
                      
                      {/* MOBILE SERVICES ACCORDION */}
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }} 
                            animate={{ height: 'auto', opacity: 1 }} 
                            exit={{ height: 0, opacity: 0 }} 
                            className="flex flex-col gap-6 pt-8 pl-4 border-l border-[#37415C] mt-4"
                          >
                            {serviceItems.map((s) => (
                              <Link 
                                key={s} 
                                href="/services" 
                                onClick={() => setIsMobileMenuOpen(false)} 
                                className="text-[11px] tracking-[0.3em] uppercase text-white/50 hover:text-[#FDA481] font-sans"
                              >
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

            {/* DECORATIVE FOOTER */}
            <div className="mt-auto border-t border-white/5 pt-10">
                <p className="text-[10px] tracking-[0.6em] uppercase text-[#37415C] font-sans">
                  Vajra Strategic • Kathmandu
                </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}