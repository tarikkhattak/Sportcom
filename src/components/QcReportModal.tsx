import React, { useState } from 'react';

interface QcReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QcReportModal: React.FC<QcReportModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#fafaf5] rounded-3xl p-6 lg:p-8 shadow-2xl border border-black/10 max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#eeeee9] text-[#1a1c19] flex items-center justify-center hover:bg-[#e8e8e3] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {downloaded ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#b9f54c] text-[#131f00] flex items-center justify-center mx-auto shadow-md">
              <span className="material-symbols-outlined text-2xl">download_done</span>
            </div>
            <h3 className="font-bold text-2xl text-[#1a1c19]">
              QC Report Dispatched & Ready
            </h3>
            <p className="text-sm text-[#696C65] max-w-md mx-auto">
              A certified 14-page unredacted CMM Metrology Dossier has been transmitted to <span className="font-semibold text-[#1a1c19]">{email}</span> for <span className="font-semibold text-[#1a1c19]">{company}</span>.
            </p>
            <div className="p-4 rounded-xl bg-white border border-[#c6c7c1] text-left text-xs font-mono space-y-1">
              <div className="text-[#659100] font-bold">● DOSSIER IDENTIFIER: SPC-METROLOGY-DOC-2025-AQL</div>
              <div>● SERIALIZATION HASH: a7f893d-4c81-88ef-torque-nist</div>
              <div>● TOTAL MEASURED SAMPLES: 32 UNITS (100% EXPORT TIER)</div>
            </div>
            <button
              onClick={() => {
                setDownloaded(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-[#1a1c19] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-all cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="border-b border-[#c6c7c1]/50 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1c19] text-[#b9f54c] text-[10px] font-bold uppercase tracking-wider mb-2">
                <span>NIST TRACEABLE · ISO 9001:2015</span>
              </div>
              <h3 className="font-bold text-2xl text-[#1a1c19]">
                Final Metrology & QC Release Certificate
              </h3>
              <p className="text-xs text-[#696C65]">
                DOCUMENT NO: SPC-QC-2025-04812 · AQL LEVEL II (0.65 CRITICAL / 1.0 MAJOR)
              </p>
            </div>

            {/* Simulated Live Certificate Document */}
            <div className="bg-white rounded-2xl p-5 border border-[#c6c7c1]/60 shadow-sm space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-[#1a1c19] pb-3 border-b border-[#eeeee9]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#659100]">verified</span>
                  <span>SPORTCOM QA METROLOGY BAY #01 · SIALKOT</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#b9f54c] text-[#131f00] font-bold uppercase text-[10px]">
                  STATUS: 100% RELEASED
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#f4f4ef] text-[#454843]">
                    <tr>
                      <th className="p-2.5">Parameter</th>
                      <th className="p-2.5">Target</th>
                      <th className="p-2.5">Measured Mean</th>
                      <th className="p-2.5">Std Dev (σ)</th>
                      <th className="p-2.5 text-right">Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#eeeee9]">
                    <tr>
                      <td className="p-2.5 font-sans font-semibold text-[#1a1c19]">Unstrung Weight</td>
                      <td className="p-2.5">365.0g ± 3.0g</td>
                      <td className="p-2.5">364.8g</td>
                      <td className="p-2.5">0.84g</td>
                      <td className="p-2.5 text-right font-bold text-[#659100]">PASS</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-sans font-semibold text-[#1a1c19]">Balance Fulcrum</td>
                      <td className="p-2.5">265.0mm ± 2mm</td>
                      <td className="p-2.5">264.6mm</td>
                      <td className="p-2.5">0.42mm</td>
                      <td className="p-2.5 text-right font-bold text-[#659100]">PASS</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-sans font-semibold text-[#1a1c19]">Head Hardness (Shore)</td>
                      <td className="p-2.5">17.0 EVA ± 1°</td>
                      <td className="p-2.5">17.1 EVA</td>
                      <td className="p-2.5">0.18°</td>
                      <td className="p-2.5 text-right font-bold text-[#659100]">PASS</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-sans font-semibold text-[#1a1c19]">Drill Alignment</td>
                      <td className="p-2.5">± 0.20mm</td>
                      <td className="p-2.5">± 0.08mm</td>
                      <td className="p-2.5">0.03mm</td>
                      <td className="p-2.5 text-right font-bold text-[#659100]">PASS</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-sans font-semibold text-[#1a1c19]">Cross-Hatch Adhesion</td>
                      <td className="p-2.5">Class 4B Min</td>
                      <td className="p-2.5">Class 5B</td>
                      <td className="p-2.5">0 Delam</td>
                      <td className="p-2.5 text-right font-bold text-[#659100]">PASS</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Download Request Form */}
            <form onSubmit={handleDownload} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c19] mb-1">
                    Corporate Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="director@brand.com"
                    className="w-full h-11 px-3.5 rounded-xl bg-white border border-[#c6c7c1] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1c19]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c19] mb-1">
                    Company / Organization *
                  </label>
                  <input
                    required
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Scandinavian Padel Tour"
                    className="w-full h-11 px-3.5 rounded-xl bg-white border border-[#c6c7c1] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1c19]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#b9f54c] text-[#131f00] font-bold text-xs uppercase tracking-wider hover:bg-[#9ed830] transition-all shadow-md cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">download</span>
                  <span>Download Complete 14-Page Inspection PDF</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
