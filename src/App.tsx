import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HorizontalWorks } from './components/HorizontalWorks';
import { InteractiveBento } from './components/InteractiveBento';
import { KineticMarquee } from './components/KineticMarquee';
import { SignatureWidget } from './components/SignatureWidget';
import { MagneticCTA } from './components/MagneticCTA';
import { ReservationModal } from './components/ReservationModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState('The Tasting Room & Taphouse');

  const handleOpenReservation = (experienceTitle?: string) => {
    if (experienceTitle) {
      setSelectedExperience(experienceTitle);
    }
    setReservationOpen(true);
  };

  const handleCloseReservation = () => {
    setReservationOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#15221B] text-[#FBF8F1] font-['Jost',sans-serif] antialiased selection:bg-[#D4A346] selection:text-[#15221B] overflow-x-clip">
      <Navbar onOpenReservation={() => handleOpenReservation()} />

      <main>
        {/* Section 1: Jack Roberts SOTA 240-Frame Canvas Hero */}
        <Hero onOpenReservation={() => handleOpenReservation()} />
        
        {/* Section 2: Meta AI Pinned Horizontal Scroll Gallery (300vh) */}
        <HorizontalWorks onOpenReservation={handleOpenReservation} />

        {/* Section 3: Interactive Bento Grid with Live Telemetry */}
        <InteractiveBento onOpenReservation={handleOpenReservation} />

        {/* Section 4: Kinetic Marquee Ribbon */}
        <KineticMarquee />

        {/* Bespoke 5,000-Acre Manor Grounds & Event Architect Widget */}
        <SignatureWidget onOpenBooking={() => handleOpenReservation()} />

        {/* Section 5: Premium Magnetic CTA with Multi-Contact Intelligence */}
        <MagneticCTA onOpenReservation={handleOpenReservation} />
      </main>

      <Footer />

      <ReservationModal
        isOpen={reservationOpen}
        onClose={handleCloseReservation}
        initialExperience={selectedExperience}
      />
    </div>
  );
};

export default App;
