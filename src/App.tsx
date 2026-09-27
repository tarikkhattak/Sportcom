/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { RfqModal } from './components/RfqModal';
import { QcReportModal } from './components/QcReportModal';
import { SampleModal } from './components/SampleModal';
import { FactoryTourModal } from './components/FactoryTourModal';

// Pages
import { ProductsPage } from './pages/ProductsPage';
import { ManufacturingPage } from './pages/ManufacturingPage';
import { OemOdmPage } from './pages/OemOdmPage';
import { CustomizationPage } from './pages/CustomizationPage';
import { QualityPage } from './pages/QualityPage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('products');
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [rfqInitialPlatform, setRfqInitialPlatform] = useState<string>('Padel Racket 24K');
  const [isQcReportOpen, setIsQcReportOpen] = useState(false);
  const [isSampleOpen, setIsSampleOpen] = useState(false);
  const [isFactoryTourOpen, setIsFactoryTourOpen] = useState(false);

  // Handle URL hash routing if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as PageType;
      const validPages: PageType[] = [
        'products',
        'manufacturing',
        'oem-odm',
        'customization',
        'quality',
        'about',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRfq = (platform?: string) => {
    if (platform) {
      setRfqInitialPlatform(platform);
    }
    setIsRfqOpen(true);
  };

  const handleOpenRfqWithCustomConfig = (configSummary: string) => {
    setRfqInitialPlatform(configSummary);
    setIsRfqOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* Top Navigation Bar */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenRfq={() => handleOpenRfq()}
      />

      {/* Main Content Area (offset by fixed header height) */}
      <main className="flex-1 pt-20">
        {currentPage === 'products' && (
          <ProductsPage
            onOpenRfq={handleOpenRfq}
            onOpenSample={() => setIsSampleOpen(true)}
            onNavigateToCustomizer={() => handleNavigate('customization')}
          />
        )}

        {currentPage === 'manufacturing' && (
          <ManufacturingPage
            onOpenRfq={handleOpenRfq}
            onOpenQcReport={() => setIsQcReportOpen(true)}
            onOpenFactoryTour={() => setIsFactoryTourOpen(true)}
          />
        )}

        {currentPage === 'oem-odm' && (
          <OemOdmPage
            onOpenRfq={handleOpenRfq}
            onOpenSample={() => setIsSampleOpen(true)}
          />
        )}

        {currentPage === 'customization' && (
          <CustomizationPage
            onOpenRfqWithCustomConfig={handleOpenRfqWithCustomConfig}
            onOpenSample={() => setIsSampleOpen(true)}
          />
        )}

        {currentPage === 'quality' && (
          <QualityPage
            onOpenQcReport={() => setIsQcReportOpen(true)}
            onOpenFactoryTour={() => setIsFactoryTourOpen(true)}
            onOpenRfq={handleOpenRfq}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenRfq={handleOpenRfq}
            onOpenFactoryTour={() => setIsFactoryTourOpen(true)}
            onOpenSample={() => setIsSampleOpen(true)}
          />
        )}
      </main>

      {/* Floating Quick Action Widget for B2B RFQs */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <button
          onClick={() => handleOpenRfq()}
          className="px-4 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-2xl shadow-cyan-500/50 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer border border-cyan-300"
          title="Instant B2B Request for Quote"
        >
          <span className="material-symbols-outlined text-lg">request_quote</span>
          <span>Instant RFQ</span>
        </button>
      </div>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenRfq={() => handleOpenRfq()}
      />

      {/* Modals */}
      <RfqModal
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        initialPlatform={rfqInitialPlatform}
      />

      <QcReportModal
        isOpen={isQcReportOpen}
        onClose={() => setIsQcReportOpen(false)}
      />

      <SampleModal
        isOpen={isSampleOpen}
        onClose={() => setIsSampleOpen(false)}
      />

      <FactoryTourModal
        isOpen={isFactoryTourOpen}
        onClose={() => setIsFactoryTourOpen(false)}
      />
    </div>
  );
}
