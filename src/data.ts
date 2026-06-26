/**
 * Webcopy content for Raya Engineering LTD based on Version 3 Q&A updates. All photos mapped correctly.
 */

// Import actual product/site images from our production assets folder
import img_clc_blocks_stacked from './assets/images/clc_blocks_stacked_1782223805516.jpg';
import img_grp_exterior_facade from './assets/images/grp_exterior_facade_1782223827105.jpg';
import img_clc_vs_hollow from './assets/images/clc_vs_hollow_1782223846417.jpg';
import img_raya_worker_yellow from './assets/images/raya_worker_yellow_1782223865303.jpg';
import img_workers_casting_outside from './assets/images/workers_casting_outside_1782223884051.jpg';

export const Images = {
  grpCornerScreen: img_grp_exterior_facade, // Ornate screen panel
  grpFenceOrnate: img_grp_exterior_facade,   // Geometric screen panel white
  grpScreenClose: img_grp_exterior_facade,   // Close up of pattern
  grpExteriorFacade: img_grp_exterior_facade, // Circular pattern facade on building
  clcBlocksStacked: img_clc_blocks_stacked, // Standard stacks under storage
  rayaWorkerYellow: img_raya_worker_yellow, // Block stacks and worker back view
  clcInterlockingHoles: img_clc_blocks_stacked, // Stacks showing holes
  clcVsHollow: img_clc_vs_hollow,         // CLC iBlox vs standard hollow block side-by-side
  blueMouldsStacked: img_workers_casting_outside, // Stack of blue moulds
  castBlocksMouldsFresh: img_workers_casting_outside, // Fresh concrete mix in blue moulds
  workersCastingOutside: img_workers_casting_outside, // workers casting in vests
  productionTeam: img_raya_worker_yellow,   // workers in yellow vests working with moulds
  teamMouldsWorking: img_workers_casting_outside // raya team working outdoors
};

// Trust Bar Credentials
export const credentials = [
  { value: 'ISO 9001', label: 'Quality management systems' },
  { value: 'Up to 40%', label: 'Lighter than hollow blocks' },
  { value: '4-Hour', label: 'Fire resistance rating' },
  { value: '2 Years', label: 'Manufacturing in Nigeria' }
];

// Product overview cards data
export const productOverview = [
  {
    id: 'clc-iblox',
    name: 'CLC iBlox   Lightweight Blocks',
    sub: '800 kg/m³ & 1,000 kg/m³  ·  100mm–225mm width',
    description: 'Cellular Lightweight Concrete blocks for load-bearing and non-load-bearing walls. Up to 40% lighter than hollow blocks.',
    cta: 'View Specs',
    image: Images.clcInterlockingHoles,
    view: 'iblox'
  },
  {
    id: 'clc-screed',
    name: 'CLC Lightweight Screed',
    sub: 'Foam-induced lightweight concrete',
    description: 'Structural level screed for floor levelling and lightweight screeding applications. Reduces floor dead load without compromising performance.',
    cta: 'View Specs',
    image: Images.castBlocksMouldsFresh,
    view: 'screed'
  },
  {
    id: 'grp-facade',
    name: 'GRP Decorative Facade Elements',
    sub: 'Glass Reinforced Plastic',
    description: 'Lightweight architectural panels for cladding, cornices, columns, and bespoke facade details. Mouldable into complex shapes.',
    cta: 'View Products',
    image: Images.grpFenceOrnate,
    view: 'facade-elements'
  },
  {
    id: 'grc-facade',
    name: 'GRC Decorative Facade Elements',
    sub: 'Glass Reinforced Concrete',
    description: 'Concrete strength and aesthetic at a fraction of the weight. Used for cladding panels, screens, and architectural features.',
    cta: 'View Products',
    image: Images.grpExteriorFacade,
    view: 'facade-elements'
  }
];

// 5th product full width card info
export const engineeringServiceProduct = {
  id: 'engineering-services',
  name: 'Engineering Services & Custom Construction Solutions',
  sub: 'Bespoke solutions for projects with unique requirements',
  description: 'We provide custom construction solutions and engineering services for projects that require something beyond our standard product range. Contact us to discuss your specific requirements.',
  cta: 'Discuss Your Requirements',
  image: Images.teamMouldsWorking,
  view: 'contact'
};

