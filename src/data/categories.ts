import { Category } from '../types';
import { Paintbrush, Wrench, GraduationCap, Space as Spa, ClipboardList, Scissors, ShieldCheck, Home, DogIcon, Baby, Shovel, Car } from 'lucide-react';

export const categories: Category[] = [
  {
    id: 'cleaning',
    name: 'Cleaning',
    icon: 'Spa',
    description: 'Home, office, and specialized cleaning services'
  },
  {
    id: 'handyman',
    name: 'Handyman',
    icon: 'Wrench',
    description: 'Repairs, installations, and maintenance'
  },
  {
    id: 'tutoring',
    name: 'Tutoring',
    icon: 'GraduationCap',
    description: 'Academic, music, and skill-based tutoring'
  },
  {
    id: 'painting',
    name: 'Painting',
    icon: 'Paintbrush',
    description: 'Interior and exterior painting services'
  },
  {
    id: 'administrative',
    name: 'Administrative',
    icon: 'ClipboardList',
    description: 'Virtual assistance, bookkeeping, and admin support'
  },
  {
    id: 'beauty',
    name: 'Beauty & Wellness',
    icon: 'Scissors',
    description: 'Haircuts, wellness, and beauty services'
  },
  {
    id: 'security',
    name: 'Security',
    icon: 'ShieldCheck',
    description: 'Security systems and monitoring'
  },
  {
    id: 'homemaintenance',
    name: 'Home Maintenance',
    icon: 'Home',
    description: 'Regular home maintenance services'
  },
  {
    id: 'petsitting',
    name: 'Pet Services',
    icon: 'DogIcon',
    description: 'Pet sitting, walking, and grooming'
  },
  {
    id: 'childcare',
    name: 'Childcare',
    icon: 'Baby',
    description: 'Babysitting and childcare services'
  },
  {
    id: 'landscaping',
    name: 'Landscaping',
    icon: 'Shovel',
    description: 'Lawn care, gardening, and landscape design'
  },
  {
    id: 'automotive',
    name: 'Automotive',
    icon: 'Car',
    description: 'Car detailing, maintenance, and repair'
  }
];

export const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Paintbrush': return Paintbrush;
    case 'Wrench': return Wrench;
    case 'GraduationCap': return GraduationCap;
    case 'Spa': return Spa;
    case 'ClipboardList': return ClipboardList;
    case 'Scissors': return Scissors;
    case 'ShieldCheck': return ShieldCheck;
    case 'Home': return Home;
    case 'DogIcon': return DogIcon;
    case 'Baby': return Baby;
    case 'Shovel': return Shovel;
    case 'Car': return Car;
    default: return Home;
  }
};