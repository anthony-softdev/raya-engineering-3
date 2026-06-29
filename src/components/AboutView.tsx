import React from 'react';
import { Target, Eye, ShieldAlert, CheckSquare, Sparkles, Award } from 'lucide-react';
import { Images } from '../data';

export default function AboutView() {
  return (
    <div id="about-us-container" className="pt-[88px]">
      
      {/* PAGE INTRO (HERO) */}
      <section 
        id="about-hero" 
        className="relative bg-[#03303A] text-white py-20 md:py-28"
        style={{
          backgroundImage: `linear-gradient(rgba(3, 48, 58, 0.85), rgba(3, 48, 58, 0.95)), url(${Images.productionTeam})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#03303A] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#E2A855] font-semibold">About Raya Engineering</span>
            <h1 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none text-white">
              Pioneering Lightweight Construction Solutions.
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              A dedicated manufacturing engineering company providing sustainable building solutions and decorative facade elements for modern construction across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section id="company-story-section" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#E2A855] font-mono font-bold block">Who We Are</span>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#03303A] tracking-tight">Our Origin & Purpose.</h2>
              <div className="h-1 w-12 bg-[#E2A855] rounded"></div>
              
              <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-light">
                <p>
                  <strong className="text-[#03303A] font-semibold">Raya Engineering LTD</strong> is a dedicated manufacturing engineering company that provides sustainable building solutions and decorative facade elements. We manufacture Cellular Lightweight Concrete (CLC) blocks, structural level screeds, and GRP/GRC architectural products designed strictly for modern construction   with an active focus on durability, precision, and performance on site.
                </p>
                <p>
                  We have been in business for <strong className="text-[#03303A] font-semibold">two years</strong>, and in that time we have supplied contractors, real estate developers, construction companies, and distributors across Nigeria   with the capacity to reach wider across West Africa.
                </p>
                <p>
                  We are not a general building materials middleman or general supplier. We specialise exclusively in lightweight concrete manufacturing and architectural fiber-glass engineering, ensuring every block and screen goes through thorough tests before loading.
                </p>
              </div>
            </div>

            {/* Visual Grid representing Stacked Blocks comparison */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm h-48 sm:h-64">
                  <img 
                    src={Images.clcBlocksStacked} 
                    alt="Finished blocks storage" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm h-40">
                  <img 
                    src={Images.blueMouldsStacked} 
                    alt="Casting steel moulds" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm h-40">
                  <img 
                    src={Images.castBlocksMouldsFresh} 
                    alt="Wet concrete mixture in molds" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm h-48 sm:h-64">
                  <img 
                    src={Images.clcInterlockingHoles} 
                    alt="Interlocking CLC blocks" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR PRODUCT RANGE */}
      <section id="about-product-range" className="py-16 md:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#E2A855] font-mono font-bold">Comprehensive Capabilities</span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#03303A] tracking-tight">What We Make & Supply.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: 'CLC iBlox Blocks', text: 'Cellular Lightweight Concrete interlocking blocks in 100mm, 150mm, 200mm, and 225mm widths.' },
              { title: 'Lightweight Screed', text: 'Foam-induced lightweight concrete poured on site for perfect structural level screeding.' },
              { title: 'GRP Facades', text: 'Glass Reinforced Plastic architectural cladding and highly complex customized panels.' },
              { title: 'GRC Elements', text: 'Glass Reinforced Concrete screens, columns, and cornices combining durability with classical designs.' },
              { title: 'Engineering Services', text: 'Bespoke design, engineering, and custom construction solutions for unique site specifications.' }
            ].map((line, index) => (
              <div 
                key={index} 
                className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded bg-[#03303A]/5 flex items-center justify-center font-display font-extrabold text-[#03303A] text-sm">
                    {index + 1}
                  </div>
                  <h4 className="font-display font-bold text-sm text-[#03303A]">
                    {line.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    {line.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section id="mission-vision-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-12`}>
            
            {/* Mission */}
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 flex items-start space-x-5 shadow-sm">
              <div className="p-3 bg-[#03303A] text-[#E2A855] rounded-lg shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="font-display font-bold text-lg text-[#03303A] uppercase tracking-wide">Our Mission</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  To become a leading provider of innovative and sustainable lightweight construction materials across Nigeria and the wider West African region.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 flex items-start space-x-5 shadow-sm">
              <div className="p-3 bg-[#03303A] text-[#E2A855] rounded-lg shrink-0">
                <Eye className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="font-display font-bold text-lg text-[#03303A] uppercase tracking-wide">Our Vision</h3>
                <ul className="space-y-2.5 text-slate-600 text-sm font-light">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#E2A855] rounded-full"></span>
                    <span>Deliver high-quality engineered product runs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#E2A855] rounded-full"></span>
                    <span>Support efficient, speedy structural methods on site</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#E2A855] rounded-full"></span>
                    <span>Provide reliable engineering services and partner support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#E2A855] rounded-full"></span>
                    <span>Promote sustainable, energy-efficient building solutions</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY RAYA ENGINEERING */}
      <section id="why-raya-about" className="py-16 md:py-20 bg-[#0e272c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-[#E2A855] font-bold block">Why Partner With Us</span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">Uncompromising Structural Integrity</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Submittal Package Ready', text: 'Full consultant submittal package (test reviews, statements of work, method descriptions) available immediately.' },
              { title: 'Bespoke Size Customization', text: 'Custom block thicknesses and dimensions produced flexibly to meet structural architect blueprints.' },
              { title: 'Code Compliant & Tested', text: 'Every manufacturing batch is engineered to line up with BS EN, ASTM, and quality-tested standards.' },
              { title: 'Serving Core West Africa', text: 'Supply logistics covering major construction hubs in Nigeria, with active regional shipping programs.' },
              { title: '2 Years Dedicated Factory Experience', text: 'Two full years of specialized material research and block production in Nigeria, resulting in maximum workability.' }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <CheckSquare className="w-5 h-5 text-[#E2A855]" />
                  <h4 className="font-display font-bold text-sm text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
