import React, { useState } from 'react';
import { 
  Building, LayoutGrid, CheckCircle, ArrowRight, Layers, HelpCircle, 
  Construction, Grid, MapPin, Compass 
} from 'lucide-react';
import { applicationTiles, installationProcessSteps, Images } from '../data';

interface ApplicationsViewProps {
  onNavigate: (view: string) => void;
}

export default function ApplicationsView({ onNavigate }: ApplicationsViewProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'blocks' | 'facade'>('all');

  const filteredApplications = applicationTiles.filter(tile => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'blocks') {
      return ['residential', 'industrial', 'load-bearing', 'non-load-bearing'].includes(tile.id);
    }
    if (activeFilter === 'facade') {
      return ['commercial', 'high-rise'].includes(tile.id);
    }
    return true;
  });

  return (
    <div id="applications-container" className="pt-[88px]">
      
      {/* PAGE INTRO */}
      <section 
        id="applications-hero" 
        className="relative bg-[#03303A] text-white py-16 md:py-24"
        style={{
          backgroundImage: `linear-gradient(rgba(3, 48, 58, 0.85), rgba(3, 48, 58, 0.95)), url(${Images.grpExteriorFacade})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#03303A] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#E2A855] font-semibold">Real-world Sites</span>
            <h1 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none text-white">
              Sectors & Applications.
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Raya Engineering products are used across a wide range of construction projects in Nigeria and West Africa. From low-rise housing to high-rise towers to ornate facade projects   our CLC blocks and GRP/GRC elements perform on every type of build.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER BUTTONS & 6 APPLICATION SECTORS */}
      <section id="applications-sectors" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Subtitle & Filter Headers */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-[#E2A855]">Interactive Explorer</span>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#03303A]">The 6 Primary Application Sectors</h2>
            </div>
            
            <div className="flex bg-slate-100 p-1.5 rounded-lg border border-slate-200">
              {[
                { label: 'All Sectors', id: 'all' },
                { label: 'CLC Blockwork', id: 'blocks' },
                { label: 'GRP & GRC Facades', id: 'facade' }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setActiveFilter(btn.id as any)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide uppercase rounded cursor-pointer transition-all ${
                    activeFilter === btn.id 
                      ? 'bg-[#03303A] text-white shadow-md' 
                      : 'text-slate-600 hover:text-[#03303A]'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout containing filtered products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredApplications.map((tile) => (
              <div 
                key={tile.id}
                id={`app-sector-${tile.id}`}
                className="group flex flex-col bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-shadow"
              >
                <div className="h-48 relative overflow-hidden bg-slate-200 shrink-0">
                  <img 
                    src={tile.image} 
                    alt={tile.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-[#03303A]/20 pointer-events-none" />
                </div>
                <div className="p-6 flex flex-col flex-grow space-y-3">
                  <h3 className="font-display font-semibold text-lg text-[#03303A]">
                    {tile.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light flex-grow">
                    {tile.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INSTALLATION SEQUENCE WALKTHROUGH */}
      <section id="installation-walkthrough" className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs uppercase font-mono text-[#E2A855] font-bold block">Production to Site Sequence</span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#03303A] tracking-tight">The Casting-to-Installation Flow</h2>
            <div className="h-1 w-12 bg-[#E2A855] mx-auto rounded mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {installationProcessSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="h-40 relative bg-slate-150">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-[#03303A] text-[#E2A855] flex items-center justify-center font-display font-bold text-xs font-mono">
                    {idx + 1}
                  </div>
                </div>
                <div className="p-5 flex-grow space-y-1.5">
                  <h4 className="font-display font-bold text-sm text-[#03303A]">{step.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* COMPLETED PROJECTS SUMMARY */}
      <section id="completed-projects-showcase" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-[#E2A855] font-bold block">Nigeria Portfolio</span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#03303A] tracking-tight">Featured Architectural Highlights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Project Card 1 */}
            <div className="group rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 flex flex-col md:flex-row">
              <div className="md:w-1/2 h-56 md:h-auto min-h-[220px] relative">
                <img 
                  src={Images.grpExteriorFacade} 
                  alt="GRC Islamic structural screens" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-101 transition-transform"
                />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <span className="flex items-center space-x-1 text-[#E2A855] font-mono text-[10px] uppercase font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Lagos State, Nigeria</span>
                  </span>
                  <h4 className="font-display font-bold text-base text-[#03303A] leading-tight">GRP Architectural Cladding</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    Large-scale architectural facade project using intricate, weather-resistant GRP geometric screens on mixed-use builds, completed across 2025/2026 scheduling.
                  </p>
                </div>
                <div className="text-[11px] font-mono font-medium uppercase text-[#03303A] tracking-wide border-t border-slate-200 pt-2.5">
                  Product: GRP Facade Cladding
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 flex flex-col md:flex-row">
              <div className="md:w-1/2 h-56 md:h-auto min-h-[220px] relative">
                <img 
                  src={Images.grpCornerScreen} 
                  alt="GRC geometric repeating screens" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-101 transition-transform"
                />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <span className="flex items-center space-x-1 text-[#E2A855] font-mono text-[10px] uppercase font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Abuja Central, Nigeria</span>
                  </span>
                  <h4 className="font-display font-bold text-base text-[#03303A] leading-tight">GRC Islamic Screen Facade</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    A beautiful combination of high-strength structural concrete aesthetic with a fraction of heavy cast weight, completed on civic palatial designs.
                  </p>
                </div>
                <div className="text-[11px] font-mono font-medium uppercase text-[#03303A] tracking-wide border-t border-slate-200 pt-2.5">
                  Product: GRC Screen Facade
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center bg-slate-50 border border-slate-200 rounded-lg p-6 max-w-2xl mx-auto text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
            Note: Further customized site configurations or specific client references can be inquired directly from our factory engineering staff.
            <button 
              onClick={() => onNavigate('contact')} 
              className="text-[#03303A] hover:text-[#E2A855] font-bold block sm:inline ml-1 underline cursor-pointer"
            >
              Discuss your specific architecture blueprint →
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
