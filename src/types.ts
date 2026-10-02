export type PageRoute = 'home' | 'rooms' | 'gallery' | 'contact';

export interface RoomFacility {
  name: string;
  icon: string;
}

export interface Room {
  id: string;
  name: string;
  category: 'pod_dorm' | 'female_dorm' | 'private_suite' | 'private_twin';
  shortDesc: string;
  fullDesc: string;
  priceMYR: number;
  capacity: number;
  bedType: string;
  bathroomType: string;
  sizeSqM: number;
  image: string;
  facilities: string[];
  features: string[];
  isPopular?: boolean;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'all' | 'rooms' | 'garden' | 'lounge' | 'amenities' | 'ipoh';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface IpohAttraction {
  id: string;
  title: string;
  category: string;
  distance: string;
  image: string;
  description: string;
  tag: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  image?: string;
}

export interface BookingDetails {
  roomId: string;
  roomName: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  pricePerNight: number;
  totalNights: number;
  subtotal: number;
  taxMYR: number;
  totalMYR: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests: string;
  addOns: string[];
  bookingRef?: string;
}
