import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import ModulesShowcase from './components/ModulesShowcase';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <FeatureGrid />
      <ModulesShowcase />
      <CTA />
      <footer className="border-t border-gray-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} FactoryFlow Poly. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#modules" className="hover:text-gray-900">Modules</a>
            <a href="#highlights" className="hover:text-gray-900">Why Poly</a>
            <a href="#cta" className="hover:text-gray-900">Request Demo</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
