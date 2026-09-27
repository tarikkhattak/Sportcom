import React from 'react';

interface AboutPageProps {
  onOpenRfq: (platform?: string) => void;
  onOpenFactoryTour: () => void;
  onOpenSample: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenRfq,
  onOpenFactoryTour,
  onOpenSample,
}) => {
  return (
    <div className="bg-[#0b0f17] text-slate-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-[#111726] to-[#0b0f17] pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Sialkot Industrial Zone • Established 1998
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              The Engineering Backbone of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                World-Class Sports Brands
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              For over two decades, SPORTCOM has fused Sialkot's legendary sports manufacturing heritage with second-generation aerospace carbon composite engineering. Today, we quietly power tournament podiums worldwide.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 items-center">
              <button
                onClick={onOpenFactoryTour}
                className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm tracking-wide uppercase transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">event</span>
                Schedule Facility Audit
              </button>
              <button
                onClick={onOpenSample}
                className="px-6 py-3 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm tracking-wide uppercase transition-all flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">science</span>
                Request Sample Evaluation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sialkot Heritage & The Composite Evolution */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase font-extrabold tracking-widest text-cyan-400 mb-2">
              Heritage Meets Advanced Materials
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-4">
              Sialkot: The World Capital of Sporting Goods
            </h2>
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>
                Sialkot, Pakistan is globally renowned as the craftsmanship capital of world sports equipment — producing over 70% of the globe's professional hand-stitched soccer balls, including match balls for the FIFA World Cup™.
              </p>
              <p>
                Over the past decade, SPORTCOM pioneered the region’s transformation into an advanced carbon fiber composites hub. We invested tens of millions in climate-controlled cleanrooms, 16-bar nitrogen bladder tooling presses, and 5-axis CNC diamond drilling machines.
              </p>
              <p>
                The result is an unmatched competitive advantage for international brands: aerospace structural precision combined with deep metallurgical mold craftsmanship and agile Sialkot labor dexterity.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-800 pt-6">
              <div>
                <div className="text-2xl font-black text-cyan-400 font-mono">1998</div>
                <div className="text-xs text-slate-400 mt-0.5">Founding Year</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white font-mono">42+</div>
                <div className="text-xs text-slate-400 mt-0.5">Export Destinations</div>
              </div>
              <div>
                <div className="text-2xl font-black text-cyan-400 font-mono">350+</div>
                <div className="text-xs text-slate-400 mt-0.5">Skilled Composite Technicians</div>
              </div>
            </div>
          </div>

          {/* Facility Imagery Collage */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="SPORTCOM Cleanroom Autoclave Bay"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-700 p-4 rounded-2xl shadow-2xl max-w-xs backdrop-blur-md">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold mb-1">
                <span className="material-symbols-outlined text-sm">precision_manufacturing</span>
                FACILITY 01: COMPOSITE MONOCOQUE
              </div>
              <p className="text-[11px] text-slate-300">
                12 Autoclave nitrogen chambers and 28 heated hydraulic stations running continuously under ISO Class 7 cleanroom controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-14 bg-slate-950/80 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-400">
              Operational Tenets
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mt-1">
              Guiding Engineering Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">lock</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">Absolute IP Discretion</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We manufacture exclusively for 3rd-party brands and do not operate consumer house brands that compete with our OEM partners. Your CAD molds, graphic files, and core recipes remain strictly proprietary.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">verified</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">±2.5g Tolerance Discipline</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Mass production shouldn't mean unpredictable play. We verify every single frame across precision analytical balances and multi-pivot balance sensors to guarantee identical tournament playability.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">eco</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">Solar & Fair Wage Ethics</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Audited under BSCI Grade A social standards with zero child labor, progressive living wages, healthcare coverage for all composite technicians, and 400 kW rooftop solar energy generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Logistics & Export Infrastructure */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-400">
                Supply Chain & Global Dispatch
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase mt-1 mb-4">
                Strategic Sialkot Export Corridor
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Our plant is located within the export processing zone adjacent to the Sambrial Dry Port and Sialkot International Airport (SKT). We offer weekly direct air cargo consolidations to Frankfurt, Madrid, Dubai, and Chicago, as well as expedited containerized sea freight via Port Qasim / Karachi Port.
              </p>

              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-3 p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <span className="material-symbols-outlined text-cyan-400 text-lg">flight_takeoff</span>
                  <div>
                    <span className="text-white font-bold">Air Freight Express:</span>
                    <span className="text-slate-400 ml-1">4 - 6 Days door-to-door for prototype drops & urgent seasonal restocks.</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <span className="material-symbols-outlined text-cyan-400 text-lg">sailing</span>
                  <div>
                    <span className="text-white font-bold">Ocean Container Freight:</span>
                    <span className="text-slate-400 ml-1">20ft / 40ft High Cube containers via Karachi Port with bonded transit.</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <span className="material-symbols-outlined text-cyan-400 text-lg">gavel</span>
                  <div>
                    <span className="text-white font-bold">Incoterms Supported:</span>
                    <span className="text-slate-400 ml-1">FOB Sialkot / Karachi, CIF Europe / USA, or DDP direct to your 3PL warehouse.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Export Destination Matrix */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
              <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-4 flex items-center justify-between">
                <span>Key Export Hubs</span>
                <span className="text-cyan-400 font-mono">42 COUNTRIES</span>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 flex justify-between items-center text-xs">
                  <span className="text-white font-semibold">🇪🇸 Spain & Portugal (Iberian Circuit)</span>
                  <span className="text-cyan-400 font-mono">22,000 units/yr</span>
                </div>
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 flex justify-between items-center text-xs">
                  <span className="text-white font-semibold">🇺🇸 United States & Canada (Pickleball Pro)</span>
                  <span className="text-cyan-400 font-mono">35,000 units/yr</span>
                </div>
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 flex justify-between items-center text-xs">
                  <span className="text-white font-semibold">🇮🇹 Italy & France (Alpine Padel Tour)</span>
                  <span className="text-cyan-400 font-mono">18,000 units/yr</span>
                </div>
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 flex justify-between items-center text-xs">
                  <span className="text-white font-semibold">🇦🇪 UAE, Qatar & Saudi Arabia (Gulf Circuit)</span>
                  <span className="text-cyan-400 font-mono">15,000 units/yr</span>
                </div>
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 flex justify-between items-center text-xs">
                  <span className="text-white font-semibold">🇦🇷 Argentina & Brazil (South America)</span>
                  <span className="text-cyan-400 font-mono">12,000 units/yr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Visit & Protocol CTA */}
      <section className="py-14 border-t border-slate-800 bg-[#0d1320]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-400">
            Open Factory Policy
          </span>
          <h3 className="text-3xl font-black text-white uppercase mt-1 mb-4">
            Visit Our Sialkot Facility
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            We welcome brand executives, product managers, and third-party audit agencies (SGS, TÜV, Bureau Veritas) to inspect our cleanrooms, autoclave lines, and QC testing stations in person or via scheduled live video tour.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenFactoryTour}
              className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-950"
            >
              <span className="material-symbols-outlined text-base">calendar_month</span>
              Book In-Person or Virtual Audit
            </button>
            <button
              onClick={() => onOpenRfq()}
              className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">request_quote</span>
              Request OEM Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
