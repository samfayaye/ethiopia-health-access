import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Solution } from './components/sections/Solution';
import { Features } from './components/sections/Features';
import { HowItWorks } from './components/sections/HowItWorks';
import { AILayer } from './components/sections/AILayer';
import { Impact } from './components/sections/Impact';
import { Partners } from './components/sections/Partners';
import { Founder } from './components/sections/Founder';
import { CTASection } from './components/sections/CTA';
import { Footer } from './components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-teal-100 selection:text-teal-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <AILayer />
        <Impact />
        <Partners />
        <Founder />
        <CTASection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;