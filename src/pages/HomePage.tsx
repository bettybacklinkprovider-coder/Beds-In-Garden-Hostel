import React from 'react';
import { PageRoute, Room } from '../types';
import { HOSTEL_INFO, ROOMS, FACILITIES, IPOH_ATTRACTIONS, TESTIMONIALS, heroGardenHostel, aboutHostelCourtyard } from '../data/hostelData';
import { 
  Calendar, 
  ArrowRight, 
  Star, 
  MapPin, 
  Phone, 
  Check, 
  Wifi, 
  Bed, 
  Trees, 
  Coffee, 
  Sparkles, 
  ShieldCheck,
  ChevronRight,
  Heart,
  Clock,
  Compass
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenBookingWithRoom?: (roomId: string) => void;
  onOpenRoomDetails: (room: Room) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBookingWithRoom,
  onOpenRoomDetails,
}) => {
  const getFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi': return <Wifi className="w-6 h-6 text-purple-300" />;
      case 'Bed': return <Bed className="w-6 h-6 text-purple-300" />;
      case 'Trees': return <Trees className="w-6 h-6 text-purple-300" />;
      case 'Coffee': return <Coffee className="w-6 h-6 text-purple-300" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-purple-300" />;
      case 'ShieldCheck': default: return <ShieldCheck className="w-6 h-6 text-purple-300" />;
    }
  };

  return (
    <div className="space-y-24 pb-16 bg-slate-900 text-slate-100">
      
      {/* SECTION 1: Premium Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        
        {/* Background Image with Dark Purple Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroGardenHostel}
            alt="Beds In Garden Hostel Ipoh"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-105 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-950/70 to-purple-950/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.8)_100%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-950/80 border border-purple-500/40 rounded-full backdrop-blur-md shadow-xl text-xs sm:text-sm font-semibold text-purple-200 animate-in fade-in slide-in-from-top duration-500">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Ipoh’s Premier Luxury Boutique Hostel</span>
            <span className="text-purple-400 font-bold">★ 4.9</span>
          </div>

          {/* Main Title & Tagline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-display font-bold tracking-tight text-white drop-shadow-lg text-balance leading-tight">
              Beds In Garden Hostel
            </h1>
            <p className="text-lg sm:text-2xl text-purple-100/90 max-w-3xl mx-auto font-light leading-relaxed drop-shadow">
              Your serene luxury garden oasis nestled in the historic heritage heart of Ipoh, Perak, Malaysia.
            </p>
          </div>

          {/* Primary & Secondary Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenBookingWithRoom?.(ROOMS[0].id)}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-base rounded-2xl shadow-2xl shadow-purple-950 hover:shadow-purple-700/50 transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-3 group"
            >
              <Calendar className="w-5 h-5 text-purple-200 group-hover:rotate-12 transition-transform" />
              <span>Book Your Stay</span>
            </button>

            <button
              onClick={() => onNavigate('rooms')}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-purple-950/80 text-white font-semibold text-base rounded-2xl border border-purple-800/60 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Explore Rooms</span>
              <ArrowRight className="w-5 h-5 text-purple-300 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Quick Info Strip */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-xs sm:text-sm text-purple-200/90 font-medium bg-slate-950/70 p-4 rounded-2xl border border-purple-900/40 backdrop-blur-md">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Jubilee Park, Ipoh</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Wifi className="w-4 h-4 text-purple-400 shrink-0" />
              <span>500 Mbps Fiber Wi-Fi</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Bed className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Custom Teak Pods</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-purple-400 shrink-0" />
              <span>24/7 Digital Check-In</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: Welcome / About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image side */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-purple-800/50 shadow-2xl bg-slate-950">
              <img
                src={aboutHostelCourtyard}
                alt="Beds In Garden Hostel Courtyard"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-purple-950/90 backdrop-blur-md p-4 rounded-xl border border-purple-700/50 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase text-purple-300 font-semibold tracking-wider">Tranquil Atmosphere</span>
                  <p className="text-sm font-semibold text-white">Shaded Tropical Garden & Deck</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold font-serif-display text-purple-300">4.9 ★</span>
                  <span className="block text-[10px] text-slate-400">380+ Verified Guest Reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
                Welcome To Beds In Garden
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-bold text-white leading-tight">
                A Peaceful Garden Sanctuary Crafted for Modern Travelers
              </h2>
            </div>

            <p className="text-base text-slate-300 leading-relaxed">
              Located directly adjacent to Ipoh’s Jubilee Park, <strong>Beds In Garden Hostel</strong> blends boutique luxury design with warm, community-driven hospitality. Whether you are an international backpacker, a digital nomad needing reliable high-speed fiber internet, or a solo traveler looking for privacy and comfort, our hostel provides an unforgettable stay.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Enjoy our custom sound-dampened teak pod beds with blackout privacy curtains, relax under fairy lights in our lush outdoor tropical garden courtyard, or walk 5 minutes into Ipoh Old Town to indulge in famous local white coffee and heritage street art.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-purple-950/40 border border-purple-900/40">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Central Location</h4>
                  <p className="text-[11px] text-slate-400">5 min walk to Old Town & KTM Train</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-purple-950/40 border border-purple-900/40">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Luxury Bedding</h4>
                  <p className="text-[11px] text-slate-400">100% Egyptian Cotton Linens</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-purple-200 transition-colors group"
              >
                <span>Learn more about our address & directions</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: Rooms & Accommodation Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
            Comfort & Tranquility
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-white">
            Rooms & Accommodations
          </h2>
          <p className="text-sm text-slate-400">
            Every room is designed with premium acoustic privacy, ergonomic space, individual power hubs, and garden courtyard views.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROOMS.map((room) => (
            <div
              key={room.id}
              className="group bg-slate-950 border border-purple-900/40 hover:border-purple-600/80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-950/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Room Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = heroGardenHostel;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  {room.isPopular && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 bg-purple-700/90 text-white text-[10px] font-bold tracking-wider uppercase rounded-full shadow-md">
                      Popular Choice
                    </span>
                  )}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xl font-bold font-serif-display text-white">
                      RM {room.priceMYR}
                    </span>
                    <span className="text-[10px] text-purple-300 block">/ night</span>
                  </div>
                </div>

                {/* Room Info */}
                <div className="p-5 space-y-3">
                  <h3 className="text-base font-serif-display font-bold text-white group-hover:text-purple-300 transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {room.shortDesc}
                  </p>

                  {/* Facilities Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {room.facilities.slice(0, 3).map((fac, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-purple-950/80 text-purple-300 text-[10px] font-medium rounded-md border border-purple-900/50"
                      >
                        {fac}
                      </span>
                    ))}
                    {room.facilities.length > 3 && (
                      <span className="px-2 py-0.5 bg-slate-900 text-slate-400 text-[10px] rounded-md">
                        +{room.facilities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                <button
                  onClick={() => onOpenRoomDetails(room)}
                  className="w-full py-2 px-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold rounded-xl border border-slate-800 transition-colors text-center"
                >
                  View Room
                </button>
                <button
                  onClick={() => onOpenBookingWithRoom?.(room.id)}
                  className="w-full py-2 px-3 bg-purple-700 hover:bg-purple-600 text-white text-xs font-semibold rounded-xl shadow-md transition-colors text-center"
                >
                  Book Now
                </button>
              </div>

            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('rooms')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-950/80 hover:bg-purple-900/80 text-purple-200 border border-purple-700/50 rounded-xl text-sm font-semibold transition-colors"
          >
            <span>View Full Room Comparison & Details</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* SECTION 4: Facilities & Amenities Section */}
      <section className="bg-slate-950/60 border-y border-purple-900/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
              Thoughtful Guest Amenities
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-white">
              Facilities & Amenities
            </h2>
            <p className="text-sm text-slate-400">
              Everything you need for a relaxing, effortless stay in Ipoh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.map((fac) => (
              <div
                key={fac.id}
                className="bg-slate-900/90 border border-purple-900/40 rounded-2xl overflow-hidden hover:border-purple-600/60 transition-all duration-300 group flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Photography Header */}
                  {fac.image && (
                    <div className="relative h-44 w-full overflow-hidden">
                      <img
                        src={fac.image}
                        alt={fac.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                      
                      {/* Floating Badge on Image */}
                      {fac.badge && (
                        <span className="absolute top-3 right-3 px-2.5 py-1 bg-purple-950/90 text-purple-200 text-[10px] font-bold rounded-full border border-purple-700/50 backdrop-blur-md shadow-md">
                          {fac.badge}
                        </span>
                      )}

                      {/* Icon overlay */}
                      <div className="absolute bottom-3 left-4 w-11 h-11 rounded-xl bg-purple-950/90 border border-purple-700/60 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        {getFacilityIcon(fac.iconName)}
                      </div>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-5 space-y-2">
                    <h3 className="text-lg font-serif-display font-bold text-white group-hover:text-purple-300 transition-colors">
                      {fac.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {fac.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: Discover Ipoh */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400 flex items-center gap-1.5">
              <Compass className="w-4 h-4" /> Discover Perak
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-white">
              Discover Historic Ipoh
            </h2>
            <p className="text-sm text-slate-400">
              Famous for heritage shophouses, limestone cave temples, world-class street food, and vibrant night markets right next to Jubilee Park.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="text-xs font-semibold text-purple-300 hover:text-white flex items-center gap-1 self-start md:self-auto"
          >
            <span>View Map & Directions</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Ipoh Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {IPOH_ATTRACTIONS.map((att) => (
            <div
              key={att.id}
              className="group bg-slate-950 border border-purple-900/40 rounded-2xl overflow-hidden hover:border-purple-600/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={att.image}
                    alt={att.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 bg-purple-900/90 text-purple-200 text-[10px] font-bold rounded-md">
                    {att.tag}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-purple-400 font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{att.distance}</span>
                  </div>
                  <h3 className="text-base font-serif-display font-bold text-white group-hover:text-purple-300 transition-colors">
                    {att.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {att.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">
                  Category: {att.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guest Review Spotlight */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-purple-950/80 via-slate-950 to-slate-900 p-8 sm:p-10 rounded-3xl border border-purple-800/50 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-purple-900/50 pb-4">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">
              Verified Traveler Experience
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="space-y-3 bg-slate-900/80 p-4 rounded-xl border border-purple-900/30">
                <p className="text-xs italic text-slate-200 leading-relaxed">
                  "{t.comment}"
                </p>
                <div className="pt-2 border-t border-slate-800 text-xs">
                  <span className="font-bold text-white block">{t.name}</span>
                  <span className="text-purple-300 block text-[11px]">{t.country} · {t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Booking CTA / Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 border border-purple-700/60 p-8 sm:p-12 lg:p-16 text-center shadow-2xl">
          
          {/* Subtle Ambient Glow Circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-block px-3.5 py-1 bg-purple-800/80 border border-purple-500/40 text-purple-200 rounded-full text-xs font-bold tracking-wider uppercase">
              Beds In Garden Hostel · Ipoh, Malaysia
            </span>

            <h2 className="text-3xl sm:text-5xl font-serif-display font-bold text-white leading-tight">
              Make Your Stay in Ipoh Comfortable & Unforgettable
            </h2>

            <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed">
              Reserve your privacy pod or private suite today. Experience genuine Malaysian hospitality, lush garden serenity, and fast fiber Wi-Fi.
            </p>

            {/* Direct Phone & Address Info */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs sm:text-sm text-purple-200">
              <a
                href={`tel:${HOSTEL_INFO.phone}`}
                className="flex items-center gap-2 bg-purple-950/80 px-4 py-2.5 rounded-xl border border-purple-700/60 hover:bg-purple-800/80 transition-colors"
              >
                <Phone className="w-4 h-4 text-purple-300" />
                <span className="font-semibold">{HOSTEL_INFO.phoneFormatted}</span>
              </a>

              <div className="flex items-center gap-2 bg-purple-950/80 px-4 py-2.5 rounded-xl border border-purple-700/60 text-left max-w-xs">
                <MapPin className="w-4 h-4 text-purple-300 shrink-0" />
                <span className="truncate text-xs">{HOSTEL_INFO.shortAddress}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onOpenBookingWithRoom?.(ROOMS[0].id)}
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-purple-50 text-purple-950 font-bold text-base rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5 text-purple-700" />
                <span>Book Now</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-8 py-4 bg-purple-950/80 hover:bg-purple-900/80 text-white font-semibold text-base rounded-2xl border border-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-purple-300" />
                <span>Contact Us</span>
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
