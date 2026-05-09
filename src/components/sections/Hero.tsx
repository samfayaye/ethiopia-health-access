import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, ShieldCheck, MapPin } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-56 md:pb-40 overflow-hidden bg-white">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Badge className="mb-8 bg-teal-50 text-teal-700 border-teal-100 px-4 py-1.5 rounded-full font-bold flex items-center gap-2 w-fit shadow-sm">
            <Sparkles className="w-4 h-4 text-teal-600" />
            AI-Driven Healthcare Financing
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tight">
            Healthcare Access <br />
            Without <span className="text-teal-600 relative inline-block">
              Financial Barriers
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0 7C30 2 70 2 100 7" stroke="#0D9488" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-xl">
            Anchor Health Wallet helps patients access healthcare immediately through AI-assisted healthcare financing and flexible payment solutions in Ethiopia.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-center">
            <Button className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white text-xl h-16 px-10 rounded-2xl shadow-2xl shadow-teal-600/30 font-bold group">
              Join Pilot
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="w-full sm:w-auto h-16 px-10 rounded-2xl text-xl border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-all">
              Partner With Us
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-slate-500 font-bold">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-500" />
              Central Bank Compliant
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-teal-500" />
              Addis Ababa, Ethiopia
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mt-20 lg:mt-0 relative"
        >
          {/* Dashboard Preview */}
          <div className="relative z-10 p-2 md:p-4 bg-white/50 backdrop-blur-sm rounded-[2.5rem] border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
            <div className="rounded-[1.75rem] overflow-hidden border border-slate-200/50">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/ce08b59e-c32d-4d8e-b780-d3d2de556f68/hero-dashboard-mockup-4da0950d-1778318179536.webp"
                alt="Anchor Health Dashboard Mockup"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Floating Element 1: Stat Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 hidden md:block z-20 bg-white p-5 rounded-2xl shadow-2xl border border-slate-50"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Patient Status</div>
                <div className="text-lg font-black text-slate-900">AI Approved</div>
              </div>
            </div>
          </motion.div>

          {/* Floating Element 2: Repayment Progress */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -left-8 hidden md:block z-20 bg-slate-900 p-6 rounded-3xl shadow-2xl"
          >
            <div className="text-white">
              <div className="text-xs font-bold text-slate-400 uppercase mb-2">Monthly Installment</div>
              <div className="text-2xl font-black mb-1">2,450 ETB</div>
              <div className="w-32 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-teal-400" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};