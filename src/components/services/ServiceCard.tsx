import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';
import Card from '../ui/Card';
import { Service } from '../../types';
import { formatCurrency } from '../../utils/formatters';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card hoverable className="h-full flex flex-col">
      <Link to={`/services/${service.id}`}>
        <Card.Image 
          src={service.images[0]} 
          alt={service.title}
        />
      </Link>
      <Card.Body className="flex-grow">
        <Link to={`/services/${service.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-blue-600">
            {service.title}
          </h3>
        </Link>
        
        <div className="flex items-center mb-2">
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
          <span className="text-sm font-medium text-gray-900">{service.rating}</span>
          <span className="text-sm text-gray-500 ml-1">({service.reviewCount} reviews)</span>
        </div>
        
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">
          {service.description}
        </p>
        
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span>{service.location.city}, {service.location.state}</span>
        </div>
      </Card.Body>
      
      <Card.Footer className="border-t border-gray-100 flex justify-between items-center">
        <div>
          <span className="text-lg font-semibold text-gray-900">
            {formatCurrency(service.price)}
          </span>
          <span className="text-gray-500 text-sm">/{service.priceUnit}</span>
        </div>
        <Link 
          to={`/services/${service.id}`}
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          View Details
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default ServiceCard;