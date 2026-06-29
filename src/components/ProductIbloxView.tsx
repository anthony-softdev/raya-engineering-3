import React from 'react';
import { Layers, CheckCircle, Table, Compass, Info, Download, FileText, ArrowRight, CornerDownRight } from 'lucide-react';
import { Images } from '../data';

interface ProductIbloxViewProps {
  onNavigate: (view: string) => void;
}

export default function ProductIbloxView({ onNavigate }: ProductIbloxViewProps) {
  const iblox800Sizes = [
    { width: 100, height: 250, length: 510, weightBlock: 11.50, weightSqm: 89.70 },
    { width: 150, height: 250, length: 510, weightBlock: 13.00, weightSqm: 101.40 },
    { width: 200, height: 250, length: 510, weightBlock: 15.50, weightSqm: 120.90 },
    { width: 225, height: 250, length: 510, weightBlock: 16.50, weightSqm: 128.70 }
  ];

  const iblox1000Sizes = [
    { width: 100, height: 250, length: 510, weightBlock: 14.40, weightSqm: 112.20 },
    { width: 150, height: 250, length: 510, weightBlock: 16.30, weightSqm: 126.80 },
    { width: 200, height: 250, length: 510, weightBlock: 19.40, weightSqm: 151.20 },
    { width: 225, height: 250, length: 510, weightBlock: 20.70, weightSqm: 160.90 }
  ];

  const fullDensityClassification = [
    { name: 'CLC-600', density: '600', strength: '0.5', bestFor: 'Partition walls   non-load bearing' },
    { name: 'CLC-800', density: '800', strength: '1.0', bestFor: 'General walling' },
    { name: 'CLC-1000', density: '1,000', strength: '1.75', bestFor: 'Structural / light load-bearing' },
    { name: 'CLC-1200', density: '1,200', strength: '3.25', bestFor: 'Load-bearing walls' }
  ];

  return (
    <div id="product-iblox-page-container" className="pt-[88px] bg-slate-50 min-h-screen">
      
      {/* PAGE HERO */}
      <section 
        id="iblox-hero" 
        className="relative bg-[#03303A] text-white py-20 md:py-28"
        style={{
          backgroundImage: `linear-gradient(rgba(3, 48, 58, 0.88), rgba(3, 48, 58, 0.94)), url(${Images.clcInterlockingHoles})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#03303A] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#E2A855] font-semibold bg-[#E2A855]/10 px-3 py-1 rounded-full border border-[#E2A855]/20">
              Product 01
            </span>
            <h1 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none text-white">
              CLC iBlox   Cellular Lightweight Concrete Blocks.
            </h1>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-3xl">
              Available in four standard widths and two density grades, with custom dimensions on request. Suitable for residential, commercial, and industrial construction across load-bearing and non-load-bearing applications.
            </p>
          </div>
        </div>
      </section>

      {/* iBLOX-800 SPECIFICATIONS */}
      <section id="iblox-800-section" className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#E2A855] font-semibold">
                  Standard Density
                </span>
                <h2 className="text-3xl font-display font-semibold text-[#03303A] tracking-tight">
                  iBLOX-800
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-4 border-y border-slate-100 py-4.5 font-mono text-xs">
                <div>
                  <span className="text-slate-400 block mb-1 uppercase tracking-wider text-[10px]">Density</span>
                  <span className="text-sm font-bold text-[#03303A]">800 kg/m³</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1 uppercase tracking-wider text-[10px]">Strength</span>
                  <span className="text-sm font-bold text-[#03303A]">1.0 MPa</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1 uppercase tracking-wider text-[10px]">Best For</span>
                  <span className="text-sm font-bold text-[#03303A]">General walling</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                A lightweight block for general walling, internal partitions, and non-load-bearing applications. Easy to cut, drill, and chase for MEP services   and faster to install than standard hollow blocks due to the larger block format.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200/80 shadow-xs">
                <h3 className="font-display font-medium text-[#03303A] text-sm uppercase tracking-wider mb-4 flex items-center space-x-2">
                  <Table className="w-4 h-4 text-[#E2A855]" />
                  <span>Available Sizes (iBLOX-800)</span>
                </h3>
                
                <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-slate-100 text-[#03303A] font-mono text-xs uppercase border-b border-slate-200">
                        <th className="p-3 sm:p-4 font-semibold">Width (mm)</th>
                        <th className="p-3 sm:p-4 font-semibold">Height (mm)</th>
                        <th className="p-3 sm:p-4 font-semibold">Length (mm)</th>
                        <th className="p-3 sm:p-4 font-semibold text-right">kg / Block</th>
                        <th className="p-3 sm:p-4 font-semibold text-right">kg / m²</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-mono text-slate-700 text-xs sm:text-sm">
                      {iblox800Sizes.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50">
                          <td className="p-3 sm:p-4 text-slate-900 font-semibold">{row.width}</td>
                          <td className="p-3 sm:p-4">{row.height}</td>
                          <td className="p-3 sm:p-4">{row.length}</td>
                          <td className="p-3 sm:p-4 text-right">{row.weightBlock.toFixed(2)}</td>
                          <td className="p-3 sm:p-4 text-right font-bold text-[#03303A]">{row.weightSqm.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* iBLOX-1000 SPECIFICATIONS */}
      <section id="iblox-1000-section" className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-6 lg:order-last">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#E2A855] font-semibold">
                  Structural Density
                </span>
                <h2 className="text-3xl font-display font-semibold text-[#03303A] tracking-tight">
                  iBLOX-1000
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-4 border-y border-slate-200 py-4.5 font-mono text-xs">
                <div>
                  <span className="text-slate-400 block mb-1 uppercase tracking-wider text-[10px]">Density</span>
                  <span className="text-sm font-bold text-[#03303A]">1,000 kg/m³</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1 uppercase tracking-wider text-[10px]">Strength</span>
                  <span className="text-sm font-bold text-[#03303A]">1.75 MPa</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1 uppercase tracking-wider text-[10px]">Best For</span>
                  <span className="text-sm font-bold text-[#03303A]">Structural use</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                A higher-density block for structural and light load-bearing walls. Greater compressive strength while remaining significantly lighter than standard hollow blocks.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-xs">
                <h3 className="font-display font-medium text-[#03303A] text-sm uppercase tracking-wider mb-4 flex items-center space-x-2">
                  <Table className="w-4 h-4 text-[#E2A855]" />
                  <span>Available Sizes (iBLOX-1000)</span>
                </h3>
                
                <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-slate-100 text-[#03303A] font-mono text-xs uppercase border-b border-slate-200">
                        <th className="p-3 sm:p-4 font-semibold">Width (mm)</th>
                        <th className="p-3 sm:p-4 font-semibold">Height (mm)</th>
                        <th className="p-3 sm:p-4 font-semibold">Length (mm)</th>
                        <th className="p-3 sm:p-4 font-semibold text-right">kg / Block</th>
                        <th className="p-3 sm:p-4 font-semibold text-right">kg / m²</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-mono text-slate-700 text-xs sm:text-sm">
                      {iblox1000Sizes.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50">
                          <td className="p-3 sm:p-4 text-slate-900 font-semibold">{row.width}</td>
                          <td className="p-3 sm:p-4">{row.height}</td>
                          <td className="p-3 sm:p-4">{row.length}</td>
                          <td className="p-3 sm:p-4 text-right">{row.weightBlock.toFixed(2)}</td>
                          <td className="p-3 sm:p-4 text-right font-bold text-[#03303A]">{row.weightSqm.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FULL DENSITY CLASSIFICATION */}
      <section id="full-classification-section" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E2A855] font-semibold block">Spectrum</span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#03303A] tracking-tight">
              Full Density Classification
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light">
              We offer standard density variants for complete architectural flexibility.
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white max-w-4xl mx-auto mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-[#03303A] text-white font-mono text-xs uppercase">
                    <th className="p-4 font-semibold">Class</th>
                    <th className="p-4 font-semibold">Density (kg/m³)</th>
                    <th className="p-4 font-semibold">Strength (MPa)</th>
                    <th className="p-4 font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-slate-700 text-xs sm:text-sm">
                  {fullDensityClassification.map((cls, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="p-4 text-[#03303A] font-bold">{cls.name}</td>
                      <td className="p-4">{cls.density}</td>
                      <td className="p-4 text-emerald-600 font-semibold">{cls.strength} MPa</td>
                      <td className="p-4 text-slate-600">{cls.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Design Note */}
          <div className="max-w-4xl mx-auto bg-amber-50/60 border border-amber-200/60 rounded-xl p-5 flex items-start space-x-3.5">
            <Info className="w-5 h-5 text-[#E2A855] shrink-0 mt-0.5" />
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-light">
              <strong className="font-semibold text-slate-800">Design Note:</strong> Custom block sizes are available on request. All blocks are delivered on high-strength wooden pallets to be returned after use.
            </p>
          </div>

        </div>
      </section>

      {/* INTERLOCKING CAPABILITY */}
      <section id="interlocking-capability" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            <div className="lg:col-span-6">
              <div className="relative group overflow-hidden rounded-xl border border-slate-200 shadow-md aspect-[4/3] bg-white">
                <img 
                  src={Images.clcInterlockingHoles} 
                  alt="CLC Stacked Blocks with interlocking holes" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#03303A] text-white text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                  Interlocking Holes
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-2">
                <span className="text-xs uppercase font-semibold font-mono tracking-wider text-[#E2A855]">
                  Architectural Precision
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#03303A] tracking-tight">
                  Interlocking Capability
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                CLC iBlox features an interlocking profile that improves wall alignment and bonding during installation   reducing excess mortar and helping bricklayers work faster with less adjustment.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <span className="inline-flex items-center space-x-1.5 text-xs font-mono font-medium text-[#03303A] bg-[#03303A]/5 border border-[#03303A]/10 px-3.5 py-2 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Self-Aligning Voids</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 text-xs font-mono font-medium text-[#03303A] bg-[#03303A]/5 border border-[#03303A]/10 px-3.5 py-2 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Minimum Joint Mortar</span>
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EASE OF CHASING */}
      <section id="ease-of-chasing" className="py-16 md:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 lg:order-last">
              <div className="relative group overflow-hidden rounded-xl border border-slate-200 shadow-md aspect-[4/3] bg-white">
                <img 
                  src={Images.rayaWorkerYellow} 
                  alt="Workability of CLC blocks on site" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#03303A] text-white text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                  MEP Chasing
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-2">
                <span className="text-xs uppercase font-semibold font-mono tracking-wider text-[#E2A855]">
                  Site Engineering
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#03303A] tracking-tight">
                  Ease of Chasing
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                CLC iBlox cuts neatly for electrical conduit and plumbing without crumbling. Quick installation. Clean and neat finish at every stage.
              </p>

              <div className="space-y-2.5 font-light text-slate-600 text-xs sm:text-sm">
                <div className="flex items-center space-x-2.5">
                  <CornerDownRight className="w-4 h-4 text-[#E2A855]" />
                  <span>Sawn smoothly using common handsaws or wall chasers</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CornerDownRight className="w-4 h-4 text-[#E2A855]" />
                  <span>Durable material cellular composition blocks fracturing propagation</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CornerDownRight className="w-4 h-4 text-[#E2A855]" />
                  <span>Eliminates massive waste chunks typical of sand blocks</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PAGE CTA */}
      <section id="iblox-cta-section" className="bg-[#03303A] text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-teal-800 to-[#E2A855] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#E2A855] font-mono font-bold">Project Integration</span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium tracking-tight">
            Ready to specify CLC iBlox on your project?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
            Get physical block specimens, technical submittals, or order details from our Lagos headquarters. Download our compliance data below.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <button
              id="iblox-submittal-btn"
              onClick={() => onNavigate('submittal')}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#E2A855] hover:bg-[#d69844] text-[#03303A] font-semibold text-xs tracking-wider uppercase rounded shadow-md cursor-pointer transition-colors"
            >
              <span>Request a Submittal Package</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button
              id="iblox-technical-btn"
              onClick={() => onNavigate('technical')}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 border border-white/20 hover:bg-white/10 text-white font-semibold text-xs tracking-wider uppercase rounded cursor-pointer transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Technical Data Sheet</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
