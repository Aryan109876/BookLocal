import { Review } from '../types';

export const reviews: Review[] = [
  {
    id: 'r1',
    serviceId: '1',
    userId: 'u1',
    rating: 5,
    comment: 'Excellent service! My house has never been cleaner. They were thorough, professional, and paid attention to every detail.',
    date: '2023-09-15',
    userName: 'Sarah M.',
    userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'r2',
    serviceId: '1',
    userId: 'u2',
    rating: 4,
    comment: 'Very good cleaning service. They did a great job with most areas, though I had to point out a few spots they missed initially.',
    date: '2023-08-22',
    userName: 'Michael T.',
    userAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'r3',
    serviceId: '1',
    userId: 'u3',
    rating: 5,
    comment: 'This cleaning service is worth every penny! They transformed my messy home into a spotless haven. Will definitely book again.',
    date: '2023-10-05',
    userName: 'Jessica L.'
  },
  {
    id: 'r4',
    serviceId: '2',
    userId: 'u4',
    rating: 5,
    comment: 'Elena is an amazing tutor! My daughter\'s math grades improved dramatically after just a few sessions. Highly recommend!',
    date: '2023-09-28',
    userName: 'Robert K.',
    userAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'r5',
    serviceId: '2',
    userId: 'u5',
    rating: 5,
    comment: 'Best tutor we\'ve ever had. Patient, knowledgeable, and really connects with students. My son actually looks forward to his tutoring sessions now.',
    date: '2023-10-12',
    userName: 'Amanda P.',
    userAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'r6',
    serviceId: '3',
    userId: 'u6',
    rating: 4,
    comment: 'Mike did a great job fixing several issues around my house. Prices are fair and he\'s very knowledgeable. Would hire again.',
    date: '2023-09-20',
    userName: 'David W.'
  },
  {
    id: 'r7',
    serviceId: '3',
    userId: 'u7',
    rating: 5,
    comment: 'Excellent handyman service! Arrived on time, completed all repairs efficiently, and cleaned up afterward. Very impressed!',
    date: '2023-10-08',
    userName: 'Jennifer S.',
    userAvatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'r8',
    serviceId: '4',
    userId: 'u8',
    rating: 5,
    comment: 'ColorMasters transformed our living room with their expert painting. The attention to detail was impressive and the color consultation was so helpful.',
    date: '2023-09-10',
    userName: 'Thomas B.',
    userAvatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'r9',
    serviceId: '5',
    userId: 'u9',
    rating: 5,
    comment: 'AdminPro has been a lifesaver for my small business. Their virtual assistance services are reliable, efficient, and have freed up so much of my time.',
    date: '2023-10-15',
    userName: 'Christina F.'
  },
  {
    id: 'r10',
    serviceId: '6',
    userId: 'u10',
    rating: 4,
    comment: 'Great mobile haircutting service. Convenient and professional. My only small complaint is they were running about 15 minutes late.',
    date: '2023-09-25',
    userName: 'Ryan M.',
    userAvatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'r11',
    serviceId: '7',
    userId: 'u11',
    rating: 5,
    comment: 'Green Thumb has kept my lawn looking perfect for the past year. Their service is consistent, thorough, and reasonably priced.',
    date: '2023-10-02',
    userName: 'Patricia H.'
  },
  {
    id: 'r12',
    serviceId: '8',
    userId: 'u12',
    rating: 5,
    comment: 'Happy Tails took amazing care of my two dogs while I was away. The daily updates and photos were greatly appreciated. Will definitely use them again!',
    date: '2023-09-30',
    userName: 'Emily J.',
    userAvatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export const getReviewsByServiceId = (serviceId: string): Review[] => {
  return reviews.filter(review => review.serviceId === serviceId);
};