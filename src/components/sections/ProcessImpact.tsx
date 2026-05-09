import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, CheckCircle2, Globe } from 'lucide-react';

export const ProcessImpact = () => {
  const metrics = [
    { icon: <Users className="w-8 h-8 text-teal-600" />, label: "Healthcare Access", val: "95%", desc: "Improved patient treatment rate" },
    { icon: <TrendingUp className="w-8 h-8 text-teal-600" />, label: "Delayed Care", val: "-60%", desc: "Reduction in treatment delays" },
    { icon: <CheckCircle2 className="w-8 h-8 text-teal-600" />, label: "Provider Success", val: "100%", desc: "Payment completion for hospitals" },
    { icon: <Globe className="w-8 h-8 text-teal-600" />, label: "Scalability", val: "10k+", desc: "Targeted patients in pilot phase" }
  ];

  return (
    <section className="py-24 bg-teal-50/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Impact in Numbers</h2>
          <p className="text-lg text-slate-600">
            We're not just building a product; we're building a sustainable healthcare future for Ethiopia and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm mb-6">
                  {m.icon}
                </div>
                <div className="text-4xl font-black text-slate-900 mb-2">{m.val}</div>
                <div className="text-lg font-bold text-teal-700 mb-2">{m.label}</div>
                <p className="text-slate-500 text-sm font-medium">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="mt-32 pt-20 border-t border-slate-200">
          <div className="text-center mb-12">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">Our Strategic Partners</h3>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all">
              {['Hospitals', 'Clinics', 'Fintechs', 'NGOs', 'Insurers'].map((p, i) => (
                <div key={i} className="text-2xl font-black text-slate-900 tracking-tighter">
                  {p} <span className="text-teal-600">PARTNER</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};