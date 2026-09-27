import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, Clock, Award, CheckCircle2 } from 'lucide-react';

interface MagneticCTAProps {
  onOpenReservation: (experience?: string) => void;
}

export const MagneticCTA: React.FC<MagneticCTAProps> = ({ onOpenReservation }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonInnerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const btn = buttonRef.current;
    const inner = buttonInnerRef.current;
    if (!btn || !inner) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      btn.style.transform = `translate3d(${dx * 0.32}px, ${dy * 0.45}px, 0)`;
      inner.style.transform = `translate3d(${dx * 0.15}px, ${dy * 0.20}px, 0)`;
    };

    const onMouseLeave = () => {
      btn.style.transform = 'translate3d(0px, 0px, 0px)';
      inner.style.transform = 'translate3d(0px, 0px, 0px)';
    };

    btn.addEventListener('mousemove', onMouseMove);
    btn.addEventListener('mouseleave', onMouseLeave);
    return () => {
      btn.removeEventListener('mousemove', onMouseMove);
      btn.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <section id="estate-reserve" className="relative py-28 md:py-40 bg-[#0E1712] text-[#FBF8F1] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4A346]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Massive Fluid Headline (Meta AI Standard) */}
        <div className="text-center mb-16">
          <div className="text-[12px] font-mono tracking-[0.3em] uppercase text-[#D4A346] font-semibold mb-4">
            ESTATE CONCIERGE / 05
          </div>
          <h2 className="font-['Bodoni_Moda',serif] text-[13vw] md:text-[8.5vw] leading-[0.88] tracking-tight text-[#FBF8F1]">
            YOUR VIRGINIA SANCTUARY.
          </h2>
          <p className="mt-6 text-[16px] md:text-[20px] text-[#8C9A91] max-w-2xl mx-auto font-light leading-relaxed font-['Jost',sans-serif]">
            Whether planning an iconic 400-guest wedding, weekend lodge getaway, or craft brewery tasting, our estate directors await your arrival.
          </p>

          {/* Dual-Layer Magnetic Button */}
          <div className="mt-12 flex justify-center">
            <button
              ref={buttonRef}
              onClick={() => onOpenReservation('General Inquiry')}
              className="relative inline-flex items-center justify-center px-12 py-6 rounded-2xl bg-[#D4A346] text-[#15221B] text-[16px] md:text-[18px] font-bold tracking-wider uppercase shadow-2xl shadow-[#D4A346]/25 transition-transform duration-100 ease-out cursor-pointer hover:bg-[#e4b55c]"
            >
              <span ref={buttonInnerRef} className="flex items-center gap-3 transition-transform duration-100 ease-out">
                <span>Plan Your Experience</span>
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>

        {/* Deep Contact Intelligence Grid */}
        <div className="mt-20 pt-12 border-t border-[#D4A346]/20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Executive & Leadership */}
          <div className="p-6 rounded-xl bg-[#15221B] border border-[#D4A346]/20">
            <div className="flex items-center gap-2 text-[#D4A346] text-[11px] font-mono tracking-widest uppercase mb-3">
              <Award className="w-4 h-4 text-[#D4A346]" />
              ESTATE MANAGEMENT
            </div>
            <div className="text-[16px] font-semibold text-[#FBF8F1]">Mount Ida Reserve Leadership</div>
            <div className="text-[12px] text-[#8C9A91] mb-3">Pastoral Estate & Hospitality</div>
            <div className="text-[11px] font-mono text-[#D4A346]">Albemarle County, Virginia</div>
          </div>

          {/* Phone Hotlines */}
          <div className="p-6 rounded-xl bg-[#15221B] border border-[#D4A346]/20">
            <div className="flex items-center gap-2 text-[#D4A346] text-[11px] font-mono tracking-widest uppercase mb-3">
              <Phone className="w-4 h-4 text-[#D4A346]" />
              ESTATE DIRECT LINES
            </div>
            <a href="tel:4349604655" className="block text-[15px] font-semibold text-[#FBF8F1] hover:text-[#D4A346] transition-colors">
              Weddings: (434) 960-4655
            </a>
            <a href="tel:4342864282" className="block text-[13px] font-mono text-[#D4A346] mt-1.5">
              Taphouse: (434) 286-4282
            </a>
            <a href="tel:4344240888" className="block text-[13px] font-mono text-[#8C9A91] mt-1">
              Lodges: (434) 424-0888
            </a>
          </div>

          {/* Electronic Mail */}
          <div className="p-6 rounded-xl bg-[#15221B] border border-[#D4A346]/20">
            <div className="flex items-center gap-2 text-[#D4A346] text-[11px] font-mono tracking-widest uppercase mb-3">
              <Mail className="w-4 h-4 text-[#D4A346]" />
              DIRECT COMMUNICATIONS
            </div>
            <a href="mailto:info@mountidareserve.com" className="block text-[13px] font-mono text-[#FBF8F1] hover:text-[#D4A346] transition-colors">
              info@mountidareserve.com
            </a>
            <div className="text-[11px] text-[#8C9A91] mt-2">Weddings, taphouse reservations & private event buyouts</div>
          </div>

          {/* Physical Location */}
          <div className="p-6 rounded-xl bg-[#15221B] border border-[#D4A346]/20">
            <div className="flex items-center gap-2 text-[#D4A346] text-[11px] font-mono tracking-widest uppercase mb-3">
              <MapPin className="w-4 h-4 text-[#D4A346]" />
              HISTORIC ESTATE GROUNDS
            </div>
            <div className="text-[14px] text-[#FBF8F1]">6903 Blenheim Road</div>
            <div className="text-[13px] text-[#8C9A91]">Scottsville, VA 24590</div>
            <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-[#D4A346]">
              <Clock className="w-3.5 h-3.5" />
              <span>Taphouse Thu-Sun • Venues Daily by Appt</span>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 text-[12px] font-mono text-[#8C9A91] border-t border-[#D4A346]/10 pt-8">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              Virginia Tourism Certified Destination
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              Albemarle County Historic Landmark
            </span>
          </div>
          <div>© {new Date().getFullYear()} Mount Ida Reserve. All Rights Reserved.</div>
        </div>
      </div>
    </section>
  );
};
