import React, { useState } from 'react';
import { 
  ArrowRight, Check, ShieldCheck, ChevronDown, ChevronUp, Clock, HelpCircle, 
  ArrowRightCircle, Cpu, Award, HardHat, FileCheck 
} from 'lucide-react';
import { 
  credentials, productOverview, engineeringServiceProduct, 
  keyBenefits, gradeClassification, orderingSteps, complianceStandards, fags, Images 
} from '../data';

interface HomeViewProps {
  onNavigate: (view: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const [selectedGrade, setSelectedGrade] = useState('CLC-800 (iBLOX-800)');
  const [faqOpenIdx, setFaqOpenIdx] = useState<string | null>(null);

  const activeGradeDetail = gradeClassification.find(g => g.grade === selectedGrade) || gradeClassification[1];

  const toggleFaq = (id: string) => {
    setFaqOpenIdx(faqOpenIdx === id ? null : id);
  };

  return (
    <div id="home-view-container" className="pt-[68px] md:pt-[80px]">
      
      {/* SECTION 2   HERO */}
      <section 
        id="hero-banner" 
        className="relative bg-[#03303A] text-white py-24 md:py-36 overflow-hidden flex items-center min-h-[85vh]"
        style={{
          backgroundImage: `linear-gradient(rgba(3, 48, 58, 0.8), rgba(3, 48, 58, 0.95)), url(${Images.grpExteriorFacade})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#03303A] via-transparent to-transparent/30 pointer-events-none" />
        
        <div id="hero-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
            
            <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-white">
              Pioneering <span className="text-[#E2A855] font-semibold">Lightweight</span> Construction Solutions.
            </h1>
            
            <p className="text-slate-200 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-light">
              Raya Engineering is a dedicated manufacturing engineering company that provides sustainable building solutions and decorative facade elements. We manufacture Cellular Lightweight Concrete (CLC) blocks, structural level screeds, and GRP/GRC architectural products designed strictly for modern construction   with an active focus on durability, precision, and performance on site.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                id="hero-primary-cta"
                onClick={() => onNavigate('iblox')}
                className="inline-flex items-center justify-center space-x-2.5 px-7 py-4 rounded bg-[#E2A855] hover:bg-[#c99042] text-[#03303A] font-semibold text-sm uppercase tracking-wider transition-all duration-200 shadow-lg cursor-pointer"
              >
                <span>View Our Products</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
              
              <button
                id="hero-secondary-cta"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center space-x-2.5 px-7 py-4 rounded border border-white/30 hover:border-white hover:bg-white/10 text-white font-medium text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer"
              >
                <span>Get a Quote   24h response</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3   TRUST BAR (4 credential tiles in a dark strip below the hero) */}
      <section id="trust-bar" className="bg-[#122f39] border-y border-white/5 py-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {credentials.map((cred, idx) => (
              <div 
                key={idx} 
                id={`cred-tile-${idx}`}
                className={`flex flex-col items-center text-center px-4 ${idx > 1 ? 'pt-6 md:pt-0' : 'pt-0'}`}
              >
                <span className="text-2xl sm:text-3xl font-display font-bold text-[#E2A855] block tracking-tight">
                  {cred.value}
                </span>
                <span className="text-xs sm:text-xs text-slate-300 font-medium tracking-wide uppercase mt-1">
                  {cred.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4   PRODUCT OVERVIEW */}
      <section id="product-overview-section" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#E2A855] font-mono font-bold block">
              Our Products
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#03303A] tracking-tight">
              Built for Modern Construction.
            </h2>
            <div className="h-1 w-16 bg-[#E2A855] mx-auto rounded"></div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Raya Engineering manufactures two complementary product lines   CLC lightweight concrete blocks and decorative GRP/GRC facade elements. Whether you are walling up a structure or finishing a facade, we supply both.
            </p>
          </div>

          {/* 2x2 Grid of standard product categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-10">
            {productOverview.map((item) => (
              <div 
                key={item.id} 
                id={`prod-card-${item.id}`}
                className="group flex flex-col bg-slate-50 border border-slate-150 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-56 relative overflow-hidden bg-slate-200">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-[#03303A] text-white text-[10px] font-mono tracking-wider font-semibold uppercase px-2.5 py-1.5 rounded-full shadow-md">
                    {item.sub.split('  ·  ')[1] || item.sub.split(' · ')[0]}
                  </div>
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-grow space-y-4">
                  <h3 className="font-display font-semibold text-lg text-[#03303A] group-hover:text-[#E2A855] transition-colors">
                    {item.name}
                  </h3>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-semibold border-b border-slate-200 pb-2">
                    {item.sub.split('  ·  ')[0]}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate(item.view)}
                      className="inline-flex items-center space-x-2 text-[#03303A] hover:text-[#E2A855] font-semibold text-xs tracking-wider uppercase cursor-pointer"
                    >
                      <span>{item.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 5th Product Card Spanning Full Width */}
          <div 
            id={`prod-card-full`}
            className="group grid grid-cols-1 lg:grid-cols-12 bg-gradient-to-r from-slate-900 to-[#03303A] text-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="lg:col-span-5 h-64 lg:h-auto min-h-[250px] relative">
              <img 
                src={engineeringServiceProduct.image} 
                alt={engineeringServiceProduct.name}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#03303A]/70 mix-blend-multiply" />
            </div>
            
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E2A855] font-bold">
                Bespoke Structural Services
              </span>
              <h3 className="font-display font-medium text-xl sm:text-2xl text-white">
                {engineeringServiceProduct.name}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {engineeringServiceProduct.description}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#E2A855] hover:bg-[#c99042] text-[#03303A] font-semibold text-xs tracking-wider uppercase rounded shadow-md cursor-pointer transition-colors"
                >
                  <span>{engineeringServiceProduct.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-slate-50 border border-dashed border-slate-300 p-6 rounded-lg text-center text-sm text-slate-600">
            Pricing is based on density grade, custom block sizing specifications, and order production volume. We supply both small and large commercial works. 
            <button 
              onClick={() => onNavigate('contact')} 
              className="text-[#03303A] hover:text-[#E2A855] font-bold underline ml-1 cursor-pointer"
            >
              Request a fast quote from our factory team →
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 5   KEY BENEFITS */}
      <section id="key-benefits-section" className="py-20 md:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left pitch copy */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <span className="text-xs uppercase tracking-widest text-[#E2A855] font-mono font-bold block">
                Why Raya Engineering
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#03303A] tracking-tight">
                What this means on your project.
              </h2>
              <div className="h-1 w-16 bg-[#E2A855] rounded"></div>
              <p className="text-slate-600 leading-relaxed font-light text-sm sm:text-base">
                Our lightweight engineering products perform better, install significantly faster, and cost lower to integrate into structural specifications than conventional sand-cement aggregates.
              </p>
              <div className="bg-white p-5 border border-slate-200 rounded-lg shadow-sm space-y-3">
                <div className="font-semibold text-xs text-[#03303A] uppercase tracking-wider font-mono">
                  Rigorous Quality Checks
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Every product is subjected to certified compressive, weight consistency, and thermal test cycles before loading out of our facility in Nigeria.
                </p>
              </div>
            </div>

            {/* Right side benefits grid (stacked) */}
            <div className="lg:col-span-7 space-y-8">
              {keyBenefits.map((benefit) => (
                <div 
                  key={benefit.number}
                  id={`benefit-block-${benefit.number}`}
                  className="bg-white p-6 md:p-8 rounded-xl border border-slate-100 shadow-sm flex items-start space-x-6 hover:shadow-md transition-shadow"
                >
                  <div className="font-display font-bold text-3xl md:text-4xl text-[#E2A855]/40 tracking-tight leading-none">
                    {benefit.number}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-display font-semibold text-base sm:text-lg text-[#03303A]">
                      {benefit.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed font-light">
                      {benefit.description}
                    </p>
                    {benefit.linkText && benefit.targetView && (
                      <button
                        onClick={() => onNavigate(benefit.targetView!)}
                        className="inline-flex items-center text-xs font-semibold text-[#03303A] hover:text-[#E2A855] transition-colors pt-2 cursor-pointer"
                      >
                        {benefit.linkText}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6   GRADE SELECTOR (Interactive Widget) */}
      <section id="grade-selector-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#E2A855] font-mono font-bold block">
              GRADE GUIDE
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#03303A] tracking-tight">
              Which grade is right for your project?
            </h2>
            <p className="text-slate-500 text-sm">
              Not sure which CLC density to specify? Here is a simple guide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Table Area */}
            <div className="lg:col-span-7 overflow-x-auto">
              <table className="w-full text-left border-collapse border border-slate-100 rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[#03303A] text-white font-mono text-xs uppercase tracking-wider">
                    <th className="p-4">Grade</th>
                    <th className="p-4">Density</th>
                    <th className="p-4">Strength</th>
                    <th className="p-4">Best For</th>
                    <th className="p-4 text-right">Select</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-150">
                  {gradeClassification.map((g) => {
                    const isSelected = selectedGrade === g.grade;
                    return (
                      <tr 
                        key={g.grade}
                        onClick={() => setSelectedGrade(g.grade)}
                        className={`cursor-pointer transition-colors text-sm ${
                          isSelected 
                            ? 'bg-[#03303A]/5 font-semibold text-[#03303A]' 
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <td className="p-4 font-medium">{g.grade}</td>
                        <td className="p-4 font-mono text-xs">{g.density}</td>
                        <td className="p-4 font-mono text-xs text-[#E2A855] font-semibold">{g.strength}</td>
                        <td className="p-4 text-xs text-slate-500 font-light">{g.bestFor}</td>
                        <td className="p-4 text-right">
                          <span className={`inline-block w-4 h-4 rounded-full border-2 transition-colors ${
                            isSelected 
                              ? 'border-[#03303A] bg-[#03303A]' 
                              : 'border-slate-300 bg-white'
                          }`} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Visual Panel reflecting selected option */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 p-8 rounded-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#E2A855]"></span>
                  <span className="text-xs uppercase font-mono text-[#E2A855] tracking-widest font-semibold">Active Specification</span>
                </div>
                
                <h3 className="font-display font-bold text-2xl text-[#03303A]">
                  {activeGradeDetail.grade}
                </h3>
                
                <div className="grid grid-cols-2 gap-4 border-y border-slate-200 py-4 font-mono text-xs">
                  <div>
                    <span className="text-slate-400 block uppercase tracking-wide">Target Density</span>
                    <span className="text-lg font-bold text-[#03303A]">{activeGradeDetail.density}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block uppercase tracking-wide">Compressive Power</span>
                    <span className="text-lg font-bold text-[#E2A855]">{activeGradeDetail.strength}</span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block text-xs uppercase tracking-wide mb-1 font-mono">Best Structural Application</span>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">
                    {activeGradeDetail.bestFor}
                  </p>
                </div>
              </div>

              <div className="pt-2 text-center space-y-3">
                <div className="text-slate-400 text-xs font-mono uppercase tracking-wider font-semibold">Still not sure?</div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3.5 bg-[#03303A] hover:bg-[#054857] text-white font-semibold text-xs uppercase tracking-wider rounded cursor-pointer transition-colors"
                >
                  <span>Ask our team</span>
                  <ArrowRight className="w-4 h-4 text-[#E2A855]" />
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('technical')}
              className="inline-flex items-center space-x-1.5 text-slate-500 hover:text-[#03303A] text-xs font-semibold uppercase tracking-wider font-mono cursor-pointer transition-colors"
            >
              <span>View full technical density standards</span>
              <ArrowRight className="w-4 h-4 text-[#E2A855]" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 7   APPLICATIONS PREVIEW */}
      <section id="applications-preview" className="py-20 md:py-24 bg-[#17383f] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
            <div className="space-y-3 max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-[#E2A855] font-mono font-bold block">
                Applications
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
                Built for every type of project.
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
                From low-rise housing to high-rise towers   our products are used across residential, commercial and industrial construction in Nigeria and West Africa.
              </p>
            </div>
            <div className="shrink-0">
              <button
                onClick={() => onNavigate('applications')}
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded text-xs uppercase tracking-wider font-semibold border border-white/10 cursor-pointer transition-colors"
              >
                <span>Explore applications</span>
                <ArrowRight className="w-4 h-4 text-[#E2A855]" />
              </button>
            </div>
          </div>

          {/* Grid illustrating 6 application types */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Residential Buildings' },
              { num: '02', title: 'Commercial Developments' },
              { num: '03', title: 'Industrial Facilities' },
              { num: '04', title: 'High-Rise Construction' },
              { num: '05', title: 'Load-Bearing Wall Systems' },
              { num: '06', title: 'Non-Load-Bearing Partitions' }
            ].map((app) => (
              <div 
                key={app.num}
                className="bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 p-8 rounded-xl transition-all duration-300 group flex flex-col justify-between h-48"
              >
                <div className="font-display font-bold text-3xl text-[#E2A855]/30 group-hover:text-[#E2A855]/50 transition-colors">
                  {app.num}
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-semibold text-lg text-white group-hover:text-[#E2A855] transition-colors">
                    {app.title}
                  </h4>
                  <div className="w-0 group-hover:w-12 h-0.5 bg-[#E2A855] transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 8   HOW ORDERING WORKS */}
      <section id="ordering-process" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#E2A855] font-mono font-bold block">Logistics Workflow</span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#03303A] tracking-tight">
              Simple to order. Delivered to your site.
            </h2>
            <p className="text-slate-500 text-sm">
              We streamline material supplies across Nigerian states on durable wooden pallets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Horizontal timeline connector */}
            <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-0.5 bg-slate-100 -z-0" />
            
            {orderingSteps.map((step) => (
              <div 
                key={step.step}
                id={`ordering-step-${step.step}`}
                className="relative z-10 flex flex-col items-center text-center space-y-4 px-4 group"
              >
                <div className="w-16 h-16 rounded-full bg-[#03303A]/5 border border-[#03303A]/20 flex items-center justify-center text-[#03303A] font-display font-bold text-lg group-hover:bg-[#E2A855] group-hover:text-[#03303A] group-hover:border-[#E2A855] transition-all duration-350">
                  {step.step}
                </div>
                <h4 className="font-display font-semibold text-base text-[#03303A]">
                  {step.title}
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xs font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 9   STANDARDS */}
      <section id="compliance-standards-section" className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#E2A855] uppercase tracking-wide block">Engineered Quality</span>
              <h3 className="font-display font-medium text-2xl text-[#03303A]">Built to international standards.</h3>
              <p className="text-slate-500 text-xs sm:text-sm font-light">Every CLC iBlox concrete masonry unit is engineered and tested in line with rigorous international safety bodies.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {complianceStandards.map((std, idx) => (
                <div 
                  key={idx}
                  className="bg-white px-5 py-4 rounded border border-slate-200 flex flex-col justify-between shadow-sm min-w-[200px]"
                >
                  <span className="font-mono font-bold text-sm text-[#03303A] block">{std.standard}</span>
                  <span className="text-slate-400 text-[10px] uppercase font-mono tracking-wider block mt-1.5">{std.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10   CTA BAND */}
      <section 
        id="submittal-cta-strip" 
        className="bg-[#03303A] text-white py-16 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(3, 48, 58, 0.9), rgba(3, 48, 58, 0.92)), url(${Images.clcInterlockingHoles})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-[#E2A855] font-mono text-xs font-bold uppercase tracking-widest block">For Engineers & Specifiers</span>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold tracking-tight text-white max-w-2xl mx-auto">
            Need a submittal package or technical data sheet?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            We provide a complete consultant submittal package   technical data sheets, method statements, test certificates, and shop drawings. Sample blocks available on request.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('submittal')}
              className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#E2A855] hover:bg-[#c99042] text-[#03303A] font-semibold text-xs tracking-wider uppercase rounded shadow-lg cursor-pointer transition-colors"
            >
              <span>Request Submittal Package</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 11   FAQ */}
      <section id="faq-section" className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#E2A855] font-mono font-bold block">
              Direct Transparency
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#03303A] tracking-tight">
              Questions buyers ask us.
            </h2>
            <p className="text-slate-500 text-sm">
              Clear technical responses regarding local manufacture and supply chains.
            </p>
          </div>

          <div className="space-y-4">
            {fags.map((faq) => {
              const isOpen = faqOpenIdx === faq.id;
              return (
                <div 
                  key={faq.id}
                  id={`faq-panel-${faq.id}`}
                  className="border border-slate-200 rounded-lg overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex justify-between items-center p-5 text-left bg-slate-50 hover:bg-slate-100/70 transition-colors cursor-pointer"
                  >
                    <span className="font-display font-semibold text-[#03303A] text-sm sm:text-base pr-4 flex items-center space-x-2.5">
                      <HelpCircle className="w-4 h-4 text-[#E2A855] shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                  </button>
                  
                  {isOpen && (
                    <div className="p-5 border-t border-slate-200 bg-white text-[#03303A] text-xs sm:text-sm leading-relaxed font-light">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 12   FOOTER CTA BAND */}
      <section className="bg-slate-50 border-t border-slate-200 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl font-display font-medium text-[#03303A] tracking-tight">Ready to order or need more information?</h2>
          <p className="text-slate-500 text-sm leading-relaxed font-light">Contact the Raya Engineering team. We respond to all technical and distributor enquiries within 24 hours.</p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#03303A] hover:bg-[#054857] text-white font-semibold text-xs uppercase tracking-wider rounded cursor-pointer transition-colors"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
