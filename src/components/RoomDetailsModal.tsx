import React from 'react';
import { Room } from '../types';
import { X, Check, Bed, Users, Shield, Sparkles, Calendar } from 'lucide-react';

interface RoomDetailsModalProps {
  room: Room | null;
  onClose: () => void;
  onBookNow: (roomId: string) => void;
}

export const RoomDetailsModal: React.FC<RoomDetailsModalProps> = ({
  room,
  onClose,
  onBookNow,
}) => {
  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-purple-800/60 rounded-2xl shadow-2xl overflow-hidden my-8 text-white">
        
        {/* Header Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={room.image}
            alt={room.name}
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/src/assets/images/hero_garden_hostel_1790924389807.jpg';
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white bg-slate-900/80 hover:bg-slate-800 rounded-full transition-colors border border-purple-800/40"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-3 py-1 bg-purple-700/90 text-white rounded-full text-xs font-semibold mb-2 shadow-md">
              RM {room.priceMYR} / night
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-white drop-shadow-md">
              {room.name}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Quick Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950/80 p-4 rounded-xl border border-purple-900/40 text-xs">
            <div>
              <span className="text-slate-400 block">Capacity</span>
              <span className="font-semibold text-purple-300 flex items-center gap-1 mt-0.5">
                <Users className="w-3.5 h-3.5" /> {room.capacity} Guest(s)
              </span>
            </div>
            <div>
              <span className="text-slate-400 block">Bed Type</span>
              <span className="font-semibold text-purple-300 flex items-center gap-1 mt-0.5">
                <Bed className="w-3.5 h-3.5" /> {room.bedType}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block">Bathroom</span>
              <span className="font-semibold text-purple-300 flex items-center gap-1 mt-0.5">
                <Shield className="w-3.5 h-3.5" /> {room.bathroomType}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block">Room Size</span>
              <span className="font-semibold text-purple-300 flex items-center gap-1 mt-0.5">
                <Sparkles className="w-3.5 h-3.5" /> {room.sizeSqM} m²
              </span>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h4 className="text-sm font-semibold uppercase text-purple-300 tracking-wider mb-2">
              About This Room
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {room.fullDesc}
            </p>
          </div>

          {/* Included Amenities & Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-semibold uppercase text-purple-300 tracking-wider mb-2">
                Room Amenities
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {room.facilities.map((fac, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{fac}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase text-purple-300 tracking-wider mb-2">
                Special Comfort Highlights
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {room.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-400 block">Price per night</span>
              <span className="text-2xl font-serif-display font-bold text-white">
                RM {room.priceMYR}
              </span>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookNow(room.id);
              }}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-purple-950 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book This Room Now
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
