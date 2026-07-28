import React from 'react';
import { 
  Building, ShieldCheck, Flame, Zap, Wind, Hammer, VolumeX, HelpCircle, 
  ArrowRight, Landmark, Download, Check 
} from 'lucide-react';
import { comparisonTable, Images } from '../data';

interface WhyClcViewProps {
  onNavigate: (view: string) => void;
}

export default function WhyClcView({ onNavigate }: WhyClcViewProps) {
  const advantages = [
    {
      num: '01',
      title: 'Reduce Your Structural Costs',
      desc: 'CLC iBlox reduces dead load by up to 30–40% compared to hollow blocks, based on density at equivalent wall thickness. Lighter walls mean leaner foundations, lighter steel, and real savings on your project budget.',
      icon: <Building className="w-5 h-5" />
    },
    {
      num: '02',
      title: 'Better Thermal Performance',
      desc: 'Excellent insulation properties reduce heat transfer through walls. Buildings stay cooler in hot weather and warmer in cool conditions — lower energy costs over the lifetime of the building.',
      icon: <Wind className="w-5 h-5" />
    },
    {
      num: '03',
      title: 'Faster to Build With',
      desc: 'Larger block format means fewer blocks per square metre. Fewer blocks means faster laying, less handling, and less time on site. Your team gets more done without cutting quality.',
      icon: <Zap className="w-5 h-5" />
    },
    {
      num: '04',
      title: 'Fire Resistant up to 4 Hours',
      desc: 'Non-combustible material with fire resistance of up to 4 hours, tested to ASTM C495 and BS EN 771. Suitable for buildings with strict fire safety requirements. Test certificates available on request.',
      icon: <Flame className="w-5 h-5" />
    },
    {
      num: '05',
      title: 'Strong Acoustic Performance',
      desc: 'The cellular structure of CLC blocks reduces sound transmission through walls and floors — quieter buildings for the people inside, whether apartments, offices, or hotel rooms.',
      icon: <VolumeX className="w-5 h-5" />
    },
    {
      num: '06',
      title: 'More Sustainable Carbon Footprint',
      desc: 'CLC production uses fewer natural aggregates than conventional concrete — less quarrying, less energy, and a lower environmental impact. A strong choice for projects targeting green building standards.',
      icon: <Landmark className="w-5 h-5" />
    },
    {
      num: '07',
      title: 'Easy to Work With on Site',
      desc: 'CLC iBlox cuts, drills, and chases cleanly for electrical, plumbing, and mechanical services. Minimises breakage and waste, and gives trades a neater finish at every stage of the build.',
      icon: <Hammer className="w-5 h-5" />
    }
  ];

  return (
    <div id="why-clc-container" className="pt-[68px] md:pt-[80px]">
      
      {/* PAGE INTRO */}
      <section id="why-clc-intro" className="bg-[#03303A] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-[#E2A855] text-xs font-mono font-bold uppercase tracking-widest block">Structural Advantages</span>
            <h1 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none text-white">
              Why CLC Blocks?
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              CLC blocks offer real, measurable advantages over standard hollow blocks — in cost, in time, and in the quality of what you build. Here is what that means on your project.
            </p>
          </div>
        </div>
      </section>

      {/* 7 KEY ADVANTAGES LIST */}
      <section id="seven-advantages" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E2A855]">Analytical Breakdown</span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#03303A]">The 7 Major Technical Advantages</h2>
            <div className="h-1 w-12 bg-[#E2A855] mx-auto rounded mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv) => (
              <div 
                key={adv.num}
                id={`why-adv-${adv.num}`}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8 space-y-4 hover:shadow-md transition-shadow relative"
              >
                <div className="absolute top-4 right-4 text-3xl font-display font-extrabold text-[#E2A855]/20 font-mono">
                  {adv.num}
                </div>
                <div className="w-10 h-10 rounded bg-[#03303A] text-white flex items-center justify-center">
                  {adv.icon}
                </div>
                <h3 className="font-display font-semibold text-[#03303A] text-base leading-tight">
                  {adv.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* COMPACT COMPARATIVE ANALYSIS */}
      <section id="clc-vs-hollow" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-[#E2A855] font-bold block">Spec comparison</span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#03303A]">CLC iBlox vs Conventional Hollow Blocks</h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Cross-spec analysis profiling structural load differentials on multi-story foundations.</p>
          </div>

          <div className="max-w-3xl mx-auto border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
            <table className="w-full text-left font-sans text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[#03303A] text-white font-mono text-xs uppercase tracking-wide border-b border-slate-250">
                  <th className="p-4">Criteria</th>
                  <th className="p-4">CLC iBlox</th>
                  <th className="p-4">Conventional Hollow Blocks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 text-slate-700">
                {comparisonTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="p-4 font-semibold text-[#03303A]">{row.criteria}</td>
                    <td className="p-4 font-mono font-medium text-emerald-700">{row.clc}</td>
                    <td className="p-4 text-slate-400 font-mono text-xs">{row.hollow}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* PAGE CTA */}
      <section className="bg-white border-t border-slate-200 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#03303A] tracking-tight">
            Ready to specify CLC iBlox?
          </h2>
          <p className="text-slate-500 text-sm tracking-wide font-light max-w-xl mx-auto">
            Request a complete consultant submittal package — everything your technical contractor team needs to approve and proceed with CLC materials on site.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('submittal')}
              className="inline-flex items-center space-x-2.5 px-6 py-3.5 bg-[#03303A] hover:bg-[#054857] text-white font-semibold text-xs tracking-wider uppercase rounded shadow-md cursor-pointer transition-colors"
            >
              <span>Request Submittal Package</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
