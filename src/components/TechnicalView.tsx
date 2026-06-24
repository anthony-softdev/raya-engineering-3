import React, { useState } from 'react';
import { 
  FileText, ArrowDownToLine, Flame, Sparkles, AlertCircle, RefreshCw, 
  Settings, Layers, ClipboardCheck, ArrowRight, ShieldCheck 
} from 'lucide-react';
import { productionSteps, complianceStandards, Images } from '../data';

export default function TechnicalView() {
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
    <div id="technical-specs-container" className="pt-[68px] md:pt-[80px]">
      
      {/* PAGE INTRO */}
      <section id="technical-intro" className="bg-[#03303A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#E2A855] font-semibold">Technical Data</span>
            <h1 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none text-white">
              Data Sheet & Standards.
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              All the technical specification sheets you require to authorize, specify, or project-cost with Cellular Concrete and architectural GRP elements.
            </p>
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
                  <AlertCircle className="w-4 h-4 text-[#E2A855] shrink-0 mt-0.5" />
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
                  alt="Raya workshop casting concrete mix" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm h-52">
                <img 
                  src={Images.productionTeam} 
                  alt="Raya production team assembly line" 
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

    </div>
  );
}
