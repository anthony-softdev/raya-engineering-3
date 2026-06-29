import React from 'react';
import { ArrowRight, Building, Layers, Sparkles, Layout, Compass, ShieldCheck } from 'lucide-react';
import { Images } from '../data';

interface ProductsViewProps {
  onNavigate: (view: string) => void;
}

export default function ProductsView({ onNavigate }: ProductsViewProps) {
  const products = [
    {
      num: '01',
      title: 'CLC iBlox',
      category: 'Lightweight Blocks',
      description: 'Cellular Lightweight Concrete interlocking blocks in 100mm, 150mm, 200mm and 225mm widths. Density grades from 600 to 1,200 kg/m³.',
      image: Images.clcBlocksStacked,
      targetView: 'iblox',
      cta: 'View product details',
      badge: 'Bestseller'
    },
    {
      num: '02',
      title: 'CLC Lightweight Screed',
      category: 'Floor Screeding',
      description: 'Foam-induced lightweight concrete poured in place for structural floor levelling. Significantly lighter than conventional sand-and-cement screed.',
      image: Images.workersCastingOutside,
      targetView: 'screed',
      cta: 'View product details',
      badge: 'Highly Efficient'
    },
    {
      num: '03',
      title: 'GRP Decorative Facade',
      category: 'Glass Reinforced Plastic',
      description: 'Lightweight, weather-resistant architectural panels   highly mouldable into complex shapes for cladding, cornices and columns.',
      image: Images.grpExteriorFacade,
      targetView: 'facade-elements',
      cta: 'View product details',
      badge: 'Architectural'
    },
    {
      num: '04',
      title: 'GRC Decorative Facade',
      category: 'Glass Reinforced Concrete',
      description: 'Concrete strength and aesthetic at a fraction of the weight. Cladding panels, screens, brise-soleil and architectural features.',
      image: Images.grpExteriorFacade, // GRC and GRP are architectural facades
      targetView: 'facade-elements',
      cta: 'View product details',
      badge: 'High Durability'
    },
    {
      num: '05',
      title: 'Engineering Services & Custom Construction Solutions',
      category: 'Custom Fabrication',
      description: 'We provide custom construction solutions and engineering services for projects that require something beyond our standard product range.',
      image: Images.teamMouldsWorking || Images.workersCastingOutside,
      targetView: 'contact',
      cta: 'Discuss your requirements',
      badge: 'Bespoke'
    }
  ];

  return (
    <div id="products-page-container" className="pt-[88px]">
      
      {/* PAGE HERO */}
      <section 
        id="products-hero" 
        className="relative bg-[#03303A] text-white py-20 md:py-28"
        style={{
          backgroundImage: `linear-gradient(rgba(3, 48, 58, 0.90), rgba(3, 48, 58, 0.96)), url(${Images.clcBlocksStacked})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#03303A] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#E2A855] font-semibold">PRODUCTS</span>
            <h1 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none text-white">
              Engineered for modern construction.
            </h1>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
              Five product lines covering structural walling, floor systems and architectural facades   all manufactured to international standards.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS DIRECTORY SECTION */}
      <section id="products-directory-section" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-16 md:space-y-24">
            {products.map((prod, index) => {
              const isEven = index % 2 === 1;
              return (
                <div 
                  key={prod.num}
                  id={`product-row-${prod.num}`}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center border-b border-slate-100 pb-12 md:pb-16 last:border-0 last:pb-0`}
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative group overflow-hidden rounded-xl border border-slate-200/80 shadow-md aspect-[4/3] bg-slate-100">
                      <img 
                        src={prod.image} 
                        alt={prod.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-[#03303A] text-white text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                        {prod.category}
                      </div>
                      <div className="absolute bottom-4 right-4 bg-white/95 text-[#03303A] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
                        {prod.badge}
                      </div>
                    </div>
                  </div>

                  {/* Copy Column */}
                  <div className={`lg:col-span-7 flex flex-col justify-center space-y-4 md:space-y-5 ${isEven ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <span className="font-mono text-4xl md:text-5xl font-extrabold text-[#E2A855]/20 leading-none">
                        {prod.num}
                      </span>
                      <div className="h-px bg-slate-200 flex-grow"></div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs uppercase font-semibold font-mono tracking-wider text-[#E2A855]">
                        {prod.category}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#03303A] tracking-tight">
                        {prod.title}
                      </h2>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                      {prod.description}
                    </p>

                    <div className="pt-2">
                      <button
                        id={`product-btn-${prod.num}`}
                        onClick={() => onNavigate(prod.targetView)}
                        className="inline-flex items-center space-x-2 text-[#03303A] hover:text-[#E2A855] font-semibold text-sm transition-colors duration-200 cursor-pointer group"
                      >
                        <span>{prod.cta}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE RAYA CONCRETE SOLUTIONS */}
      <section id="products-value-prop" className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#E2A855] font-mono font-bold block">The Raya Standard</span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#03303A] tracking-tight">Precision Manufacturing, Exceptional Performance</h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light max-w-2xl mx-auto">
              All architectural paneling and lightweight concrete products are subjected to multi-phase compliance testing before project loading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6.5 rounded-xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="p-2.5 bg-[#03303A]/5 text-[#03303A] rounded-lg w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-medium text-slate-800 text-base">Tested Compression</h3>
              <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                From lightweight screed mixtures to interlocking load-bearing block grades, we guarantee structural ratings on density ranges.
              </p>
            </div>

            <div className="bg-white p-6.5 rounded-xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="p-2.5 bg-[#03303A]/5 text-[#03303A] rounded-lg w-fit">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-display font-medium text-slate-800 text-base">Perfected Alignment</h3>
              <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                Interlocking block cavities are cured in steel molds ensuring tight tolerances, which drastically slashes plaster costs.
              </p>
            </div>

            <div className="bg-white p-6.5 rounded-xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="p-2.5 bg-[#03303A]/5 text-[#03303A] rounded-lg w-fit">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-display font-medium text-slate-800 text-base">Architectural Freedom</h3>
              <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                Our bespoke decorative panels (GRP & GRC) give architects full styling freedom, bypassing heavy structural loads.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
