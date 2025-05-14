import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Service } from '../../types';

interface BookingCalendarProps {
  service: Service;
  selectedDate: string | null;
  onDateSelect: (date: string) => void;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ 
  service, 
  selectedDate, 
  onDateSelect 
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Generate days for the current month view
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    // Get first day of the month
    const firstDay = new Date(year, month, 1);
    const firstDayIndex = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Get last day of the month
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    // Get days from previous month to fill the first week
    const prevMonthDays = [];
    if (firstDayIndex > 0) {
      const prevMonth = new Date(year, month, 0);
      const prevMonthDaysCount = prevMonth.getDate();
      
      for (let i = prevMonthDaysCount - firstDayIndex + 1; i <= prevMonthDaysCount; i++) {
        const date = new Date(year, month - 1, i);
        prevMonthDays.push({
          date,
          dateString: date.toISOString().split('T')[0],
          isCurrentMonth: false,
          isAvailable: false
        });
      }
    }
    
    // Generate days for current month
    const currentMonthDays = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const dateString = date.toISOString().split('T')[0];
      
      currentMonthDays.push({
        date,
        dateString,
        isCurrentMonth: true,
        isAvailable: !!service.availability[dateString]
      });
    }
    
    // Get days from next month to fill the last week
    const nextMonthDays = [];
    const totalDays = prevMonthDays.length + currentMonthDays.length;
    const remainingDays = 42 - totalDays; // 42 = 6 rows of 7 days
    
    for (let i = 1; i <= remainingDays; i++) {
      const date = new Date(year, month + 1, i);
      nextMonthDays.push({
        date,
        dateString: date.toISOString().split('T')[0],
        isCurrentMonth: false,
        isAvailable: false
      });
    }
    
    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  };
  
  const days = generateCalendarDays();
  
  // Get month and year display
  const monthYearDisplay = currentMonth.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });
  
  // Navigate to previous month
  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  
  // Navigate to next month
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  
  // Check if a date is in the past
  const isPastDate = (dateString: string) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const date = new Date(dateString);
    return date < today;
  };
  
  return (
    <div className="w-full">
      {/* Calendar Header */}
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={previousMonth}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>
        
        <h3 className="text-lg font-medium text-gray-900">{monthYearDisplay}</h3>
        
        <button 
          onClick={nextMonth}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      
      {/* Weekday Headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div 
            key={day} 
            className="text-center text-sm font-medium text-gray-500 py-1"
          >
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          const isPast = isPastDate(day.dateString);
          const isSelected = selectedDate === day.dateString;
          
          let className = "p-2 text-center rounded-md relative";
          
          if (!day.isCurrentMonth) {
            className += " text-gray-400";
          } else if (isSelected) {
            className += " bg-blue-600 text-white";
          } else if (day.isAvailable && !isPast) {
            className += " bg-white hover:bg-blue-50 cursor-pointer border border-gray-200";
          } else {
            className += " text-gray-400 bg-gray-100";
          }
          
          return (
            <button
              key={index}
              className={className}
              disabled={!day.isAvailable || isPast || !day.isCurrentMonth}
              onClick={() => day.isAvailable && !isPast && day.isCurrentMonth && onDateSelect(day.dateString)}
            >
              <span className={day.isAvailable && !isPast && day.isCurrentMonth ? "font-medium" : ""}>
                {day.date.getDate()}
              </span>
              {day.isAvailable && !isPast && day.isCurrentMonth && (
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600"></span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BookingCalendar;