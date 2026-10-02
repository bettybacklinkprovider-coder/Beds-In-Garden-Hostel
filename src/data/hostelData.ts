import { Room, GalleryImage, IpohAttraction, FacilityItem } from '../types';

import aboutHostelCourtyard from '../assets/images/about_hostel_courtyard_1790924403884.jpg';
import facilityCleanBathrooms from '../assets/images/facility_clean_bathrooms_1790934238969.jpg';
import facilityCommonLounge from '../assets/images/facility_common_lounge_1790934227707.jpg';
import facilityGuestSecurity from '../assets/images/facility_guest_security_1790934250251.jpg';
import facilityLushGarden from '../assets/images/facility_lush_garden_1790934216103.jpg';
import facilityOrthopedicBeds from '../assets/images/facility_orthopedic_beds_1790934204560.jpg';
import facilityWifiCoworking from '../assets/images/facility_wifi_coworking_1790934189632.jpg';
import galleryCommonLounge from '../assets/images/gallery_common_lounge_1790924452295.jpg';
import heroGardenHostel from '../assets/images/hero_garden_hostel_1790924389807.jpg';
import ipohOldTownAttractions from '../assets/images/ipoh_old_town_attractions_1790924463823.jpg';
import roomMixedPodDorm from '../assets/images/room_mixed_pod_dorm_1790924420600.jpg';
import roomPrivateGardenSuite from '../assets/images/room_private_garden_suite_1790924438306.jpg';

export { heroGardenHostel, aboutHostelCourtyard };

export const HOSTEL_INFO = {
  name: 'Beds In Garden Hostel',
  tagline: 'Your Luxury Garden Oasis in Historic Ipoh',
  phone: '+6052555822',
  phoneFormatted: '+60 5-255 5822',
  whatsapp: '+6052555822',
  address: 'AA, Lot 3435N, Jubilee Park, 30450, Jalan Jubilee, Taman Jubilee, 30300 Ipoh, Perak, Malaysia',
  shortAddress: 'Jubilee Park, Ipoh, Perak, Malaysia',
  email: 'stay@bedsingarden.com',
  rating: 4.9,
  reviewsCount: 382,
  checkIn: '3:00 PM - 10:00 PM (Late keyless check-in available)',
  checkOut: '8:00 AM - 12:00 PM',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8123456789!2d101.0847!3d4.5937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31caec0123456789%3A0x123456789abcdef!2sJubilee%20Park%2C%2030450%20Ipoh%2C%20Perak%2C%20Malaysia!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy',
  social: {
    instagram: 'https://instagram.com/bedsingarden.ipoh',
    facebook: 'https://facebook.com/bedsingardenhostel',
    whatsapp: 'https://wa.me/6052555822',
  }
};

