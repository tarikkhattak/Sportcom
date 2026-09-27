import React, { useState } from 'react';

interface ManufacturingPageProps {
  onOpenRfq: (platform?: string) => void;
  onOpenQcReport: () => void;
  onOpenFactoryTour: () => void;
}

export const ManufacturingPage: React.FC<ManufacturingPageProps> = ({
  onOpenRfq,
  onOpenQcReport,
  onOpenFactoryTour,
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [selectedMachine, setSelectedMachine] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'grid' | 'spotlight'>('grid');

  // The 4-Stage Precision Monocoque Manufacturing Journey
  const stages = [
    {
      step: 1,
      name: 'Pre-Preg Carbon Cutting & Cleanroom Layup',
      tagline: 'Automated Laser Plies & Multi-Axial Collation',
      shortTitle: 'Pre-Preg & Layup',
      description: 'Aerospace pre-impregnated carbon rolls are maintained in -18°C cold storage to preserve epoxy curing kinetics. Automated Gerber CNC laser cutters slice plies at exact 0°, 45°, and 90° orientation angles with sub-millimeter precision before hand-layering in our ISO Class 7 (10,000) cleanroom.',
      stats: [
        { label: 'Cleanroom Standard', value: 'ISO Class 7 / 10,000' },
        { label: 'Cutting Tolerance', value: '±0.05 mm CNC' },
        { label: 'Resin Content Control', value: '38% ± 1.5%' },
        { label: 'Storage Temperature', value: '-18°C Cold Storage' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
      badge: 'Cleanroom Layup',
      stationId: 'BAY-01'
    },
    {
      step: 2,
      name: 'High-Pressure Monocoque Compression Molding',
      tagline: 'Internal Nitrogen Bladder & 165°C Heated Steel Tooling',
      shortTitle: 'Compression Molding',
      description: 'The assembled multi-ply carbon skeleton and core are transferred into precision P20 tool steel molds. Inflatable internal bladders apply 15 bars of pure nitrogen pressure while 80-ton hydraulic presses cure the composite at 165°C for 22 minutes, eliminating voids entirely.',
      stats: [
        { label: 'Curing Pressure', value: '15 Bar Nitrogen' },
        { label: 'Tooling Temperature', value: '165°C ± 2°C' },
        { label: 'Hydraulic Press Force', value: '80 Metric Tons' },
        { label: 'Void Ratio Metric', value: '< 0.15% ASTM' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80',
      badge: '15-Bar Nitrogen Cure',
      stationId: 'BAY-02'
    },
    {
      step: 3,
      name: '5-Axis Robotic CNC Drilling & Micro-Tuning',
      tagline: 'Zero-Delamination Diamond Bits at 24,000 RPM',
      shortTitle: 'Robotic CNC Drilling',
      description: 'Multi-spindle 5-axis robotic arms drill custom aerodynamic hole matrices using industrial polycrystalline diamond (PCD) bits rotating at 24,000 RPM. This guarantees zero fiber splintering or internal delamination while calibrating gram-level balance and swingweight.',
      stats: [
        { label: 'Spindle Speed', value: '24,000 RPM PCD' },
        { label: 'Hole Concentricity', value: '±0.02 mm' },
        { label: 'Drilling Cycle Time', value: '38s per Racket' },
        { label: 'Deburring Finish', value: 'Automated 3D' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
      badge: '5-Axis Robotics',
      stationId: 'BAY-03'
    },
    {
      step: 4,
      name: 'Surface Treatment, 3D Spin Texture & Resonance QA',
      tagline: 'Electrostatic Paint, 3D Spin Silicone & Acoustic FFT Test',
      shortTitle: 'Finishing & QA Resonance',
      description: 'Frames receive automated micro-abrasion blasting, electrostatic 2K polyurethane coatings, and molded 3D hexagonal spin textures. Every racket then undergoes acoustic frequency sweet-spot testing and analytical balance verification to enforce a ±2.5g batch gate.',
      stats: [
        { label: 'Paint Adhesion Rating', value: 'Class 5B (ASTM D3359)' },
        { label: 'UV Resistance', value: '1,000h QUV Accelerated' },
        { label: 'Spin Friction Coeff', value: 'μ > 0.85 USAPA' },
        { label: 'Tolerance Gate', value: '±2.5g Mass / ±2mm CoG' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80',
      badge: '3D Spin & Acoustic QA',
      stationId: 'BAY-04'
    },
  ];

  const labEquipment = [
    {
      name: 'Instron 5960 Universal Testing Machine',
      category: 'Tensile & Bending Mechanics',
      specs: '50kN load cell with laser extensometer for 3-point composite flexural modulus & frame failure yield mapping.',
      purpose: 'Verifies structural carbon frame rigidity under severe torsional loads.',
      badge: 'ASTM D790'
    },
    {
      name: 'Automated Ballistic Smash Cannon Rig',
      category: 'Dynamic Impact Fatigue',
      specs: 'High-speed pneumatic launcher firing standard competition balls at 120 km/h for 10,000 consecutive strikes.',
      purpose: 'Simulates 2 seasons of professional tour smashes to ensure zero core compaction or carbon delamination.',
      badge: 'Torture Tested'
    },
    {
      name: 'Mitutoyo 3D Coordinate Measuring Machine (CMM)',
      category: 'Metrology & Mold Geometry',
      specs: 'Sub-micron ruby-tip scanning probe inspecting mold cavity wear and composite contour tolerances down to 0.005mm.',
      purpose: 'Guarantees mold symmetry and aero profile specifications across mass production batches.',
      badge: '0.005mm ISO'
    },
    {
      name: 'Ultrasonic Pulse Echo Non-Destructive Gauge',
      category: 'Internal Delamination & Void Audit',
      specs: 'High-frequency acoustic transducer scanning hollow tubular frame walls for resin richness, void pockets, or thin spots.',
      purpose: '100% non-destructive internal verification before surface finishing.',
      badge: 'NDT Standard'
    },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackText: string) => {
    // Graceful fallback to rich SVG representation if network or adblocker interrupts Unsplash
    const target = e.currentTarget;
    target.onerror = null;
    target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><rect width="800" height="500" fill="%230f172a"/><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="%231e293b" stroke-width="1"/></pattern><rect width="800" height="500" fill="url(%23grid)"/><circle cx="400" cy="220" r="70" fill="%2306b6d4" fill-opacity="0.15" stroke="%2306b6d4" stroke-width="2"/><text x="400" y="225" font-family="monospace" font-size="16" font-weight="bold" fill="%2338bdf8" text-anchor="middle">SPORTCOM SIALKOT</text><text x="400" y="320" font-family="sans-serif" font-size="20" font-weight="900" fill="%23ffffff" text-anchor="middle">${encodeURIComponent(fallbackText)}</text><text x="400" y="350" font-family="monospace" font-size="12" fill="%2394a3b8" text-anchor="middle">AUTOMATED COMPOSITE FACILITY</text></svg>`;
  };

  const currentStage = stages.find((s) => s.step === activeStep) || stages[0];

  return (
    <div className="bg-[#0b0f17] text-slate-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-[#111726] to-[#0b0f17] pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Industry 4.0 Sialkot Facility • ISO 9001:2015 & BSCI
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                Industrial Precision. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                  Zero Tolerance.
                </span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Tour-tier carbon composite manufacturing powered by six-axis robotics, high-pressure nitrogen bladder compression molding, and Class 10,000 cleanroom composite layups in Sialkot, Pakistan.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <button
                  onClick={onOpenFactoryTour}
                  className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm tracking-wide uppercase transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">videocam</span>
                  Book Virtual Facility Audit
                </button>
                <button
                  onClick={onOpenQcReport}
                  className="px-6 py-3 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm tracking-wide uppercase transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">verified</span>
                  View Batch QC Certificate
                </button>
                <button
                  onClick={() => onOpenRfq()}
                  className="px-6 py-3 rounded-lg bg-indigo-950/70 hover:bg-indigo-900/80 text-indigo-300 border border-indigo-700/60 font-semibold text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">send</span>
                  Inquire Production Capacity
                </button>
              </div>
            </div>

            {/* Quick Facility Metrics */}
            <div className="grid grid-cols-2 gap-3 lg:w-96 bg-slate-900/90 border border-slate-800 p-5 rounded-2xl backdrop-blur-md shadow-2xl">
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80">
                <div className="text-2xl font-black text-cyan-400">45,000</div>
                <div className="text-xs text-slate-400 mt-1 uppercase font-semibold">Sq Ft Facility Area</div>
              </div>
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80">
                <div className="text-2xl font-black text-white">28 Presses</div>
                <div className="text-xs text-slate-400 mt-1 uppercase font-semibold">Heated Hydraulic Stations</div>
              </div>
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80">
                <div className="text-2xl font-black text-cyan-400">10,000/mo</div>
                <div className="text-xs text-slate-400 mt-1 uppercase font-semibold">Monthly Unit Capacity</div>
              </div>
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80">
                <div className="text-2xl font-black text-white">0.2%</div>
                <div className="text-xs text-slate-400 mt-1 uppercase font-semibold">First-Pass Defect Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE 4-STAGE MONOCOQUE JOURNEY */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            Core Manufacturing Pipeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
            The 4-Stage Monocoque Journey
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Every competition racket follows our sequential 4-stage monocoque process in Sialkot — visual verification across all production bays with real-time laboratory telemetry.
          </p>

          {/* View Mode Toggle */}
          <div className="mt-6 inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-sm">grid_view</span>
              All 4 Stages (Picture Grid)
            </button>
            <button
              onClick={() => setViewMode('spotlight')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'spotlight'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-sm">view_carousel</span>
              Interactive Spotlight
            </button>
          </div>
        </div>

        {/* 1. ALL 4 STAGES PICTURE CARDS GRID (Always visible or primary in grid mode) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stages.map((stage) => {
            const isSelected = activeStep === stage.step;
            return (
              <div
                key={stage.step}
                onClick={() => {
                  setActiveStep(stage.step);
                }}
                className={`group bg-slate-900/80 border rounded-2xl overflow-hidden flex flex-col justify-between transition-all cursor-pointer hover:shadow-xl hover:shadow-cyan-950/30 ${
                  isSelected
                    ? 'border-cyan-400 ring-2 ring-cyan-400/40 shadow-lg shadow-cyan-950/50'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Stage Picture Header */}
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img
                    src={stage.imageUrl}
                    alt={stage.name}
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                    onError={(e) => handleImageError(e, `Stage 0${stage.step}: ${stage.shortTitle}`)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                  {/* Stage Number Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-cyan-400 text-slate-950 font-black text-xs flex items-center justify-center shadow-lg font-mono">
                      0{stage.step}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-[10px] font-mono font-bold">
                      {stage.stationId}
                    </span>
                  </div>

                  {/* Active Indicator Pin */}
                  {isSelected && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded bg-cyan-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider shadow">
                        Active Stage
                      </span>
                    </div>
                  )}

                  {/* Picture Caption Tag */}
                  <div className="absolute bottom-2 left-3 right-3 text-xs text-white font-mono font-bold truncate drop-shadow">
                    {stage.badge}
                  </div>
                </div>

                {/* Stage Card Body */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                      {stage.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {stage.description}
                    </p>

                    {/* Quick Specs Pill */}
                    <div className="mt-3 grid grid-cols-2 gap-1.5 text-[10px] font-mono">
                      <div className="p-1.5 bg-slate-950/80 rounded border border-slate-800">
                        <span className="text-slate-500 block truncate">{stage.stats[0].label}</span>
                        <span className="text-cyan-300 font-bold truncate block">{stage.stats[0].value}</span>
                      </div>
                      <div className="p-1.5 bg-slate-950/80 rounded border border-slate-800">
                        <span className="text-slate-500 block truncate">{stage.stats[1].label}</span>
                        <span className="text-white font-bold truncate block">{stage.stats[1].value}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-400 group-hover:text-cyan-400 font-semibold transition-colors flex items-center gap-1">
                      <span>Inspect Stage 0{stage.step}</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. EXPANDED SPOTLIGHT INSPECTION STUDIO FOR SELECTED STAGE */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-400 text-xs font-mono font-bold uppercase">
                  Stage 0{currentStage.step} of 04
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">
                  {currentStage.stationId} • {currentStage.tagline}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Sialkot Line Live
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                {currentStage.name}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {currentStage.description}
              </p>

              {/* 4 Process Parameters Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {currentStage.stats.map((stat, idx) => (
                  <div key={idx} className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80">
                    <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                    <div className="text-sm sm:text-base font-black text-cyan-300 font-mono mt-0.5">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveStep(prev => (prev === 4 ? 1 : prev + 1))}
                  className="px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-cyan-950"
                >
                  Advance to Stage 0{currentStage.step === 4 ? 1 : currentStage.step + 1}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <button
                  onClick={onOpenFactoryTour}
                  className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-base">videocam</span>
                  Audit Stage 0{currentStage.step} Live
                </button>
              </div>
            </div>

            {/* Right Picture Studio Column (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-80 sm:h-96 bg-slate-950 group">
                <img
                  src={currentStage.imageUrl}
                  alt={currentStage.name}
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                  onError={(e) => handleImageError(e, `Stage 0${currentStage.step}: ${currentStage.shortTitle}`)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/30" />
                
                {/* Station Tag Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded bg-black/70 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold">
                    STAGE 0{currentStage.step} • {currentStage.stationId}
                  </span>
                </div>

                {/* Live Video Feed Simulator */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-slate-900/90 border border-slate-800 p-3 rounded-xl backdrop-blur-md">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>HIGH-RES OPTICAL FEED</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Precision 4K Sensor</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QC Laboratory Equipment Showcase */}
      <section className="py-14 bg-slate-950/90 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <div className="text-xs uppercase font-extrabold tracking-wider text-cyan-400 mb-1">
                Metrology & Destructive Validation Lab
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                State-of-the-Art Testing Equipment
              </h2>
            </div>
            <button
              onClick={onOpenQcReport}
              className="mt-3 md:mt-0 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
            >
              Download Sample CoC Certificate
              <span className="material-symbols-outlined text-sm">download</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {labEquipment.map((eq, i) => (
              <div
                key={i}
                onClick={() => setSelectedMachine(i)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  selectedMachine === i
                    ? 'bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-950/40'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-cyan-300 text-[10px] font-mono font-bold">
                      {eq.badge}
                    </span>
                    <span className="material-symbols-outlined text-slate-500 text-base">
                      biotech
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">{eq.name}</h4>
                  <div className="text-xs font-mono text-cyan-400 mb-3">{eq.category}</div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{eq.specs}</p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-[11px] text-slate-500 font-semibold mb-1">Impact on Racket:</div>
                  <div className="text-xs text-slate-300 font-medium">{eq.purpose}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Manufacturing Callout */}
      <section className="py-14 border-t border-slate-800 bg-[#0d1320]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-950/60 to-slate-900/90 border border-cyan-800/40 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="max-w-2xl relative z-10">
              <span className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Ethical & Sustainable Manufacturing
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase mt-4 mb-3">
                Solar Powered & Carbon Neutral Facility
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Our Sialkot manufacturing complex features a 400 kW rooftop photovoltaic solar installation that generates 78% of our daily curing press energy. We also implement a closed-loop composite scrap reclamation program that recycles leftover carbon fiber into injection-molded butt caps.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <div className="text-2xl font-black text-emerald-400">400 kW</div>
                  <div className="text-xs text-slate-400">Solar Power Array</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">92%</div>
                  <div className="text-xs text-slate-400">Scrap Carbon Recycled</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-400">BSCI A+</div>
                  <div className="text-xs text-slate-400">Social Audit Grade</div>
                </div>
              </div>

              <button
                onClick={onOpenFactoryTour}
                className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-950"
              >
                Schedule Sialkot Factory Audit
                <span className="material-symbols-outlined text-sm">event_available</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
