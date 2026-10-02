import React, { useState } from 'react';
import { ROOMS, HOSTEL_INFO } from '../data/hostelData';
import { X, Calendar, User, Phone, Mail, Sparkles, CheckCircle2, ShieldCheck, CreditCard, ChevronRight, Download } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  preselectedRoomId?: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  preselectedRoomId,
  onClose,
}) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(
    preselectedRoomId || ROOMS[0].id
  );
  
  // Default check-in tomorrow, check-out in 2 days
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 3);

  const formatDateString = (d: Date) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState<string>(formatDateString(tomorrow));
  const [checkOut, setCheckOut] = useState<string>(formatDateString(dayAfter));
  const [guests, setGuests] = useState<number>(1);

  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const [addOnFoodTour, setAddOnFoodTour] = useState(false);
  const [addOnBike, setAddOnBike] = useState(false);
  const [addOnShuttle, setAddOnShuttle] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const currentRoom = ROOMS.find((r) => r.id === selectedRoomId) || ROOMS[0];

  // Calculate nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const diffTime = Math.max(1, checkOutDate.getTime() - checkInDate.getTime());
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;

  let addOnsTotal = 0;
  if (addOnFoodTour) addOnsTotal += 25 * guests;
  if (addOnBike) addOnsTotal += 15 * nights;
  if (addOnShuttle) addOnsTotal += 20;

  const roomSubtotal = currentRoom.priceMYR * nights;
  const grandTotalMYR = roomSubtotal + addOnsTotal;
  const grandTotalUSD = Math.round(grandTotalMYR / 4.4); // Approx MYR to USD conversion

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'BIG-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-purple-800/60 rounded-2xl shadow-2xl overflow-hidden my-8 text-white">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-purple-950 via-purple-900 to-slate-900 p-5 sm:p-6 border-b border-purple-800/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-700/80 flex items-center justify-center text-purple-200 border border-purple-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-serif-display font-bold text-white">
                Reserve Your Stay at Beds In Garden
              </h3>
              <p className="text-xs text-purple-300">
                Ipoh, Perak, Malaysia · Direct Host Reservation
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          /* Confirmation State */
          <div className="p-6 sm:p-8 space-y-6 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-700/60 flex items-center justify-center mx-auto shadow-lg shadow-emerald-950">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="inline-block px-3 py-1 bg-purple-900/60 text-purple-300 rounded-full text-xs font-semibold mb-2 border border-purple-700/50">
                Reservation Confirmed
              </span>
              <h4 className="text-2xl font-serif-display font-bold text-white">
                Thank You, {guestName}!
              </h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto mt-1">
                Your reservation request at Beds In Garden Hostel has been recorded and locked in!
              </p>
            </div>

            {/* Voucher Box */}
            <div className="bg-slate-950/80 border border-purple-800/50 rounded-xl p-5 text-left text-sm space-y-3">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <span className="text-xs uppercase text-slate-400 font-semibold tracking-wider">
                  Booking Reference
                </span>
                <span className="text-base font-mono font-bold text-purple-300">
                  {bookingRef}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 block text-xs">Room Type:</span>
                  <span className="font-semibold text-slate-200">{currentRoom.name}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Dates & Duration:</span>
                  <span className="font-semibold text-slate-200">
                    {checkIn} to {checkOut} ({nights} night{nights > 1 ? 's' : ''})
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Guests:</span>
                  <span className="font-semibold text-slate-200">{guests} Guest(s)</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Total Amount:</span>
                  <span className="font-bold text-emerald-400 text-base">
                    RM {grandTotalMYR} (~${grandTotalUSD} USD)
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 space-y-1">
                <p>📍 {HOSTEL_INFO.address}</p>
                <p>📞 Phone/WhatsApp: {HOSTEL_INFO.phoneFormatted}</p>
                <p>🕒 Check-in time: {HOSTEL_INFO.checkIn}</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 italic">
              A confirmation summary has been sent to <strong className="text-purple-300">{guestEmail || 'your email'}</strong>. Our host team will also message your phone ({guestPhone}) with self check-in PIN codes prior to arrival.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 border border-slate-700"
              >
                <Download className="w-4 h-4" />
                Print Voucher
              </button>
              <button
                onClick={handleReset}
                className="flex-1 py-3 bg-purple-700 hover:bg-purple-600 text-white text-sm font-semibold rounded-xl shadow-md"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Form State */
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-5">
            
            {/* Step 1: Room & Dates */}
            <div className="space-y-4">
              <label className="block text-xs font-semibold uppercase text-purple-300 tracking-wider">
                1. Choose Room Accommodation
              </label>
              <select
                value={selectedRoomId}
                onChange={(e) => setSelectedRoomId(e.target.value)}
                className="w-full bg-slate-950 border border-purple-800/60 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {ROOMS.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name} — RM {r.priceMYR} / night
                  </option>
                ))}
              </select>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Check-In Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-purple-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">Check-Out Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-purple-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">Guests</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-purple-500"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Optional Add-Ons */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <label className="block text-xs font-semibold uppercase text-purple-300 tracking-wider">
                2. Ipoh Experience Add-Ons (Optional)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <label className={`flex items-center gap-2 p-3 rounded-xl border text-xs cursor-pointer transition-colors ${addOnFoodTour ? 'bg-purple-950/80 border-purple-500 text-purple-200' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input
                    type="checkbox"
                    checked={addOnFoodTour}
                    onChange={(e) => setAddOnFoodTour(e.target.checked)}
                    className="rounded text-purple-600 focus:ring-purple-500"
                  />
                  <span>Ipoh Food Tour (+RM25)</span>
                </label>

                <label className={`flex items-center gap-2 p-3 rounded-xl border text-xs cursor-pointer transition-colors ${addOnBike ? 'bg-purple-950/80 border-purple-500 text-purple-200' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input
                    type="checkbox"
                    checked={addOnBike}
                    onChange={(e) => setAddOnBike(e.target.checked)}
                    className="rounded text-purple-600 focus:ring-purple-500"
                  />
                  <span>City Bike Rental (+RM15/day)</span>
                </label>

                <label className={`flex items-center gap-2 p-3 rounded-xl border text-xs cursor-pointer transition-colors ${addOnShuttle ? 'bg-purple-950/80 border-purple-500 text-purple-200' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                  <input
                    type="checkbox"
                    checked={addOnShuttle}
                    onChange={(e) => setAddOnShuttle(e.target.checked)}
                    className="rounded text-purple-600 focus:ring-purple-500"
                  />
                  <span>KTM Station Pickup (+RM20)</span>
                </label>
              </div>
            </div>

            {/* Step 3: Guest Contact Info */}
            <div className="space-y-3 pt-2 border-t border-slate-800">
              <label className="block text-xs font-semibold uppercase text-purple-300 tracking-wider">
                3. Guest Details
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Special requests or estimated arrival time (Optional)"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Price Summary & Submit */}
            <div className="bg-slate-950 p-4 rounded-xl border border-purple-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block">Total Stay Cost ({nights} night{nights > 1 ? 's' : ''}):</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold font-serif-display text-white">
                    RM {grandTotalMYR}
                  </span>
                  <span className="text-xs text-purple-300">
                    (~${grandTotalUSD} USD)
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 block">
                  Includes all local taxes · Pay at check-in or card
                </span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-purple-950 flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <span>Confirm Reservation</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
