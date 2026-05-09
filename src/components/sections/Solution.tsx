import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const Solution = () => {
  const points = [
    "Instant AI-assisted risk profiling",
    "Direct disbursement to healthcare providers",
    "Customizable payment installments",
    "Digital health tracking and reminders"
  ];

  return (
    <section id="solution" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="p-2 md:p-6 bg-slate-900 rounded-[3rem] shadow-2xl border border-slate-800">
                <img
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/ce08b59e-c32d-4d8e-b780-d3d2de556f68/mobile-app-mockup-2f46d8f4-1778318178811.webp"
                  alt="Anchor Health App Approval Flow"
                  className="rounded-[2.2rem] w-full h-auto"
                />
              </div>
              
              {/* Decorative Blur */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <Badge className="mb-6 bg-teal-50 text-teal-700 border-teal-100 px-4 py-1 font-bold">The Solution</Badge>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
              Bridging the Gap with <br />
              <span className="text-teal-600">Smart Financing</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Anchor Health Wallet provides a seamless bridge between patients and providers. Our AI-enabled platform ensures that clinical decisions are never dictated by immediate wallet balance.
            </p>

            <div className="space-y-6 mb-12">
              {points.map((point, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-lg font-bold text-slate-800 tracking-tight">{point}</span>
                </div>
              ))}
            </div>

            <Button className="bg-slate-900 hover:bg-slate-800 text-white text-lg h-16 px-10 rounded-2xl font-bold transition-all shadow-xl shadow-slate-900/20">
              Explore Our Workflow <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};