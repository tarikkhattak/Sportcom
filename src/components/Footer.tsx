import React from 'react';
import { PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenRfq: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenRfq }) => {
  return (
    <footer className="w-full bg-[#1a1c19] text-[#E9EAE3] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col justify-between pr-4 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-7 w-7 relative flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 36 36" fill="none" className="h-7 w-7">
                    <path d="M4 17L12 4H32L24 17H4Z" fill="#ffffff" />
                    <path d="M12 19L4 32H24L32 19H12Z" fill="#b9f54c" />
                    <circle cx="18" cy="18" r="3.5" fill="#1a1c19" />
                  </svg>
                </div>
                <span className="font-bold text-2xl uppercase tracking-tight text-white leading-none">
                  SPORTCOM
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#131f00] text-[#b9f54c] text-[10px] font-bold uppercase tracking-wider border border-[#b9f54c]/30">
                  OEM/ODM
                </span>
              </div>
              <p className="text-sm text-[#838480] max-w-sm leading-relaxed">
                The specialized manufacturing partner engineered for international sports brands. Precision composite padel rackets, pickleball paddles, and specialized gear from Sialkot, Pakistan's precision export hub.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-2 text-[#838480] text-xs font-semibold">
              <span className="material-symbols-outlined text-[16px] text-[#b9f54c]">
                verified
              </span>
              <span>Certified Industrial Facility · Sialkot Export Processing Zone</span>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-bold text-white mb-4 text-base tracking-tight">Products</h4>
            <ul className="space-y-2.5 text-sm text-[#838480]">
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Padel Rackets (3K/12K/18K)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Pickleball Paddles (Toray T700)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Beach Tennis Rackets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('customization')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Custom Frame Molds
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Thermal Bags & Accessories
                </button>
              </li>
            </ul>
          </div>

          {/* Manufacturing Column */}
          <div>
            <h4 className="font-bold text-white mb-4 text-base tracking-tight">Manufacturing</h4>
            <ul className="space-y-2.5 text-sm text-[#838480]">
              <li>
                <button
                  onClick={() => onNavigate('manufacturing')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Assembly Protocol (6 Stations)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('oem-odm')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  OEM & ODM Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('customization')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  CNC Tooling & Molds
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quality')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Testing Lab & Quality Control
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Factory Audits & ESG
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Inquiries Column */}
          <div>
            <h4 className="font-bold text-white mb-4 text-base tracking-tight">Direct Inquiries</h4>
            <ul className="space-y-3 text-xs text-[#838480]">
              <li>
                <span className="block font-bold text-[#b9f54c] uppercase tracking-wider">
                  RFQ Coordination
                </span>
                <a
                  href="mailto:info@sportcompadel.com"
                  className="text-white hover:underline text-sm font-medium mt-0.5 inline-block"
                >
                  info@sportcompadel.com
                </a>
              </li>
              <li>
                <span className="block font-bold text-[#b9f54c] uppercase tracking-wider">
                  Direct Factory Hotline
                </span>
                <a
                  href="tel:+923414474700"
                  className="text-white hover:underline text-sm font-medium mt-0.5 inline-block"
                >
                  +92 341 4474700
                </a>
              </li>
              <li>
                <span className="block font-bold text-[#b9f54c] uppercase tracking-wider">
                  Sialkot Industrial Complex
                </span>
                <span className="text-white/80 leading-relaxed block mt-0.5">
                  Export Processing Zone, Sialkot 51310, Punjab, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#838480]">
          <div className="flex flex-wrap items-center gap-3 font-semibold uppercase tracking-wider">
            <span className="text-white">© SPORTCOM ENTERPRISES</span>
            <span>·</span>
            <span>ISO 9001:2015</span>
            <span>·</span>
            <span>ISO 14001</span>
            <span>·</span>
            <span>SEDEX SMETA</span>
            <span>·</span>
            <span>AMFORI BSCI</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('quality')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Compliance Certificates
            </button>
            <span>·</span>
            <button
              onClick={onOpenRfq}
              className="hover:text-white transition-colors cursor-pointer"
            >
              B2B Supply Terms
            </button>
            <span>·</span>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Facility Protocol
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
