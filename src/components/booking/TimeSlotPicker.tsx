import React from 'react';
import { Clock } from 'lucide-react';
import { Service } from '../../types';

interface TimeSlotPickerProps {
  service: Service;
  selectedDate: string | null;
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
}

const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({
  service,
  selectedDate,
  selectedTime,
  onTimeSelect
}) => {
  if (!selectedDate) {
    return (
      <div className="p-4 bg-gray-50 rounded-md text-center">
        <Clock className="h-6 w-6 text-gray-400 mx-auto mb-2" />
        <p className="text-gray-500">Select a date to view available time slots</p>
      </div>
    );
  }
  
  const timeSlots = selectedDate ? service.availability[selectedDate] || [] : [];
  
  if (timeSlots.length === 0) {
    return (
      <div className="p-4 bg-gray-50 rounded-md text-center">
        <Clock className="h-6 w-6 text-gray-400 mx-auto mb-2" />
        <p className="text-gray-500">No available time slots for this date</p>
      </div>
    );
  }
  
  // Format the date for display
  const formattedDate = new Date(selectedDate).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">Available Times for {formattedDate}</h3>
      <div className="grid grid-cols-3 gap-2">
        {timeSlots.map((time) => (
          <button
            key={time}
            className={`p-2 rounded-md text-center border ${
              selectedTime === time 
                ? 'bg-blue-600 text-white border-blue-600' 
                : 'bg-white text-gray-700 border-gray-200 hover:border-blue-400'
            }`}
            onClick={() => onTimeSelect(time)}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotPicker;