import React from 'react';
import { Award, Compass, Wine, Trees } from 'lucide-react';

export const HeritageSection: React.FC = () => {
  const pillars = [
    {
      icon: Trees,
      title: '5,000 Contiguous Acres',
      description: 'An expansive historic reserve spanning rolling foothills, hardwood forests, miles of equestrian trails, and pristine private lakes.'
    },
    {
      icon: Wine,
      title: 'Monticello AVA Terroir',
      description: 'Cultivating French vinifera varietals in mineral-rich clay loam soils, hand-harvested and crafted into award-winning Virginia vintages.'
    },
    {
      icon: Compass,
      title: 'Historic Preservation',
      description: 'Painstakingly restored 18th-century architecture integrated with modern luxury amenities, preserving Albemarle County heritage.'
    },
    {
      icon: Award,
      title: 'World-Class Hospitality',
      description: 'Honored across national publications as Charlottesville’s foremost destination for bespoke weddings, luxury stays, and private retreats.'
    }
  ];

  return (
    <section id="heritage" className="py-24 bg-stone-900/40 border-y border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-amber-500 font-serif tracking-widest text-xs uppercase font-medium">
              The Mount Ida Heritage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight mt-3 leading-tight">
              An Enduring Legacy in the Heart of Virginia Wine Country
            </h2>
            <p className="mt-6 text-stone-300 text-base leading-relaxed">
              Nestled just minutes south of Charlottesville and Thomas Jefferson’s Monticello, Mount Ida Reserve is one of Virginia&apos;s most magnificent private estates.
            </p>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed">
              What began as a dedication to land conservation has blossomed into a world-class sanctuary where vineyard agriculture, on-site craft brewing, architectural craftsmanship, and legendary Southern hospitality coalesce in perfect harmony.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-stone-800 pt-6">
              <div>
                <p className="text-3xl font-serif font-bold text-amber-400">5,000+</p>
                <p className="text-xs uppercase tracking-wider text-stone-400 mt-1 font-medium">Private Acres</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-amber-400">100%</p>
                <p className="text-xs uppercase tracking-wider text-stone-400 mt-1 font-medium">Estate Grown & Crafted</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-stone-900/80 border border-stone-800 hover:border-amber-700/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-serif text-white font-medium mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-stone-400 text-xs leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
