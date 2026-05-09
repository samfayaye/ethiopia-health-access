import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  BrainCircuit, 
  CreditCard, 
  Hospital, 
  Activity, 
  Smartphone, 
  LineChart 
} from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: BrainCircuit,
      title: "AI Risk Assessment",
      desc: "Sophisticated algorithms evaluate patient repayment behavior and medical risk in seconds for instant approvals."
    },
    {
      icon: CreditCard,
      title: "Flexible Healthcare Payments",
      desc: "Customizable repayment schedules tailored to individual patient financial profiles in Ethiopian Birr."
    },
    {
      icon: Hospital,
      title: "Provider Integration",
      desc: "Seamless dashboard for hospitals to track patient financing and receive instant settlements for services."
    },
    {
      icon: Activity,
      title: "Preventive Care Support",
      desc: "AI insights that help patients follow up on preventive health checks to reduce long-term medical costs."
    },
    {
      icon: Smartphone,
      title: "Digital Patient Wallet",
      desc: "Integrated wallet for managing health funds, insurance records, and repayment history all in one place."
    },
    {
      icon: LineChart,
      title: "Smart Repayment Tracking",
      desc: "Real-time analytics for both patients and providers to maintain financial health and transparency."
    }
  ];

  return (
    <section id="features" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8">Comprehensive Health-Fintech Infrastructure</h2>
          <p className="text-xl text-slate-600">
            A robust platform designed to solve the unique structural challenges of the African healthcare ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 rounded-[2.5rem] bg-white group border-t-4 border-transparent hover:border-teal-500">
                  <CardContent className="p-10">
                    <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-8 group-hover:bg-teal-600 group-hover:text-white transition-all duration-500">
                      <Icon size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">{feature.title}</h3>
                    <p className="text-slate-500 text-lg leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};