import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface VenueItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  capacity: string;
  amenities: string[];
}

const VENUES: VenueItem[] = [
  {
    id: 'manor-house',
    category: 'HISTORIC MANOR',
    title: 'The Mount Ida Historic Manor',
    subtitle: '18th-century pastoral sanctuary with cascading cedar lawns.',
    description: 'An exquisitely restored historic manor home overlooking rolling Albemarle hills, featuring antique crystal chandeliers, private bridal suites, and romantic boxwood garden walkways.',
    capacity: 'UP TO 250 GUESTS',
    amenities: ['Historic Bridal Quarters', 'Boxwood Parterre Gardens', 'Panoramic Gazebo'],
  },
  {
    id: 'taphouse',
    category: 'ESTATE BREWERY',
    title: 'The Tasting Room & Taphouse',
    subtitle: 'Estate craft ales, vineyard wines & wood-fired cuisine.',
    description: 'Located high on the ridge with open-air covered decks. Savor flights of Mount Ida Reserve craft beers, award-winning estate vintages, and artisan wood-fired sourdough pizzas.',
    capacity: 'OPEN TO PUBLIC',
    amenities: ['Covered Mountain Decks', 'Fireplace Seating', 'Live Weekend Acoustic'],
  },
  {
    id: 'event-center',
    category: 'GRAND CELEBRATION',
    title: 'The Grand Event Center',
    subtitle: 'Spectacular 12,000 sq ft timber pavilion for gala events.',
    description: 'Featuring 30-foot cathedral ceilings, massive stone fireplaces, temperature-controlled indoor/outdoor sliding glass walls, and full commercial catering kitchen facilities.',
    capacity: 'UP TO 400 GUESTS',
    amenities: ['12,000 Sq Ft Pavilion', 'Dual Stone Fireplaces', 'Dedicated Shuttle Service'],
  },
  {
    id: 'equestrian',
    category: 'WORLD-CLASS EQUESTRIAN',
    title: 'The Mount Ida Stables & Arenas',
    subtitle: 'Championship hunter/jumper facility across pastoral pastures.',
    description: 'State-of-the-art boarding, covered arenas, pristine grass paddocks, and miles of private riding trails meandering throughout the 5,000-acre contiguous estate.',
    capacity: 'PREMIER BOARDING',
    amenities: ['Regulation Covered Arena', 'Miles of Private Trails', 'Full-Care Boarding Stalls'],
  },
  {
    id: 'estate-lodges',
    category: 'LUXURY GETAWAYS',
    title: 'The Private Estate Lodges',
    subtitle: 'Luxury rental homes accommodating wedding parties and retreats.',
    description: 'Secluded 4 to 8-bedroom estate residences featuring gourmet chef kitchens, private heated swimming pools, outdoor hot tubs, and uninterrupted Blue Ridge mountain horizons.',
    capacity: 'OVERNIGHT STAYS',
    amenities: ['Private Heated Pools', 'Outdoor Hot Tubs', 'Full Concierge Coordination'],
  },
];

interface HorizontalWorksProps {
  onOpenReservation: (venue?: string) => void;
}

export const HorizontalWorks: React.FC<HorizontalWorksProps> = ({ onOpenReservation }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-78%']);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#0E1712] text-[#FBF8F1]">
      {/* Sticky Window */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-[1600px] mx-auto w-full mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#D4A346] uppercase mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A346]" />
              ESTATE VENUES & DESTINATIONS / 02
            </div>
            <h2 className="font-['Bodoni_Moda',serif] text-[36px] md:text-[56px] leading-[0.95] text-[#FBF8F1]">
              Historic Manors & Ridge Venues.
            </h2>
          </div>
          <p className="text-[14px] md:text-[15px] text-[#8C9A91] max-w-md font-['Jost',sans-serif] leading-relaxed">
            Pan across our five premier destinations spanning 5,000 pastoral acres in historic Albemarle County, Virginia.
          </p>
        </div>

        {/* Horizontal Sliding Track */}
        <div className="relative w-full overflow-visible">
          <motion.div style={{ x }} className="flex gap-8 items-stretch will-change-transform">
            {VENUES.map((venue, index) => (
              <div
                key={venue.id}
                className="group relative w-[85vw] sm:w-[540px] md:w-[620px] flex-shrink-0 rounded-2xl bg-gradient-to-br from-[#1C2C23] to-[#121E18] border border-[#D4A346]/25 p-8 md:p-10 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-[#D4A346]/60 hover:shadow-[#D4A346]/10"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#D4A346]/15 pb-4 mb-6">
                    <span className="text-[11px] font-mono tracking-widest text-[#D4A346] uppercase">
                      [{String(index + 1).padStart(2, '0')}] // {venue.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#D4A346]/15 text-[#D4A346] text-[11px] font-mono font-medium">
                      {venue.capacity}
                    </span>
                  </div>

                  <h3 className="font-['Bodoni_Moda',serif] text-[28px] md:text-[34px] leading-tight text-[#FBF8F1] mb-2">
                    {venue.title}
                  </h3>

                  <p className="text-[14px] text-[#D4A346] font-medium mb-4 italic">
                    "{venue.subtitle}"
                  </p>

                  <p className="text-[14px] md:text-[15px] text-[#8C9A91] leading-relaxed mb-6 font-['Jost',sans-serif]">
                    {venue.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {venue.amenities.map((amenity, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-2.5 py-1 rounded-md bg-[#15221B] border border-[#D4A346]/20 text-[11px] font-mono text-[#FBF8F1]/80"
                      >
                        ✓ {amenity}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenReservation(venue.title)}
                    className="w-full py-3.5 rounded-xl bg-[#D4A346]/15 border border-[#D4A346]/40 text-[#D4A346] hover:bg-[#D4A346] hover:text-[#15221B] text-[13px] font-medium uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-hover:border-[#D4A346]"
                  >
                    <span>Reserve Venue / Schedule Tour</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Progress Bar at Bottom of Sticky Frame */}
        <div className="max-w-[1600px] mx-auto w-full mt-8">
          <div className="w-full h-1 bg-[#1C2C23] rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
              className="h-full bg-[#D4A346]"
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-[#8C9A91] mt-2">
            <span>VENUE 01: HISTORIC MANOR</span>
            <span>VENUE 05: ESTATE LODGES</span>
          </div>
        </div>
      </div>
    </section>
  );
};
