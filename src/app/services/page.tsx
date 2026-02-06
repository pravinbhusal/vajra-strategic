"use client";
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const serviceItems = [
    "Content Writing", "Digital Marketing", "Social Media Marketing",
    "SEO Services", "Website Design & Development", "Website Maintenance",
    "AI-Integrated Solutions", "Graphic Designing", "Talent Management", "Media Relations"
  ];

  return (
    <main className="min-h-screen bg-[#181A2F] pt-40 pb-20 px-10 relative">
      <div className="max-w-7xl mx-auto">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] tracking-[0.5em] uppercase text-[#FDA481] font-bold"
        >
          The Path • Services
        </motion.span>
        
        <h1 className="text-6xl md:text-8xl font-extralight tracking-tighter text-white mt-6 mb-20 font-sans">
          Integrated <span className="italic text-[#FDA481]">Solutions</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-[#242E49]/50 border border-white/5 rounded-2xl hover:border-[#FDA481]/30 transition-all duration-500 group"
            >
              <div className="w-8 h-8 rounded-full border border-[#B4182D] mb-6 flex items-center justify-center group-hover:bg-[#FDA481] group-hover:border-[#FDA481] transition-all duration-500">
                <div className="w-1 h-1 bg-white rounded-full" />
              </div>
              <h3 className="text-xl text-white font-sans tracking-tight uppercase group-hover:text-[#FDA481] transition-colors">
                {service}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}