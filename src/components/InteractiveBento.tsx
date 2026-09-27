import React, { useState } from 'react';
import { Award, Compass, Sparkles, Sliders, CheckCircle2, Home, Beer } from 'lucide-react';

interface InteractiveBentoProps {
  onOpenReservation: (experience?: string) => void;
}

export const InteractiveBento: React.FC<InteractiveBentoProps> = ({ onOpenReservation }) => {
  const [experience, setExperience] = useState<'wedding' | 'taphouse' | 'lodges'>('wedding');
  const [guestCount, setGuestCount] = useState<'intimate' | 'classic' | 'gala'>('classic');
  const [season, setSeason] = useState<'autumn' | 'spring' | 'summer'>('autumn');

  return (
    <section id="estate-capabilities" className="relative py-28 md:py-36 bg-[#15221B] text-[#FBF8F1] overflow-hidden border-t border-[#D4A346]/15">
      {/* Ambient Radial Glow (Meta AI Standard) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#D4A346]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#2D3934]/80 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#D4A346] uppercase mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A346]" />
              ESTATE AMENITIES & CAPACITY / 03
            </div>
            <h2 className="font-['Bodoni_Moda',serif] text-[40px] md:text-[56px] leading-[0.95] text-[#FBF8F1]">
              Historic Grandeur at True Scale.
            </h2>
          </div>
          <p className="text-[14px] md:text-[15px] text-[#8C9A91] max-w-md font-['Jost',sans-serif] leading-relaxed">
            Where rolling pastoral pastures meet high-timber grand event centers, private lodging compounds, and estate brewing excellence.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Interactive Estate Configurator (Col Span 2) */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl bg-[#1C2C23]/80 border border-[#D4A346]/30 p-8 flex flex-col justify-between backdrop-blur-md relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-[#D4A346]/20 pb-4 mb-6">
                <span className="text-[11px] font-mono text-[#D4A346] tracking-widest uppercase flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#D4A346]" />
                  ESTATE CELEBRATION PLANNER
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#D4A346]/20 text-[#D4A346] text-[10px] font-mono font-bold">
                  PLANNER LAB
                </span>
              </div>

              <h3 className="font-['Bodoni_Moda',serif] text-[24px] md:text-[30px] text-[#FBF8F1] mb-2">
                Curate your Mount Ida celebration.
              </h3>
              <p className="text-[13px] text-[#8C9A91] mb-6">
                Explore venues, guest capacities, and seasonal accommodations across our 5,000-acre estate.
              </p>

              {/* Experience Selection */}
              <div className="mb-4">
                <span className="text-[11px] font-mono text-[#8C9A91] block mb-2 uppercase">1. Gathering Format:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(['wedding', 'taphouse', 'lodges'] as const).map((e) => (
                    <button
                      key={e}
                      onClick={() => setExperience(e)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-mono uppercase transition-all ${
                        experience === e
                          ? 'bg-[#D4A346] text-[#15221B] font-bold shadow-md shadow-[#D4A346]/20'
                          : 'bg-[#15221B]/80 text-[#FBF8F1] border border-[#D4A346]/20 hover:border-[#D4A346]/50'
                      }`}
                    >
                      {e === 'wedding' ? 'Destination Wedding' : e === 'taphouse' ? 'Taphouse & Dining' : 'Lodge Retreat'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Count Selection */}
              <div className="mb-4">
                <span className="text-[11px] font-mono text-[#8C9A91] block mb-2 uppercase">2. Expected Guest Scale:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(['intimate', 'classic', 'gala'] as const).map((g) => (
                    <button
                      key={g}
                      onClick={() => setGuestCount(g)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-mono uppercase transition-all ${
                        guestCount === g
                          ? 'bg-[#D4A346] text-[#15221B] font-bold shadow-md shadow-[#D4A346]/20'
                          : 'bg-[#15221B]/80 text-[#FBF8F1] border border-[#D4A346]/20 hover:border-[#D4A346]/50'
                      }`}
                    >
                      {g === 'intimate' ? '25 - 75 Guests' : g === 'classic' ? '100 - 200 Guests' : '250 - 400 Guests'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Season Selection */}
              <div>
                <span className="text-[11px] font-mono text-[#8C9A91] block mb-2 uppercase">3. Preferred Season:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(['autumn', 'spring', 'summer'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setSeason(s)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-mono uppercase transition-all ${
                        season === s
                          ? 'bg-[#D4A346] text-[#15221B] font-bold shadow-md shadow-[#D4A346]/20'
                          : 'bg-[#15221B]/80 text-[#FBF8F1] border border-[#D4A346]/20 hover:border-[#D4A346]/50'
                      }`}
                    >
                      {s === 'autumn' ? 'Blue Ridge Autumn' : s === 'spring' ? 'Mountain Blossom' : 'Starlit Summer'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-[#D4A346]/20 flex items-center justify-between">
              <div className="text-[11px] font-mono text-[#D4A346]">
                RECOMMENDATION: {experience === 'wedding' ? 'THE GRAND EVENT CENTER' : experience === 'taphouse' ? 'THE RIDGE TAPHOUSE' : 'MOUNT IDA ESTATE LODGES'}
              </div>
              <button
                onClick={() => onOpenReservation(`Plan: ${experience.toUpperCase()}`)}
                className="px-4 py-2 rounded-lg bg-[#D4A346] text-[#15221B] font-mono text-[11px] font-bold uppercase hover:bg-[#e4b55c] transition-colors"
              >
                Inquire For Dates
              </button>
            </div>
          </div>

          {/* Card 2: 5,000 Contiguous Acres */}
          <div className="rounded-2xl bg-[#1C2C23]/80 border border-[#D4A346]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#D4A346] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Compass className="w-4 h-4 text-[#D4A346]" />
                UNRIVALED FOOTPRINT
              </div>
              <div className="font-['Bodoni_Moda',serif] text-[54px] font-bold text-[#FBF8F1] leading-none mb-2">
                5,000
              </div>
              <div className="text-[13px] text-[#D4A346] font-medium mb-3">
                Contiguous Mountain & Pasture Acres
              </div>
              <p className="text-[13px] text-[#8C9A91] font-['Jost',sans-serif] leading-relaxed">
                One of Virginia's largest private holdings, providing absolute privacy, horizon-to-horizon ridgelines, and zero commercial intrusion.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#D4A346]/15 flex items-center gap-2 text-[11px] font-mono text-[#8C9A91]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Private Gated Reserve
            </div>
          </div>

          {/* Card 3: 400 Guests Event Capacity */}
          <div className="rounded-2xl bg-[#1C2C23]/80 border border-[#D4A346]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#D4A346] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Home className="w-4 h-4 text-[#D4A346]" />
                GRAND BALLROOM SCALE
              </div>
              <div className="font-['Bodoni_Moda',serif] text-[54px] font-bold text-[#FBF8F1] leading-none mb-2">
                400
              </div>
              <div className="text-[13px] text-[#D4A346] font-medium mb-3">
                Maximum Event Center Capacity
              </div>
              <p className="text-[13px] text-[#8C9A91] font-['Jost',sans-serif] leading-relaxed">
                Full-scale climate controlled indoor ballrooms paired with open-air covered terraces, dual fireplaces, and expansive wedding ceremony lawns.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#D4A346]/15 flex items-center gap-2 text-[11px] font-mono text-[#8C9A91]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              All-Weather Certified
            </div>
          </div>

          {/* Card 4: Estate Craft Brewery & Vineyard */}
          <div className="md:col-span-2 rounded-2xl bg-[#1C2C23]/80 border border-[#D4A346]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#D4A346] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Beer className="w-4 h-4 text-[#D4A346]" />
                ON-SITE BREWING & VITICULTURE
              </div>
              <div className="font-['Bodoni_Moda',serif] text-[36px] md:text-[44px] text-[#FBF8F1] leading-tight mb-2">
                Crafted from Mountain Springs.
              </div>
              <p className="text-[14px] text-[#8C9A91] font-['Jost',sans-serif] leading-relaxed mb-6">
                Our brewhouse and cellar produce award-winning IPAs, crisp mountain lagers, barrel-aged stouts, and estate wines poured exclusively across the property.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#D4A346]/15">
              <div>
                <div className="text-[20px] font-mono font-bold text-[#FBF8F1]">12+</div>
                <div className="text-[11px] font-mono text-[#8C9A91]">Taps on Rotation</div>
              </div>
              <div>
                <div className="text-[20px] font-mono font-bold text-[#FBF8F1]">Wood-Fired</div>
                <div className="text-[11px] font-mono text-[#8C9A91]">Sourdough Kitchen</div>
              </div>
              <div>
                <div className="text-[20px] font-mono font-bold text-[#FBF8F1]">Lodge Stays</div>
                <div className="text-[11px] font-mono text-[#8C9A91]">Heated Private Pools</div>
              </div>
              <div>
                <div className="text-[20px] font-mono font-bold text-[#FBF8F1]">Equestrian</div>
                <div className="text-[11px] font-mono text-[#8C9A91]">Covered Arena & Stalls</div>
              </div>
            </div>
          </div>

          {/* Card 5: Direct Tour & Event Inquiries */}
          <div className="md:col-span-2 rounded-2xl bg-[#1C2C23]/80 border border-[#D4A346]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#D4A346] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Award className="w-4 h-4 text-[#D4A346]" />
                PRIVATE WEDDING & CORPORATE CONCIERGE
              </div>
              <div className="font-['Bodoni_Moda',serif] text-[36px] md:text-[44px] text-[#FBF8F1] leading-tight mb-2">
                Personalized Estate Tours.
              </div>
              <p className="text-[14px] text-[#8C9A91] font-['Jost',sans-serif] leading-relaxed mb-4">
                Schedule a private chauffeured golf cart tour across the Historic Manor, Event Center, Taphouse, and rental lodges with our senior wedding directors.
              </p>
            </div>
            <div className="pt-4 border-t border-[#D4A346]/15 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#D4A346]">info@mountidareserve.com</span>
              <span className="text-[11px] font-mono text-[#8C9A91]">Tour Concierge Line</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