// Key Benefits Lists
import { Benefit } from './types';
export const keyBenefits: Benefit[] = [
  {
    number: '01',
    title: 'Reduce Your Structural Costs',
    description: 'CLC blocks cut dead load by up to 30–40% compared to hollow blocks. Lighter walls mean leaner foundations, lighter steel, and real savings on your project budget.',
    linkText: 'See full technical data →',
    targetView: 'technical'
  },
  {
    number: '02',
    title: 'Cut Installation Time',
    description: 'Larger block format means fewer blocks per square metre   faster laying, less handling, and less time on site without cutting quality.',
  },
  {
    number: '03',
    title: 'Better Building Performance',
    description: 'Superior thermal and acoustic insulation. Fire resistance up to 4 hours, tested to ASTM C495 and BS EN 771. Test certificates in our submittal package.',
    linkText: 'Request submittal package →',
    targetView: 'submittal'
  },
  {
    number: '04',
    title: 'Easy to Work With on Site',
    description: 'CLC iBlox cuts, drills, and chases cleanly for electrical, plumbing, and mechanical services. Less breakage, less waste, neater finish.',
  }
];

// Grade classification selector
import { Grade } from './types';
export const gradeClassification: Grade[] = [
  {
    grade: 'CLC-600',
    density: '600 kg/m³',
    strength: '0.5 MPa',
    bestFor: 'Partition walls   non-load bearing'
  },
  {
    grade: 'CLC-800 (iBLOX-800)',
    density: '800 kg/m³',
    strength: '1.0 MPa',
    bestFor: 'General walling'
  },
  {
    grade: 'CLC-1000 (iBLOX-1000)',
    density: '1,000 kg/m³',
    strength: '1.75 MPa',
    bestFor: 'Structural / light load-bearing'
  },
  {
    grade: 'CLC-1200',
    density: '1,200 kg/m³',
    strength: '3.25 MPa',
    bestFor: 'Load-bearing walls'
  }
];

// Application Types with descriptions and images
import { ApplicationItem } from './types';
export const applicationTiles: ApplicationItem[] = [
  {
    id: 'residential',
    title: 'Residential Buildings',
    description: 'CLC iBlox is ideal for housing developments, apartment blocks, and private homes. Lightweight blocks make handling easier on site, while thermal and acoustic performance creates more comfortable living spaces. GRP and GRC elements add architectural detail to residential frontages.',
    image: Images.clcBlocksStacked
  },
  {
    id: 'commercial',
    title: 'Commercial Developments',
    description: 'Office buildings, retail, hotels, and mixed-use developments benefit from the structural efficiency of CLC blocks. Reduced dead load means lighter frames and lower build costs on multi-storey commercial projects. GRC/GRP is used for decorative facade cladding.',
    image: Images.grpCornerScreen
  },
  {
    id: 'industrial',
    title: 'Industrial Facilities',
    description: 'Warehouses, factories, and storage facilities. CLC iBlox installs quickly and handles MEP chasing cleanly in large-format industrial builds.',
    image: Images.clcInterlockingHoles
  },
  {
    id: 'high-rise',
    title: 'High-Rise Construction',
    description: 'In tall buildings, reducing dead load is critical at every level. CLC cuts wall weight by up to 40%   reducing cumulative load on every slab, column, and foundation.',
    image: Images.grpExteriorFacade
  },
  {
    id: 'load-bearing',
    title: 'Load-Bearing Wall Systems',
    description: 'CLC-1000 and CLC-1200 grades are suitable for structural wall applications with strong compressive strength at lighter weight than conventional masonry.',
    image: Images.clcVsHollow
  },
  {
    id: 'non-load-bearing',
    title: 'Non-Load-Bearing Partitions',
    description: 'CLC-600 for internal partitions   light, easy to cut, simple to chase, with a smooth finish that takes plaster or paint directly.',
    image: Images.rayaWorkerYellow
  }
];

// How ordering works steps
export const orderingSteps = [
  {
    step: '1',
    title: 'Request a Quote',
    description: 'Tell us your grade, sizes, and quantities. We respond with pricing within 24 hours.'
  },
  {
    step: '2',
    title: 'Confirm Your Order',
    description: 'Once you are happy with the quote, confirm and we agree a delivery schedule directly.'
  },
  {
    step: '3',
    title: 'Delivered to Your Site',
    description: 'Blocks delivered on wooden pallets across Nigeria. We arrange pallet collection after delivery.'
  }
];

// Compliance standards
import { ComplianceStandard } from './types';
export const complianceStandards: ComplianceStandard[] = [
  {
    standard: 'ASTM C495',
    description: 'Compressive strength of lightweight insulating concrete'
  },
  {
    standard: 'BS EN 771',
    description: 'Specification for masonry units'
  },
  {
    standard: 'ISO 9001',
    description: 'Quality management systems'
  }
];

