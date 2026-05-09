import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  BrainCircuit,
  CreditCard,
  Hospital,
  Activity,
  Smartphone,
  LineChart,
  Target,
  Zap,
  ShieldAlert
} from 'lucide-react';

export const FeaturesAI = () => {
  const features = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-teal-600" />,
      title: "AI Risk Assessment",
      desc: "Sophisticated algorithms evaluate patient repayment behavior and medical risk in seconds."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-teal-600" />,
      title: "Flexible Payments",
      desc: "Customizable repayment schedules tailored to individual patient financial profiles."
    },
    {
      icon: <Hospital className="w-6 h-6 text-teal-600" />,
      title: "Provider Integration",
      desc: "Seamless dashboard for hospitals to track patient financing and instant settlements."
    },
    {
      icon: <Activity className="w-6 h-6 text-teal-600" />,
      title: "Preventive Care",
      desc: "AI insights that help patients follow up on preventive health checks to reduce long-term costs."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-teal-600" />,
      title: "Digital Wallet",
      desc: "Integrated wallet for managing health funds, insurance, and repayment history."
    },
    {
      icon: <LineChart className="w-6 h-6 text-teal-600" />,
      title: "Smart Tracking",
      desc: "Real-time analytics for both patients and providers to maintain financial health."
    }
  ];

  return (
    <div className="bg-white">
      {/* Features Grid */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-teal-50 text-teal-700 hover:bg-teal-50 border-teal-100">Product Features</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">End-to-End Healthcare Infrastructure</h2>
            <p className="text-lg text-slate-600">
              A robust platform designed for the unique challenges of the African healthcare ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <Card key={i} className="border-slate-100 hover:border-teal-200 transition-colors group">
                <CardContent className="pt-8 pb-10">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                    <div className="group-hover:text-white transition-colors">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Layer Section */}
      <section id="ai" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30">AI Ecosystem</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Predictive Analytics for a Healthier Nation</h2>
              <div className="space-y-6">
                {[
                  { icon: <Target className="w-5 h-5" />, title: "Repayment Prediction", desc: "Analyzing 50+ data points to predict and encourage healthy repayment habits." },
                  { icon: <ShieldAlert className="w-5 h-5" />, title: "Patient Risk Scoring", desc: "Medical and financial risk analysis to provide the best credit terms." },
                  { icon: <Activity className="w-5 h-5" />, title: "Smart Provider Analytics", desc: "Helping facilities optimize operations based on patient inflow and funding." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/ce08b59e-c32d-4d8e-b780-d3d2de556f68/ai-analytics-98b0a190-1778317482661.webp"
                  alt="AI Analytics Panel"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-teal-500/30 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};