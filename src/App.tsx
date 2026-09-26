import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureWidget } from './components/SignatureWidget';
import { VenuesSection } from './components/VenuesSection';
import { HeritageSection } from './components/HeritageSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';

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
    <div className="min-h-screen bg-[#15221B] text-[#FBF8F1] font-['Jost'] antialiased selection:bg-[#D4A346] selection:text-[#15221B]">
      <Navbar onOpenReservation={() => handleOpenReservation()} />

      <main>
        <Hero onOpenReservation={() => handleOpenReservation()} />
        
        {/* Bespoke 5,000-Acre Manor Grounds & Event Architect Widget */}
        <SignatureWidget onOpenBooking={() => handleOpenReservation()} />

        <VenuesSection onOpenReservation={handleOpenReservation} />
        <HeritageSection />
        <TestimonialsSection />
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