// FAQs
import { FAQItem } from './types';
export const fags: FAQItem[] = [
  {
    id: 'aac',
    question: 'How does CLC compare to AAC blocks?',
    answer: 'Both are foam-based lightweight concrete blocks. The key difference is production   AAC requires an autoclave (high-pressure steam curing), while CLC is air-cured. This makes CLC more accessible and cost-effective to manufacture locally in Nigeria without sacrificing performance.'
  },
  {
    id: 'moq',
    question: 'What is the minimum order quantity?',
    answer: 'We supply both small and large projects. Please request a quote or contact our sales team with your specific requirements and we will advise on availability and lead times.'
  },
  {
    id: 'delivery',
    question: 'How long does delivery take?',
    answer: 'Our standard lead times and coverage areas depend on the order volume and project requirements. Once your order is confirmed, we coordinate a professional delivery schedule directly with your site manager.'
  },
  {
    id: 'damaged',
    question: 'What if blocks arrive damaged?',
    answer: 'Every batch is quality-checked before despatch. If blocks arrive damaged or outside specification, contact us immediately and we will arrange a replacement.'
  },
  {
    id: 'samples',
    question: 'Can I get a sample before placing an order?',
    answer: 'Yes. Sample blocks are available on request to qualified engineers, developers, and consultants. Contact us to arrange.'
  },
  {
    id: 'intl',
    question: 'Do you supply outside Nigeria?',
    answer: 'We currently supply across Nigeria. For projects in other West African countries, contact us to discuss your requirements and we will advise on logistics.'
  }
];

// iBLOX sizing data tables
export const iblox800Sizes = [
  { width: 100, height: 250, length: 510, weightBlock: 11.50, weightSqm: 89.70 },
  { width: 150, height: 250, length: 510, weightBlock: 13.00, weightSqm: 101.40 },
  { width: 200, height: 250, length: 510, weightBlock: 15.50, weightSqm: 120.90 },
  { width: 225, height: 250, length: 510, weightBlock: 16.50, weightSqm: 128.70 }
];

export const iblox1000Sizes = [
  { width: 100, height: 250, length: 510, weightBlock: 14.40, weightSqm: 112.20 },
  { width: 150, height: 250, length: 510, weightBlock: 16.30, weightSqm: 126.80 },
  { width: 200, height: 250, length: 510, weightBlock: 19.40, weightSqm: 151.20 },
  { width: 225, height: 250, length: 510, weightBlock: 20.70, weightSqm: 160.90 }
];

// Comparison table CLC vs Hollow Blocks
import { ComparisonRow } from './types';
export const comparisonTable: ComparisonRow[] = [
  { criteria: 'Weight', clc: 'Lightweight', hollow: 'Heavy' },
  { criteria: 'Structural Load', clc: 'Low', hollow: 'High' },
  { criteria: 'Thermal Insulation', clc: 'High', hollow: 'Low' },
  { criteria: 'Installation Speed', clc: 'Fast', hollow: 'Moderate' },
  { criteria: 'Workability', clc: 'Easy', hollow: 'Difficult' },
  { criteria: 'Energy Efficiency', clc: 'High', hollow: 'Low' },
  { criteria: 'Fire Resistance', clc: 'Up to 4 hours', hollow: 'Lower' },
  { criteria: 'Sound Insulation', clc: 'High', hollow: 'Moderate' }
];

// Production process steps
export const productionSteps = [
  { step: '1', title: 'Material Batching', desc: 'Cement, water, and additives are accurately measured and prepared.' },
  { step: '2', title: 'Foam Generation', desc: 'Stable foam produced using a calibrated foam generator.' },
  { step: '3', title: 'Mixing', desc: 'Foam blended with cement slurry to reach target density.' },
  { step: '4', title: 'Casting', desc: 'Mixture poured into moulds in the required block dimensions.' },
  { step: '5', title: 'Setting & Demolding', desc: 'Blocks removed from moulds after initial curing.' },
  { step: '6', title: 'Curing', desc: 'Water curing ensures full compressive strength development.' },
  { step: '7', title: 'Final Inspection', desc: 'Every batch goes through quality checks before delivery.' }
];

// Installation steps
export const installationProcessSteps = [
  { title: 'Material Pouring', desc: 'Precision-measured foam concrete is poured directly into rigid interlocking steel casts.', image: Images.castBlocksMouldsFresh },
  { title: 'Demolding & Inspection', desc: 'Cured iBlox are pulled from blueprints ready to reveal structural alignment voids.', image: Images.blueMouldsStacked },
  { title: 'Uniform Stacking', desc: 'Perfected air-cured specimens are high-density layered, waiting for transit safety checks.', image: Images.clcInterlockingHoles },
  { title: 'On-Site Integration', desc: 'Precision laying by site engineering team, speeding up structural development cleanly.', image: Images.workersCastingOutside }
];
