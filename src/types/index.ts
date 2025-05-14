export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  priceUnit: 'hour' | 'session' | 'job';
  rating: number;
  reviewCount: number;
  location: {
    address: string;
    city: string;
    state: string;
    zip: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  provider: {
    id: string;
    name: string;
    avatar: string;
    phone: string;
    email: string;
    yearsInBusiness: number;
  };
  images: string[];
  availability: {
    [date: string]: string[]; // Array of available time slots
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Booking {
  id: string;
  serviceId: string;
  userId: string;
  date: string;
  timeSlot: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  totalPrice: number;
  paymentStatus: 'pending' | 'paid';
  notes?: string;
  createdAt: string;
}

export interface Review {
  id: string;
  serviceId: string;
  userId: string;
  rating: number;
  comment: string;
  date: string;
  userName: string;
  userAvatar?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  type: 'customer' | 'provider';
  favorites: string[];
}

export interface SearchFilters {
  category?: string;
  location?: string;
  radius?: number;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  sort?: 'price-asc' | 'price-desc' | 'rating' | 'distance';
}