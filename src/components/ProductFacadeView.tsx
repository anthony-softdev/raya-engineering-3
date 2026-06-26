import React from 'react';
import { Layers, ShieldAlert, CheckCircle, Smartphone, MapPin, Grid, Compass, ArrowRight } from 'lucide-react';
import { Images } from '../data';

interface ProductFacadeViewProps {
  onNavigate: (view: string) => void;
}

export default function ProductFacadeView({ onNavigate }: ProductFacadeViewProps) {
  return (
    <div id="product-facade-container" className="pt-[68px] md:pt-[80px]">
      
      {/* PAGE INTRO */}
      <section 
        id="facade-hero" 
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
            <span className="text-xs uppercase font-mono tracking-widest text-[#E2A855] font-semibold">Products 03 & 04</span>
            <h1 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none text-white">
              GRP & GRC Decorative Facade Elements.
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Precision-manufactured decorative facade elements in Glass Reinforced Plastic (GRP) and Glass Reinforced Concrete (GRC). From Islamic geometric screens to classical cornices   we produce architectural detail at scale.
            </p>
          </div>
        </div>
      </section>

      {/* GRP GLASS REINFORCED PLASTIC */}
      <section id="grp-element-section" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 bg-[#03303A]/10 text-[#03303A] font-mono text-xs uppercase font-semibold rounded">
                Product 03
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#03303A] tracking-tight">
                GRP   Glass Reinforced Plastic
              </h2>
              <div className="h-1 w-12 bg-[#E2A855] rounded"></div>
              
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                GRP facade elements are lightweight, weather-resistant architectural panels used for decorative cladding, cornices, columns, and bespoke facade details. GRP is highly mouldable into complex shapes   ideal for projects where intricate design detail is required.
              </p>

              <h3 className="font-display font-bold text-xs uppercase tracking-wider text-[#03303A] pt-2">
                Key Product Benefits:
              </h3>
              <div className="grid grid-cols-2 gap-4 text-xs font-medium text-slate-700 font-mono">
                <span className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Extremely lightweight - easy height rigging</span>
                </span>
                <span className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Highly mouldable into custom details</span>
                </span>
                <span className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Weather & intense solar UV resistant</span>
                </span>
                <span className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Ultra low long-term maintenance cycles</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm h-64">
                <img 
                  src={Images.grpFenceOrnate} 
                  alt="GRP Geometric screens outdoor setup" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm h-64 pt-6">
                <img 
                  src={Images.grpScreenClose} 
                  alt="GRP close ornament pattern detail" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GRC GLASS REINFORCED CONCRETE */}
      <section id="grc-element-section" className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 h-80 lg:h-96 rounded-xl overflow-hidden shadow-md lg:order-last">
              <img 
                src={Images.grpCornerScreen} 
                alt="GRC Decorative screen corner" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 bg-[#E2A855]/15 text-[#03303A] font-mono text-xs uppercase font-semibold rounded border border-[#E2A855]/20">
                Product 04
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#03303A] tracking-tight">
                GRC   Glass Reinforced Concrete
              </h2>
              <div className="h-1 w-12 bg-[#E2A855] rounded"></div>
              
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                GRC facade elements combine the strength and aesthetic of concrete with the lightweight properties of glass-fibre reinforcement. Used for cladding panels, decorative screens, brise-soleil elements, and architectural features   delivering a concrete look at a fraction of cast concrete&apos;s weight.
              </p>

              <h3 className="font-display font-bold text-xs uppercase tracking-wider text-[#03303A] pt-2">
                Key Product Benefits:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-700">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Robust concrete look with minimal structural dead weights</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Durable in extreme coastal or humid tropical climates</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Unmatched structural compressive & flexural rating checks</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Replicates detailed, complex Islamic patterns at massive scale</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE APPLICATIONS */}
      <section id="facade-applications" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#E2A855] font-mono font-bold block">Design Integrations</span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#03303A] tracking-tight">Where GRP & GRC excel.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: 'Brise-Soleil Screens', desc: 'Slashes ambient facade temperatures inside commercial offices and luxury lobbies.' },
              { title: 'Classical Cornices', desc: 'Adds detailed, structural crown highlights and architectural profiles seamlessly.' },
              { title: 'Islamic Geometric Panels', desc: 'Elegant repeating star patterns specialized for palaces, civic sites, or religious environments.' },
              { title: 'Bespoke Column-Covers', desc: 'Protects raw structural cement core pillars under architectural, highly smooth outer molds.' },
              { title: 'Hotel Claddings', desc: 'Delivers a highly clean, modern, repeating facade design, minimizing framework dead weight.' }
            ].map((app, index) => (
              <div key={index} className="p-5 bg-slate-50 border border-slate-200 rounded-lg space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <Grid className="w-5 h-5 text-[#E2A855]" />
                  <h4 className="font-display font-bold text-sm text-[#03303A]">{app.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PAGE CTA */}
      <section className="bg-slate-50 border-t border-slate-200 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#03303A] tracking-tight">
            Looking for decorative facade solutions?
          </h2>
          <p className="text-slate-500 text-sm tracking-wide font-light max-w-xl mx-auto">
            Get in touch with our engineering team to discuss your bespoke architectural layout. We produce custom mockup samples for architect review.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#03303A] hover:bg-[#054857] text-white font-semibold text-xs tracking-wider uppercase rounded shadow-md cursor-pointer transition-colors"
            >
              <span>Contact Us to Discuss</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
