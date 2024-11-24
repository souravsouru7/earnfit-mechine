import React from 'react';

const Notification = ({ type, message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-fade-in">
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg p-4 min-w-[300px]">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            {/* Success Icon */}
            <div className="text-emerald-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            {/* Title and Message */}
            <div>
              <h4 className="text-emerald-500 text-sm font-medium">{type}</h4>
              <p className="text-gray-300 text-sm">{message}</p>
            </div>
          </div>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification; 