export const ROOMS: Room[] = [
  {
    id: 'deluxe-mixed-pod',
    name: 'Deluxe Mixed Privacy Pod Dorm',
    category: 'pod_dorm',
    shortDesc: 'Custom teak wood privacy pods with blackout curtains, reading light, power outlets, and personal locker.',
    fullDesc: 'Designed for individual travelers seeking comfort and community. Each custom-built wooden pod features a high-density 10-inch mattress with 100% Egyptian cotton linens, a private blackout curtain, universal power sockets, dual USB charging ports, an adjustable LED reading light, and a personal electronic locker.',
    priceMYR: 55,
    capacity: 1,
    bedType: 'Single Capsule Pod',
    bathroomType: 'Shared Luxury Shower Suites',
    sizeSqM: 28,
    image: roomMixedPodDorm,
    facilities: ['Air Conditioning', 'High-Speed Wi-Fi', 'Blackout Curtain', 'Keycard Locker', 'Reading Lamp', 'Universal Socket'],
    features: ['10-inch Orthopedic Mattress', 'Sound-Dampened Wood Pod', 'Daily Housekeeping', 'Garden View Access'],
    isPopular: true,
  },
  {
    id: 'female-pod-dorm',
    name: 'Female Exclusive Garden Pod Dorm',
    category: 'female_dorm',
    shortDesc: 'A serene female-only sanctuary with vanity mirrors, hairdryers, and extra privacy amenities.',
    fullDesc: 'A tranquil, secure female-only room equipped with custom luxury pods overlooking our lush interior courtyard. Includes dedicated vanity stations with ring lights, ionic hairdryers, full-length mirrors, and premium organic bath products.',
    priceMYR: 65,
    capacity: 1,
    bedType: 'Single Capsule Pod',
    bathroomType: 'Ensuite Female Shower Suite',
    sizeSqM: 26,
    image: aboutHostelCourtyard,
    facilities: ['Female Only', 'Air Conditioning', 'Vanity & Hairdryer', 'Blackout Curtain', 'Secure Keycard', 'Wi-Fi 500Mbps'],
    features: ['Dedicated Vanity Desk', 'Courtyard Garden Window', 'Complimentary Organic Toiletries', 'Extra Soft Linen'],
    isPopular: true,
  },
  {
    id: 'private-garden-suite',
    name: 'Private Deluxe Garden Suite (Ensuite)',
    category: 'private_suite',
    shortDesc: 'Spacious boutique suite with King bed, private ensuite rain shower, and direct garden patio access.',
    fullDesc: 'The ultimate luxury experience at Beds In Garden. This spacious private suite features a handcrafted Teak King-size bed, private ensuite marble bathroom with rainfall shower head, smart ambient lighting, work desk, and sliding glass doors opening onto your private garden terrace.',
    priceMYR: 180,
    capacity: 2,
    bedType: '1 King Size Bed',
    bathroomType: 'Private Bathroom (Rain Shower)',
    sizeSqM: 32,
    image: roomPrivateGardenSuite,
    facilities: ['Private Ensuite Bath', 'Private Patio', 'King Bed', 'Smart TV', 'Air Conditioning', 'Mini Fridge', 'Work Desk'],
    features: ['Direct Courtyard Access', 'Rainfall Overhead Shower', 'Boutique Coffee Machine', 'Hypoallergenic Pillows'],
    isPopular: true,
  },
  {
    id: 'private-twin-room',
    name: 'Private Garden Twin Pod Suite',
    category: 'private_twin',
    shortDesc: 'Private room with two single beds, ideal for friends or couples traveling together in style.',
    fullDesc: 'Perfect for duo travelers or digital nomads wanting private space. Features two luxurious single beds, acoustic insulation, large windows with natural sunlight, study desks, and quick access to the main courtyard lounge.',
    priceMYR: 130,
    capacity: 2,
    bedType: '2 Single Comfort Beds',
    bathroomType: 'Shared Luxury Shower Suites',
    sizeSqM: 22,
    image: roomPrivateGardenSuite,
    facilities: ['2 Twin Beds', 'Air Conditioning', 'Dual Work Desks', 'Soundproof Wall', 'Free High-Speed Wi-Fi'],
    features: ['Garden Breeze Ventilation', 'Dual Wardrobes', 'Personal Reading Lamps', 'Daily Towel Refresh'],
  }
];

