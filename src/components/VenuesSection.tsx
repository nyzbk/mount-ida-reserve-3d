import React, { useState } from 'react';
import { EXPERIENCES_DATA } from '../data/estate';
import type { EstateExperience } from '../data/estate';
import { Users, MapPin, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface VenuesSectionProps {
  onOpenReservation: (experienceTitle?: string) => void;
}

export const VenuesSection: React.FC<VenuesSectionProps> = ({ onOpenReservation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Winery & Dining', 'Weddings & Celebrations', 'Private Stays', 'Wine Club'];

  const filteredExperiences = activeCategory === 'All'
    ? EXPERIENCES_DATA
    : EXPERIENCES_DATA.filter((exp: EstateExperience) => exp.category === activeCategory);

  return (
    <section id="experiences" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-amber-500 font-serif tracking-widest text-xs uppercase font-medium">
          Curated Southern Splendor
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight mt-3">
          Five Thousand Acres of Timeless Grandeur
        </h2>
        <p className="mt-4 text-stone-400 text-base sm:text-lg leading-relaxed">
          From sunset wine tastings overlooking Carter&apos;s Mountain to celebratory receptions in our monumental cedar lodges, immerse yourself in Virginia&apos;s premier countryside estate.
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-amber-600 text-stone-950 font-semibold shadow-lg shadow-amber-900/30'
                  : 'bg-stone-900/80 text-stone-400 hover:text-stone-200 border border-stone-800 hover:border-stone-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredExperiences.map((item) => (
          <div
            key={item.id}
            className="group rounded-2xl bg-stone-900/60 border border-stone-800/80 hover:border-amber-700/60 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/20" />
                <span className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-amber-400 border border-amber-500/20">
                  {item.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-serif text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-stone-400 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                <div className="mt-4 pt-4 border-t border-stone-800/70 space-y-2">
                  <div className="flex items-center text-xs text-stone-300 gap-2">
                    <Users className="w-3.5 h-3.5 text-amber-500/80 shrink-0" />
                    <span>{item.capacity}</span>
                  </div>
                  <div className="flex items-center text-xs text-stone-300 gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-500/80 shrink-0" />
                    <span>{item.setting}</span>
                  </div>
                </div>

                <div className="mt-5 space-y-1.5">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-stone-300 font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500/70 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => onOpenReservation(item.title)}
                className="w-full py-3 px-4 rounded-xl bg-stone-800/80 hover:bg-amber-600 text-stone-200 hover:text-stone-950 font-medium text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group/btn"
              >
                <span>Reserve Experience</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Distinction Bar */}
      <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-stone-900/90 via-stone-850 to-stone-900/90 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-white font-serif text-lg font-medium">
              Private Curated Tastings & Architectural Venue Tours
            </h4>
            <p className="text-stone-400 text-xs sm:text-sm mt-0.5">
              Available 7 days a week by appointment for prospective couples, corporate galas, and discerning collectors.
            </p>
          </div>
        </div>
        <button
          onClick={() => onOpenReservation('Private Curated Tour')}
          className="whitespace-nowrap px-6 py-3 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-stone-950 font-semibold text-xs tracking-widest uppercase transition-all shadow-lg shadow-amber-900/20"
        >
          Schedule Private Tour
        </button>
      </div>
    </section>
  );
};
