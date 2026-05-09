import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, Clock, Wallet, TrendingDown } from 'lucide-react';

export const Problem = () => {
  const problems = [
    {
      icon: <Clock className="w-10 h-10 text-rose-500" />,
      title: "Delayed Treatment",
      desc: "Patients often wait until symptoms worsen because they can't afford upfront costs, leading to poor medical outcomes.",
      stat: "40%+",
      statDesc: "Increase in clinical severity due to delays"
    },
    {
      icon: <Wallet className="w-10 h-10 text-rose-500" />,
      title: "Out-of-Pocket Payments",
      desc: "70%+ of healthcare in Ethiopia is paid out-of-pocket, putting massive financial strain on Ethiopian families.",
      stat: "85M+",
      statDesc: "People without formal health financing"
    },
    {
      icon: <TrendingDown className="w-10 h-10 text-rose-500" />,
      title: "Financial Barriers",
      desc: "Critical surgeries and diagnostic tests are frequently cancelled or postponed due to lack of immediate liquid funds.",
      stat: "1 in 3",
      statDesc: "Families face catastrophic health costs"
    }
  ];

  return (
    <section id="problem" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block p-3 rounded-2xl bg-rose-50 text-rose-600 font-bold text-sm mb-6 flex items-center gap-2 w-fit">
              <AlertCircle size={18} />
              The Healthcare Financing Gap
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
              A Systemic Crisis of <br />
              <span className="text-rose-600 italic">Financial Accessibility</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-xl pb-2"
          >
            In Ethiopia, quality healthcare is often a privilege of those who can pay upfront. Anchor Health is redefining this landscape by removing the financial friction between patients and providers.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((prob, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group rounded-[2rem] overflow-hidden bg-white">
                <CardContent className="pt-12 pb-12 px-10">
                  <div className="mb-10 p-5 w-20 h-20 rounded-2xl bg-rose-50 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-500 flex items-center justify-center">
                    <div className="group-hover:scale-110 transition-transform duration-500">
                      {prob.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{prob.title}</h3>
                  <p className="text-slate-500 mb-10 text-lg leading-relaxed">{prob.desc}</p>
                  
                  <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-4xl font-black text-slate-900 group-hover:text-rose-600 transition-colors">{prob.stat}</div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{prob.statDesc}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};