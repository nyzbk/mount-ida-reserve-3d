import React from 'react';
import { Wine, MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-950 border-t border-stone-800/80 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-stone-800/70">
          {/* Col 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Wine className="w-6 h-6 text-amber-500" />
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-widest uppercase font-semibold text-white">
                  Mount Ida
                </span>
                <span className="text-[9px] tracking-[0.25em] text-amber-500 uppercase -mt-1 font-medium">
                  Reserve & Estate
                </span>
              </div>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
              5,000 pristine acres in Albemarle County, Virginia. Home to award-winning vineyards, craft brewery, monumental wedding lodges, and historic guest cottages.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[11px] font-medium">
                Monticello Wine Trail
              </span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif uppercase tracking-widest text-amber-500 font-semibold">
              The Estate
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a href="#experiences" className="hover:text-amber-400 transition-colors">
                  Tasting Room & Taphouse
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-amber-400 transition-colors">
                  The Grand Lodge
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-amber-400 transition-colors">
                  The Historic Event Barn
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-amber-400 transition-colors">
                  Mount Ida Manor & Cottages
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-amber-400 transition-colors">
                  Reserve Wine & Beer Club
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif uppercase tracking-widest text-amber-500 font-semibold">
              Estate Hours
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-stone-200 font-medium">Tasting Room & Taphouse</p>
                  <p className="text-stone-400">Wed - Sun: 11:00 AM - 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-2">
                <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-stone-200 font-medium">Weddings & Private Events</p>
                  <p className="text-stone-400">By Appointment 7 Days a Week</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif uppercase tracking-widest text-amber-500 font-semibold">
              Location & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>5931 Blenheim Road, Scottsville, VA 24590</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <a href="tel:4345550190" className="hover:text-amber-400 transition-colors">
                  (434) 555-0190
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <a href="mailto:concierge@mountidareserve.com" className="hover:text-amber-400 transition-colors">
                  concierge@mountidareserve.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Mount Ida Reserve. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#experiences" className="hover:text-stone-200 transition-colors flex items-center gap-1">
              <span>Privacy Policy</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="#experiences" className="hover:text-stone-200 transition-colors flex items-center gap-1">
              <span>Terms of Hospitality</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
