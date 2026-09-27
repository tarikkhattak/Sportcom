import React, { useState } from 'react';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlatform?: string;
}

export const RfqModal: React.FC<RfqModalProps> = ({
  isOpen,
  onClose,
  initialPlatform = 'Padel Rackets (3K / 12K / 18K Carbon)',
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    platform: initialPlatform,
    volume: 'Mid Tier: 300 – 1,000 units',
    modelType: 'Model A: OEM (Proprietary CAD / Custom Molds)',
    carbonGrade: '12K High-Modulus Carbon',
    projectBrief: '',
    fileName: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#fafaf5] rounded-3xl p-6 lg:p-10 shadow-2xl border border-black/10 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#eeeee9] text-[#1a1c19] flex items-center justify-center hover:bg-[#e8e8e3] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#b9f54c] text-[#131f00] flex items-center justify-center mx-auto shadow-[0_0_24px_rgba(183,243,74,0.4)]">
              <span className="material-symbols-outlined text-3xl">task_alt</span>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#659100]">
                CONFIDENTIAL B2B TRANSMISSION CONFIRMED
              </span>
              <h3 className="font-bold text-2xl text-[#1a1c19] tracking-tight">
                Engineering Specification Received
              </h3>
              <p className="text-sm text-[#696C65] max-w-md mx-auto">
                Thank you, <span className="font-semibold text-[#1a1c19]">{formData.name}</span>. Our Lead OEM Director in Sialkot has registered your project (<span className="font-mono text-xs text-[#1a1c19] bg-[#eeeee9] px-2 py-0.5 rounded">SPC-RFQ-{Math.floor(100000 + Math.random() * 900000)}</span>). A complete preliminary BOM pricing sheet and mutual NDA will be dispatched to <span className="font-semibold text-[#1a1c19]">{formData.email}</span> within 24 business hours.
              </p>
            </div>

            <div className="bg-[#eeeee9] p-4 rounded-2xl text-left text-xs space-y-2 text-[#454843]">
              <div className="flex justify-between">
                <span className="text-[#696C65]">Product Platform:</span>
                <span className="font-semibold text-[#1a1c19]">{formData.platform}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#696C65]">Batch Scale:</span>
                <span className="font-semibold text-[#1a1c19]">{formData.volume}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#696C65]">Corporate Entity:</span>
                <span className="font-semibold text-[#1a1c19]">{formData.company}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#1a1c19] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-all cursor-pointer"
              >
                Back to Specifications
              </button>
              <a
                href="https://wa.me/923414474700"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#b9f54c] text-[#131f00] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#9ed830] transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span>Fast-Track WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131f00] text-[#b9f54c] text-[11px] font-bold uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b9f54c] animate-ping" />
                <span>CONFIDENTIAL B2B PROCUREMENT</span>
              </div>
              <h2 className="font-bold text-2xl lg:text-3xl text-[#1a1c19] tracking-tight">
                Request Factory Manufacturing Quote
              </h2>
              <p className="text-sm text-[#696C65] mt-1">
                Direct factory pricing, custom mold development, and OEM/ODM private label programs. Receive an engineering specification and pricing breakdown within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c19] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Marcus Vance"
                    className="w-full h-12 px-4 rounded-xl bg-white border border-[#c6c7c1] text-[#1a1c19] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1c19]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c19] mb-1.5">
                    Company / Brand Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Sports Ltd"
                    className="w-full h-12 px-4 rounded-xl bg-white border border-[#c6c7c1] text-[#1a1c19] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1c19]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c19] mb-1.5">
                    Business Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="m.vance@brand.com"
                    className="w-full h-12 px-4 rounded-xl bg-white border border-[#c6c7c1] text-[#1a1c19] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1c19]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c19] mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+44 7911 123456"
                    className="w-full h-12 px-4 rounded-xl bg-white border border-[#c6c7c1] text-[#1a1c19] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1c19]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c19] mb-1.5">
                    Product Platform *
                  </label>
                  <select
                    value={formData.platform}
                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl bg-white border border-[#c6c7c1] text-[#1a1c19] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1c19]"
                  >
                    <option>Padel Rackets (3K / 12K / 18K Carbon)</option>
                    <option>Pickleball Paddles (Raw Toray T700)</option>
                    <option>Beach Tennis Rackets (3K / Kevlar)</option>
                    <option>Sports Accessories (Bags, Grips, Packaging)</option>
                    <option>Full Multi-Sport Brand Catalog</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c19] mb-1.5">
                    Estimated Production Run *
                  </label>
                  <select
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl bg-white border border-[#c6c7c1] text-[#1a1c19] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1c19]"
                  >
                    <option>Pilot Batch: 100 – 300 units</option>
                    <option>Mid Tier: 300 – 1,000 units</option>
                    <option>Commercial: 1,000 – 5,000 units</option>
                    <option>High Volume Container: 5,000+ units</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c19] mb-1.5">
                  Project Brief & Technical Specifications
                </label>
                <textarea
                  rows={3}
                  value={formData.projectBrief}
                  onChange={(e) => setFormData({ ...formData, projectBrief: e.target.value })}
                  placeholder="Detail target launch date, balance preferences (e.g. 265mm), desired carbon fiber layup (3K/12K/18K), EVA core density, destination port, etc."
                  className="w-full p-4 rounded-xl bg-white border border-[#c6c7c1] text-[#1a1c19] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1c19]"
                />
              </div>

              {/* File upload drag-and-drop bay */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c19] mb-1.5">
                  Attach Tech-Pack, 3D CAD or Artwork (Optional)
                </label>
                <label className="border-2 border-dashed border-[#c6c7c1] hover:border-[#1a1c19] rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer bg-white transition-colors">
                  <span className="material-symbols-outlined text-2xl text-[#659100]">
                    cloud_upload
                  </span>
                  <span className="text-xs text-[#1a1c19] font-medium mt-1">
                    {formData.fileName ? (
                      <span className="text-[#659100] font-bold">Selected: {formData.fileName}</span>
                    ) : (
                      'Click to upload PDF, STEP, AI, DXF, or ZIP (Max 50MB)'
                    )}
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".pdf,.step,.stp,.ai,.dxf,.zip,.png,.jpg"
                  />
                </label>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1a1c19] text-white text-sm font-bold hover:bg-black transition-all shadow-xl cursor-pointer"
                >
                  <span>Submit Manufacturing Inquiry</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <div className="flex items-center gap-2 text-xs text-[#696C65]">
                  <span className="material-symbols-outlined text-[#659100] text-sm">lock</span>
                  <span>Bilateral NDA auto-generated & logged</span>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
