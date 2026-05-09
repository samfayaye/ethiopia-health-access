import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, MapPin, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-32 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/20">
                <span className="text-white font-black text-2xl">A</span>
              </div>
              <span className="text-white font-black text-2xl tracking-tighter uppercase">
                Anchor Health <span className="text-teal-400">Wallet</span>
              </span>
            </div>
            <p className="text-slate-400 mb-12 leading-relaxed text-xl max-w-md">
              AI-enabled healthcare financing platform based in Addis Ababa, Ethiopia. Ensuring no patient is turned away due to financial barriers.
            </p>
            <div className="flex gap-6">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-black text-white mb-8 uppercase tracking-widest text-sm">Platform</h4>
            <ul className="space-y-6">
              {['How it Works', 'AI Risk Model', 'For Hospitals', 'For Patients'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-teal-400 font-bold transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-black text-white mb-8 uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-6">
              {['About Us', 'Careers', 'Partnerships', 'Legal'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-teal-400 font-bold transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-black text-white mb-8 uppercase tracking-widest text-sm">Headquarters</h4>
            <ul className="space-y-8">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-teal-500 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-black text-white">Addis Ababa, Ethiopia</div>
                  <div className="text-slate-400 text-sm mt-1">Bole Road, Africa Avenue</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-teal-500 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-black text-white">Email Us</div>
                  <div className="text-slate-400 text-sm mt-1">hello@anchorhealth.et</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-500 font-bold text-sm">
            © {new Date().getFullYear()} Anchor Health Wallet. Built with pride in Ethiopia.
          </div>
          <div className="flex gap-10 text-sm font-bold">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};