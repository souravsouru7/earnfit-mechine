import React, { useState } from 'react';
import { X, MoreVertical } from 'lucide-react';

const UserDetails = ({ user, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    status: user?.status || 'Active'
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (checked ? 'Active' : 'Inactive') : value
    }));
  };

  const handleSave = async () => {
    try {
      // API call would go here
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving user details:', error);
    }
  };

  return (
    <div className="px-6">
      <div className="relative bg-black rounded-lg border border-[#1E1E1E] min-h-[500px]">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#1E1E1E]">
          <h2 className="text-xl font-normal text-white">User Details</h2>
          <div className="flex items-center gap-2">
            {isEditing && (
              <button 
                onClick={handleSave}
                className="px-4 py-1.5 bg-white text-black rounded-lg hover:bg-gray-100 text-sm font-medium"
              >
                Save
              </button>
            )}
            <button 
              className="p-1.5 hover:bg-[#1E1E1E] rounded-md text-white"
              onClick={onClose}
            >
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Status */}
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Status :</span>
              <input 
                type="checkbox" 
                name="status"
                checked={userData.status === 'Active'}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="rounded bg-transparent border-gray-600 cursor-pointer" 
              />
              <span className="text-white">Active</span>
            </div>
          </div>

          {/* User Info */}
          <div className="grid grid-cols-2 gap-6">
            {/* Username Field */}
            <div>
              <label className="block mb-2 text-gray-400">User Name</label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                  className="w-full bg-[#1E1E1E] rounded-lg p-2 pr-8 text-white border border-gray-600 outline-none"
                />
                {userData.name && (
                  <button 
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                    onClick={() => setUserData(prev => ({ ...prev, name: '' }))}
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block mb-2 text-gray-400">E-mail ID</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                  className="w-full bg-[#1E1E1E] rounded-lg p-2 pr-8 text-white border border-gray-600 outline-none"
                />
                {userData.email && (
                  <button 
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                    onClick={() => setUserData(prev => ({ ...prev, email: '' }))}
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Edit Button (only shown when not editing) */}
        {!isEditing && (
          <div className="absolute bottom-6 right-6">
            <button 
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 text-sm font-medium transition-colors"
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;