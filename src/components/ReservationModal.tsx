import React, { useState } from 'react';
import { X, CheckCircle, Sparkles } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialExperience?: string;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  initialExperience = 'The Tasting Room & Taphouse'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: initialExperience,
    date: '',
    guests: '2 Guests',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds if needed, or user closes
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-stone-900 border border-stone-700/70 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-800 text-stone-400 hover:text-white hover:bg-stone-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4 border border-amber-500/30">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-white">Reservation Request Received</h3>
            <p className="mt-3 text-stone-300 text-sm leading-relaxed max-w-sm mx-auto">
              Thank you, {formData.name || 'honored guest'}. Our estate concierge will contact you within 24 hours to confirm your reservation for <span className="text-amber-400 font-medium">{formData.experience}</span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 rounded-full bg-amber-600 text-stone-950 font-semibold text-xs tracking-wider uppercase hover:bg-amber-500 transition-all"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-amber-500 text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Estate Inquiries & Bookings</span>
            </div>
            <h3 className="text-2xl font-serif text-white">Reserve Your Estate Experience</h3>
            <p className="text-stone-400 text-xs mt-1 mb-6">
              Complimentary sommelier consultations and private tour scheduling.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eleanor Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-950/70 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-950/70 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(434) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-950/70 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5">
                  Experience / Venue
                </label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-950/70 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="The Tasting Room & Taphouse">The Tasting Room & Taphouse</option>
                  <option value="The Grand Lodge at Mount Ida">The Grand Lodge (Weddings & Galas)</option>
                  <option value="The Historic Event Barn">The Historic Event Barn</option>
                  <option value="Historic Manor & Estate Cottages">Historic Manor & Estate Cottages (Stays)</option>
                  <option value="Mount Ida Reserve Wine & Beer Club">Wine & Beer Club Membership</option>
                  <option value="Private Curated Tour">Private Curated Architectural Tour</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-stone-950/70 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5">
                    Guest Count
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-950/70 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="1-2 Guests">1-2 Guests</option>
                    <option value="3-6 Guests">3-6 Guests</option>
                    <option value="7-12 Guests (Small Group)">7-12 Guests (Small Group)</option>
                    <option value="50-150 Guests (Private Event)">50-150 Guests (Private Event)</option>
                    <option value="150-300+ Guests (Full Wedding / Gala)">150-300+ Guests (Full Wedding / Gala)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold text-xs uppercase tracking-widest shadow-lg shadow-amber-900/30 transition-all"
                >
                  Confirm Reservation Inquiry
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
