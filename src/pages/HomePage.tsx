import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import CategorySection from '../components/home/CategorySection';
import FeaturedServices from '../components/home/FeaturedServices';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import { ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      
      <CategorySection />
      
      <FeaturedServices />
      
      <HowItWorks />
      
      <Testimonials />
      
      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to find local professionals?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Browse our directory of top-rated service providers and book your appointment in minutes.
          </p>
          <Link to="/services">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50"
              icon={<ArrowRight className="h-5 w-5 ml-2" />}
            >
              Explore All Services
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Provider CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Are you a service provider?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Join our platform to showcase your services, manage appointments, 
                and connect with customers in your area.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Create a professional profile to highlight your skills</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Manage your availability and appointments</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Get reviews and build your reputation</span>
                </li>
              </ul>
              <Link to="/become-provider">
                <Button variant="secondary" size="lg">
                  Join as a Provider
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Service provider" 
                className="rounded-lg shadow-md w-full object-cover max-h-96"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;