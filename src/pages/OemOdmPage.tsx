import React, { useState } from 'react';

interface OemOdmPageProps {
  onOpenRfq: (platform?: string) => void;
  onOpenSample: () => void;
}

export const OemOdmPage: React.FC<OemOdmPageProps> = ({ onOpenRfq, onOpenSample }) => {
  const [activeModelType, setActiveModelType] = useState<'oem' | 'odm'>('oem');
  const [calcVolume, setCalcVolume] = useState<number>(500);
  const [calcTier, setCalcTier] = useState<'padel-pro' | 'pickle-pro' | 'padel-standard'>('padel-pro');

  const roadmapPhases = [
    {
      phase: '01',
      title: 'Engineering Discovery & CAD Design',
      timeline: '7 - 14 Days',
      imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      description: 'Sign mutual non-disclosure agreement (NDA). Our aerospace CAD engineers analyze your 3D aerodynamic profile, throat bridge geometry, and weight distribution. We generate comprehensive 3D step files, internal bladder expansion simulations, and stress analysis.',
      deliverables: ['3D CAD Surface Geometry (.STEP / .IGES)', 'Weight & Balance Finite Element Simulation', 'P20 Tooling DFM (Design for Manufacturing) Report', 'Mutual Proprietary IP Protection Agreement']
    },
    {
      phase: '02',
      title: 'Rapid Prototyping & Lab Validation',
      timeline: '10 - 15 Days',
      imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      description: 'Precision CNC machining of aluminum test molds or quick-turn composite prototypes. We produce 3 to 5 physical racquets featuring different EVA foam densities and carbon layups (12K, 18K, 24K) for blind player testing.',
      deliverables: ['3 - 5 Finished Playable Prototype Samples', 'Lab Deflection, Tensile & Stiffness Report', 'Acoustic Sweet-Spot Frequency Data', 'Courier Air Delivery to your HQ']
    },
    {
      phase: '03',
      title: 'Pilot Batch & Pre-Production Sign-Off',
      timeline: '2 - 3 Weeks',
      imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      description: 'Tooling hardening of permanent P20 steel molds. Production of a pilot run of 50 to 100 units under standard factory cleanroom cadence. Color proofing, silk-screen Pantone matching, and packaging validation.',
      deliverables: ['Golden Master Sample Sign-Off', 'Mass Production Color Proofs & Foil Swatches', 'Drop-Test Approved Retail Packaging Samples', 'Final Bill of Materials (BOM) Lock']
    },
    {
      phase: '04',
      title: 'Mass Production & Global Freight',
      timeline: '4 - 6 Weeks',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      description: 'Continuous mass compression molding across our 28-press hydraulic facility. Automated 5-axis CNC hole drilling, robotic 2K polyurethane finishing, individual laser serial numbering, and palletized export logistics.',
      deliverables: ['100% Inspected Rackets with QR Serial Tracking', 'Batch Certificate of Conformance (CoC)', 'Export Customs Clearance via Sialkot Dry Port', 'Door-to-Door Sea/Air Freight Consolidation']
    }
  ];

  // Pricing calculator estimate
  const getEstimatedUnitCost = () => {
    let base = 38;
    if (calcTier === 'padel-pro') base = 48;
    if (calcTier === 'pickle-pro') base = 32;

    if (calcVolume >= 2000) base *= 0.78;
    else if (calcVolume >= 1000) base *= 0.85;
    else if (calcVolume >= 500) base *= 0.92;

    return Math.round(base);
  };

  return (
    <div className="bg-[#0b0f17] text-slate-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-[#111726] to-[#0b0f17] pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Full Turnkey B2B Manufacturing Programs
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              From White-Label <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                To Custom Monocoque IP
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Whether you need rapid market entry using our certified tournament-ready open molds (ODM) or fully confidential proprietary mold development with patented throat bridges (OEM), SPORTCOM delivers industrial precision in Sialkot.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => onOpenRfq(activeModelType.toUpperCase())}
                className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm tracking-wide uppercase transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">edit_note</span>
                Request {activeModelType.toUpperCase()} Proposal
              </button>
              <button
                onClick={onOpenSample}
                className="px-6 py-3 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm tracking-wide uppercase transition-all flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">science</span>
                Order Prototype Evaluation Kit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* OEM vs ODM Comparison Table */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase font-extrabold tracking-widest text-cyan-400 mb-2">
            Model Selection Guide
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
            OEM vs ODM: Choose Your Launch Path
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Compare investment requirements, proprietary mold ownership, lead times, and customization flexibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* ODM Card */}
          <div
            onClick={() => setActiveModelType('odm')}
            className={`rounded-3xl p-8 border transition-all cursor-pointer relative ${
              activeModelType === 'odm'
                ? 'bg-slate-900 border-cyan-400 shadow-xl shadow-cyan-950/40'
                : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-mono font-bold uppercase">
                Fastest Route to Market
              </span>
              <span className="text-2xl font-black text-cyan-400">ODM</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Original Design Manufacturing</h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Launch your collection immediately utilizing our pre-certified, tournament-tested steel molds. Zero mold tooling fees, low MOQ, and full customization of carbon weave, paint, decals, and packaging.
            </p>

            <div className="space-y-3 text-xs mb-8">
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Tooling / Mold Fee:</span>
                <span className="text-emerald-400 font-bold">$0 (Zero Upfront Tooling)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">First Order Lead Time:</span>
                <span className="text-white font-mono font-semibold">3 - 4 Weeks</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Minimum Order Quantity:</span>
                <span className="text-cyan-400 font-mono font-semibold">200 units / design</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Customization Level:</span>
                <span className="text-white font-semibold">Decals, Weave, Foam, Grip, Box</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Mold IP Rights:</span>
                <span className="text-slate-400">SPORTCOM Open Platform</span>
              </div>
            </div>

            <button
              onClick={() => onOpenRfq('ODM White Label')}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-cyan-300 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Configure ODM Order
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          {/* OEM Card */}
          <div
            onClick={() => setActiveModelType('oem')}
            className={`rounded-3xl p-8 border transition-all cursor-pointer relative ${
              activeModelType === 'oem'
                ? 'bg-slate-900 border-cyan-400 shadow-xl shadow-cyan-950/40'
                : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-indigo-950 border border-indigo-800 text-indigo-300 text-xs font-mono font-bold uppercase">
                100% Proprietary IP
              </span>
              <span className="text-2xl font-black text-indigo-400">OEM</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Original Equipment Manufacturing</h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Co-engineered bespoke monocoque geometries from scratch. We machine dedicated P20 tool steel molds strictly reserved for your brand, backed by legally binding non-disclosure exclusivity.
            </p>

            <div className="space-y-3 text-xs mb-8">
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Tooling / Mold Fee:</span>
                <span className="text-white font-mono font-semibold">$3,200 - $4,800 (One-Time)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">First Order Lead Time:</span>
                <span className="text-white font-mono font-semibold">6 - 8 Weeks (Inc. Tooling)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Minimum Order Quantity:</span>
                <span className="text-cyan-400 font-mono font-semibold">500 units / mold</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Customization Level:</span>
                <span className="text-white font-semibold">100% Bespoke Geometry & Aero</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Mold IP Rights:</span>
                <span className="text-emerald-400 font-bold">100% Exclusive Brand Ownership</span>
              </div>
            </div>

            <button
              onClick={() => onOpenRfq('OEM Custom Tooling')}
              className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-950"
            >
              Start Custom Mold Development
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4-Phase Partnership Roadmap */}
      <section className="py-14 bg-slate-950/80 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-400">
              Structured B2B Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mt-1">
              The 4-Phase Partnership Roadmap
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Transparent milestone-driven workflow ensuring zero surprise deviations between CAD and production pallets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapPhases.map((phase) => (
              <div
                key={phase.phase}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all group"
              >
                <div>
                  <div className="relative h-40 overflow-hidden bg-slate-950">
                    <img
                      src={phase.imageUrl}
                      alt={phase.title}
                      referrerPolicy="no-referrer"
                      crossOrigin="anonymous"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-black font-mono text-cyan-400 bg-slate-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
                        PHASE {phase.phase}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="text-[11px] font-mono text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                        {phase.timeline}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {phase.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{phase.description}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Key Deliverables:
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-slate-300">
                    {phase.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="material-symbols-outlined text-xs text-cyan-400 mt-0.5">
                          check_circle
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Volume Pricing & MOQ Calculator */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <span className="text-xs uppercase font-extrabold text-cyan-400 tracking-wider">
                Transparent B2B Estimator
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-1 mb-2">
                Tiered Volume & MOQ Estimator
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Adjust order quantities to preview volume economies of scale for premium carbon racket manufacturing.
              </p>

              {/* Product Platform Selector */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                  Select Target Platform
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'padel-pro', label: 'Pro 18K/24K Padel' },
                    { id: 'padel-standard', label: 'Standard 12K Padel' },
                    { id: 'pickle-pro', label: 'T700 Raw Pickleball' },
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setCalcTier(tier.id as any)}
                      className={`p-2.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                        calcTier === tier.id
                          ? 'bg-cyan-950 border-cyan-400 text-white'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Volume Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-300 uppercase">
                    Order Volume: <span className="text-cyan-400 font-mono text-sm">{calcVolume} units</span>
                  </label>
                  <span className="text-xs text-slate-400">Standard MOQ: 200 units</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="5000"
                  step="100"
                  value={calcVolume}
                  onChange={(e) => setCalcVolume(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2">
                  <span>200 pcs (MOQ)</span>
                  <span>500 pcs</span>
                  <span>1,000 pcs (-15%)</span>
                  <span>2,500 pcs (-22%)</span>
                  <span>5,000+ pcs</span>
                </div>
              </div>

              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-xs text-slate-400 flex items-center gap-3">
                <span className="material-symbols-outlined text-cyan-400 text-xl">info</span>
                <span>
                  Estimates include CNC steel mold usage, water decal application, 3D spin texture, grip assembly, and protective packaging. Final pricing verified upon CAD file review.
                </span>
              </div>
            </div>

            {/* Estimated Unit Card */}
            <div className="bg-slate-950 border border-cyan-900/50 rounded-2xl p-6 text-center shadow-xl">
              <div className="text-xs uppercase font-bold text-slate-400 mb-1">Estimated FOB Unit Cost</div>
              <div className="text-4xl sm:text-5xl font-black text-cyan-400 font-mono my-2">
                ${getEstimatedUnitCost()}
                <span className="text-xs font-normal text-slate-400 ml-1">/ unit</span>
              </div>
              <div className="text-xs text-slate-400 mb-4">
                Total Production Run: <span className="font-mono text-white font-bold">${(getEstimatedUnitCost() * calcVolume).toLocaleString()}</span>
              </div>

              <div className="space-y-2 text-xs text-left mb-6 p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-400">Sampling Lead:</span>
                  <span className="text-slate-200 font-mono">7 - 10 Days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Bulk Production:</span>
                  <span className="text-slate-200 font-mono">4 - 5 Weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Port of Departure:</span>
                  <span className="text-slate-200">Sialkot / Karachi Port</span>
                </div>
              </div>

              <button
                onClick={() => onOpenRfq(`Calculated: ${calcTier} (${calcVolume} units @ ~$${getEstimatedUnitCost()}/pc)`)}
                className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-950"
              >
                Lock In Tier Pricing
                <span className="material-symbols-outlined text-sm">lock</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Retail Packaging & Accessories */}
      <section className="py-14 border-t border-slate-800 bg-[#0d1320]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-400">
              Turnkey Branding
            </span>
            <h3 className="text-2xl font-black text-white uppercase mt-1">
              Custom Packaging & Accessories
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl">
              <div className="text-cyan-400 text-2xl font-bold mb-2">
                <span className="material-symbols-outlined">inventory_2</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Magnetic Rigid Gift Boxes</h4>
              <p className="text-xs text-slate-400">High-end matte black cardboard packaging with custom EVA foam insert and spot-UV logo branding.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl">
              <div className="text-cyan-400 text-2xl font-bold mb-2">
                <span className="material-symbols-outlined">work</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Thermal Racket Covers</h4>
              <p className="text-xs text-slate-400">Silver thermo-guard insulation lining protecting composite frames against extreme heat degradation in trunk storage.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl">
              <div className="text-cyan-400 text-2xl font-bold mb-2">
                <span className="material-symbols-outlined">qr_code_2</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Barcode & Laser Serial</h4>
              <p className="text-xs text-slate-400">Each racket laser-etched with unique alphanumeric serial code, QR certificate link, and retail EAN/UPC stickers.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl">
              <div className="text-cyan-400 text-2xl font-bold mb-2">
                <span className="material-symbols-outlined">label</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Woven Straps & Custom Butt Caps</h4>
              <p className="text-xs text-slate-400">Injection-molded embossed silicone end-caps with player wrist cords in your exact pantone colorway.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
