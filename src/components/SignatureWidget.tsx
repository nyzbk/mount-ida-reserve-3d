import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const SignatureWidget: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [eventStyle, setEventStyle] = useState<'wedding' | 'corporate' | 'weekend-retreat'>('wedding');
  const [guests, setGuests] = useState<number>(150);

  const venues = {
    wedding: 'The Grand Event Barn & Gazebo Lake Terrace',
    corporate: 'The Tasting Room & High Ridge Taphouse Pavilion',
    'weekend-retreat': 'Mount Ida Historic Manor & The Lodge Estates'
  };

  return (
    <section id="manor-planner" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#15221B] text-[#FBF8F1] relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-['Jost'] uppercase tracking-[0.2em] text-[#D4A346] block mb-3 font-semibold">
            Historic Albemarle County Estate
          </span>
          <h2 className="text-3xl sm:text-5xl font-['Bodoni_Moda'] font-normal text-[#FBF8F1] tracking-tight">
            5,000-Acre Manor Grounds & Event Architect
          </h2>
          <p className="mt-4 text-[#8C9A91] text-sm sm:text-base max-w-2xl mx-auto font-['Lora'] italic">
            Surrounded by Virginia mountain pastures, four distinct architectural venues, and on-site lodging for up to 100+ guests.
          </p>
        </div>

        <div className="bg-[#2D3934]/90 rounded-2xl p-6 sm:p-12 border border-[#D4A346]/25 shadow-2xl">
          <div className="space-y-8">
            {/* Event Category */}
            <div>
              <label className="block text-xs font-['Jost'] uppercase tracking-wider text-[#D4A346] mb-3 font-semibold">
                1. Select Gathering Occasion
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'wedding', label: 'Bespoke Luxury Wedding' },
                  { id: 'corporate', label: 'Executive Retreat & Summit' },
                  { id: 'weekend-retreat', label: 'Private Manor Lodging Stay' }
                ].map(ev => (
                  <button
                    key={ev.id}
                    type="button"
                    onClick={() => setEventStyle(ev.id as any)}
                    className={`p-4 rounded-xl text-xs font-['Jost'] font-medium transition-all text-left ${
                      eventStyle === ev.id
                        ? 'bg-[#8E4D26] text-white shadow-lg'
                        : 'bg-[#15221B] text-[#8C9A91] border border-white/5 hover:border-white/20'
                    }`}
                  >
                    {ev.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Count Slider */}
            <div>
              <div className="flex justify-between items-center mb-2 font-['Jost']">
                <label className="text-xs uppercase tracking-wider text-[#D4A346] font-semibold">
                  2. Approximate Guest Attendance
                </label>
                <span className="text-sm text-[#D4A346] font-bold font-mono">
                  {guests} GUESTS
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="350"
                step="10"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full h-2 bg-[#15221B] rounded-lg appearance-none cursor-pointer accent-[#D4A346]"
              />
            </div>

            {/* Venue Match Card */}
            <div className="bg-[#15221B] p-6 rounded-xl border border-[#D4A346]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[10px] font-['Jost'] uppercase tracking-widest text-[#D4A346] block mb-1">
                  Optimal Estate Pairing
                </span>
                <h4 className="text-lg font-['Bodoni_Moda'] text-white font-normal">{venues[eventStyle]}</h4>
                <p className="text-xs text-[#8C9A91] font-['Lora'] mt-1">Single-vineyard wines, on-site craft brewery, and private shuttle transport included.</p>
              </div>
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#D4A346] text-[#15221B] font-['Jost'] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-amber-300 transition-all btn-spring text-center flex items-center justify-center gap-2"
              >
                <span>Request Private Estate Tour</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
