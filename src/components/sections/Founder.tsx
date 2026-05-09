import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Quote, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Founder = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-slate-900 rounded-[4rem] overflow-hidden relative">
          {/* Subtle Accent */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 blur-[120px] -z-0" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center p-8 md:p-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative group mx-auto max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-tr from-teal-500 to-blue-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-[3rem] overflow-hidden border-4 border-slate-800 shadow-2xl aspect-square bg-slate-800">
                  <img
                    src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/ce08b59e-c32d-4d8e-b780-d3d2de556f68/founder-portrait-mockup-4cafa90c-1778318181045.webp"
                    alt="Dr. Samuel Tesfaye"
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                  />
                </div>
                {/* Floating Activity Icon */}
                <div className="absolute -bottom-6 -right-6 bg-teal-500 p-5 rounded-3xl shadow-xl text-white">
                  <Activity size={32} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-teal-500 font-black uppercase tracking-[0.2em] text-sm mb-6 flex items-center gap-3">
                <div className="w-8 h-[2px] bg-teal-500" />
                Visionary Leadership
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Dr. Samuel Tesfaye</h2>
              <div className="relative mb-10">
                <Quote className="absolute -top-6 -left-8 text-teal-500/20" size={64} />
                <p className="text-2xl md:text-3xl text-slate-200 font-bold leading-tight italic relative z-10">
                  "Building the future of accessible healthcare in Ethiopia, ensuring that financial status never dictates clinical destiny."
                </p>
              </div>
              <p className="text-xl text-slate-400 leading-relaxed mb-12">
                Founded by Dr. Samuel Tesfaye, a clinician focused on improving healthcare access and preventive care systems in Ethiopia. His unique vantage point at the intersection of clinical medicine and fintech led to the birth of Anchor Health Wallet.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <Button className="bg-white text-slate-900 hover:bg-slate-100 font-black h-14 px-8 rounded-2xl gap-3 transition-all">
                  <Linkedin size={20} /> LinkedIn Profile
                </Button>
                <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800 font-black h-14 px-8 rounded-2xl gap-3 transition-all">
                  <Mail size={20} /> Contact Founder
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};