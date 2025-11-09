import React from 'react';
import { ShieldCheck, CheckSquare, Boxes, Users, Cog, Activity } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Traceable & Secure',
    desc: 'Version control, approvals, and audit logs keep data accurate and accountable.'
  },
  {
    icon: Boxes,
    title: 'End-to-End Coverage',
    desc: 'From CRM to Dispatch – one connected system across departments.'
  },
  {
    icon: Users,
    title: 'Team Aligned',
    desc: 'Role-based access with workflows for design, cylinders, production, and QC.'
  },
  {
    icon: Activity,
    title: 'Live Insights',
    desc: 'Real-time KPIs, OEE, and performance analytics to drive productivity.'
  },
  {
    icon: CheckSquare,
    title: 'Mandatory QC',
    desc: 'Stage-wise quality checks with holds, non-conformance, and releases.'
  },
  {
    icon: Cog,
    title: 'Flexible & Modular',
    desc: 'Adapts to extrusion, printing, lamination, slitting, pouching & packaging.'
  }
];

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-2xl border border-gray-200/60 bg-white p-6 shadow-sm transition hover:shadow-md">
    <div className="flex items-start gap-4">
      <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{desc}</p>
      </div>
    </div>
  </div>
);

const FeatureGrid = () => {
  return (
    <section id="highlights" className="relative bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Why FactoryFlow Poly instead of paper and manual processes?
          </h2>
          <p className="mt-4 text-gray-600">
            Move from scattered registers and endless WhatsApp follow-ups to a single live system. Get speed,
            accuracy, and full lifecycle traceability from design to dispatch.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
