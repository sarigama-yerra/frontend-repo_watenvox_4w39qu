import React from 'react';

const CTA = () => {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600 p-8 md:p-12 text-white">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">See FactoryFlow Poly in action</h3>
              <p className="mt-4 text-white/90">
                Get a personalized walkthrough for your extrusion, printing, lamination, slitting, and pouching lines. We’ll map the modules to your exact workflow.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/90">
                <span className="rounded-full bg-white/15 px-3 py-1">Live Telemetry & OEE</span>
                <span className="rounded-full bg-white/15 px-3 py-1">Role-based Access</span>
                <span className="rounded-full bg-white/15 px-3 py-1">QC & Non-Conformance</span>
              </div>
            </div>

            <form className="rounded-2xl bg-white p-4 text-gray-900 shadow-xl">
              <div className="grid gap-3 md:grid-cols-2">
                <input className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Name" />
                <input type="email" className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Work Email" />
                <input className="md:col-span-2 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Company" />
                <input className="md:col-span-2 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Phone" />
                <button type="button" className="md:col-span-2 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700">Request Demo</button>
              </div>
              <p className="mt-3 text-xs text-gray-500">By submitting, you agree to be contacted about FactoryFlow Poly.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
