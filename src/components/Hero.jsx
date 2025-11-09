import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Top Navigation */}
        <div className="mx-auto w-full max-w-7xl px-6 pt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center">
              <Rocket className="h-5 w-5 text-indigo-600" />
            </div>
            <span className="text-white/95 font-semibold tracking-tight text-lg">FactoryFlow Poly</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#modules" className="hover:text-white transition">Modules</a>
            <a href="#process" className="hover:text-white transition">Process</a>
            <a href="#highlights" className="hover:text-white transition">Why Poly</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#demo" className="text-white/90 hover:text-white transition">Docs</a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-600 transition"
            >
              <PlayCircle className="h-4 w-4" />
              Request Demo
            </a>
          </div>
        </div>

        {/* Hero Copy */}
        <div className="mx-auto mt-12 flex w-full max-w-7xl flex-1 items-center px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              End-to-end factory operations platform for polylamination & flexible packaging
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/85 leading-relaxed">
              Replace registers, manual approvals, and scattered spreadsheets with one connected
              system. Plan jobs, allocate machines, control quality, and track dispatch in real time.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-medium text-gray-900 shadow-lg hover:shadow-xl transition"
              >
                Get a Live Demo
              </a>
              <a
                href="#highlights"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur hover:bg-white/20 transition"
              >
                Explore Features
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-white/80 text-sm">
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Real-time dashboards</span>
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sky-400" /> Mandatory QC checkpoints</span>
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-indigo-400" /> Role-based access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
