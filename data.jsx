export const MOCK_HOTELS = [
  {
    id: 'h1',
    name: 'Prime Deluxe Suite',
    category: 'DELUXE',
    rating: 4.8,
    reviews: 1240,
    price: 189,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
    description: 'A spacious suite with modern amenities, free Wi-Fi, and a city skyline view.',
    amenities: ['Free WiFi', 'Pool', 'Spa', 'City View'],
    status: 'AVAILABLE'
  },
  {
    id: 'h2',
    name: 'Cozy Standard Room',
    category: 'STANDARD',
    rating: 4.5,
    reviews: 856,
    price: 89,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80',
    description: 'A clean and bright room in the heart of the city, ideal for short stays.',
    amenities: ['Free WiFi', 'Gym', 'Room Service'],
    status: 'AVAILABLE'
  },
  {
    id: 'h3',
    name: 'Prime Royal Penthouse',
    category: 'SUITE',
    rating: 5.0,
    reviews: 432,
    price: 349,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80',
    description: 'Our finest room featuring extra space, luxury comfort, and premium service.',
    amenities: ['Personal Assistant', 'Private Balcony', 'Complimentary Breakfast'],
    status: 'AVAILABLE'
  },
  {
    id: 'h4',
    name: 'Garden View Room',
    category: 'DELUXE',
    rating: 4.7,
    reviews: 921,
    price: 129,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
    description: 'A peaceful room overlooking the garden. Perfect for a quiet getaway.',
    amenities: ['Free WiFi', 'Balcony', 'Breakfast Included'],
    status: 'AVAILABLE'
  }
];

export const MOCK_USERS = [
  { id: 'U-101', name: 'Alex Johnson', email: 'alex@example.com', date: 'August 10, 2026' },
  { id: 'U-102', name: 'Sarah Miller', email: 'sarah@example.com', date: 'August 12, 2026' }
];

export const MOCK_ADMIN_BOOKINGS = [
  {
    id: 'B-501',
    guest: 'Alex Johnson',
    email: 'alex@example.com',
    phone: '1234567890',
    room: 'Cozy Standard Room',
    checkIn: '2026-08-20',
    checkOut: '2026-08-25',
    guests: 2,
    status: 'Confirmed'
  },
  {
    id: 'B-502',
    guest: 'Sarah Miller',
    email: 'sarah@example.com',
    phone: '0987654321',
    room: 'Prime Deluxe Suite',
    checkIn: '2026-09-01',
    checkOut: '2026-09-05',
    guests: 1,
    status: 'Confirmed'
  }
];

export const DEFAULT_SETTINGS = {
  address: 'Prime Avenue, City Center, Suite 100',
  phone: '+1 (555) 019-2834',
  email: 'support@primehotel.com'
};

export const DEFAULT_ROOM_IMAGE =
  'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80';
