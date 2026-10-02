import React, { useState } from 'react';
import { PageRoute } from '../types';
import { HOSTEL_INFO } from '../data/hostelData';
import { Calendar, Menu, X, Phone, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageRoute; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/85 backdrop-blur-md border-b border-purple-900/40 shadow-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg p-1 transition-transform active:scale-95"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 via-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-purple-900/50 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-purple-200" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif-display font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors">
                Beds In Garden
              </span>
              <span className="block text-[11px] font-medium tracking-widest uppercase text-purple-400/90 -mt-1">
                Ipoh · Hostel
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-purple-900/30">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-purple-700 text-white shadow-md shadow-purple-950/60 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-purple-950/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Book Now CTA & Phone) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${HOSTEL_INFO.phone}`}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-purple-300 transition-colors"
              title="Call Hostel"
            >
              <Phone className="w-3.5 h-3.5 text-purple-400" />
              <span className="hidden lg:inline">{HOSTEL_INFO.phoneFormatted}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden rounded-xl px-5 py-2.5 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-purple-900/50 hover:shadow-purple-700/60 transition-all duration-300 active:scale-95 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-purple-200 group-hover:rotate-12 transition-transform duration-300" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold rounded-lg shadow-md shadow-purple-950 flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-purple-950/50 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-purple-900/50 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full py-3 px-4 text-left rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-purple-700 text-white font-semibold'
                      : 'text-slate-300 bg-slate-900/80 hover:bg-purple-900/40'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-purple-900/30 flex flex-col gap-2">
            <a
              href={`tel:${HOSTEL_INFO.phone}`}
              className="w-full py-2.5 px-4 bg-slate-900/90 text-purple-300 text-xs font-medium rounded-xl flex items-center justify-center gap-2 border border-purple-900/40"
            >
              <Phone className="w-4 h-4" />
              Call Us: {HOSTEL_INFO.phoneFormatted}
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm rounded-xl shadow-lg shadow-purple-900/50 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Reserve Bed / Room Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
