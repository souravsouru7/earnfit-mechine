import React from 'react';
import { Bell } from 'lucide-react';

const UserProfile = () => {
  return (
    <div className="flex items-center gap-4 mr-4">
      {/* Notification bell */}
      <button className="p-2 hover:bg-[#2a2a2a] rounded-full relative">
        <Bell className="h-5 w-5" />
        {/* Notification dot */}
        <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
      </button>
      
      {/* User profile */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img 
            src="/path-to-profile-image.jpg" 
            alt="Profile"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.parentElement.innerHTML = '<span className="text-sm">NJ</span>';
            }}
          />
        </div>
        <span className="text-sm font-medium">Nikita Jain</span>
      </div>
    </div>
  );
};

export default UserProfile; 