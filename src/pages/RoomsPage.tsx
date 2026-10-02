import React, { useState } from 'react';
import { PageRoute, Room } from '../types';
import { ROOMS, HOSTEL_INFO } from '../data/hostelData';
import { 
  Bed, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  Calendar, 
  Info, 
  SlidersHorizontal,
  ChevronRight,
  Wifi,
  Lock,
  Wind
} from 'lucide-react';

interface RoomsPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenBookingWithRoom: (roomId: string) => void;
  onOpenRoomDetails: (room: Room) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({
  onNavigate,
  onOpenBookingWithRoom,
  onOpenRoomDetails,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Rooms & Pods' },
    { id: 'pod_dorm', label: 'Mixed Pod Dorms' },
    { id: 'female_dorm', label: 'Female Only Pods' },
    { id: 'private_suite', label: 'Private Suites' },
  ];

  const filteredRooms = activeCategory === 'all'
    ? ROOMS
    : ROOMS.filter((r) => r.category === activeCategory);

  return (
    <div className="py-12 space-y-16 bg-slate-900 text-slate-100 min-h-screen">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-block px-3.5 py-1 bg-purple-950 border border-purple-800 text-purple-300 text-xs font-bold uppercase tracking-widest rounded-full">
          Beds In Garden Hostel · Accommodation
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif-display font-bold text-white tracking-tight">
          Rooms & Privacy Pods
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          Crafted with acoustic sound dampening, custom teak wood design, blackout privacy curtains, and 100% Egyptian cotton linens for a restorative sleep in Ipoh.
        </p>

        {/* Filter Bar */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-purple-700 text-white shadow-lg shadow-purple-950 border border-purple-500'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Main Room Cards List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="bg-slate-950 border border-purple-900/50 hover:border-purple-600/80 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            {/* Room Photography (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full overflow-hidden group">
              <img
                src={room.image}
                alt={room.name}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/src/assets/images/hero_garden_hostel_1790924389807.jpg';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 lg:opacity-40" />
              
              <div className="absolute top-4 left-4 bg-purple-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-purple-700/50 text-xs font-bold text-white shadow-md">
                RM {room.priceMYR} <span className="text-[10px] font-normal text-purple-300">/ night</span>
              </div>

              {room.isPopular && (
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}
            </div>

            {/* Room Details (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-white">
                    {room.name}
                  </h2>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {room.fullDesc}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900/80 p-3.5 rounded-2xl border border-purple-900/30 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Capacity</span>
                    <span className="font-semibold text-purple-200 flex items-center gap-1 mt-0.5">
                      <Users className="w-3.5 h-3.5 text-purple-400" /> {room.capacity} Person
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Bed Type</span>
                    <span className="font-semibold text-purple-200 flex items-center gap-1 mt-0.5">
                      <Bed className="w-3.5 h-3.5 text-purple-400" /> {room.bedType}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Bathroom</span>
                    <span className="font-semibold text-purple-200 flex items-center gap-1 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-purple-400" /> {room.bathroomType}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Size</span>
                    <span className="font-semibold text-purple-200 flex items-center gap-1 mt-0.5">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400" /> {room.sizeSqM} m²
                    </span>
                  </div>
                </div>

                {/* Features Checklist */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2">
                    Key Comfort Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {room.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 block">Nightly Rate:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-serif-display font-bold text-white">
                      RM {room.priceMYR}
                    </span>
                    <span className="text-xs text-purple-300">
                      (~${Math.round(room.priceMYR / 4.4)} USD)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => onOpenRoomDetails(room)}
                    className="flex-1 sm:flex-initial px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold rounded-xl border border-slate-800 transition-colors"
                  >
                    Quick Details
                  </button>
                  <button
                    onClick={() => onOpenBookingWithRoom(room.id)}
                    className="flex-1 sm:flex-initial px-6 py-3 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold rounded-xl shadow-lg shadow-purple-950 flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Now
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </section>

      {/* Sleep Quality & Policy Guarantee */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950/80 p-8 rounded-3xl border border-purple-900/50 space-y-6">
          <h3 className="text-xl font-serif-display font-bold text-white text-center">
            Our Sleep & Quiet Night Guarantee
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="flex items-start gap-3 p-3 bg-slate-900/90 rounded-xl border border-purple-900/30">
              <Lock className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white">Digital Keycard Security</h4>
                <p className="text-slate-400 text-[11px] mt-1">24/7 keyless entry with individual pod locks for complete peace of mind.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-slate-900/90 rounded-xl border border-purple-900/30">
              <Wind className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white">Quiet Hours (10 PM - 8 AM)</h4>
                <p className="text-slate-400 text-[11px] mt-1">Dedicated quiet hours ensure deep, undisturbed rest for every traveler.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-slate-900/90 rounded-xl border border-purple-900/30">
              <Sparkles className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white">Daily Sanitation</h4>
                <p className="text-slate-400 text-[11px] mt-1">Freshly laundered high-density linens and daily bathroom sanitation protocol.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
