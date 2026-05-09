import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, CheckCircle2, Globe, Heart } from 'lucide-react';

export const Impact = () => {
  const metrics = [
    { 
      icon: <Users size={32} />, 
      label: "Healthcare Access", 
      val: "95%", 
      desc: "Improved patient treatment completion rate at partner hospitals." 
    },
    { 
      icon: <TrendingUp size={32} />, 
      label: "Delayed Care", 
      val: "-60%", 
      desc: "Reduction in treatment delays due to immediate financing availability." 
    },
    { 
      icon: <CheckCircle2 size={32} />, 
      label: "Provider Success", 
      val: "100%", 
      desc: "Payment completion rate for healthcare facilities within 48 hours." 
    },
    { 
      icon: <Heart size={32} />, 
      label: "Patient Wellness", 
      val: "88%", 
      desc: "Positive long-term health outcomes reported by patient pilot group." 
    }
  ];

  return (
    <section id="impact" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 font-bold text-sm mb-6">
            <Globe size={16} />
            Our Impact in Ethiopia
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8">Building a Sustainable <br />Healthcare Future</h2>
          <p className="text-xl text-slate-600">
            Anchor Health isn't just a platform; it's a mission-driven engine for social and clinical transformation across the country.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white shadow-lg text-teal-600 mb-8">
                {m.icon}
              </div>
              <div className="text-5xl font-black text-slate-900 mb-3">{m.val}</div>
              <div className="text-lg font-bold text-teal-700 mb-3">{m.label}</div>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};