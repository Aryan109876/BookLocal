import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import ServiceList from '../components/services/ServiceList';
import { searchServices } from '../data/services';
import { Service, SearchFilters } from '../types';
import { useLocation } from 'react-router-dom';
import { categories } from '../data/categories';

const ServicesPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  // Initialize filters from URL params
  const initialFilters: SearchFilters = {
    category: queryParams.get('category') || undefined,
    location: queryParams.get('location') || undefined,
    minPrice: queryParams.get('minPrice') ? Number(queryParams.get('minPrice')) : undefined,
    maxPrice: queryParams.get('maxPrice') ? Number(queryParams.get('maxPrice')) : undefined,
    minRating: queryParams.get('minRating') ? Number(queryParams.get('minRating')) : undefined,
    sort: (queryParams.get('sort') as SearchFilters['sort']) || undefined
  };
  
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Get category name for display
  const getCategoryName = () => {
    if (!filters.category || filters.category === 'all') return 'All Services';
    const category = categories.find(cat => cat.id === filters.category);
    return category ? category.name : 'Services';
  };
  
  // Get location name for display
  const getLocationDisplay = () => {
    if (!filters.location) return '';
    return ` in ${filters.location}`;
  };
  
  // Update services when filters change
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      const filteredServices = searchServices(filters);
      setServices(filteredServices);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [filters]);
  
  return (
    <Layout>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {getCategoryName()}{getLocationDisplay()}
            </h1>
            <p className="text-gray-600">
              Find and book trusted local service providers
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters Column on Larger Screens */}
            <div className="hidden md:block md:w-1/4 lg:w-1/5">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-24">
                <h2 className="font-semibold text-gray-900 mb-4">Categories</h2>
                <ul className="space-y-2">
                  <li>
                    <button 
                      className={`text-left w-full px-2 py-1 rounded ${
                        !filters.category || filters.category === 'all' 
                          ? 'bg-blue-50 text-blue-600 font-medium' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={() => setFilters({ ...filters, category: 'all' })}
                    >
                      All Services
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button 
                        className={`text-left w-full px-2 py-1 rounded ${
                          filters.category === category.id 
                            ? 'bg-blue-50 text-blue-600 font-medium' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setFilters({ ...filters, category: category.id })}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-gray-200 my-4 pt-4">
                  <h2 className="font-semibold text-gray-900 mb-4">Price Range</h2>
                  <div className="space-y-2">
                    <button 
                      className={`text-left w-full px-2 py-1 rounded ${
                        !filters.minPrice && !filters.maxPrice 
                          ? 'bg-blue-50 text-blue-600 font-medium' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={() => setFilters({ ...filters, minPrice: undefined, maxPrice: undefined })}
                    >
                      Any Price
                    </button>
                    <button 
                      className={`text-left w-full px-2 py-1 rounded ${
                        filters.maxPrice === 25 
                          ? 'bg-blue-50 text-blue-600 font-medium' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={() => setFilters({ ...filters, minPrice: undefined, maxPrice: 25 })}
                    >
                      Under $25
                    </button>
                    <button 
                      className={`text-left w-full px-2 py-1 rounded ${
                        filters.minPrice === 25 && filters.maxPrice === 50 
                          ? 'bg-blue-50 text-blue-600 font-medium' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={() => setFilters({ ...filters, minPrice: 25, maxPrice: 50 })}
                    >
                      $25 to $50
                    </button>
                    <button 
                      className={`text-left w-full px-2 py-1 rounded ${
                        filters.minPrice === 50 
                          ? 'bg-blue-50 text-blue-600 font-medium' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={() => setFilters({ ...filters, minPrice: 50, maxPrice: undefined })}
                    >
                      $50 and above
                    </button>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 my-4 pt-4">
                  <h2 className="font-semibold text-gray-900 mb-4">Rating</h2>
                  <div className="space-y-2">
                    <button 
                      className={`text-left w-full px-2 py-1 rounded ${
                        !filters.minRating 
                          ? 'bg-blue-50 text-blue-600 font-medium' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={() => setFilters({ ...filters, minRating: undefined })}
                    >
                      Any Rating
                    </button>
                    <button 
                      className={`text-left w-full px-2 py-1 rounded ${
                        filters.minRating === 4 
                          ? 'bg-blue-50 text-blue-600 font-medium' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={() => setFilters({ ...filters, minRating: 4 })}
                    >
                      4+ Stars
                    </button>
                    <button 
                      className={`text-left w-full px-2 py-1 rounded ${
                        filters.minRating === 4.5 
                          ? 'bg-blue-50 text-blue-600 font-medium' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={() => setFilters({ ...filters, minRating: 4.5 })}
                    >
                      4.5+ Stars
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:w-3/4 lg:w-4/5">
              <ServiceList 
                services={services}
                filters={filters}
                setFilters={setFilters}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;