import React from 'react';
import { Layers, Sparkles, AlertTriangle, CheckCircle, Info, Phone, ArrowRight, Camera } from 'lucide-react';
import { Images } from '../data';

interface ProductScreedViewProps {
  onNavigate: (view: string) => void;
}

export default function ProductScreedView({ onNavigate }: ProductScreedViewProps) {
  const benefits = [
    'Significantly lighter than conventional sand-and-cement screed',
    'Reduces dead load on slabs and structural elements',
    'Good thermal insulation underfoot',
    'Can be poured over existing floors, under-floor heating pipes, and uneven substrates',
    'Sets to a flat, consistent surface ready for floor finishes',
    'Suitable for residential, commercial, and industrial applications'
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
              CLC Lightweight Screed.
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
                  CLC Lightweight Screed is produced using the same foam-induced cellular lightweight concrete technology as our CLC iBlox blocks   adapted for floor applications. It is poured in place and sets to a smooth, level surface suitable for finishes.
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
                    No specific screed photos supplied yet. Block production photos used as placeholder. Requesting screed application photos from Raya Engineering team.
                  </p>
                </div>
              </div>

              {/* Technical / Raya Confirmation Request Box */}
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
                  If you are a representative of Raya Engineering LTD, please provide the standard structural weight specs and mixing tables to include on this live sheet.
                </p>
              </div>

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
