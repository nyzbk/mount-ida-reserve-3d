import React, { useState, useEffect } from 'react';
import { Phone, ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0b0d]/92 backdrop-blur-md py-4 border-b border-[#c99750]/20 shadow-2xl'
          : 'bg-gradient-to-b from-[#0a0b0d]/85 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-[#c99750]/40 bg-[#161822] flex items-center justify-center group-hover:border-[#c99750] transition-all">
            <span className="text-[#c99750] font-display font-bold text-lg">M</span>
          </div>
          <div>
            <span className="font-display font-bold tracking-widest text-lg md:text-xl text-[#f5f1eb] block group-hover:text-[#c99750] transition-colors">
              MOUNT IDA RESERVE
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#a0adc2] uppercase block">
              Charlottesville · 5,000-Acre Virginia Sanctuary
            </span>
          </div>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#experiences"
            className="text-xs tracking-[0.2em] uppercase text-[#d2dae6] hover:text-[#c99750] transition-colors"
          >
            Venues & Cellars
          </a>
          <a
            href="#heritage"
            className="text-xs tracking-[0.2em] uppercase text-[#d2dae6] hover:text-[#c99750] transition-colors"
          >
            5,000-Acre Estate
          </a>
          <a
            href="#stories"
            className="text-xs tracking-[0.2em] uppercase text-[#d2dae6] hover:text-[#c99750] transition-colors"
          >
            Guest Praise
          </a>
          <a
            href="#contact"
            className="text-xs tracking-[0.2em] uppercase text-[#d2dae6] hover:text-[#c99750] transition-colors"
          >
            Plan Your Visit
          </a>
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+14342864282"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#272e3d] bg-[#141722]/70 text-[#f5f1eb] hover:border-[#c99750]/50 text-xs tracking-wider transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#c99750]" />
            <span>(434) 286-4282</span>
          </a>
          <button
            onClick={onOpenReservation}
            className="glass-button px-6 py-2.5 rounded-full text-xs tracking-[0.18em] uppercase font-semibold text-[#f5f1eb] flex items-center gap-2 shadow-lg"
          >
            <span>Book Tasting or Tour</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#c99750]" />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#c99750] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0d12] border-b border-[#c99750]/30 px-6 py-6 flex flex-col gap-4">
          <a
            href="#experiences"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm tracking-wider uppercase text-[#f5f1eb] py-2 border-b border-[#1b202c]"
          >
            Venues & Cellars
          </a>
          <a
            href="#heritage"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm tracking-wider uppercase text-[#f5f1eb] py-2 border-b border-[#1b202c]"
          >
            5,000-Acre Estate Heritage
          </a>
          <a
            href="#stories"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm tracking-wider uppercase text-[#f5f1eb] py-2 border-b border-[#1b202c]"
          >
            Guest Praise
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm tracking-wider uppercase text-[#f5f1eb] py-2 border-b border-[#1b202c]"
          >
            Location & Hours
          </a>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href="tel:+14342864282"
              className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[#c99750]/30 bg-[#141724] text-[#f5f1eb] text-sm"
            >
              <Phone className="w-4 h-4 text-[#c99750]" />
              <span>(434) 286-4282</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="glass-button py-3 rounded-xl text-center text-xs tracking-widest uppercase font-semibold text-[#f5f1eb]"
            >
              Book Tasting or Tour
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
