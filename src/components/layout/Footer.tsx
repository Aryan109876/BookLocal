import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-blue-400" />
              <span className="ml-2 text-xl font-bold">BookLocal</span>
            </div>
            <p className="text-gray-300 mb-4">
              Connecting you with trusted local service providers in your community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-400">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400">Contact</Link>
              </li>
              <li>
                <Link to="/become-provider" className="text-gray-300 hover:text-blue-400">Become a Provider</Link>
              </li>
            </ul>
          </div>
          
          {/* Service Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services?category=cleaning" className="text-gray-300 hover:text-blue-400">Cleaning</Link>
              </li>
              <li>
                <Link to="/services?category=handyman" className="text-gray-300 hover:text-blue-400">Handyman</Link>
              </li>
              <li>
                <Link to="/services?category=tutoring" className="text-gray-300 hover:text-blue-400">Tutoring</Link>
              </li>
              <li>
                <Link to="/services?category=beauty" className="text-gray-300 hover:text-blue-400">Beauty & Wellness</Link>
              </li>
              <li>
                <Link to="/services?category=petsitting" className="text-gray-300 hover:text-blue-400">Pet Services</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-300">
                  123 Local Avenue,<br />
                  Lakeside, CA 92040
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300">info@booklocal.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} BookLocal. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-gray-400 text-sm hover:text-blue-400">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-gray-400 text-sm hover:text-blue-400">
                Privacy Policy
              </Link>
              <Link to="/sitemap" className="text-gray-400 text-sm hover:text-blue-400">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;