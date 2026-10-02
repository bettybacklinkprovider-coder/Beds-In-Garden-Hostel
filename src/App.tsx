import React, { useState, useEffect } from 'react';
import { PageRoute, Room } from './types';
import { ROOMS } from './data/hostelData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { RoomDetailsModal } from './components/RoomDetailsModal';

import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPreselectedRoomId, setBookingPreselectedRoomId] = useState<string | undefined>(undefined);
  const [roomDetailsModal, setRoomDetailsModal] = useState<Room | null>(null);

  // Hash-based client routing synchronization
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['home', 'rooms', 'gallery', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageRoute);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = `/${page === 'home' ? '' : page}`;
  };

  const handleOpenBookingWithRoom = (roomId?: string) => {
    setBookingPreselectedRoomId(roomId || ROOMS[0].id);
    setBookingModalOpen(true);
  };

  const handleOpenRoomDetails = (room: Room) => {
    setRoomDetailsModal(room);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100 font-sans selection:bg-purple-600 selection:text-white">
      {/* Sticky Premium Purple Top Bar Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBookingWithRoom(ROOMS[0].id)}
      />

      {/* Main Page Router View */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBookingWithRoom={handleOpenBookingWithRoom}
            onOpenRoomDetails={handleOpenRoomDetails}
          />
        )}

        {currentPage === 'rooms' && (
          <RoomsPage
            onNavigate={handleNavigate}
            onOpenBookingWithRoom={handleOpenBookingWithRoom}
            onOpenRoomDetails={handleOpenRoomDetails}
          />
        )}

        {currentPage === 'gallery' && <GalleryPage />}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBookingWithRoom(ROOMS[0].id)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBookingWithRoom(ROOMS[0].id)}
      />

      {/* Interactive Booking Engine Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        preselectedRoomId={bookingPreselectedRoomId}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* Quick Room Details Modal */}
      <RoomDetailsModal
        room={roomDetailsModal}
        onClose={() => setRoomDetailsModal(null)}
        onBookNow={(roomId) => {
          setRoomDetailsModal(null);
          handleOpenBookingWithRoom(roomId);
        }}
      />
    </div>
  );
}
