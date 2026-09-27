import React from 'react';
import { Sparkles, Compass, Award, Home, Beer } from 'lucide-react';

export const KineticMarquee: React.FC = () => {
  const items = [
    { text: '5,000-ACRE VIRGINIA PASTORAL RESERVE', icon: Compass },
    { text: 'HISTORIC 18TH-CENTURY MANOR', icon: Home },
    { text: 'GRAND EVENT CENTER • 400 GUESTS', icon: Sparkles },
    { text: 'ESTATE CRAFT BREWERY & TAPHOUSE', icon: Beer },
    { text: 'CHAMPIONSHIP EQUESTRIAN ARENAS', icon: Award },
    { text: 'PRIVATE MOUNTAIN LODGE RETREATS', icon: Home },
    { text: 'CHARLOTTESVILLE & SCOTTSVILLE, VA', icon: Sparkles },
  ];

  return (
    <div className="relative py-8 bg-[#0E1712] border-y border-[#D4A346]/25 overflow-hidden">
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#0E1712] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#0E1712] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {Array.from({ length: 4 }).map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center gap-12 pr-12">
            {items.map((item, itemIdx) => {
              const Icon = item.icon;
              return (
                <div key={itemIdx} className="flex items-center gap-4 text-nowrap">
                  <Icon className="w-4 h-4 text-[#D4A346]" />
                  <span className="font-['Bodoni_Moda',serif] text-[20px] md:text-[24px] tracking-wider text-[#FBF8F1]">
                    {item.text}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A346]/50 mx-2" />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
