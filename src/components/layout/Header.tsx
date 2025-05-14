import React, { useState, useEffect } from 'react';
import { Menu, Search, User, LogIn, MapPin, Heart, ShoppingBag } from 'lucide-react';
import Button from '../ui/Button';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Track scroll for changing header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <MapPin className="h-8 w-8 text-blue-600" />
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>
              BookLocal
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100">
              Home
            </Link>
            <Link to="/services" className="px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100">
              Services
            </Link>
            <Link to="/about" className="px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100">
              About
            </Link>
            <Link to="/contact" className="px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100">
              Contact
            </Link>
            <Link to="/become-provider" className="px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100">
              Become a Provider
            </Link>
          </nav>
          
          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/search" className="text-gray-600 hover:text-blue-600">
              <Search className="h-5 w-5" />
            </Link>
            <Link to="/favorites" className="text-gray-600 hover:text-blue-600">
              <Heart className="h-5 w-5" />
            </Link>
            <Link to="/bookings" className="text-gray-600 hover:text-blue-600">
              <ShoppingBag className="h-5 w-5" />
            </Link>
            
            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/login">
                <Button variant="outline" size="sm">
                  <LogIn className="h-4 w-4 mr-1" />
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="primary" size="sm">
                  Sign Up
                </Button>
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 py-2 bg-white rounded-lg shadow-lg">
            <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Home
            </Link>
            <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Services
            </Link>
            <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              About
            </Link>
            <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Contact
            </Link>
            <Link to="/become-provider" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Become a Provider
            </Link>
            <div className="border-t border-gray-200 mt-2 pt-2">
              <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Login
              </Link>
              <Link to="/signup" className="block px-4 py-2 text-blue-600 font-medium hover:bg-blue-50">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;