import React, { useState } from 'react';

interface SampleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SampleModal: React.FC<SampleModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [weave, setWeave] = useState('18K Ultra-Dense Aero Carbon Face');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');

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
              <span className="material-symbols-outlined text-2xl">local_shipping</span>
            </div>
            <h3 className="font-bold text-2xl text-[#1a1c19]">
              Sample Racket Dispatched for Production
            </h3>
            <p className="text-sm text-[#696C65] max-w-md mx-auto">
              Your serialized benchmark evaluation unit ({weave}) is prepared at our Sialkot Prototype Bay. We will send DHL Express Air Tracking within 24 hours to <span className="font-semibold text-[#1a1c19]">{email}</span>.
            </p>
            <div className="p-4 rounded-xl bg-white border border-[#c6c7c1] text-left text-xs font-mono space-y-1">
              <div>● WAYBILL CARRIER: DHL EXPRESS AIR LOGISTICS</div>
              <div>● ESTIMATED TRANSIT: 4–7 BUSINESS DAYS</div>
              <div>● DESTINATION: {shippingAddress}</div>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-[#1a1c19] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#1a1c19] text-[#b9f54c] text-[10px] font-bold uppercase tracking-wider mb-2">
                EVALUATION UNIT DISPATCH
              </span>
              <h3 className="font-bold text-2xl text-[#1a1c19]">
                Order Quality Test Unit
              </h3>
              <p className="text-xs text-[#696C65] mt-1">
                We dispatch production-grade padel racquets complete with laser-etched serial tags, balanced calibration certificates, and material reports.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c19] mb-1">
                  Carbon Weave Architecture *
                </label>
                <select
                  value={weave}
                  onChange={(e) => setWeave(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl bg-white border border-[#c6c7c1] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1c19]"
                >
                  <option>18K Ultra-Dense Aero Carbon Face (Flagship Smash)</option>
                  <option>12K Bidirectional Japanese Carbon Face (Tour Pro)</option>
                  <option>3K Standard Toray Carbon Face (All-Round)</option>
                  <option>Fiberglass Elastic Matrix (High-Flex Control)</option>
                  <option>Kevlar-Carbon Impact Perimeter Hybrid</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c19] mb-1">
                  Recipient Name & Title *
                </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Henrik Larsson, Head of Product"
                  className="w-full h-11 px-3.5 rounded-xl bg-white border border-[#c6c7c1] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1c19]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c19] mb-1">
                  Corporate Email *
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="h.larsson@brand.com"
                  className="w-full h-11 px-3.5 rounded-xl bg-white border border-[#c6c7c1] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1c19]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c19] mb-1">
                  Delivery Address & Country *
                </label>
                <textarea
                  required
                  rows={2}
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  placeholder="Street, City, Postal Code, Country (for DHL air dispatch)"
                  className="w-full p-3 rounded-xl bg-white border border-[#c6c7c1] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1c19]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#b9f54c] text-[#131f00] font-bold text-xs uppercase tracking-wider hover:bg-[#9ed830] transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">flight_takeoff</span>
                  <span>Confirm Sample Unit Dispatch</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
