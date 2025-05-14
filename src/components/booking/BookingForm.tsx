import React, { useState } from 'react';
import { Service } from '../../types';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { formatCurrency } from '../../utils/formatters';
import BookingCalendar from './BookingCalendar';
import TimeSlotPicker from './TimeSlotPicker';

interface BookingFormProps {
  service: Service;
  onSubmit: (bookingData: any) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ service, onSubmit }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [notes, setNotes] = useState('');
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState<{
    date?: string;
    time?: string;
    name?: string;
    email?: string;
    phone?: string;
  }>({});
  
  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setErrors({ ...errors, date: undefined });
  };
  
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setErrors({ ...errors, time: undefined });
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'notes') {
      setNotes(value);
    } else {
      setContactInfo({ ...contactInfo, [name]: value });
      setErrors({ ...errors, [name]: undefined });
    }
  };
  
  const validateForm = () => {
    const newErrors: any = {};
    
    if (!selectedDate) {
      newErrors.date = 'Please select a date';
    }
    
    if (!selectedTime) {
      newErrors.time = 'Please select a time';
    }
    
    if (!contactInfo.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!contactInfo.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(contactInfo.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!contactInfo.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const bookingData = {
        serviceId: service.id,
        date: selectedDate,
        timeSlot: selectedTime,
        notes,
        contactInfo,
        totalPrice: service.price
      };
      
      onSubmit(bookingData);
    }
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Book {service.title}</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Calendar and Time Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Select Date & Time</h3>
            
            {errors.date && (
              <p className="text-red-600 text-sm mb-2">{errors.date}</p>
            )}
            
            <div className="mb-6">
              <BookingCalendar 
                service={service}
                selectedDate={selectedDate}
                onDateSelect={handleDateSelect}
              />
            </div>
            
            {errors.time && (
              <p className="text-red-600 text-sm mb-2">{errors.time}</p>
            )}
            
            <TimeSlotPicker
              service={service}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onTimeSelect={handleTimeSelect}
            />
          </div>
          
          {/* Contact Information */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Your Information</h3>
            
            <div className="space-y-4">
              <Input
                label="Full Name"
                name="name"
                value={contactInfo.name}
                onChange={handleInputChange}
                error={errors.name}
                fullWidth
              />
              
              <Input
                label="Email"
                name="email"
                type="email"
                value={contactInfo.email}
                onChange={handleInputChange}
                error={errors.email}
                fullWidth
              />
              
              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                value={contactInfo.phone}
                onChange={handleInputChange}
                error={errors.phone}
                fullWidth
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Special Requests or Notes (Optional)
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  value={notes}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          
          {/* Booking Summary */}
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Booking Summary</h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Service:</span>
                <span className="font-medium">{service.title}</span>
              </div>
              
              {selectedDate && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">
                    {new Date(selectedDate).toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              )}
              
              {selectedTime && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">{selectedTime}</span>
                </div>
              )}
              
              <div className="pt-2 mt-2 border-t border-gray-200">
                <div className="flex justify-between text-base">
                  <span className="font-medium">Total:</span>
                  <span className="font-medium">{formatCurrency(service.price)}</span>
                </div>
                <p className="text-gray-500 text-xs mt-1">
                  You will only be charged after your service is completed.
                </p>
              </div>
            </div>
          </div>
          
          <Button type="submit" variant="primary" fullWidth size="lg">
            Confirm Booking
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;