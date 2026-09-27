import React, { useState } from 'react';
import { MaterialSpec } from '../types';

interface ProductsPageProps {
  onOpenRfq: (platform?: string) => void;
  onOpenSample: () => void;
  onNavigateToCustomizer: () => void;
}

export const carbonMaterials: MaterialSpec[] = [
  {
    id: '24k',
    name: '24K Spread Tow Carbon',
    shortDesc: 'Ultra-stiff aerospace weave for maximum ball exit velocity & explosive power',
    fullDesc: 'Ultra-high modulus spread-tow fabric with 24,000 filaments per tow flattened into ultra-thin ribbons. Yields superior surface stiffness, razor-sharp response, and unmatched smash energy transfer.',
    rigidity: 9.8,
    power: 9.6,
    control: 8.2,
    fiberType: 'Torayca® Spread Tow HM 24K',
    core: 'High-Density EVA Pro 28',
    profile: '38mm Competition Monocoque',
    molds: ['Diamond Attack Pro', 'Teardrop Aggressive'],
    tensileModulus: '240 GPa'
  },
  {
    id: '18k',
    name: '18K Carbon Weave',
    shortDesc: 'The gold standard for World Padel Tour pros, balancing high-impact rebound & crisp feel',
    fullDesc: 'Bi-axial 18,000 filament carbon weave engineered with low-viscosity epoxy resin infusion. Delivers surgical control on aerial volleys without compromising backcourt drive pace.',
    rigidity: 9.0,
    power: 8.9,
    control: 8.8,
    fiberType: 'Toray T700/T800 Carbon Weave',
    core: 'Dual-Density Multi-EVA',
    profile: '38mm Pro Tournament',
    molds: ['Teardrop Precision', 'Diamond Hybrid'],
    tensileModulus: '230 GPa'
  },
  {
    id: '12k',
    name: '12K Carbon Matrix',
    shortDesc: 'Smooth progressive stiffness with expanded sweet-spot for elite defensive and offensive balance',
    fullDesc: 'Interwoven 12K carbon fiber offering exceptional acoustic feedback and predictable ball rebound. The most versatile competition layup for versatile players and premium brand flagships.',
    rigidity: 8.3,
    power: 8.1,
    control: 9.2,
    fiberType: 'Toray T700 12K Woven Matrix',
    core: 'Black Medium EVA 17',
    profile: '38mm All-Rounder',
    molds: ['Round Control Master', 'Teardrop Precision'],
    tensileModulus: '215 GPa'
  },
  {
    id: '3k',
    name: '3K Carbon Twill',
    shortDesc: 'High flexural resilience, velvet ball feel, and superior sweet-spot forgiveness',
    fullDesc: 'Classic 3K aerospace-grade twill weave that allows progressive flex upon ball pocketing. Ideal for pinpoint drop shots, directional defensive lobs, and arm-friendly damping.',
    rigidity: 7.4,
    power: 7.2,
    control: 9.6,
    fiberType: 'Aviation-Spec 3K Carbon Twill',
    core: 'Soft Elastic EVA 13',
    profile: '38mm Comfort & Control',
    molds: ['Round Control Master', 'Beach Tennis Pro'],
    tensileModulus: '200 GPa'
  },
  {
    id: 'raw-t700',
    name: 'Raw Toray T700 Carbon (Pickleball)',
    shortDesc: 'Micro-textured raw carbon face with extreme spin friction coefficient for USAPA pro paddles',
    fullDesc: 'Naturally textured peel-ply raw Toray T700 carbon fiber surface engineered for maximum grit retention under intense topspin and backspin friction testing.',
    rigidity: 8.6,
    power: 8.4,
    control: 9.4,
    fiberType: 'Raw Unidirectional Toray T700',
    core: '16mm Polypropylene Honeycomb Core',
    profile: '16mm Control / 14mm Power',
    molds: ['Tour Elongated Paddle', 'Widebody Control Paddle'],
    tensileModulus: '230 GPa'
  },
  {
    id: 'kevlar-hybrid',
    name: 'Carbon-Kevlar® Aramid Hybrid',
    shortDesc: 'Unmatched fracture resistance & acoustic damping for high-impact durability',
    fullDesc: 'Co-woven composite combining high-modulus carbon strands with DuPont™ Kevlar® aramid fibers. Dampens 48% more harmonic vibration to protect against player elbow strain.',
    rigidity: 7.8,
    power: 7.6,
    control: 9.1,
    fiberType: 'Carbon-Aramid 50/50 Cross-Twill',
    core: 'Silicone-Damped EVA Pro',
    profile: '38mm Vibration Dampening Spec',
    molds: ['Teardrop Precision', 'Round Arm-Friendly'],
    tensileModulus: '190 GPa'
  }
];

