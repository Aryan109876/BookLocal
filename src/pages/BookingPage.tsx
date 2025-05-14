import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { getServiceById } from '../data/services';
import BookingForm from '../components/booking/BookingForm';
import Button from '../components/ui/Button';
import { ArrowLeft, Check } from 'lucide-react';

const BookingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState<any>(null);
  
  const service = id ? getServiceById(id) : undefined;
  
  if (!service) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-8">
              The service you're looking for doesn't exist or has been removed.
            </p>
            <Button 
              variant="primary"
              onClick={() => navigate('/services')}
              icon={<ArrowLeft className="h-5 w-5 mr-2" />}
            >
              Back to Services
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
  
  const handleSubmit = (data: any) => {
    // In a real application, this would send the data to the backend
    console.log('Booking submitted:', data);
    setBookingData(data);
    setIsSubmitted(true);
    
    // Scroll to top
    window.scrollTo(0, 0);
  };
  
  return (
    <Layout>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          {!isSubmitted ? (
            <>
              <div className="mb-6">
                <button 
                  className="flex items-center text-gray-600 hover:text-blue-600"
                  onClick={() => navigate(`/services/${id}`)}
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to service details
                </button>
              </div>
              
              <BookingForm service={service} onSubmit={handleSubmit} />
            </>
          ) : (
            <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md border border-gray-200 p-8 text-center">
              <div className="mb-6">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
              
              <p className="text-gray-600 mb-6">
                Your booking request has been received and is pending confirmation from the service provider.
                You will receive an email with the details shortly.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-md mb-8 text-left">
                <h3 className="font-medium text-gray-900 mb-2">Booking Details</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service:</span>
                    <span className="font-medium">{service.title}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">
                      {new Date(bookingData.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-medium">{bookingData.timeSlot}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  variant="primary"
                  onClick={() => navigate('/bookings')}
                >
                  View Your Bookings
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={() => navigate('/')}
                >
                  Return to Home
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BookingPage;