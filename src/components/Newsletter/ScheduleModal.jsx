import React, { useState } from 'react';

const ScheduleModal = ({ isOpen, onClose, onSave }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState({ hours: '07', minutes: '00', period: 'AM' });

  // Get month and year for display
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Generate calendar data
  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    
    const days = [];
    
    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, daysInPrevMonth - i)
      });
    }
    
    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(year, month, i)
      });
    }
    
    // Next month days
    const remainingDays = 42 - days.length; // 6 rows * 7 days = 42
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(year, month + 1, i)
      });
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const isSelectedDate = (date) => {
    return date.toDateString() === selectedDate.toDateString();
  };

  const isToday = (date) => {
    return date.toDateString() === new Date().toDateString();
  };

  if (!isOpen) return null;

  const days = generateCalendar();
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-black rounded-lg p-6 w-[500px]">
        <h2 className="text-white text-xl mb-6">Schedule Newsletter</h2>
        
        <div className="grid grid-cols-2 gap-4">
          {/* Date Picker */}
          <div className="bg-zinc-900/50 p-4 rounded-lg">
            <div className="text-sm text-gray-300 mb-4">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Select date
              </span>
            </div>
            
            <div className="bg-black rounded-lg p-4">
              {/* Calendar Header */}
              <div className="flex justify-between items-center mb-4 text-white text-sm">
                <button 
                  className="p-1 hover:bg-zinc-800 rounded"
                  onClick={handlePrevMonth}
                >
                  ←
                </button>
                <span>
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </span>
                <button 
                  className="p-1 hover:bg-zinc-800 rounded"
                  onClick={handleNextMonth}
                >
                  →
                </button>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {/* Weekday headers */}
                {weekDays.map(day => (
                  <div key={day} className="text-gray-400 text-xs text-center py-1">
                    {day}
                  </div>
                ))}
                
                {/* Calendar days */}
                {days.map((day, index) => (
                  <div 
                    key={index}
                    onClick={() => handleDateSelect(day.date)}
                    className={`
                      text-center py-1 text-xs cursor-pointer rounded-sm
                      ${day.isCurrentMonth ? 'text-white' : 'text-gray-600'}
                      ${isSelectedDate(day.date) ? 'bg-zinc-700' : 'hover:bg-zinc-800'}
                      ${isToday(day.date) ? 'font-bold' : ''}
                    `}
                  >
                    {day.day}
                  </div>
                ))}
              </div>

              {/* Calendar Footer */}
              <div className="flex justify-between mt-4">
                <button 
                  className="px-4 py-1 text-white text-sm bg-zinc-800 rounded hover:bg-zinc-700"
                  onClick={onSave}
                >
                  Ok
                </button>
                <button 
                  className="px-4 py-1 text-white text-sm hover:bg-zinc-800 rounded" 
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>

          {/* Time Picker */}
          <div className="bg-zinc-900/50 p-4 rounded-lg">
            <div className="text-sm text-gray-300 mb-4">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                Select time
              </span>
            </div>

            <div className="bg-black rounded-lg p-4">
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48">
                  {/* Clock Face */}
                  <div className="absolute inset-0 rounded-full border-2 border-zinc-800">
                    {/* Clock Numbers */}
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-6 h-6 text-white text-sm flex items-center justify-center"
                        style={{
                          transform: `rotate(${i * 30}deg) translateY(-80px) rotate(-${i * 30}deg)`,
                          left: 'calc(50% - 12px)',
                          top: 'calc(50% - 12px)',
                        }}
                      >
                        {i === 0 ? '12' : i}
                      </div>
                    ))}
                    
                    {/* Clock Hand */}
                    <div 
                      className="absolute w-1 h-20 bg-white origin-bottom"
                      style={{
                        transform: 'rotate(210deg)',
                        left: 'calc(50% - 1px)',
                        bottom: '50%',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Time Display */}
              <div className="flex items-center justify-center mt-4 text-2xl text-white">
                <span>{selectedTime.hours}</span>
                <span className="mx-1">:</span>
                <span>{selectedTime.minutes}</span>
                <select 
                  className="ml-2 bg-transparent text-lg"
                  value={selectedTime.period}
                  onChange={(e) => setSelectedTime({...selectedTime, period: e.target.value})}
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Send Button */}
        <div className="mt-6 flex justify-end">
          <button 
            onClick={onSave}
            className="px-4 py-1 text-xs bg-white text-black rounded hover:bg-gray-100"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal; 