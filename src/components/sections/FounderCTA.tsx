import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Mail, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';

export const FounderCTA = () => {
  return (
    <div id="about">
      {/* Founder Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center p-8 md:p-16">
              <div className="flex justify-center md:justify-start">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-slate-800 relative">
                    <AvatarFallback className="text-4xl font-bold bg-slate-800 text-teal-500">ST</AvatarFallback>
                  </Avatar>
                  <div className="absolute bottom-4 right-4 bg-teal-600 p-3 rounded-full shadow-xl">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-teal-500 font-bold uppercase tracking-widest text-sm mb-4">Visionary Leadership</h3>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Dr. Samuel Tesfaye</h2>
                <p className="text-xl text-slate-300 mb-8 italic">"Building the future of accessible healthcare in Ethiopia, one patient at a time."</p>
                <p className="text-slate-400 leading-relaxed mb-10 text-lg">
                  Founded by Dr. Samuel Tesfaye, a clinician focused on improving healthcare access and preventive care systems in Ethiopia. His clinical background combined with a passion for fintech led to the creation of Anchor Health Wallet.
                </p>
                <div className="flex gap-4">
                  <Button size="icon" variant="ghost" className="rounded-full bg-slate-800 text-white hover:bg-slate-700">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="rounded-full bg-slate-800 text-white hover:bg-slate-700">
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 max-w-4xl mx-auto">Building the Future of Accessible Healthcare</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Join us in our mission to eliminate financial barriers to health. Whether you're a patient, provider, or partner, there's a place for you.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-7 text-xl rounded-full font-bold shadow-xl shadow-teal-600/20">
              Join Early Access
            </Button>
            <Button variant="outline" className="border-slate-200 text-slate-900 px-10 py-7 text-xl rounded-full font-bold hover:bg-slate-50">
              Request Partnership <ArrowUpRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Internal icon for the avatar badge since I didn't import it at top
import { Activity } from 'lucide-react';