import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px] -z-0" />
      
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-900 text-white font-bold text-sm mb-10 shadow-xl shadow-slate-900/20">
            <Sparkles className="w-4 h-4 text-teal-400" />
            Join the Movement
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-10 leading-tight tracking-tighter">
            Building the Future of <br />
            <span className="text-teal-600">Accessible Healthcare</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            Eliminating financial barriers to health, one patient at a time. Whether you're a patient, provider, or partner, let's build the future of Ethiopian health-tech together.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-12 py-8 text-2xl rounded-[2rem] font-black shadow-2xl shadow-teal-600/40 group transition-all h-auto">
              Join Early Access
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-slate-200 text-slate-900 px-12 py-8 text-2xl rounded-[2rem] font-black hover:bg-slate-50 shadow-sm transition-all h-auto">
              Request Partnership
            </Button>
          </div>
          
          <div className="mt-20 flex justify-center items-center gap-10 opacity-40">
            <div className="h-[1px] w-24 bg-slate-200" />
            <span className="text-slate-400 font-black tracking-widest text-xs">ESTABLISHED IN ADDIS ABABA, ETHIOPIA</span>
            <div className="h-[1px] w-24 bg-slate-200" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};