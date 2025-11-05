'use client';

import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import Background3D from '@/components/Background3D';

export default function Home() {
  return (
    <>
      <Background3D />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}