export const FACILITIES: FacilityItem[] = [
  {
    id: 'wifi',
    title: 'Ultra-Fast Fiber Wi-Fi',
    description: 'Seamless 500Mbps Mesh Wi-Fi coverage across all rooms, garden lounge, and workstations.',
    iconName: 'Wifi',
    badge: '500 Mbps',
    image: facilityWifiCoworking
  },
  {
    id: 'beds',
    title: 'Orthopedic Comfort Beds',
    description: '10-inch high-density mattresses with 100% Egyptian cotton linens and hypoallergenic pillows.',
    iconName: 'Bed',
    badge: 'Luxury Comfort',
    image: facilityOrthopedicBeds
  },
  {
    id: 'garden',
    title: 'Lush Garden Courtyard',
    description: 'Serene outdoor courtyard filled with tropical flora, hammock swings, ambient lights, and outdoor seating.',
    iconName: 'Trees',
    badge: 'Outdoor Oasis',
    image: facilityLushGarden
  },
  {
    id: 'common',
    title: 'Co-Working & Common Lounge',
    description: 'Spacious air-conditioned lounge with ergonomic desks, power outlets, book exchange library, and games.',
    iconName: 'Coffee',
    badge: '24/7 Access',
    image: facilityCommonLounge
  },
  {
    id: 'clean',
    title: 'Pristine Bathroom Suites',
    description: 'Sparkling clean rain shower bathrooms with hot water pressure, organic shampoo, and daily sanitation.',
    iconName: 'Sparkles',
    badge: 'Sparkling Clean',
    image: facilityCleanBathrooms
  },
  {
    id: 'amenities',
    title: 'Guest Care & Security',
    description: 'Keycard electronic pod access, 24/7 CCTV surveillance, free luggage storage, self-serve laundry, and coffee/tea.',
    iconName: 'ShieldCheck',
    badge: '24/7 Security',
    image: facilityGuestSecurity
  }
];

export const IPOH_ATTRACTIONS: IpohAttraction[] = [
  {
    id: 'concave-street',
    title: 'Concave Street & Old Town Heritage',
    category: 'Heritage & Culture',
    distance: '5 min walk (600m)',
    image: ipohOldTownAttractions,
    description: 'Walk through Ipoh’s famous vibrant alleyways filled with historic shophouses, artisanal cafes, souvenir stalls, and iconic mural street art.',
    tag: 'Must Visit'
  },
  {
    id: 'ipoh-coffee',
    title: 'Authentic Ipoh White Coffee',
    category: 'Gastronomy & Culinary',
    distance: '4 min walk (450m)',
    image: galleryCommonLounge,
    description: 'Savor world-famous Ipoh white coffee brewed with roasted coffee beans in palm oil margarine, served with traditional egg tart and kaya toast.',
    tag: 'Foodie Choice'
  },
  {
    id: 'limestone-caves',
    title: 'Perak Tong & Kek Lok Tong Caves',
    category: 'Nature & Adventure',
    distance: '10 min drive',
    image: heroGardenHostel,
    description: 'Explore breathtaking ancient limestone cave temples featuring intricate Buddhist statues, reflection ponds, and panoramic mountain views.',
    tag: 'Scenic View'
  },
  {
    id: 'night-market',
    title: 'Jubilee Park & Gerbang Malam',
    category: 'Nightlife & Shopping',
    distance: '2 min walk (200m)',
    image: aboutHostelCourtyard,
    description: 'Located right next door to Jubilee Park! Stroll through Ipoh’s lively night market for local street snacks, handicrafts, and evening walks.',
    tag: 'Right Next Door'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g1',
    title: 'Tranquil Tropical Garden Courtyard',
    category: 'garden',
    categoryLabel: 'Garden & Courtyard',
    image: heroGardenHostel,
    description: 'Our lush garden courtyard illuminated by ambient fairy lights at twilight — the heart of Beds In Garden Hostel.'
  },
  {
    id: 'g2',
    title: 'Sunny Outdoor Deck & Seating',
    category: 'garden',
    categoryLabel: 'Garden & Courtyard',
    image: aboutHostelCourtyard,
    description: 'Relax with your morning coffee or read a book under the shade of tropical trees.'
  },
  {
    id: 'g3',
    title: 'Deluxe Teak Wood Privacy Pod Bed',
    category: 'rooms',
    categoryLabel: 'Bedrooms & Pods',
    image: roomMixedPodDorm,
    description: 'Individual sleeping pod equipped with blackout curtain, soft duvet, LED light, and charging sockets.'
  },
  {
    id: 'g4',
    title: 'Private Deluxe Garden Suite Room',
    category: 'rooms',
    categoryLabel: 'Bedrooms & Pods',
    image: roomPrivateGardenSuite,
    description: 'Spacious king-bed bedroom overlooking lush greenery with ensuite luxury amenities.'
  },
  {
    id: 'g5',
    title: 'Co-Working & Reading Lounge',
    category: 'lounge',
    categoryLabel: 'Common Lounge',
    image: galleryCommonLounge,
    description: 'Air-conditioned common lounge with cozy plush seating, high-speed Wi-Fi, and complimentary artisan coffee.'
  },
  {
    id: 'g6',
    title: 'Historic Ipoh Old Town Heritage',
    category: 'ipoh',
    categoryLabel: 'Ipoh Surroundings',
    image: ipohOldTownAttractions,
    description: 'Vibrant street art and colonial shophouses located just minutes from the hostel.'
  },
  {
    id: 'g7',
    title: 'Garden Patio Sunset Relax Zone',
    category: 'garden',
    categoryLabel: 'Garden & Courtyard',
    image: roomPrivateGardenSuite,
    description: 'Serene garden corner designed for evening conversations and social gatherings.'
  },
  {
    id: 'g8',
    title: 'Boutique Coffee & Tea Corner',
    category: 'amenities',
    categoryLabel: 'Amenities & Facilities',
    image: galleryCommonLounge,
    description: 'Self-serve artisan espresso coffee, organic tea infusions, and purified drinking water.'
  }
];

