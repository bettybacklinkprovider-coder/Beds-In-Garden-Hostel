import React from 'react';
import { PageRoute } from '../types';
import { HOSTEL_INFO } from '../data/hostelData';
import { MapPin, Phone, Mail, Instagram, Facebook, Sparkles, ArrowUpRight, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const handleNav = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-purple-900/40 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-purple-900/20 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-700 flex items-center justify-center text-white shadow-md shadow-purple-950">
                <Sparkles className="w-4 h-4 text-purple-200" />
              </div>
              <span className="text-xl font-serif-display font-bold text-white tracking-tight">
                Beds In Garden
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Boutique luxury hostel in Ipoh, Perak, Malaysia. Experience serene tropical garden courtyards, privacy pods, private suites, and genuine Malaysian hospitality.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={HOSTEL_INFO.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-purple-900/60 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-slate-800 hover:border-purple-700"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={HOSTEL_INFO.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-purple-900/60 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-slate-800 hover:border-purple-700"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={HOSTEL_INFO.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-emerald-900/60 text-slate-400 hover:text-emerald-300 flex items-center justify-center transition-colors border border-slate-800 hover:border-emerald-700"
                aria-label="WhatsApp"
              >
                <span className="text-xs font-bold">WA</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-300 mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-purple-300 transition-colors flex items-center gap-1 group"
                >
                  <span className="text-purple-500 group-hover:translate-x-1 transition-transform">›</span>
                  Home Section
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('rooms')}
                  className="hover:text-purple-300 transition-colors flex items-center gap-1 group"
                >
                  <span className="text-purple-500 group-hover:translate-x-1 transition-transform">›</span>
                  Rooms & Pod Accommodations
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-purple-300 transition-colors flex items-center gap-1 group"
                >
                  <span className="text-purple-500 group-hover:translate-x-1 transition-transform">›</span>
                  Photo Gallery & Courtyard
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-purple-300 transition-colors flex items-center gap-1 group"
                >
                  <span className="text-purple-500 group-hover:translate-x-1 transition-transform">›</span>
                  Contact & Location Map
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-purple-400 font-medium hover:text-purple-300 transition-colors flex items-center gap-1 group"
                >
                  <span className="text-purple-400 group-hover:translate-x-1 transition-transform">›</span>
                  Book Your Stay Online
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Address */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-300 mb-4">
              Hostel Information
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <span className="leading-snug text-xs sm:text-sm">
                  {HOSTEL_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <a
                  href={`tel:${HOSTEL_INFO.phone}`}
                  className="hover:text-purple-300 transition-colors text-sm font-medium"
                >
                  {HOSTEL_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <a
                  href={`mailto:${HOSTEL_INFO.email}`}
                  className="hover:text-purple-300 transition-colors text-sm"
                >
                  {HOSTEL_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Connected & Reserve */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-300 mb-4">
              Plan Your Stay
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Central Jubilee Park location in Ipoh, Perak. Minutes away from Old Town white coffee cafes and heritage trails.
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white text-xs font-semibold rounded-xl shadow-lg shadow-purple-950 flex items-center justify-center gap-2 group transition-all"
            >
              <span>Instant Online Reservation</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Beds In Garden Hostel (Ipoh, Perak, Malaysia). All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-purple-400 fill-purple-400" />
            <span>for international & local travelers in Ipoh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
