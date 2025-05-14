import React, { useState } from 'react';
import { MapPin, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';
import { categories } from '../../data/categories';

const Hero: React.FC = () => {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('all');
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/services?category=${category}&location=${encodeURIComponent(location)}`);
  };
  
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Local services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-black/50" />
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Find Trusted Local Services <br className="hidden md:block" />
            <span className="text-blue-300">Right At Your Doorstep</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Connect with skilled professionals in your neighborhood for all your home and personal service needs.
          </p>
          
          {/* Search Form */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
              <Select
                options={[
                  { value: 'all', label: 'All Categories' },
                  ...categories.map(cat => ({ value: cat.id, label: cat.name }))
                ]}
                fullWidth
                className="flex-1"
                onChange={setCategory}
                value={category}
              />
              
              <Input
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                fullWidth
                className="flex-1"
                leftIcon={<MapPin className="h-5 w-5" />}
              />
              
              <Button type="submit" variant="primary" className="flex-shrink-0">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </form>
          </div>
          
          {/* Popular Searches */}
          <div className="mt-6 text-white">
            <span className="text-sm mr-2">Popular:</span>
            {['Cleaning', 'Tutoring', 'Handyman', 'Beauty'].map((item, index) => (
              <button
                key={index}
                className="inline-block bg-white/20 text-white text-sm rounded-full px-3 py-1 m-1 hover:bg-white/30 transition-colors"
                onClick={() => {
                  const categoryId = categories.find(
                    cat => cat.name.toLowerCase().includes(item.toLowerCase())
                  )?.id;
                  navigate(`/services?category=${categoryId || 'all'}`);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;