export const FAQS = [
  {
    question: 'Where is Beds In Garden Hostel located?',
    answer: 'We are located at AA, Lot 3435N, Jubilee Park, 30450, Jalan Jubilee, Taman Jubilee, 30300 Ipoh, Perak, Malaysia. We are just a 5-minute walk to Ipoh Old Town and 10 minutes from the Ipoh KTM Railway Station.'
  },
  {
    question: 'How do I check in after 10:00 PM?',
    answer: 'We provide seamless 24/7 self check-in! Once your booking is confirmed, we send you a unique digital door PIN code via WhatsApp or Email so you can enter smoothly anytime.'
  },
  {
    question: 'Are bed linens and towels provided?',
    answer: 'Yes! All guests receive fresh 100% Egyptian cotton bed sheets, high-density orthopedic pillows, a plush duvet, and a clean bath towel upon arrival at no extra charge.'
  },
  {
    question: 'Is parking available at the hostel?',
    answer: 'Yes, street parking is available directly outside the hostel in Jubilee Park area, with free night parking and easy municipal coupon/app parking during peak daytime hours.'
  },
  {
    question: 'Can I store my luggage before check-in or after check-out?',
    answer: 'Absolutely! We offer complimentary secure luggage storage for all our guests so you can explore Ipoh freely before your room is ready or before your train/bus.'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Sophie & Liam',
    country: 'United Kingdom 🇬🇧',
    role: 'Backpackers & Couples Travel',
    comment: 'The best hostel experience in Malaysia! The garden courtyard is so peaceful after exploring hot Ipoh streets, and the pod beds feel like a 5-star hotel capsule.',
    rating: 5,
    date: 'September 2026'
  },
  {
    name: 'Kenji Sato',
    country: 'Japan 🇯🇵',
    role: 'Digital Nomad',
    comment: 'Super fast Wi-Fi (500 Mbps tested!), comfortable work chairs in the lounge, and great coffee. I stayed for 1 week and ended up extending to 2 weeks.',
    rating: 5,
    date: 'August 2026'
  },
  {
    name: 'Sarah Tan',
    country: 'Singapore 🇸🇬',
    role: 'Weekend Solo Traveler',
    comment: 'Loved the Female Pod Dorm! So clean, spacious vanity area with hairdryers, and extremely safe. Address is right next to Jubilee Park and famous food spots.',
    rating: 5,
    date: 'September 2026'
  }
];
