import React, { useState } from 'react';
import { PageRoute } from '../types';
import { HOSTEL_INFO, FAQS, ROOMS } from '../data/hostelData';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Navigation, 
  HelpCircle,
  Instagram,
  Facebook,
  ExternalLink
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roomPreference: ROOMS[0].name,
    arrivalDate: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketRef, setTicketRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomTicket = 'INQ-' + Math.floor(10000 + Math.random() * 90000);
    setTicketRef(randomTicket);
    setIsSubmitted(true);
  };

  return (
    <div className="py-12 space-y-16 bg-slate-900 text-slate-100 min-h-screen">
      
      {/* Page Title */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-block px-3.5 py-1 bg-purple-950 border border-purple-800 text-purple-300 text-xs font-bold uppercase tracking-widest rounded-full">
          Beds In Garden Hostel · Connect With Us
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif-display font-bold text-white tracking-tight">
          Contact Us & Location
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          Have questions about your stay in Ipoh or need assistance with custom group bookings? We are here to welcome you!
        </p>
      </section>

      {/* Main Grid: Info + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Information & Quick Actions (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-950 border border-purple-900/50 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl">
              <h2 className="text-2xl font-serif-display font-bold text-white">
                Hostel Information
              </h2>

              <div className="space-y-5 text-sm">
                
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-purple-950/40 border border-purple-900/40">
                  <div className="w-10 h-10 rounded-xl bg-purple-800/80 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Direct Phone & WhatsApp</span>
                    <a
                      href={`tel:${HOSTEL_INFO.phone}`}
                      className="text-base font-bold text-white hover:text-purple-300 transition-colors"
                    >
                      {HOSTEL_INFO.phoneFormatted}
                    </a>
                    <span className="text-[11px] text-purple-400 block mt-0.5">
                      Available 8:00 AM – 10:00 PM (GMT+8)
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-purple-950/40 border border-purple-900/40">
                  <div className="w-10 h-10 rounded-xl bg-purple-800/80 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Full Hostel Address</span>
                    <p className="text-xs font-semibold text-white leading-relaxed mt-0.5">
                      {HOSTEL_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-purple-950/40 border border-purple-900/40">
                  <div className="w-10 h-10 rounded-xl bg-purple-800/80 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Email Support</span>
                    <a
                      href={`mailto:${HOSTEL_INFO.email}`}
                      className="text-sm font-semibold text-purple-300 hover:underline"
                    >
                      {HOSTEL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-purple-950/40 border border-purple-900/40">
                  <div className="w-10 h-10 rounded-xl bg-purple-800/80 text-white flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Check-In / Check-Out Hours</span>
                    <p className="text-xs text-white mt-0.5">
                      <strong>Check-In:</strong> {HOSTEL_INFO.checkIn}<br />
                      <strong>Check-Out:</strong> {HOSTEL_INFO.checkOut}
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <span className="text-xs font-semibold uppercase text-purple-300 tracking-wider block">
                  Follow Us On Social Media
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={HOSTEL_INFO.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-3 bg-slate-900 hover:bg-purple-900/80 text-xs font-semibold text-slate-200 rounded-xl border border-slate-800 flex items-center justify-center gap-2 transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-pink-400" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={HOSTEL_INFO.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-3 bg-slate-900 hover:bg-purple-900/80 text-xs font-semibold text-slate-200 rounded-xl border border-slate-800 flex items-center justify-center gap-2 transition-colors"
                  >
                    <Facebook className="w-4 h-4 text-blue-400" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950 border border-purple-900/50 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6">
            <div>
              <h2 className="text-2xl font-serif-display font-bold text-white">
                Send Us a Message
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Fill out the form below for stay inquiries, group reservations, or Ipoh travel recommendations.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 bg-purple-950/60 border border-purple-700/60 rounded-2xl text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-700/60 flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif-display font-bold text-white">
                  Message Delivered!
                </h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your inquiry reference ticket is <span className="font-mono text-purple-300 font-bold">{ticketRef}</span>. Our host team will reply to <strong>{formData.email}</strong> shortly!
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 bg-purple-700 hover:bg-purple-600 text-white text-xs font-semibold rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Tan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+60..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Preferred Room</label>
                    <select
                      value={formData.roomPreference}
                      onChange={(e) => setFormData({ ...formData, roomPreference: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-purple-500"
                    >
                      {ROOMS.map((r) => (
                        <option key={r.id} value={r.name}>{r.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Estimated Arrival Date</label>
                    <input
                      type="date"
                      value={formData.arrivalDate}
                      onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">Your Message or Query *</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your trip plans, special requests, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-purple-950 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* Google Maps Section & Transit Directions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
            Location & Transit Guide
          </span>
          <h2 className="text-3xl font-serif-display font-bold text-white">
            Find Beds In Garden Hostel in Ipoh
          </h2>
          <p className="text-xs text-slate-400 max-w-xl mx-auto">
            Situated in Jubilee Park, Ipoh, Perak. Easy access from train stations, bus terminals, and major expressways.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950 border border-purple-900/50 rounded-3xl p-6 sm:p-8 shadow-2xl">
          
          {/* Map Frame (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-purple-800/60 h-80 sm:h-96 relative bg-slate-900">
            <iframe
              title="Beds In Garden Hostel Location Map"
              src={HOSTEL_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.1) saturate(1.2)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-purple-700/50 text-xs font-bold text-white shadow-lg flex items-center gap-1.5">
              <Navigation className="w-4 h-4 text-purple-400" />
              <span>Jubilee Park, Ipoh</span>
            </div>
          </div>

          {/* Transit Directions Guide (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-xs text-slate-300">
            <h3 className="text-lg font-serif-display font-bold text-white">
              How to Reach Us
            </h3>

            <div className="space-y-3">
              <div className="p-3 bg-slate-900/90 rounded-xl border border-purple-900/40 space-y-1">
                <div className="flex items-center justify-between text-purple-300 font-semibold">
                  <span>🚆 From Ipoh KTM Railway Station</span>
                  <span className="text-[10px] bg-purple-950 px-2 py-0.5 rounded">10 mins</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Take a 5-minute Grab ride or enjoy a pleasant 12-minute walk through historic Ipoh Old Town to Jubilee Park.
                </p>
              </div>

              <div className="p-3 bg-slate-900/90 rounded-xl border border-purple-900/40 space-y-1">
                <div className="flex items-center justify-between text-purple-300 font-semibold">
                  <span>🚌 From Terminal Amanjaya Bus Station</span>
                  <span className="text-[10px] bg-purple-950 px-2 py-0.5 rounded">15 mins</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Catch the local T30 bus directly to Ipoh center or order a Grab car (~RM 12-15).
                </p>
              </div>

              <div className="p-3 bg-slate-900/90 rounded-xl border border-purple-900/40 space-y-1">
                <div className="flex items-center justify-between text-purple-300 font-semibold">
                  <span>✈️ From Sultan Azlan Shah Airport (IPH)</span>
                  <span className="text-[10px] bg-purple-950 px-2 py-0.5 rounded">12 mins</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Direct Grab transfer takes just 12 minutes (~RM 10-14).
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(HOSTEL_INFO.address)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-purple-950 hover:bg-purple-900 text-purple-200 border border-purple-700/60 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" /> Guest FAQ
          </span>
          <h2 className="text-3xl font-serif-display font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="p-5 bg-slate-950 border border-purple-900/40 rounded-2xl space-y-2"
            >
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="text-purple-400">Q.</span> {faq.question}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed pl-5">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-950 to-indigo-950 p-8 sm:p-10 rounded-3xl border border-purple-800/60 text-center space-y-4 shadow-2xl">
          <h3 className="text-2xl font-serif-display font-bold text-white">
            Ready to Experience Beds In Garden Hostel?
          </h3>
          <p className="text-xs sm:text-sm text-purple-200/90 max-w-lg mx-auto">
            Book directly online for best rate guarantee and instant keycard code confirmation.
          </p>
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 bg-white text-purple-950 font-bold text-sm rounded-xl hover:bg-purple-50 transition-colors inline-flex items-center gap-2 shadow-xl"
          >
            <Calendar className="w-4 h-4 text-purple-700" />
            <span>Book Your Stay Online</span>
          </button>
        </div>
      </section>

    </div>
  );
};
