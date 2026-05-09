import React from 'react';
import { motion } from 'framer-motion';
import { Hospital, CheckCircle, UserCheck, CreditCard, ChevronRight } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      icon: <Hospital size={32} />,
      title: "Visit Partner Facility",
      desc: "Head to any of our accredited hospitals or diagnostic centers across Ethiopia.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <UserCheck size={32} />,
      title: "Get Approved",
      desc: "Instant AI-assisted risk assessment right at the facility front desk.",
      color: "bg-teal-50 text-teal-600"
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Receive Treatment",
      desc: "Get your medical procedures done immediately without worrying about payment.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <CreditCard size={32} />,
      title: "Pay Over Time",
      desc: "Repay in flexible, interest-fair monthly installments through our app.",
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8">Get Treated Now, <br /><span className="text-teal-600 italic">Pay Over Time.</span></h2>
          <p className="text-xl text-slate-600">
            A simple, transparent process designed to put your health first and financial stress last.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 -z-10" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative bg-white"
              >
                <div className="flex flex-col items-center text-center p-8 rounded-[2.5rem] hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 border border-slate-50 lg:border-none">
                  <div className={`w-24 h-24 rounded-[2rem] ${step.color} flex items-center justify-center mb-8 shadow-lg shadow-current/10 relative z-10`}>
                    {step.icon}
                    <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-lg border-4 border-white">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{step.title}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed">{step.desc}</p>
                </div>
                
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 translate-y-[-50%] text-slate-200 z-10">
                    <ChevronRight size={32} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};