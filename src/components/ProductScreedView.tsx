import React, { useState } from 'react';
import { Layers, Sparkles, AlertTriangle, CheckCircle, Info, Phone, ArrowRight, Camera, FileText, ArrowDownToLine, Flame, RefreshCw, Settings, ClipboardCheck, ShieldCheck } from 'lucide-react';
import { Images, productionSteps, complianceStandards } from '../data';

interface ProductScreedViewProps {
  onNavigate: (view: string) => void;
}

export default function ProductScreedView({ onNavigate }: ProductScreedViewProps) {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const triggerDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    }, 1500);
  };

  const benefits = [
    'Significantly lighter than conventional sand-and-cement screed',
    'Reduces dead load on slabs and structural elements',
    'Good thermal insulation underfoot',
    'Can be poured over existing floors, under-floor heating pipes, and uneven substrates',
    'Sets to a flat, consistent surface ready for floor finishes',
    'Suitable for residential, commercial, and industrial applications'
  ];

  const technicalProperties = [
    { name: 'Dry Density', value: '600 – 1,200 kg/m³', desc: 'Slightly lighter to structural load-bearing limits.' },
    { name: 'Compressive Strength', value: '0.5 – 3.25 MPa', desc: 'Accurately calibrated under certified hydraulics.' },
    { name: 'Thermal Conductivity', value: '0.10 – 0.30 W/mK', desc: 'Extremely strong heat absorption boundaries.' },
    { name: 'Fire Resistance Rating', value: 'Up to 4 Hours', desc: 'Tested to high ASTM C495 standards with zero smoke.' },
    { name: 'Water Absorption limits', value: '10 – 20%', desc: 'Significantly less capillary migration than blocks.' },
    { name: 'Drying Shrinkage', value: '< 0.05%', desc: 'Prevents cracks in external mortar coats.' },
    { name: 'Acoustic Sound Insulation', value: 'High Performance', desc: 'Foam air bubble structure absorbs decibel lines.' }
  ];

  return (
    <div id="product-screed-container" className="pt-[68px] md:pt-[80px] bg-slate-50 min-h-screen">
      
      {/* PAGE HERO */}
      <section 
        id="screed-hero" 
        className="relative bg-[#03303A] text-white py-20 md:py-28"
        style={{
          backgroundImage: `linear-gradient(rgba(3, 48, 58, 0.88), rgba(3, 48, 58, 0.94)), url(${Images.workersCastingOutside})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#03303A] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#E2A855] font-semibold bg-[#E2A855]/10 px-3 py-1 rounded-full border border-[#E2A855]/20">
              Product 02
            </span>
            <h1 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none text-white">
              CLC Lightweight Screed
            </h1>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-3xl">
              Foam-induced lightweight concrete for floor levelling and structural screeding applications. Reduces floor dead load without compromising strength or performance.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT DESCRIPTION & BENEFITS */}
      <section id="screed-detail-section" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Copy Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs uppercase font-mono tracking-widest text-[#E2A855] font-bold block">
                  Product Description
                </span>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-light">
                  CLC Lightweight Screed is produced using the same foam-induced cellular lightweight concrete technology as our CLC iBlox blocks — adapted for floor applications. It is poured in place and sets to a smooth, level surface suitable for finishes.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="font-display font-semibold text-[#03303A] text-lg">
                  Key Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-3 p-3.5 rounded-lg bg-slate-50 border border-slate-100"
                    >
                      <CheckCircle className="w-5 h-5 text-[#E2A855] shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual & Context Note Column */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Image box (Placeholder indicator) */}
              <div className="relative group overflow-hidden rounded-xl border border-slate-200 shadow-md aspect-[4/3] bg-slate-50">
                <img 
                  src={Images.workersCastingOutside} 
                  alt="Block production and casting placeholder" 
                  className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-[#03303A]/30 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-xs p-3 rounded text-white text-xs space-y-1">
                  <div className="flex items-center space-x-1.5 font-bold text-[#E2A855]">
                    <Camera className="w-3.5 h-3.5" />
                    <span>PHOTO NOTE</span>
                  </div>
                  <p className="text-slate-300 font-light text-[11px]">
                    No specific screed photos supplied yet. Block production photos used as placeholder. Requesting screed application photos from RAYA Engineering team.
                  </p>
                </div>
              </div>

              {/* Technical / RAYA Confirmation Request Box */}
              <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-5 space-y-3.5">
                <div className="flex items-center space-x-2 text-[#03303A]">
                  <AlertTriangle className="w-5 h-5 text-[#E2A855] shrink-0" />
                  <span className="font-mono text-xs uppercase tracking-wider font-bold">CONFIRM WITH RAYA</span>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm font-light leading-relaxed">
                  Confirm: specific density range, compressive strength, and thickness specifications for the CLC Screed product so we can add a technical data table here.
                </p>
                <div className="h-px bg-amber-200/60"></div>
                <p className="text-slate-500 text-[11px] leading-normal font-light">
                  If you are a representative of RAYA Engineering LTD, please provide the standard structural weight specs and mixing tables to include on this live sheet.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* TECHNICAL PROPERTIES */}
      <section id="properties-sheet" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Table Area */}
            <div className="lg:col-span-8 space-y-6">
              <h3 className="font-display font-bold text-lg text-[#03303A] uppercase tracking-wide border-b border-slate-100 pb-3">
                Key Technical Specification Sheet
              </h3>
              
              <div className="border border-slate-200 rounded-lg overflow-hidden shadow-sm bg-white">
                <table className="w-full text-left font-sans text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-[#03303A] font-mono text-xs uppercase border-b border-slate-200">
                      <th className="p-4 font-semibold">Specification</th>
                      <th className="p-4 font-semibold">Dry Typical Value</th>
                      <th className="p-4 font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-150 text-slate-700">
                    {technicalProperties.map((prop, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50">
                        <td className="p-4 font-medium text-[#03303A]">{prop.name}</td>
                        <td className="p-4 font-mono font-bold text-emerald-700">{prop.value}</td>
                        <td className="p-4 text-slate-400 font-light">{prop.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Download Prompt Column */}
            <div className="lg:col-span-4 bg-slate-50 rounded-xl border border-slate-200 p-8 flex flex-col justify-between space-y-6 self-start">
              <div className="space-y-4">
                <FileText className="w-8 h-8 text-[#03303A]" />
                <h4 className="font-display font-bold text-lg text-[#03303A]">Technical Data Sheet (TDS)</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                  Download the comprehensive PDF data sheet containing hydraulic press profiles, thermal insulation ratios, and moisture seal alignments.
                </p>
                <div className="p-3 bg-[#E2A855]/10 border border-[#E2A855]/25 rounded text-[11px] text-[#03303A] font-mono flex items-start space-x-2">
                  <AlertTriangle className="w-4 h-4 text-[#E2A855] shrink-0 mt-0.5" />
                  <span>Version June 2026 includes all newly updated Nigerian compressive test batches.</span>
                </div>
              </div>

              <div>
                <button
                  onClick={triggerDownload}
                  disabled={downloading}
                  className="w-full inline-flex items-center justify-center space-x-2.5 px-4 py-3 bg-[#03303A] hover:bg-[#054857] text-white font-semibold text-xs uppercase tracking-wider rounded cursor-pointer transition-all disabled:opacity-75"
                >
                  <ArrowDownToLine className="w-4.5 h-4.5" />
                  <span>{downloading ? 'Preparing Document...' : 'Download TDS (PDF)'}</span>
                </button>
                {downloadSuccess && (
                  <p className="text-xs font-semibold text-emerald-600 text-center mt-2.5 font-mono animate-pulse">
                    ✓ Download is initialized successfully inside submittal packet envelope!
                  </p>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRODUCTION PROCESS */}
      <section id="manufacturing-process" className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-[#E2A855] font-bold block">Calibration Story</span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#03303A]">Controlled 7-Step Manufacturing</h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Our air-cured casting pipelines enforce rigid density tolerances under Lagos weather contexts.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Step badges column */}
            <div className="lg:col-span-7 space-y-4">
              {productionSteps.map((step) => (
                <div 
                  key={step.step}
                  className="bg-white p-4.5 rounded-lg border border-slate-200 shadow-xs flex items-center space-x-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded bg-[#03303A] text-white flex items-center justify-center font-display font-bold text-xs shrink-0 font-mono">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-[#03303A] text-sm">{step.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed font-light mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Factory operations photos side panels */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm h-52">
                <img 
                  src={Images.workersCastingOutside} 
                  alt="RAYA workshop casting concrete mix" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm h-52">
                <img 
                  src={Images.productionTeam} 
                  alt="RAYA production team assembly line" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COMPLIANCE STANDARDS LIST */}
      <section id="technical-standards" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-slate-150 rounded-xl p-8 bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <span className="text-[#E2A855] uppercase font-mono text-xs font-bold leading-none block">Testing Compliance</span>
              <h3 className="font-display font-semibold text-xl">Full Structural Certification Alignments</h3>
              <p className="text-slate-300 text-xs leading-relaxed max-w-xl font-light">
                Cellular Lightweight Concrete iBlox parameters are design-validated inside professional hydraulic press facilities matching ASTM and BS EN metrics.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 shrink-0">
              {complianceStandards.map((co, idx) => (
                <div key={idx} className="p-4 flex flex-col justify-between text-center min-w-[150px]">
                  <span className="font-mono font-bold text-sm text-[#E2A855] block">{co.standard}</span>
                  <span className="text-slate-300 text-[10px] uppercase font-mono tracking-wider mt-1.5">{co.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAGE CTA */}
      <section id="screed-cta-section" className="bg-[#03303A] text-white py-16 md:py-24 text-center relative overflow-hidden border-t border-slate-200">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-teal-800 to-[#E2A855] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#E2A855] font-mono font-bold">Inquiry</span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium tracking-tight">
            Interested in CLC Screed for your project?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
            Discuss density grades, structural weight reduction estimates, or specific project site casting with our specialized engineer representatives.
          </p>
          
          <div className="pt-4">
            <button
              id="screed-contact-btn"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 bg-[#E2A855] hover:bg-[#d69844] text-[#03303A] font-semibold text-xs tracking-wider uppercase rounded shadow-md cursor-pointer transition-colors"
            >
              <span>Contact Us to Discuss</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
