import React, { useState } from 'react';

interface FactoryTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FactoryTourModal: React.FC<FactoryTourModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [type, setType] = useState('In-Person Sialkot Facility Audit (EPZ Zone)');
  const [date, setDate] = useState('2026-10-15');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#fafaf5] rounded-3xl p-6 lg:p-8 shadow-2xl border border-black/10 max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#eeeee9] text-[#1a1c19] flex items-center justify-center hover:bg-[#e8e8e3] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#b9f54c] text-[#131f00] flex items-center justify-center mx-auto shadow-md">
              <span className="material-symbols-outlined text-2xl">event_available</span>
            </div>
            <h3 className="font-bold text-2xl text-[#1a1c19]">
              Factory Tour Request Registered
            </h3>
            <p className="text-sm text-[#696C65] max-w-md mx-auto">
              Our Sialkot Plant Operations Liaison has recorded your session for <span className="font-semibold text-[#1a1c19]">{date}</span> ({type}). We will contact <span className="font-semibold text-[#1a1c19]">{email}</span> with security clearance badges and flight/airport transfer logistics.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-[#1a1c19] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#131f00] text-[#b9f54c] text-[10px] font-bold uppercase tracking-wider mb-2">
                INDUSTRIAL VISIT PROTOCOL
              </span>
              <h3 className="font-bold text-2xl text-[#1a1c19]">
                Schedule Factory Tour / Audit
              </h3>
              <p className="text-xs text-[#696C65] mt-1">
                Inspect 14 hydraulic hot-press stations, Class 10k cleanrooms, 5-axis CNC tooling, and destructive pneumatic impact rigs firsthand in Sialkot, Pakistan.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c19] mb-1">
                  Tour Format *
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl bg-white border border-[#c6c7c1] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1c19]"
                >
                  <option>In-Person Sialkot Facility Audit (EPZ Zone + Airport Escort)</option>
                  <option>Live High-Definition Video Inspection & Engineer Q&A</option>
                  <option>Independent Third-Party Verification (TÜV / SGS Audit Access)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c19] mb-1">
                  Target Date *
                </label>
                <input
                  required
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl bg-white border border-[#c6c7c1] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1c19]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c19] mb-1">
                  Lead Auditor / Delegate Name *
                </label>
                <input
                  required
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="e.g. Elena Rostova, Quality Director"
                  className="w-full h-11 px-3.5 rounded-xl bg-white border border-[#c6c7c1] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1c19]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c19] mb-1">
                  Official Corporate Email *
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.rostova@sportingbrand.eu"
                  className="w-full h-11 px-3.5 rounded-xl bg-white border border-[#c6c7c1] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1c19]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#1a1c19] text-white font-bold text-xs uppercase tracking-wider hover:bg-black transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span>Confirm Schedule Request</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
