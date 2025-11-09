import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const steps = [
  'Customer Inquiry',
  'Discussion & Requirement Finalization',
  'Design Request',
  'Design Revision & Approval',
  'Cylinder Creation / Rework',
  'Work Order Creation',
  'Production Workflow',
  'Quality Check & Final Inspection',
  'Dispatch & Delivery',
];

const ProcessFlow = () => {
  return (
    <section id="process" className="relative bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">End-to-end process, mapped to your floor</h2>
            <p className="mt-4 text-gray-600">
              From inquiry to dispatch, every handoff is digital, auditable, and visible in real time. No manual chasing, no data loss.
            </p>

            <div className="mt-8 space-y-4">
              {steps.map((step, idx) => (
                <div key={step} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-800">{step}</span>
                  {idx < steps.length - 1 && <ArrowRight className="ml-2 h-4 w-4 text-gray-400" />}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-indigo-50 via-violet-50 to-sky-50 p-6">
              <div className="grid h-full w-full grid-cols-3 grid-rows-3 gap-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="rounded-lg bg-white/80 p-3 shadow-sm">
                    <div className="h-full w-full rounded-md bg-gradient-to-br from-indigo-100 to-violet-100" />
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Visual planners for jobs, shifts, and machine loads. Drag-and-drop sequencing with capacity checks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
