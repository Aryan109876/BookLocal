import React from 'react';
import { Search, Calendar, Star, CreditCard } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: Search,
    title: 'Search',
    description: 'Find the perfect service provider in your area'
  },
  {
    id: 2,
    icon: Calendar,
    title: 'Book',
    description: 'Select a convenient date and time for your appointment'
  },
  {
    id: 3,
    icon: CreditCard,
    title: 'Pay',
    description: 'Secure payment processed only when the service is completed'
  },
  {
    id: 4,
    icon: Star,
    title: 'Review',
    description: 'Share your experience to help the community'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How BookLocal Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Booking local services has never been easier
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="absolute top-0 left-0 w-6 h-6 -mt-1 -ml-1 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">{step.id}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {/* Connector line */}
              {step.id < steps.length && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;