interface ProductPlatform {
  id: string;
  category: 'padel' | 'pickleball' | 'beach-tennis' | 'components';
  title: string;
  moldShape: string;
  badge: string;
  weight: string;
  thickness: string;
  balance: string;
  core: string;
  faceOptions: string[];
  description: string;
  moq: string;
  leadTime: string;
  imageUrl: string;
  sweetSpot: string;
  specRatings: { power: number; control: number; maneuverability: number };
}

const productPlatforms: ProductPlatform[] = [
  {
    id: 'padel-diamond-24k',
    category: 'padel',
    title: 'Diamond Attack Pro 24K',
    moldShape: 'Diamond Mold / High Balance',
    badge: 'Flagship Power',
    weight: '365g - 375g (±2.5g)',
    thickness: '38mm Competition',
    balance: '270 - 275mm (Head Heavy)',
    core: 'High-Density EVA Pro 28 or Dual-Core',
    faceOptions: ['24K Spread Tow', '18K Carbon', 'Alutex Metallic'],
    description: 'Engineered for tournament smashes and aggressive net play. Reinforced tubular carbon bridge with aerodynamic perimeter vents for lightning swing-speed.',
    moq: '200 Units / model',
    leadTime: '4 - 5 Weeks',
    imageUrl: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80',
    sweetSpot: 'Top / Head Zone (Aggressive)',
    specRatings: { power: 9.8, control: 8.2, maneuverability: 8.5 }
  },
  {
    id: 'padel-teardrop-18k',
    category: 'padel',
    title: 'Teardrop Precision 18K',
    moldShape: 'Teardrop Mold / Medium-High Balance',
    badge: 'Pro All-Rounder',
    weight: '360g - 370g (±2.5g)',
    thickness: '38mm Competition',
    balance: '265mm (Neutral-High)',
    core: 'Black Medium EVA 17 with Memory Flex',
    faceOptions: ['18K Carbon', '12K Carbon', 'Carbon-Kevlar Hybrid'],
    description: 'The definitive competition standard. Symmetrical aerodynamic throat reduces air vortex turbulence by 14% while retaining massive torsional rigidity.',
    moq: '200 Units / model',
    leadTime: '4 - 5 Weeks',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80',
    sweetSpot: 'Central-Upper Extended',
    specRatings: { power: 9.0, control: 9.0, maneuverability: 9.1 }
  },
  {
    id: 'padel-round-12k',
    category: 'padel',
    title: 'Round Control Master 12K',
    moldShape: 'Round Mold / Low Balance',
    badge: 'Maximum Control',
    weight: '355g - 365g (±2.5g)',
    thickness: '38mm Competition',
    balance: '255 - 260mm (Handle Balance)',
    core: 'Soft Elastic EVA 13 with Vibra-Stop core',
    faceOptions: ['12K Carbon', '3K Carbon', 'Fiberglass Hybrid'],
    description: 'Massive enlarged sweet spot designed for surgical defensive rallies, fast hand exchanges, and effortless maneuverability at the net.',
    moq: '200 Units / model',
    leadTime: '3 - 4 Weeks',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    sweetSpot: 'Oversized Exact Center',
    specRatings: { power: 7.9, control: 9.8, maneuverability: 9.7 }
  },
  {
    id: 'pickle-tour-t700',
    category: 'pickleball',
    title: 'Tour Thermoformed Raw Carbon T700',
    moldShape: 'Elongated Pro (16.5" x 7.5")',
    badge: 'USAPA Compliant',
    weight: '225g - 235g (7.9 - 8.3 oz)',
    thickness: '16mm Control / 14mm Power',
    balance: '240mm Tuned Swingweight',
    core: 'Polypropylene Honeycomb with Foam Injection Edges',
    faceOptions: ['Toray T700 Raw Carbon', '3K Twill Carbon', 'Titanium Mesh Weave'],
    description: 'Full unibody thermoformed construction with carbon-sealed perimeter walls and high-density foam injection for maximum perimeter stability and massive twist weight.',
    moq: '250 Units / model',
    leadTime: '4 - 5 Weeks',
    imageUrl: 'https://images.unsplash.com/photo-1626244431908-164e29b12204?auto=format&fit=crop&w=800&q=80',
    sweetSpot: 'Uniform Edge-to-Edge Response',
    specRatings: { power: 9.1, control: 9.3, maneuverability: 8.9 }
  },
  {
    id: 'pickle-widebody-12k',
    category: 'pickleball',
    title: 'Widebody Hyper-Spin 12K',
    moldShape: 'Widebody Standard (16" x 8")',
    badge: 'Defensive Reset',
    weight: '220g - 230g (7.8 - 8.1 oz)',
    thickness: '16mm Soft Touch',
    balance: '235mm Low Swingweight',
    core: '16mm HexCore Honeycomb + Vibration Gel',
    faceOptions: ['12K Carbon Matrix', 'Raw T700', 'Frosted Spin Coating'],
    description: 'Expanded paddle width offers maximum blocking consistency, rapid soft kitchen resets, and forgiving off-center mishit protection.',
    moq: '250 Units / model',
    leadTime: '3 - 4 Weeks',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    sweetSpot: 'Maximum Surface Area',
    specRatings: { power: 8.0, control: 9.7, maneuverability: 9.5 }
  },
  {
    id: 'beach-tennis-3k',
    category: 'beach-tennis',
    title: 'Beach Tennis Pro Carbon 3K',
    moldShape: 'Aero-Perforated 50cm Monocoque',
    badge: 'Sand Circuit Spec',
    weight: '320g - 335g (±3g)',
    thickness: '20mm / 22mm Profile',
    balance: '260mm Dynamic Play',
    core: 'Pro Soft EVA 15 Ultra-Rebound',
    faceOptions: ['Full 3K Carbon', '12K Spread Weave', 'High-Grit Quartz Silica'],
    description: 'Engineered with 28 aerodynamic laser-cut perimeter wind ports and industrial-grade high-grit quartz silica finish for devastating ocean-breeze spin.',
    moq: '200 Units / model',
    leadTime: '4 Weeks',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    sweetSpot: 'Upper Center Kinetic',
    specRatings: { power: 8.9, control: 9.0, maneuverability: 9.2 }
  },
  {
    id: 'comp-tubular-chassis',
    category: 'components',
    title: 'Monocoque Tubular Carbon Frames',
    moldShape: 'Custom Hollow Tubular Layup',
    badge: 'Structural OEM',
    weight: 'Internal Reinforcement',
    thickness: 'Variable wall 0.8mm - 1.4mm',
    balance: 'Precision Pre-Preg Infused',
    core: 'Nitrogen Bladder Expanded',
    faceOptions: ['High-Strength 3K Pre-preg', 'Uni-Directional Carbon 400gsm'],
    description: 'Pre-preg carbon frame skeletons supplied to global brand assembly lines. Ultra-consistent wall thickness verified via ultrasonic non-destructive testing.',
    moq: '500 Units / run',
    leadTime: '3 Weeks',
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    sweetSpot: 'Structural Integrity',
    specRatings: { power: 9.5, control: 9.5, maneuverability: 9.0 }
  }
];

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onOpenRfq,
  onOpenSample,
  onNavigateToCustomizer,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialSpec>(carbonMaterials[0]);
  const [comparedProducts, setComparedProducts] = useState<string[]>(['padel-diamond-24k', 'padel-teardrop-18k']);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = productPlatforms.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.faceOptions.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleCompare = (id: string) => {
    if (comparedProducts.includes(id)) {
      if (comparedProducts.length > 1) {
        setComparedProducts(comparedProducts.filter(item => item !== id));
      }
    } else {
      if (comparedProducts.length < 3) {
        setComparedProducts([...comparedProducts, id]);
      } else {
        setComparedProducts([comparedProducts[1], comparedProducts[2], id]);
      }
    }
  };

  const comparedList = productPlatforms.filter(p => comparedProducts.includes(p.id));

  return (
    <div className="bg-[#0b0f17] text-slate-100 min-h-screen">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-[#111726] to-[#0b0f17] pt-12 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Sialkot Production Lines Active • 2026 OEM Platforms
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                OEM / ODM <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Product Platforms</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Aerospace-grade composite padel rackets, thermoformed raw carbon pickleball paddles, and structural carbon sports hardware engineered for world-class sporting brands in Sialkot, Pakistan.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => onOpenRfq()}
                  className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm tracking-wide uppercase transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">request_quote</span>
                  Request Platform RFQ
                </button>
                <button
                  onClick={onOpenSample}
                  className="px-6 py-3 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm tracking-wide uppercase transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">science</span>
                  Order Lab Samples
                </button>
                <button
                  onClick={onNavigateToCustomizer}
                  className="px-6 py-3 rounded-lg bg-indigo-950/70 hover:bg-indigo-900/80 text-indigo-300 border border-indigo-700/60 font-semibold text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">tune</span>
                  Interactive Spec Customizer
                </button>
              </div>
            </div>

            {/* Quick Stats Pill Panel */}
            <div className="grid grid-cols-2 gap-3 lg:w-96 bg-slate-900/90 border border-slate-800 p-5 rounded-2xl backdrop-blur-md shadow-2xl">
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80">
                <div className="text-2xl font-black text-cyan-400">120K+</div>
                <div className="text-xs text-slate-400 mt-1 uppercase font-semibold">Annual Racket Output</div>
              </div>
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80">
                <div className="text-2xl font-black text-white">±2.5g</div>
                <div className="text-xs text-slate-400 mt-1 uppercase font-semibold">Weight Precision Gate</div>
              </div>
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80">
                <div className="text-2xl font-black text-cyan-400">7-10d</div>
                <div className="text-xs text-slate-400 mt-1 uppercase font-semibold">Rapid Prototype Lead</div>
              </div>
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80">
                <div className="text-2xl font-black text-white">200 pcs</div>
                <div className="text-xs text-slate-400 mt-1 uppercase font-semibold">Standard Model MOQ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material & Carbon Spec Explorer */}
      <section className="py-12 bg-slate-950/90 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <div className="text-xs uppercase font-extrabold tracking-wider text-cyan-400 mb-1">
                Raw Materials & Composite Engineering
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
                Carbon Layup & Material Specifications
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md mt-2 md:mt-0">
              Select any aerospace carbon weave below to inspect tensile modulus, rigidity index, impact damping, and recommended tournament molds.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
            {carbonMaterials.map((mat) => {
              const isSelected = selectedMaterial.id === mat.id;
              return (
                <button
                  key={mat.id}
                  onClick={() => setSelectedMaterial(mat)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-950/80 border-cyan-400 shadow-lg shadow-cyan-950/50 text-white'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="text-xs font-mono font-bold text-cyan-400 mb-1 uppercase tracking-wide">
                    {mat.id.toUpperCase()}
                  </div>
                  <div className="text-sm font-bold line-clamp-1">{mat.name}</div>
                  <div className="text-[11px] text-slate-400 mt-1 font-mono">Modulus: {mat.tensileModulus}</div>
                </button>
              );
            })}
          </div>

          {/* Selected Material Detail Card */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-0.5 rounded bg-cyan-900/70 border border-cyan-700/60 text-cyan-300 text-xs font-mono font-bold uppercase">
                  {selectedMaterial.tensileModulus}
                </span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Fiber: {selectedMaterial.fiberType}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{selectedMaterial.name}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">{selectedMaterial.fullDesc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-400">Flexural Rigidity</span>
                    <span className="text-cyan-400 font-mono">{selectedMaterial.rigidity}/10</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-cyan-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${selectedMaterial.rigidity * 10}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-400">Kinetic Power Output</span>
                    <span className="text-sky-400 font-mono">{selectedMaterial.power}/10</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-sky-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${selectedMaterial.power * 10}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-400">Directional Sweet Control</span>
                    <span className="text-indigo-400 font-mono">{selectedMaterial.control}/10</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-indigo-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${selectedMaterial.control * 10}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-950/80 border border-slate-800/90 rounded-xl p-5 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3">
                  Optimal Applications
                </div>
                <div className="space-y-2 mb-4">
                  <div className="text-xs">
                    <span className="text-slate-500 font-medium">Standard Core Pairing:</span>
                    <p className="text-slate-200 font-semibold">{selectedMaterial.core}</p>
                  </div>
                  <div className="text-xs">
                    <span className="text-slate-500 font-medium">Compatible Molds:</span>
                    <p className="text-cyan-400 font-semibold">{selectedMaterial.molds.join(' • ')}</p>
                  </div>
                  <div className="text-xs">
                    <span className="text-slate-500 font-medium">Profile Thickness:</span>
                    <p className="text-slate-200 font-semibold">{selectedMaterial.profile}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenRfq(selectedMaterial.name)}
                className="w-full py-2.5 px-4 rounded-lg bg-cyan-600/30 hover:bg-cyan-600/50 border border-cyan-500/50 text-cyan-300 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Quote Layup: {selectedMaterial.name.split(' ')[0]}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              Production Mold Platforms
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Pre-tooled high-precision steel molds ready for custom graphics, carbon layups, and brand personalization.
            </p>
          </div>

          {/* Filter Pills & Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search specs, fibers, molds..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-900 border border-slate-700/80 rounded-lg px-3 py-2 pl-9 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 w-full sm:w-60"
              />
              <span className="material-symbols-outlined absolute left-2.5 top-2.5 text-base text-slate-500">
                search
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg">
              {[
                { id: 'all', label: 'All' },
                { id: 'padel', label: 'Padel Rackets' },
                { id: 'pickleball', label: 'Pickleball' },
                { id: 'beach-tennis', label: 'Beach Tennis' },
                { id: 'components', label: 'Structural' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-cyan-500 text-slate-950 shadow'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => {
            const isCompared = comparedProducts.includes(prod.id);
            return (
              <div
                key={prod.id}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden flex flex-col hover:border-slate-700 transition-all group hover:shadow-xl hover:shadow-cyan-950/20"
              >
                {/* Image Banner */}
                <div className="relative h-52 overflow-hidden bg-slate-950">
                  <img
                    src={prod.imageUrl}
                    alt={prod.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/40" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-[11px] font-bold uppercase tracking-wider">
                      {prod.badge}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() => toggleCompare(prod.id)}
                      className={`px-2.5 py-1 rounded text-[11px] font-bold border transition-all flex items-center gap-1 cursor-pointer ${
                        isCompared
                          ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                          : 'bg-black/60 text-slate-300 border-slate-700 hover:border-slate-500'
                      }`}
                      title="Add to comparison table"
                    >
                      <span className="material-symbols-outlined text-xs">
                        {isCompared ? 'check' : 'compare_arrows'}
                      </span>
                      {isCompared ? 'Comparing' : 'Compare'}
                    </button>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300 font-mono">
                    <span className="bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">
                      {prod.weight}
                    </span>
                    <span className="bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">
                      {prod.thickness}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                      {prod.moldShape}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {prod.description}
                    </p>

                    {/* Spec Highlights Grid */}
                    <div className="mt-4 p-3 bg-slate-950/70 border border-slate-800/80 rounded-xl space-y-1.5 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Balance:</span>
                        <span className="text-slate-300 font-semibold">{prod.balance}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Core:</span>
                        <span className="text-slate-300 font-semibold truncate max-w-[170px]">{prod.core}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Available Faces:</span>
                        <span className="text-cyan-400 font-semibold truncate max-w-[170px]">
                          {prod.faceOptions.join(', ')}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Sweet Spot:</span>
                        <span className="text-slate-300 font-semibold">{prod.sweetSpot}</span>
                      </div>
                    </div>

                    {/* Rating Bars */}
                    <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] font-mono">
                      <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800 text-center">
                        <div className="text-slate-400">Power</div>
                        <div className="text-cyan-400 font-bold mt-0.5">{prod.specRatings.power}/10</div>
                      </div>
                      <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800 text-center">
                        <div className="text-slate-400">Control</div>
                        <div className="text-sky-400 font-bold mt-0.5">{prod.specRatings.control}/10</div>
                      </div>
                      <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800 text-center">
                        <div className="text-slate-400">Maneuver</div>
                        <div className="text-indigo-400 font-bold mt-0.5">{prod.specRatings.maneuverability}/10</div>
                      </div>
                    </div>
                  </div>

                  {/* Actions & MOQ */}
                  <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-500">MOQ</div>
                      <div className="text-xs font-mono font-bold text-slate-300">{prod.moq}</div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={onOpenSample}
                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                        title="Order physical prototype sample"
                      >
                        <span className="material-symbols-outlined text-base">science</span>
                      </button>
                      <button
                        onClick={() => onOpenRfq(prod.title)}
                        className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-cyan-950"
                      >
                        RFQ
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison Drawer / Matrix */}
      {comparedList.length > 0 && (
        <section className="py-12 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs uppercase font-extrabold text-cyan-400 tracking-wider">
                  Side-by-Side Evaluation
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white">
                  Platform Comparison Matrix ({comparedList.length} of 3 Selected)
                </h3>
              </div>
              <button
                onClick={() => setComparedProducts([])}
                className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
              >
                Clear Matrix
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/60">
                    <th className="p-3 text-slate-400 uppercase font-bold w-48">Specification</th>
                    {comparedList.map((p) => (
                      <th key={p.id} className="p-3 text-white font-bold text-sm">
                        <div className="flex items-center justify-between">
                          <span>{p.title}</span>
                          <button
                            onClick={() => toggleCompare(p.id)}
                            className="text-slate-500 hover:text-red-400 cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-sm">close</span>
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  <tr>
                    <td className="p-3 text-slate-400 font-semibold">Mold Category</td>
                    {comparedList.map((p) => (
                      <td key={p.id} className="p-3 text-slate-200">{p.moldShape}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400 font-semibold">Weight Range</td>
                    {comparedList.map((p) => (
                      <td key={p.id} className="p-3 font-mono text-cyan-300">{p.weight}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400 font-semibold">Thickness Profile</td>
                    {comparedList.map((p) => (
                      <td key={p.id} className="p-3 text-slate-200">{p.thickness}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400 font-semibold">Balance Point</td>
                    {comparedList.map((p) => (
                      <td key={p.id} className="p-3 text-slate-200">{p.balance}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400 font-semibold">Sweet Spot Placement</td>
                    {comparedList.map((p) => (
                      <td key={p.id} className="p-3 text-slate-200">{p.sweetSpot}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400 font-semibold">Standard Core</td>
                    {comparedList.map((p) => (
                      <td key={p.id} className="p-3 text-slate-200">{p.core}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400 font-semibold">Carbon Layups Available</td>
                    {comparedList.map((p) => (
                      <td key={p.id} className="p-3 text-cyan-400 font-medium">
                        {p.faceOptions.join(' • ')}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400 font-semibold">Power Rating</td>
                    {comparedList.map((p) => (
                      <td key={p.id} className="p-3 font-mono font-bold text-cyan-300">
                        {p.specRatings.power} / 10
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400 font-semibold">Control Rating</td>
                    {comparedList.map((p) => (
                      <td key={p.id} className="p-3 font-mono font-bold text-sky-300">
                        {p.specRatings.control} / 10
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400 font-semibold">Production MOQ</td>
                    {comparedList.map((p) => (
                      <td key={p.id} className="p-3 font-mono text-slate-300">{p.moq}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-slate-400 font-semibold">Inquire</td>
                    {comparedList.map((p) => (
                      <td key={p.id} className="p-3">
                        <button
                          onClick={() => onOpenRfq(p.title)}
                          className="px-3 py-1.5 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase cursor-pointer"
                        >
                          Request Quote
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Global Brand Partner Banner */}
      <section className="py-12 border-t border-slate-800 bg-[#0d131f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs uppercase font-extrabold tracking-widest text-slate-400 mb-4">
            Confidential White-Label Manufacturing For
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center opacity-60">
            <div className="p-3 rounded-lg border border-slate-800/80 bg-slate-950/40 font-mono font-black text-sm text-slate-300">
              EURO PADEL TOUR
            </div>
            <div className="p-3 rounded-lg border border-slate-800/80 bg-slate-950/40 font-mono font-black text-sm text-slate-300">
              IBERIAN PRO RACQUETS
            </div>
            <div className="p-3 rounded-lg border border-slate-800/80 bg-slate-950/40 font-mono font-black text-sm text-slate-300">
              USA PICKLE LABS
            </div>
            <div className="p-3 rounded-lg border border-slate-800/80 bg-slate-950/40 font-mono font-black text-sm text-slate-300">
              SCANDI SPORTS GROUP
            </div>
            <div className="p-3 rounded-lg border border-slate-800/80 bg-slate-950/40 font-mono font-black text-sm text-slate-300">
              LATAM COMPOSITES
            </div>
            <div className="p-3 rounded-lg border border-slate-800/80 bg-slate-950/40 font-mono font-black text-sm text-slate-300">
              EMIRATES PADEL CLUB
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
