import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, Clock, Wallet, BarChart3, ChevronRight } from 'lucide-react';

export const ProblemSolution = () => {
  const problems = [
    {
      icon: <Clock className="w-8 h-8 text-rose-500" />,
      title: "Delayed Treatment",
      desc: "Patients often wait until symptoms worsen because they can't afford upfront costs.",
      stat: "40%+",
      statDesc: "Treatment delay rate"
    },
    {
      icon: <Wallet className="w-8 h-8 text-rose-500" />,
      title: "Out-of-pocket Payments",
      desc: "Significant financial strain due to the lack of health insurance or financing options.",
      stat: "High",
      statDesc: "Financial vulnerability"
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-rose-500" />,
      title: "Financial Barriers",
      desc: "Emergency procedures lead to debt spirals for families without access to credit.",
      stat: "Systemic",
      statDesc: "Healthcare gap"
    }
  ];

  const steps = [
    { number: "01", title: "Request Care", desc: "Patient requests financing at partner facility." },
    { number: "02", title: "AI Assessment", desc: "Instant risk scoring and approval via our AI engine." },
    { number: "03", title: "Receive Treatment", desc: "Direct payment to provider; patient gets care immediately." },
    { number: "04", title: "Flexible Repayment", desc: "Repay in manageable installments over time." }
  ];

  return (
    <div id="problem">
      {/* Problem Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">The Healthcare Gap in Ethiopia</h2>
            <p className="text-lg text-slate-600">
              Financial constraints remain the single biggest hurdle to quality healthcare. Anchor Health is bridging this gap.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((prob, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-8 pb-10">
                    <div className="mb-6">{prob.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{prob.title}</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed">{prob.desc}</p>
                    <div className="pt-6 border-t border-slate-100">
                      <div className="text-3xl font-bold text-slate-900">{prob.stat}</div>
                      <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{prob.statDesc}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">How Anchor Health Works</h2>
              <div className="space-y-12">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center font-bold text-lg border-2 border-white shadow-sm">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                      <p className="text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="mt-12 bg-slate-900 text-white hover:bg-slate-800 h-12 px-8 rounded-full font-semibold">
                Learn More About Our Process
              </Button>
            </div>

            <div className="order-1 md:order-2 relative">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -z-10" />
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/ce08b59e-c32d-4d8e-b780-d3d2de556f68/mobile-app-preview-2ab231c1-1778317482756.webp"
                  alt="Anchor Health Mobile Experience"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};