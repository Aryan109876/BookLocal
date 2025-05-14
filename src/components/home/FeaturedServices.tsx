import React from 'react';
import { services } from '../../data/services';
import ServiceCard from '../services/ServiceCard';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const FeaturedServices: React.FC = () => {
  // Get the first 4 services to feature
  const featuredServices = services.slice(0, 4);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Services</h2>
            <p className="text-gray-600">Top-rated local services our customers love</p>
          </div>
          <Link to="/services" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
            View All
            <ChevronRight className="h-5 w-5 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;