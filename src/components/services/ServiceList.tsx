import React from 'react';
import { Service, SearchFilters } from '../../types';
import ServiceCard from './ServiceCard';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';

interface ServiceListProps {
  services: Service[];
  filters: SearchFilters;
  setFilters: (filters: SearchFilters) => void;
  isLoading?: boolean;
}

const ServiceList: React.FC<ServiceListProps> = ({ 
  services, 
  filters, 
  setFilters,
  isLoading = false
}) => {
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, location: e.target.value });
  };
  
  const handleSortChange = (value: string) => {
    setFilters({ ...filters, sort: value as any });
  };
  
  const handleRatingChange = (value: string) => {
    setFilters({ ...filters, minRating: value ? Number(value) : undefined });
  };
  
  return (
    <div>
      {/* Filters Section */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="flex flex-col md:flex-row gap-3">
          <Input
            placeholder="Location"
            value={filters.location || ''}
            onChange={handleLocationChange}
            leftIcon={<Search className="h-5 w-5" />}
            className="flex-grow"
          />
          
          <Select
            options={[
              { value: '', label: 'Sort By' },
              { value: 'rating', label: 'Top Rated' },
              { value: 'price-asc', label: 'Price: Low to High' },
              { value: 'price-desc', label: 'Price: High to Low' }
            ]}
            value={filters.sort || ''}
            onChange={handleSortChange}
            className="w-full md:w-48"
          />
          
          <Select
            options={[
              { value: '', label: 'Any Rating' },
              { value: '4', label: '4+ Stars' },
              { value: '4.5', label: '4.5+ Stars' },
              { value: '5', label: '5 Stars' }
            ]}
            value={filters.minRating?.toString() || ''}
            onChange={handleRatingChange}
            className="w-full md:w-48"
          />
          
          <Button variant="outline" icon={<SlidersHorizontal className="h-5 w-5" />}>
            More Filters
          </Button>
        </div>
      </div>
      
      {/* Results Section */}
      {isLoading ? (
        <div className="text-center py-12">
          <div className="spinner"></div>
          <p className="mt-4 text-gray-600">Loading services...</p>
        </div>
      ) : services.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="text-gray-400 mb-4">
            <Search className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
          <p className="text-gray-600">
            Try adjusting your search filters or exploring different categories.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceList;