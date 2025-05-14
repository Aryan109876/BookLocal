import { Service } from '../types';

// Generate a random time array for the next 14 days
const generateAvailability = () => {
  const availability: { [key: string]: string[] } = {};
  const timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', 
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', 
    '04:00 PM', '05:00 PM', '06:00 PM'
  ];
  
  // Generate availability for the next 14 days
  const now = new Date();
  for (let i = 1; i <= 14; i++) {
    const date = new Date(now);
    date.setDate(date.getDate() + i);
    const dateStr = date.toISOString().split('T')[0];
    
    // Randomly select 4-8 time slots for each day
    const availableSlots = [...timeSlots];
    const selectedSlots: string[] = [];
    const numSlots = Math.floor(Math.random() * 5) + 4; // 4-8 slots
    
    for (let j = 0; j < numSlots; j++) {
      const randomIndex = Math.floor(Math.random() * availableSlots.length);
      selectedSlots.push(availableSlots[randomIndex]);
      availableSlots.splice(randomIndex, 1);
    }
    
    // Sort the selected slots by time
    selectedSlots.sort();
    availability[dateStr] = selectedSlots;
  }
  
  return availability;
};

export const services: Service[] = [
  {
    id: '1',
    title: 'Professional House Cleaning',
    category: 'cleaning',
    description: 'Comprehensive house cleaning services tailored to your specific needs. We use eco-friendly products and have a thorough checklist to ensure every corner of your home shines. Our professional cleaners are background-checked and trained to provide outstanding service.',
    price: 35,
    priceUnit: 'hour',
    rating: 4.8,
    reviewCount: 125,
    location: {
      address: '123 Main Street',
      city: 'Lakeside',
      state: 'CA',
      zip: '92040',
      coordinates: {
        lat: 32.8579,
        lng: -116.9220
      }
    },
    provider: {
      id: 'p1',
      name: 'Spotless Cleaning Co.',
      avatar: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=600',
      phone: '(555) 123-4567',
      email: 'contact@spotless.example.com',
      yearsInBusiness: 5
    },
    images: [
      'https://images.pexels.com/photos/4107108/pexels-photo-4107108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    availability: generateAvailability()
  },
  {
    id: '2',
    title: 'Math & Science Tutoring',
    category: 'tutoring',
    description: 'Expert tutoring in mathematics and science subjects for K-12 and college students. Personalized lesson plans to address specific learning needs and goals. Improve grades and understanding with our experienced educators.',
    price: 45,
    priceUnit: 'hour',
    rating: 4.9,
    reviewCount: 87,
    location: {
      address: '456 Oak Avenue',
      city: 'Lakeside',
      state: 'CA',
      zip: '92040',
      coordinates: {
        lat: 32.8601,
        lng: -116.9198
      }
    },
    provider: {
      id: 'p2',
      name: 'Elena Richardson',
      avatar: 'https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg?auto=compress&cs=tinysrgb&w=600',
      phone: '(555) 987-6543',
      email: 'elena@tutoring.example.com',
      yearsInBusiness: 7
    },
    images: [
      'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4144294/pexels-photo-4144294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    availability: generateAvailability()
  },
  {
    id: '3',
    title: 'Handyman Services',
    category: 'handyman',
    description: 'Reliable handyman services for all your home repair and improvement needs. From fixing leaky faucets to assembling furniture and installing fixtures, no job is too small. Licensed, insured, and quality guaranteed.',
    price: 50,
    priceUnit: 'hour',
    rating: 4.7,
    reviewCount: 103,
    location: {
      address: '789 Pine Road',
      city: 'Lakeside',
      state: 'CA',
      zip: '92040',
      coordinates: {
        lat: 32.8623,
        lng: -116.9176
      }
    },
    provider: {
      id: 'p3',
      name: 'Mike\'s Fix-It-All',
      avatar: 'https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg?auto=compress&cs=tinysrgb&w=600',
      phone: '(555) 234-5678',
      email: 'mike@fixitall.example.com',
      yearsInBusiness: 10
    },
    images: [
      'https://images.pexels.com/photos/6419127/pexels-photo-6419127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/8005368/pexels-photo-8005368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4246196/pexels-photo-4246196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    availability: generateAvailability()
  },
  {
    id: '4',
    title: 'Interior Painting Services',
    category: 'painting',
    description: 'Professional interior painting services to transform your space. We provide color consultation, surface preparation, and flawless application. Premium paints and attention to detail guarantee beautiful, long-lasting results.',
    price: 40,
    priceUnit: 'hour',
    rating: 4.6,
    reviewCount: 79,
    location: {
      address: '321 Maple Court',
      city: 'Lakeside',
      state: 'CA',
      zip: '92040',
      coordinates: {
        lat: 32.8645,
        lng: -116.9154
      }
    },
    provider: {
      id: 'p4',
      name: 'ColorMasters Painting',
      avatar: 'https://images.pexels.com/photos/6447223/pexels-photo-6447223.jpeg?auto=compress&cs=tinysrgb&w=600',
      phone: '(555) 345-6789',
      email: 'info@colormasters.example.com',
      yearsInBusiness: 8
    },
    images: [
      'https://images.pexels.com/photos/4792480/pexels-photo-4792480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    availability: generateAvailability()
  },
  {
    id: '5',
    title: 'Virtual Assistant Services',
    category: 'administrative',
    description: 'Professional virtual assistant services to handle your administrative tasks, email management, scheduling, research, and more. Free up your time to focus on what matters most to your business or personal life.',
    price: 30,
    priceUnit: 'hour',
    rating: 4.7,
    reviewCount: 62,
    location: {
      address: '654 Cedar Lane',
      city: 'Lakeside',
      state: 'CA',
      zip: '92040',
      coordinates: {
        lat: 32.8667,
        lng: -116.9132
      }
    },
    provider: {
      id: 'p5',
      name: 'AdminPro Solutions',
      avatar: 'https://images.pexels.com/photos/5325756/pexels-photo-5325756.jpeg?auto=compress&cs=tinysrgb&w=600',
      phone: '(555) 456-7890',
      email: 'support@adminpro.example.com',
      yearsInBusiness: 4
    },
    images: [
      'https://images.pexels.com/photos/3786754/pexels-photo-3786754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4472038/pexels-photo-4472038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4342498/pexels-photo-4342498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    availability: generateAvailability()
  },
  {
    id: '6',
    title: 'Mobile Haircut & Styling',
    category: 'beauty',
    description: 'Professional haircuts and styling services in the comfort of your home. Our licensed stylists bring the salon experience to you with all necessary equipment and products. Perfect for busy individuals, families, and seniors.',
    price: 55,
    priceUnit: 'session',
    rating: 4.8,
    reviewCount: 94,
    location: {
      address: '987 Birch Street',
      city: 'Lakeside',
      state: 'CA',
      zip: '92040',
      coordinates: {
        lat: 32.8690,
        lng: -116.9110
      }
    },
    provider: {
      id: 'p6',
      name: 'Styles On Wheels',
      avatar: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=600',
      phone: '(555) 567-8901',
      email: 'book@stylesonwheels.example.com',
      yearsInBusiness: 6
    },
    images: [
      'https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3356174/pexels-photo-3356174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3993132/pexels-photo-3993132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    availability: generateAvailability()
  },
  {
    id: '7',
    title: 'Lawn Care & Maintenance',
    category: 'landscaping',
    description: 'Professional lawn care and maintenance services to keep your yard looking pristine. Services include mowing, trimming, fertilization, weed control, and seasonal clean-up. Residential and commercial properties welcome.',
    price: 45,
    priceUnit: 'session',
    rating: 4.6,
    reviewCount: 83,
    location: {
      address: '357 Spruce Avenue',
      city: 'Lakeside',
      state: 'CA',
      zip: '92040',
      coordinates: {
        lat: 32.8545,
        lng: -116.9245
      }
    },
    provider: {
      id: 'p7',
      name: 'Green Thumb Landscaping',
      avatar: 'https://images.pexels.com/photos/4348565/pexels-photo-4348565.jpeg?auto=compress&cs=tinysrgb&w=600',
      phone: '(555) 678-9012',
      email: 'service@greenthumb.example.com',
      yearsInBusiness: 9
    },
    images: [
      'https://images.pexels.com/photos/4389155/pexels-photo-4389155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4503272/pexels-photo-4503272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/8797538/pexels-photo-8797538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    availability: generateAvailability()
  },
  {
    id: '8',
    title: 'Pet Sitting & Walking',
    category: 'petsitting',
    description: 'Reliable pet sitting and dog walking services by animal lovers. We provide in-home care, daily walks, feeding, and playtime for your pets while you\'re away. Peace of mind with regular updates and photos of your furry friends.',
    price: 25,
    priceUnit: 'hour',
    rating: 4.9,
    reviewCount: 76,
    location: {
      address: '159 Willow Lane',
      city: 'Lakeside',
      state: 'CA',
      zip: '92040',
      coordinates: {
        lat: 32.8512,
        lng: -116.9267
      }
    },
    provider: {
      id: 'p8',
      name: 'Happy Tails Pet Services',
      avatar: 'https://images.pexels.com/photos/6633992/pexels-photo-6633992.jpeg?auto=compress&cs=tinysrgb&w=600',
      phone: '(555) 789-0123',
      email: 'care@happytails.example.com',
      yearsInBusiness: 5
    },
    images: [
      'https://images.pexels.com/photos/4588047/pexels-photo-4588047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6131244/pexels-photo-6131244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4587991/pexels-photo-4587991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    availability: generateAvailability()
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter(service => service.category === category);
};

export const searchServices = (filters: any): Service[] => {
  let filteredServices = [...services];
  
  // Filter by category
  if (filters.category && filters.category !== 'all') {
    filteredServices = filteredServices.filter(
      service => service.category === filters.category
    );
  }
  
  // Filter by location (simple contains match for demo)
  if (filters.location) {
    const locationLower = filters.location.toLowerCase();
    filteredServices = filteredServices.filter(
      service => 
        service.location.city.toLowerCase().includes(locationLower) ||
        service.location.state.toLowerCase().includes(locationLower) ||
        service.location.zip.includes(filters.location)
    );
  }
  
  // Filter by price range
  if (filters.minPrice) {
    filteredServices = filteredServices.filter(
      service => service.price >= filters.minPrice
    );
  }
  
  if (filters.maxPrice) {
    filteredServices = filteredServices.filter(
      service => service.price <= filters.maxPrice
    );
  }
  
  // Filter by minimum rating
  if (filters.minRating) {
    filteredServices = filteredServices.filter(
      service => service.rating >= filters.minRating
    );
  }
  
  // Sort results
  if (filters.sort) {
    switch (filters.sort) {
      case 'price-asc':
        filteredServices.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filteredServices.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filteredServices.sort((a, b) => b.rating - a.rating);
        break;
      // Note: Distance sorting would require calculating distance from user location
      default:
        break;
    }
  }
  
  return filteredServices;
};