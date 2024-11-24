import React from 'react';
import { ChevronRight, Bell } from 'lucide-react';

const Header = ({ currentPath }) => {
  return (
    <div className="bg-black text-white fixed right-0 left-64 top-0 z-10 border-b border-[#1E1E1E]">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-3 border-b border-[#1E1E1E]">
        <div className="flex-1"></div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-[#1E1E1E] rounded-full">
            <Bell size={20} />
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white">
              NK
            </div>
            <span className="text-sm font-medium">Nikita Jain</span>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="px-6 py-4">
        <div className="flex items-center gap-2">
          {currentPath.map((path, index) => (
            <React.Fragment key={index}>
              <span className="text-white-400 text-lg font-semibold">
                {path}
              </span>
              {index < currentPath.length - 1 && (
                <ChevronRight size={18} className="text-white-400" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;