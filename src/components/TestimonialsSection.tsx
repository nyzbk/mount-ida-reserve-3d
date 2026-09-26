import React from 'react';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      quote: "Mount Ida Reserve provided the most breathtaking backdrop imaginable for our wedding weekend. Our guests are still raving about the sunset views from the Lodge terrace and the estate reserve wines.",
      author: "Katherine & Julian S.",
      role: "Wedding Couple at The Lodge",
      rating: 5,
      date: "September 2025"
    },
    {
      quote: "The Tasting Room and Taphouse is our absolute favorite destination in Albemarle County. Incredible hearth-fired food, pristine hospitality, and an atmosphere that feels like a European mountain sanctuary.",
      author: "Marcus & Elena V.",
      role: "Reserve Wine Club Members",
      rating: 5,
      date: "August 2025"
    },
    {
      quote: "We hosted our corporate leadership summit in the Historic Manor and Cottages. The privacy, panoramic views of the Blue Ridge, and attentive estate team made it our most productive and inspiring retreat yet.",
      author: "David H.",
      role: "Executive Retreat Host",
      rating: 5,
      date: "July 2025"
    }
  ];

  return (
    <section id="reviews" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-amber-500 font-serif tracking-widest text-xs uppercase font-medium">
          Guest Acclaim
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight mt-3">
          Unforgettable Moments on the Reserve
        </h2>
        <p className="mt-4 text-stone-400 text-sm sm:text-base">
          Read what couples, members, and honored guests cherish most about their experiences across our grounds.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="p-8 rounded-2xl bg-stone-900/60 border border-stone-800/80 flex flex-col justify-between hover:border-amber-700/40 transition-colors"
          >
            <div>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-amber-500/20 mb-3" />
              <p className="text-stone-300 text-sm leading-relaxed italic">
                &ldquo;{rev.quote}&rdquo;
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800/60">
              <p className="font-serif text-white font-medium text-sm">{rev.author}</p>
              <div className="flex items-center justify-between mt-1 text-xs text-stone-400">
                <span>{rev.role}</span>
                <span className="text-stone-500">{rev.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
