import React, { useState } from 'react';
import { Service } from '../../types';
import { Star, MapPin, Mail, Phone, Clock, Calendar, Heart, Share2 } from 'lucide-react';
import Button from '../ui/Button';
import { formatCurrency } from '../../utils/formatters';
import { Link } from 'react-router-dom';
import ServiceReviews from './ServiceReviews';

interface ServiceDetailProps {
  service: Service;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  const [activeImage, setActiveImage] = useState(service.images[0]);
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Images and Details */}
        <div className="lg:w-2/3">
          {/* Main Image */}
          <div className="rounded-lg overflow-hidden mb-3 shadow-sm">
            <img 
              src={activeImage} 
              alt={service.title} 
              className="w-full h-96 object-cover"
            />
          </div>
          
          {/* Image Gallery */}
          <div className="flex gap-3 mb-6">
            {service.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(image)}
                className={`rounded-md overflow-hidden w-24 h-24 border-2 transition-all ${
                  activeImage === image ? 'border-blue-600 shadow-md' : 'border-transparent'
                }`}
              >
                <img 
                  src={image} 
                  alt={`${service.title} ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          
          {/* Service Details */}
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{service.title}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-3">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                <span className="font-medium">{service.rating}</span>
                <span className="text-gray-500 ml-1">({service.reviewCount} reviews)</span>
              </div>
              
              <div className="flex items-center text-gray-500">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{service.location.city}, {service.location.state}</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h2 className="text-lg font-semibold mb-2">About This Service</h2>
              <p className="text-gray-700 mb-4">{service.description}</p>
              
              <h3 className="font-medium text-gray-900 mb-2">Service Provider</h3>
              <div className="flex items-center mb-4">
                <img 
                  src={service.provider.avatar} 
                  alt={service.provider.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-medium">{service.provider.name}</h4>
                  <p className="text-sm text-gray-500">{service.provider.yearsInBusiness} years in business</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex items-center text-gray-700">
                  <Mail className="h-4 w-4 mr-2 text-gray-500" />
                  {service.provider.email}
                </div>
                <div className="flex items-center text-gray-700">
                  <Phone className="h-4 w-4 mr-2 text-gray-500" />
                  {service.provider.phone}
                </div>
              </div>
            </div>
          </div>
          
          {/* Reviews Section */}
          <ServiceReviews serviceId={service.id} />
        </div>
        
        {/* Right Column - Booking and Actions */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 sticky top-24">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                {formatCurrency(service.price)}
                <span className="text-sm font-normal text-gray-500">/{service.priceUnit}</span>
              </h2>
            </div>
            
            {/* Availability Calendar Placeholder */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                Available Dates
              </h3>
              <div className="bg-gray-50 rounded-md p-3 text-center">
                <p className="text-gray-700">
                  Select a date to view available time slots
                </p>
                {/* Calendar would go here */}
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {Object.keys(service.availability).slice(0, 6).map((date) => (
                    <div 
                      key={date} 
                      className="bg-white p-2 rounded border border-gray-200 text-sm cursor-pointer hover:border-blue-500"
                    >
                      {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <Link to={`/book/${service.id}`}>
              <Button variant="primary" fullWidth className="mb-3">
                Book Now
              </Button>
            </Link>
            
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setIsFavorite(!isFavorite)}
                icon={<Heart className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />}
              >
                {isFavorite ? 'Saved' : 'Save'}
              </Button>
              
              <Button 
                variant="outline" 
                className="flex-1"
                icon={<Share2 className="h-4 w-4" />}
              >
                Share
              </Button>
            </div>
            
            {/* Service Guarantees */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-medium text-gray-900 mb-3">Service Guarantees</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Verified and background-checked professionals</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Satisfaction guarantee</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Secure payments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;