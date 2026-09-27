import React, { useState } from 'react';

interface QualityPageProps {
  onOpenQcReport: () => void;
  onOpenFactoryTour: () => void;
  onOpenRfq: (platform?: string) => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({
  onOpenQcReport,
  onOpenFactoryTour,
  onOpenRfq,
}) => {
  const [selectedGate, setSelectedGate] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'gates' | 'tests' | 'certs'>('gates');

  const qualityGates = [
    {
      gate: 1,
      name: 'Pre-Preg Raw Material Inflow & Gel Time',
      stage: 'Incoming Raw Material Inspection',
      tolerance: 'Resin content 38% ±1.5%',
      method: 'Differential Scanning Calorimetry (DSC) & Gel Time Rheometer',
      description: 'Every batch of Torayca carbon fiber pre-preg rolls arriving in cold freight containers is sampled before cleanroom cutting. We verify resin content, volatile content, and shelf-life gel time to avoid premature crosslinking.',
      passRate: '99.8%',
      standard: 'ASTM D3529 / ISO 11357'
    },
    {
      gate: 2,
      name: 'Internal Monocoque Wall Thickness & Void Ratio',
      stage: 'Post-Cure Bladder Inspection',
      tolerance: '0.85mm to 1.30mm (±0.05mm)',
      method: 'High-Frequency Ultrasonic Non-Destructive Pulse-Echo Transducer',
      description: 'Hollow tubular carbon frames undergo 100% ultrasonic cross-section scanning along the perimeter, shoulders, and throat bridge to identify microscopic voids, resin pooling, or dry spots before drilling.',
      passRate: '99.6%',
      standard: 'ASTM E2580 NDT Protocol'
    },
    {
      gate: 3,
      name: 'Weight Precision & Analytical Mass Gate',
      stage: 'Finished Frame Mass Verification',
      tolerance: '±2.5g Max Variance per Batch',
      method: 'Mettler Toledo Precision Analytical Balances (0.01g resolution)',
      description: 'While industry standard allows ±10g deviation, SPORTCOM enforces an aerospace-grade ±2.5g batch tolerance. Any racket falling outside target weight thresholds is automatically diverted.',
      passRate: '99.4%',
      standard: 'ISO 9001:2015 Calibration'
    },
    {
      gate: 4,
      name: 'Center of Gravity & Balance Point Alignment',
      stage: 'Dynamic Swing Balance Validation',
      tolerance: '±2.0 mm Pivot Variance',
      method: 'Dual-Knife-Edge Dynamic Balance Sensor with Digital Laser Readout',
      description: 'Ensures the exact head-heavy or handle-balanced playability engineered in the CAD model. Rackets are balanced across precision pivots to ensure identical swing weight across 1,000-unit runs.',
      passRate: '99.5%',
      standard: 'SPORTCOM Precision Metrology'
    },
    {
      gate: 5,
      name: '10,000-Cycle Ballistic Impact Fatigue',
      stage: 'Destructive Stress Rig (Batch Sample)',
      tolerance: 'Zero delamination or core crushing',
      method: 'Pneumatic Ball Cannon Firing at 120 km/h (10,000 Consecutive Hits)',
      description: 'Randomized samples from every 500-unit shift run are mounted on our automated ballistic cannon rig. Striking the sweet spot 10,000 times reproduces 2 seasons of aggressive tournament smashes without structural failure.',
      passRate: '100%',
      standard: 'EN 15151 / Sportcom Fatigue'
    },
    {
      gate: 6,
      name: 'Surface Coating Cross-Hatch & Spin Adhesion',
      stage: 'Finishing & Decal Chemical Durability',
      tolerance: 'Class 5B (Zero Paint Flaking)',
      method: 'ASTM D3359 Cross-Cut Tape Adhesion & 1,000h QUV Solar Chamber',
      description: 'Lattice pattern cuts are scored through polyurethane paint and holographic decals, followed by aggressive pressure-sensitive tape peel. UV chambers simulate 2 years of intense outdoor padel court sunlight.',
      passRate: '99.9%',
      standard: 'ASTM D3359 Method B / ISO 2409'
    },
    {
      gate: 7,
      name: 'Acoustic Resonance & Sweet-Spot Mapping',
      stage: 'End-of-Line Acoustic Sweet-Spot QC',
      tolerance: 'Harmonic peak within ±3% target frequency',
      method: 'Piezoelectric Harmonic Tap Sensor & FFT Frequency Spectrum Analyzer',
      description: 'Each finished racket face is tapped with a calibrated acoustic impulse hammer. Fast Fourier Transform (FFT) analysis plots the structural resonance frequency to confirm core bonding uniformity.',
      passRate: '99.7%',
      standard: 'Modal Resonance ISO 7626'
    }
  ];

  const currentGateData = qualityGates.find(g => g.gate === selectedGate) || qualityGates[0];

  return (
    <div className="bg-[#0b0f17] text-slate-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-[#111726] to-[#0b0f17] pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Zero-Defect Quality Assurance Protocol
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                Military-Grade <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                  Quality Assurance.
                </span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                SPORTCOM operates Sialkot's most rigorous composite validation laboratory. Every single padel racket and pickleball paddle is governed by a 7-point non-destructive and destructive inspection matrix.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <button
                  onClick={onOpenQcReport}
                  className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm tracking-wide uppercase transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">verified</span>
                  Inspect Batch QC Certificate
                </button>
                <button
                  onClick={onOpenFactoryTour}
                  className="px-6 py-3 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm tracking-wide uppercase transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">videocam</span>
                  Live Virtual Lab Tour
                </button>
              </div>
            </div>

            {/* Quality Summary Metrics */}
            <div className="grid grid-cols-2 gap-3 lg:w-96 bg-slate-900/90 border border-slate-800 p-5 rounded-2xl backdrop-blur-md shadow-2xl">
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80">
                <div className="text-2xl font-black text-cyan-400">0.2%</div>
                <div className="text-xs text-slate-400 mt-1 uppercase font-semibold">Max Defect Threshold</div>
              </div>
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80">
                <div className="text-2xl font-black text-white">±2.5g</div>
                <div className="text-xs text-slate-400 mt-1 uppercase font-semibold">Batch Mass Tolerance</div>
              </div>
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80">
                <div className="text-2xl font-black text-cyan-400">10,000</div>
                <div className="text-xs text-slate-400 mt-1 uppercase font-semibold">Cycle Smash Cannon</div>
              </div>
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80">
                <div className="text-2xl font-black text-white">100%</div>
                <div className="text-xs text-slate-400 mt-1 uppercase font-semibold">Laser QR Serialized</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main 7-Gate Quality System Explorer */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="text-xs uppercase font-extrabold tracking-widest text-cyan-400 mb-2">
            Sequential Inspection Framework
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
            The 7-Point Quality Gates
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            From raw carbon fiber inflow to modal acoustic resonance, our quality checks are documented digitally for every export batch.
          </p>
        </div>

        {/* Gate Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
          {qualityGates.map((g) => {
            const isSelected = selectedGate === g.gate;
            return (
              <button
                key={g.gate}
                onClick={() => setSelectedGate(g.gate)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-950 border-cyan-400 text-white shadow-lg shadow-cyan-950'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                }`}
              >
                <div className="text-[10px] font-mono text-cyan-400 uppercase">GATE 0{g.gate}</div>
                <div className="text-xs font-bold truncate mt-0.5">{g.name.split(' ')[0]} {g.name.split(' ')[1]}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Gate In-Depth Analysis Card */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded bg-cyan-950 border border-cyan-800 text-cyan-400 text-xs font-mono font-bold uppercase">
                  Gate 0{currentGateData.gate} of 07
                </span>
                <span className="px-3 py-1 rounded bg-slate-800 text-slate-300 text-xs font-mono">
                  {currentGateData.stage}
                </span>
                <span className="px-3 py-1 rounded bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-mono font-bold">
                  Historical Pass: {currentGateData.passRate}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {currentGateData.name}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {currentGateData.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800">
                  <div className="text-xs font-semibold text-slate-400 uppercase">Acceptance Tolerance</div>
                  <div className="text-base font-black text-cyan-400 font-mono mt-1">{currentGateData.tolerance}</div>
                </div>
                <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800">
                  <div className="text-xs font-semibold text-slate-400 uppercase">Testing Standard</div>
                  <div className="text-base font-black text-white font-mono mt-1">{currentGateData.standard}</div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-slate-950/80 rounded-2xl border border-slate-800">
                <div className="text-xs font-semibold text-slate-400 uppercase">Laboratory Method</div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">{currentGateData.method}</div>
              </div>
            </div>

            {/* Visual Telemetry Chart Simulation */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-cyan-400 uppercase font-bold">Batch Telemetry Plot</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* Simulated Waveform or Distribution Curve */}
                <div className="h-44 bg-slate-900/80 rounded-xl border border-slate-800/80 p-3 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>Upper Spec (+2.5g)</span>
                    <span className="text-red-400/80">367.5g</span>
                  </div>

                  {/* SVG Bell Curve Simulation */}
                  <svg className="w-full h-24 overflow-visible" viewBox="0 0 200 60">
                    <path
                      d="M 10 55 Q 80 50 100 10 Q 120 50 190 55"
                      fill="none"
                      stroke="#06b6d4"
                      strokeWidth="2.5"
                    />
                    <line x1="100" y1="5" x2="100" y2="55" stroke="#38bdf8" strokeDasharray="2,2" strokeWidth="1.5" />
                    <circle cx="100" cy="10" r="3.5" fill="#38bdf8" />
                  </svg>

                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>Target: 365.0g (Mean)</span>
                    <span className="text-cyan-400">σ = 0.82g</span>
                  </div>
                </div>

                <div className="mt-4 space-y-1.5 text-xs text-slate-400">
                  <div className="flex justify-between">
                    <span>Standard Deviation (σ):</span>
                    <span className="text-white font-mono">0.82g (Six Sigma)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Process Capability (Cpk):</span>
                    <span className="text-emerald-400 font-mono font-bold">1.84 (Elite)</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenQcReport}
                className="mt-6 w-full py-2.5 rounded-xl bg-cyan-600/30 hover:bg-cyan-600/50 border border-cyan-500/50 text-cyan-300 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Inspect Official CoC Document
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Certifications & Compliance Badges */}
      <section className="py-14 bg-slate-950/80 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-400">
              International Accreditations
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mt-1">
              Audited Standards & Certifications
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl text-center">
              <div className="w-10 h-10 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 flex items-center justify-center mx-auto mb-2 text-sm font-bold font-mono">
                ISO
              </div>
              <div className="text-xs font-bold text-white">ISO 9001:2015</div>
              <div className="text-[10px] text-slate-400 mt-1">Quality Management System</div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl text-center">
              <div className="w-10 h-10 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 flex items-center justify-center mx-auto mb-2 text-sm font-bold font-mono">
                ENV
              </div>
              <div className="text-xs font-bold text-white">ISO 14001:2015</div>
              <div className="text-[10px] text-slate-400 mt-1">Environmental Standards</div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl text-center">
              <div className="w-10 h-10 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 flex items-center justify-center mx-auto mb-2 text-sm font-bold font-mono">
                SOC
              </div>
              <div className="text-xs font-bold text-white">BSCI Grade A</div>
              <div className="text-[10px] text-slate-400 mt-1">Ethical Labor & Fair Wages</div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl text-center">
              <div className="w-10 h-10 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 flex items-center justify-center mx-auto mb-2 text-sm font-bold font-mono">
                CE
              </div>
              <div className="text-xs font-bold text-white">CE Compliant</div>
              <div className="text-[10px] text-slate-400 mt-1">European Safety Directive</div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl text-center">
              <div className="w-10 h-10 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 flex items-center justify-center mx-auto mb-2 text-sm font-bold font-mono">
                USA
              </div>
              <div className="text-xs font-bold text-white">USAPA Certified</div>
              <div className="text-[10px] text-slate-400 mt-1">Paddle Friction & Deflection</div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl text-center">
              <div className="w-10 h-10 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 flex items-center justify-center mx-auto mb-2 text-sm font-bold font-mono">
                ROHS
              </div>
              <div className="text-xs font-bold text-white">RoHS 2.0</div>
              <div className="text-[10px] text-slate-400 mt-1">Non-Toxic Polyurethane Resins</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
