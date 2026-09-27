import React, { useState } from 'react';
import { PageType } from '../types';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenRfq: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenRfq,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageType; label: string }[] = [
    { id: 'products', label: 'Products' },
    { id: 'manufacturing', label: 'Manufacturing' },
    { id: 'oem-odm', label: 'OEM & ODM' },
    { id: 'customization', label: 'Customization' },
    { id: 'quality', label: 'Quality' },
    { id: 'about', label: 'About' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f4f4ef]/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#111310]/5 transition-all">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('products')}
          className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
        >
          {/* Custom Precision SVG Brand Icon */}
          <div className="h-8 w-8 relative flex items-center justify-center shrink-0">
            <svg viewBox="0 0 36 36" fill="none" className="h-8 w-8">
              <path
                d="M4 17L12 4H32L24 17H4Z"
                fill="#111310"
              />
              <path
                d="M12 19L4 32H24L32 19H12Z"
                fill="#b9f54c"
              />
              <circle cx="18" cy="18" r="3.5" fill="#fafaf5" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-xl uppercase tracking-tight text-[#1a1c19] leading-none group-hover:text-black transition-colors">
              SPORTCOM
            </span>
            <span className="text-[11px] font-bold tracking-widest text-[#696C65] uppercase mt-0.5">
              Enterprises · Sialkot
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm tracking-tight transition-colors py-1 relative cursor-pointer ${
                  isActive
                    ? 'text-[#1a1c19] font-bold'
                    : 'text-[#454843] hover:text-[#1a1c19] font-medium'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#b9f54c] rounded-full animate-in fade-in duration-300" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenRfq}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#b9f54c] text-[#131f00] text-xs font-bold uppercase tracking-wider shadow-[0_0_24px_rgba(183,243,74,0.22)] hover:bg-[#9ed830] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Request a Quote</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>

          <button
            onClick={() => handleNavClick('quality')}
            title="Sialkot Facility Status"
            className="w-8 h-8 rounded-full bg-[#1a1c19] text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">verified</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#1a1c19] hover:bg-[#eeeee9] rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#f4f4ef] border-b border-[#111310]/10 px-6 py-4 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2.5 text-left rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#1a1c19] text-[#b9f54c]'
                      : 'bg-[#eeeee9] text-[#1a1c19] hover:bg-[#e8e8e3]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRfq();
            }}
            className="w-full py-3 rounded-full bg-[#b9f54c] text-[#131f00] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
          >
            <span>Request a Quote (B2B RFQ)</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      )}
    </header>
  );
};
