import React, { useState } from 'react';

interface CustomizationPageProps {
  onOpenRfqWithCustomConfig: (configSummary: string) => void;
  onOpenSample: () => void;
}

export const CustomizationPage: React.FC<CustomizationPageProps> = ({
  onOpenRfqWithCustomConfig,
  onOpenSample,
}) => {
  // Configurator state
  const [selectedMold, setSelectedMold] = useState<string>('diamond');
  const [selectedCarbon, setSelectedCarbon] = useState<string>('24k');
  const [selectedTexture, setSelectedTexture] = useState<string>('hex-3d');
  const [selectedCore, setSelectedCore] = useState<string>('black-17');
  const [selectedAccentColor, setSelectedAccentColor] = useState<string>('#06b6d4'); // cyan
  const [selectedBridge, setSelectedBridge] = useState<string>('aero-wing');
  const [brandLogoText, setBrandLogoText] = useState<string>('VORTEX PRO');

  const moldOptions = [
    { id: 'diamond', name: 'Diamond Power Mold', type: 'Padel (38mm)', balanceOffset: 12, powerBoost: 15, controlPenalty: 8, baseWeight: 368 },
    { id: 'teardrop', name: 'Teardrop Precision Mold', type: 'Padel (38mm)', balanceOffset: 5, powerBoost: 8, controlPenalty: 2, baseWeight: 364 },
    { id: 'round', name: 'Round Control Mold', type: 'Padel (38mm)', balanceOffset: -5, powerBoost: 0, controlPenalty: -10, baseWeight: 358 },
    { id: 'pickle-elongated', name: 'Elongated Tour Paddle', type: 'Pickleball (16mm)', balanceOffset: 8, powerBoost: 12, controlPenalty: 4, baseWeight: 228 },
    { id: 'pickle-widebody', name: 'Widebody Control Paddle', type: 'Pickleball (16mm)', balanceOffset: -2, powerBoost: 2, controlPenalty: -8, baseWeight: 222 },
  ];

  const carbonOptions = [
    { id: '24k', name: '24K Spread Tow Carbon', tag: '240 GPa Modulus', powerFactor: 16, rigidityLabel: 'Ultra-Stiff' },
    { id: '18k', name: '18K Pro Weave Carbon', tag: '230 GPa Modulus', powerFactor: 12, rigidityLabel: 'Tournament Stiff' },
    { id: '12k', name: '12K Carbon Matrix', tag: '215 GPa Modulus', powerFactor: 8, rigidityLabel: 'Progressive Medium' },
    { id: '3k', name: '3K Carbon Twill', tag: '200 GPa Modulus', powerFactor: 4, rigidityLabel: 'Flexible Touch' },
    { id: 't700', name: 'Toray T700 Raw Carbon', tag: 'Raw Peel-Ply', powerFactor: 10, rigidityLabel: 'Extreme Spin' },
  ];

  const textureOptions = [
    { id: 'hex-3d', name: '3D Hexagonal Spin Matrix', desc: 'Molded silicone hexagonal relief for maximum slice & kick grip' },
    { id: 'sand-grit', name: 'High-Grit Quartz Silica', desc: 'Sprayed abrasive micro-grit finish for aggressive friction' },
    { id: 'stealth-matte', name: 'Stealth Anti-Glare Matte', desc: '2K polyurethane silky matte with zero reflection' },
    { id: 'high-gloss', name: 'High-Gloss Mirror Finish', desc: 'UV protective clear coat emphasizing depth of carbon weave' },
  ];

  const coreOptions = [
    { id: 'eva-soft', name: 'Soft Elastic EVA 13', density: '13 kg/m³', desc: 'Maximum trampoline sweet bounce and arm comfort', weightMod: -4 },
    { id: 'black-17', name: 'Black Medium EVA 17', density: '17 kg/m³', desc: 'Pro standard balance between control and rebound recovery', weightMod: 0 },
    { id: 'pro-28', name: 'High-Density EVA Pro 28', density: '28 kg/m³', desc: 'Ultra-firm response for crushing smash exits at high swing-speeds', weightMod: 6 },
    { id: 'poly-core', name: 'Polypropylene Honeycomb 16mm', density: 'PP Cell', desc: 'Consistent quiet response with edge foam injection', weightMod: -120 },
  ];

  const colorPalettes = [
    { name: 'Cyan Pro', hex: '#06b6d4', border: '#22d3ee' },
    { name: 'Neon Volt', hex: '#84cc16', border: '#a3e635' },
    { name: 'Solar Orange', hex: '#f97316', border: '#fb923c' },
    { name: 'Crimson Red', hex: '#ef4444', border: '#f87171' },
    { name: 'Electric Violet', hex: '#8b5cf6', border: '#a78bfa' },
    { name: 'Monochrome Stealth', hex: '#94a3b8', border: '#cbd5e1' },
  ];

  const bridgeOptions = [
    { id: 'aero-wing', name: 'Dual-Channel Aero Wing', desc: 'Reduces drag vortex by 14% at net speed' },
    { id: 'hex-stabilizer', name: 'Hex-Core Stabilizer', desc: 'Maximum torsional rigidity across throat' },
    { id: 'silicone-damper', name: 'Vibra-Stop Silicone Insert', desc: 'Dampens high-frequency harmonic vibration' },
  ];

  // Dynamic calculations
  const curMold = moldOptions.find(m => m.id === selectedMold) || moldOptions[0];
  const curCarbon = carbonOptions.find(c => c.id === selectedCarbon) || carbonOptions[0];
  const curCore = coreOptions.find(c => c.id === selectedCore) || coreOptions[0];

  const isPickleball = selectedMold.includes('pickle');
  const calculatedWeight = isPickleball
    ? `${curMold.baseWeight + (curCore.weightMod < 0 ? 0 : curCore.weightMod)}g (±2g)`
    : `${curMold.baseWeight + curCore.weightMod}g (±2.5g)`;

  const calculatedBalance = isPickleball
    ? `${235 + curMold.balanceOffset}mm`
    : `${265 + curMold.balanceOffset}mm`;

  const calculatedPower = Math.min(99, Math.max(50, 70 + curMold.powerBoost + curCarbon.powerFactor));
  const calculatedControl = Math.min(99, Math.max(50, 85 - curMold.powerBoost + (selectedTexture === 'hex-3d' ? 8 : 4)));
  const calculatedManeuver = Math.min(99, Math.max(50, 88 - (curMold.balanceOffset > 0 ? curMold.balanceOffset * 1.2 : 0)));

  const handleExportToRfq = () => {
    const summary = `Custom Spec: Mold [${curMold.name}] | Face [${curCarbon.name}] | Texture [${selectedTexture}] | Core [${curCore.name}] | Accent Color [${selectedAccentColor}] | Throat Bridge [${selectedBridge}] | Logo [${brandLogoText}] | Target Weight [${calculatedWeight}]`;
    onOpenRfqWithCustomConfig(summary);
  };

  return (
    <div className="bg-[#0b0f17] text-slate-100 min-h-screen">
      {/* Studio Header */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-[#111726] to-[#0b0f17] pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Interactive 3D Configurator Studio
              </div>
              <h1 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                Bespoke Racket & Paddle Builder
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                Configure your brand's flagship specifications: select composite carbon plies, molded surface spin textures, core densities, aerodynamic throat bridges, and custom pantone cosmetics.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenSample}
                className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">science</span>
                Order Physical Sample
              </button>
              <button
                onClick={handleExportToRfq}
                className="px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyan-950 flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">send</span>
                Export Spec To RFQ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Builder Grid */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Mold Selection */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-500 text-slate-950 text-xs font-black flex items-center justify-center">1</span>
                  Select Frame Mold & Sport Platform
                </h3>
                <span className="text-xs font-mono text-cyan-400">{curMold.type}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {moldOptions.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMold(m.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedMold === m.id
                        ? 'bg-cyan-950/80 border-cyan-400 shadow-md shadow-cyan-950 text-white'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">{m.name}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{m.type}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Carbon Weave */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-500 text-slate-950 text-xs font-black flex items-center justify-center">2</span>
                  Surface Carbon Fiber Layup
                </h3>
                <span className="text-xs font-mono text-cyan-400">{curCarbon.rigidityLabel}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {carbonOptions.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCarbon(c.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedCarbon === c.id
                        ? 'bg-cyan-950/80 border-cyan-400 shadow-md shadow-cyan-950 text-white'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">{c.name}</div>
                    <div className="text-[11px] text-cyan-400 font-mono mt-0.5">{c.tag}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Surface Finish & 3D Texture */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-500 text-slate-950 text-xs font-black flex items-center justify-center">3</span>
                  Spin Friction Surface & Finish
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {textureOptions.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTexture(t.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedTexture === t.id
                        ? 'bg-cyan-950/80 border-cyan-400 shadow-md shadow-cyan-950 text-white'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">{t.name}</div>
                    <div className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">{t.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Core Density & Foam */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-500 text-slate-950 text-xs font-black flex items-center justify-center">4</span>
                  Internal Core Density (EVA / Honeycomb)
                </h3>
                <span className="text-xs font-mono text-cyan-400">{curCore.density}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {coreOptions.map((core) => (
                  <button
                    key={core.id}
                    onClick={() => setSelectedCore(core.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedCore === core.id
                        ? 'bg-cyan-950/80 border-cyan-400 shadow-md shadow-cyan-950 text-white'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">{core.name}</div>
                    <div className="text-[11px] text-slate-400 mt-1 leading-relaxed">{core.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Custom Brand Decal, Color & Bridge */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-500 text-slate-950 text-xs font-black flex items-center justify-center">5</span>
                  Brand Accent & Throat Engineering
                </h3>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                  Frame Accent Palette (Pantone Matched)
                </label>
                <div className="flex flex-wrap gap-3">
                  {colorPalettes.map((p) => (
                    <button
                      key={p.name}
                      onClick={() => setSelectedAccentColor(p.hex)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                        selectedAccentColor === p.hex
                          ? 'border-white bg-slate-800 text-white'
                          : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: p.hex }} />
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                  Throat Bridge Architecture
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {bridgeOptions.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBridge(b.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedBridge === b.id
                          ? 'bg-cyan-950 border-cyan-400 text-white'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-bold">{b.name}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{b.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                  Brand Specimen Name / Water Decal Mark
                </label>
                <input
                  type="text"
                  value={brandLogoText}
                  onChange={(e) => setBrandLogoText(e.target.value)}
                  placeholder="Your Brand / Model Name"
                  className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white uppercase tracking-wider font-bold w-full focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>
          </div>

          {/* Live 3D / Visual Racket Simulation Preview (5 Cols Sticky) */}
          <div className="lg:col-span-5 sticky top-24 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                  REAL-TIME SIMULATION
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-mono">
                  SIALKOT CAD v2.8
                </span>
              </div>

              {/* Racket Vector Graphic Render */}
              <div className="relative h-80 flex items-center justify-center bg-gradient-to-b from-slate-950 to-slate-900 rounded-2xl border border-slate-800/80 p-4 overflow-hidden">
                {/* Visual Canvas Representation */}
                <div className="relative flex flex-col items-center">
                  {/* Racket Head */}
                  <div
                    className={`relative flex items-center justify-center transition-all duration-500 border-4 shadow-2xl ${
                      isPickleball
                        ? 'w-44 h-56 rounded-2xl'
                        : selectedMold === 'diamond'
                        ? 'w-48 h-56 rounded-t-3xl rounded-b-xl'
                        : selectedMold === 'round'
                        ? 'w-48 h-52 rounded-full'
                        : 'w-48 h-56 rounded-t-2xl rounded-b-2xl'
                    }`}
                    style={{
                      borderColor: selectedAccentColor,
                      backgroundColor: '#111827',
                      backgroundImage:
                        selectedCarbon === '24k'
                          ? 'repeating-linear-gradient(45deg, #1f2937 0, #1f2937 12px, #0f172a 12px, #0f172a 24px)'
                          : selectedCarbon === '18k'
                          ? 'repeating-linear-gradient(0deg, #1e293b 0, #1e293b 4px, #0f172a 4px, #0f172a 8px)'
                          : 'repeating-linear-gradient(45deg, #1e293b 0, #1e293b 3px, #0f172a 3px, #0f172a 6px)',
                    }}
                  >
                    {/* 3D Texture overlay pattern */}
                    {selectedTexture === 'hex-3d' && (
                      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#38bdf8_1.5px,transparent_1.5px)] [background-size:12px_12px]" />
                    )}
                    {selectedTexture === 'sand-grit' && (
                      <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:4px_4px]" />
                    )}

                    {/* Laser Decal Branding */}
                    <div className="z-10 text-center px-4">
                      <div
                        className="text-base sm:text-lg font-black tracking-widest uppercase transition-colors"
                        style={{ color: selectedAccentColor }}
                      >
                        {brandLogoText || 'BRAND NAME'}
                      </div>
                      <div className="text-[9px] font-mono tracking-widest text-slate-400 uppercase mt-0.5">
                        {curCarbon.name.split(' ')[0]} MONOCOQUE
                      </div>
                      <div className="text-[8px] font-mono text-cyan-300 mt-1">
                        {selectedTexture.toUpperCase()}
                      </div>
                    </div>

                    {/* Hole pattern simulation for padel */}
                    {!isPickleball && (
                      <div className="absolute inset-x-6 top-8 bottom-8 pointer-events-none grid grid-cols-5 gap-2 opacity-30">
                        {Array.from({ length: 30 }).map((_, i) => (
                          <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-900 border border-slate-700 mx-auto" />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Throat Bridge & Dampers */}
                  <div
                    className="w-16 h-7 flex items-center justify-center transition-all -mt-1"
                    style={{
                      borderLeft: `3px solid ${selectedAccentColor}`,
                      borderRight: `3px solid ${selectedAccentColor}`,
                      backgroundColor: '#090d16',
                    }}
                  >
                    <div
                      className="w-6 h-2 rounded-sm"
                      style={{ backgroundColor: selectedAccentColor, opacity: 0.8 }}
                    />
                  </div>

                  {/* Grip Handle */}
                  <div className="w-9 h-20 bg-slate-950 border border-slate-800 rounded-b-md relative flex flex-col justify-end p-1 shadow-lg">
                    {/* Overgrip bands */}
                    <div className="w-full h-1 bg-slate-800 mb-1 rounded-sm" />
                    <div className="w-full h-1 bg-slate-800 mb-1 rounded-sm" />
                    <div className="w-full h-1 bg-slate-800 mb-1 rounded-sm" />
                    {/* Custom Butt Cap with color rim */}
                    <div
                      className="w-full h-2 rounded-b-sm"
                      style={{ backgroundColor: selectedAccentColor }}
                    />
                  </div>
                </div>
              </div>

              {/* Dynamic Telemetry Specs */}
              <div className="mt-5 space-y-3">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                    <div className="text-slate-500 font-semibold uppercase text-[10px]">Tuned Weight</div>
                    <div className="text-sm font-mono font-black text-cyan-300 mt-0.5">{calculatedWeight}</div>
                  </div>
                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                    <div className="text-slate-500 font-semibold uppercase text-[10px]">Balance Point</div>
                    <div className="text-sm font-mono font-black text-white mt-0.5">{calculatedBalance}</div>
                  </div>
                </div>

                {/* Rating Gauges */}
                <div className="space-y-2 pt-2">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-400">Power Index</span>
                      <span className="text-cyan-400 font-mono">{calculatedPower}%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-cyan-400 h-full rounded-full transition-all duration-300"
                        style={{ width: `${calculatedPower}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-400">Control Index</span>
                      <span className="text-sky-400 font-mono">{calculatedControl}%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-sky-400 h-full rounded-full transition-all duration-300"
                        style={{ width: `${calculatedControl}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-400">Maneuverability</span>
                      <span className="text-indigo-400 font-mono">{calculatedManeuver}%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-indigo-400 h-full rounded-full transition-all duration-300"
                        style={{ width: `${calculatedManeuver}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={handleExportToRfq}
                    className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-cyan-950"
                  >
                    <span className="material-symbols-outlined text-base">send</span>
                    Send Spec to Factory RFQ
                  </button>
                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    Our Sialkot tooling team will respond with a CAD DFM report within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
