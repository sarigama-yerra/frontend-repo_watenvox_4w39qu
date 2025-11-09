import React from 'react';
import { ClipboardList, Palette, Disc, Factory, CalendarClock, Warehouse, Users2, Settings2 } from 'lucide-react';

const modules = [
  { icon: ClipboardList, name: 'CRMS', desc: 'Capture inquiries, log discussions, send quotes & approvals.' },
  { icon: Palette, name: 'Design', desc: 'Artwork requests, revisions, proofing & design freeze.' },
  { icon: Disc, name: 'Cylinder', desc: 'Track new & rework cylinders with proofing cycles.' },
  { icon: Factory, name: 'Work Orders', desc: 'Structured stages: Extrusion → Printing → Lamination → Slitting → Pouching → Packaging → Dispatch.' },
  { icon: CalendarClock, name: 'Jobs & Planning', desc: 'Shift & machine planning with capacity view and calendars.' },
  { icon: Warehouse, name: 'Inventory', desc: 'Material requests, POs, GRN with QC holds, lots & transfers.' },
  { icon: Users2, name: 'HRMS', desc: 'Employee master, attendance basics, departments & deductions.' },
  { icon: Settings2, name: 'Systems', desc: 'Roles, permissions, templates, locations, audit logs.' },
];

const ModulesShowcase = () => {
  return (
    <section id="modules" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Modules & Capabilities</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A complete suite for flexible packaging and polylamination factories. Pick what you need and grow over time.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map(({ icon: Icon, name, desc }) => (
            <div key={name} className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-violet-50 p-3 text-violet-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesShowcase;
