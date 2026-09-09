import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FacilityTypesSection } from './components/FacilityTypesSection';
import { SalamahInvestorJourney } from './components/SalamahInvestorJourney';
import { ServicesSection } from './components/ServicesSection';
import { SafetyAuditChecker } from './components/SafetyAuditChecker';
import { RiyadhCoverageMap } from './components/RiyadhCoverageMap';
import { CodeStandardsSection } from './components/CodeStandardsSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { AIAndFaqSection } from './components/AIAndFaqSection';
import { InspectionBookingForm } from './components/InspectionBookingForm';
import { Footer } from './components/Footer';
import { StickyContactBar } from './components/StickyContactBar';

export default function App() {
  const scrollToRequirements = () => {
    const el = document.getElementById('requirements');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-rose-600 selection:text-white">
      {/* Header */}
      <Header 
        onOpenRequirements={scrollToRequirements} 
        onOpenBooking={scrollToBooking} 
      />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          onScrollToRequirements={scrollToRequirements} 
          onScrollToBooking={scrollToBooking} 
        />

        {/* Facility Types (Warehouses, Factories, Commercial Buildings) */}
        <FacilityTypesSection />

        {/* Salamah Portal Investor Journey & Requirements Explorer */}
        <SalamahInvestorJourney onOpenBooking={scrollToBooking} />

        {/* Core Services Section */}
        <ServicesSection />

        {/* Interactive Civil Defense & Salamah License Readiness Checker */}
        <SafetyAuditChecker />

        {/* Riyadh Exclusive Coverage & District Dispatch */}
        <RiyadhCoverageMap />

        {/* Saudi Building Code SBC 801 & NFPA Compliance Standards */}
        <CodeStandardsSection />

        {/* Real Projects & Case Studies in Riyadh */}
        <CaseStudiesSection />

        {/* AI and Search Engine Optimized FAQ Section */}
        <AIAndFaqSection />

        {/* Free Engineering Inspection & Booking Form */}
        <InspectionBookingForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating & Mobile Sticky Contact Controls */}
      <StickyContactBar />
    </div>
  );
}
