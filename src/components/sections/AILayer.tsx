import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Target, ShieldAlert, BarChart3, BrainCircuit } from 'lucide-react';

export const AILayer = () => {
  const aiFeatures = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Repayment Prediction",
      desc: "Analyzing 50+ data points to predict and encourage healthy repayment habits for sustainable financing."
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: "Patient Risk Scoring",
      desc: "Multi-dimensional financial and medical risk analysis for fair credit terms and instant access."
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "Preventive Care Insights",
      desc: "Smart alerts for follow-ups and diagnostic checks based on health history and regional disease trends."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Smart Provider Analytics",
      desc: "Operational optimization tools for hospitals and clinics to manage patient flows and financial health."
    }
  ];

  return (
    <section id="ai" className="py-32 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-500/5 blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-500/5 blur-[120px] -z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6 bg-teal-500/20 text-teal-400 border-teal-500/30 px-4 py-1.5 font-bold uppercase tracking-widest text-xs">
              AI Infrastructure
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight">
              Predictive Analytics for a <br />
              <span className="text-teal-400">Healthier Nation</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-xl">
              Our proprietary AI engine processes anonymized health and financial data in real-time to ensure instant approvals and sustainable repayment cycles, making quality healthcare truly scalable in Ethiopia.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {aiFeatures.map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-black mb-3">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="p-4 bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)]">
              <div className="rounded-[2.2rem] overflow-hidden">
                <img
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/ce08b59e-c32d-4d8e-b780-d3d2de556f68/ai-analytics-mockup-874acdf4-1778318178681.webp"
                  alt="AI Analytics Mockup"
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            {/* Pulsing AI Indicator */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-teal-500/20 rounded-full blur-[60px] animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};