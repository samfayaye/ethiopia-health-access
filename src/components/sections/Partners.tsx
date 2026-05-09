import React from 'react';
import { motion } from 'framer-motion';

export const Partners = () => {
  const partners = [
    { name: "St. Paul's", type: "Hospital Network" },
    { name: "Addis Diagnostic", type: "Diagnostic Center" },
    { name: "CBE Birr", type: "Payment Partner" },
    { name: "EthioTelecom", type: "Infrastructure" },
    { name: "Ministry of Health", type: "Public Partner" },
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Trusted By Healthcare & Fintech Leaders</h3>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05, opacity: 1 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter">
                {p.name.split(' ')[0]} <span className="text-teal-600">{p.name.split(' ')[1] || ''}</span>
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{p.type}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};