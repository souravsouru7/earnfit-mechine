import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, MoreVertical } from 'lucide-react';

const NewsletterDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    status: 'Active',
    createdAt: '08-09-2024',
    createdBy: 'Zoffi Khan',
    category: 'Workout',
    userGroup: 'All',
    type: 'Promotional Offer',
    numberOfUsers: '30',
    title: 'Offer Ending Soon',
    subtitle: 'Grab your 50% off limited discount now',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    buttonText: 'Subscribe Now',
    image: '/workout-thumbnail.jpg'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#2a2a2a]">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
          Newsletter Details
        </button>
        <button className="p-2 hover:bg-[#2a2a2a] rounded-md">
          <MoreVertical className="h-5 w-5 text-gray-400" />
        </button>
      </div>

      {/* Form */}
      <div className="p-6">
        <div className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Status</label>
              <div className="flex items-center gap-2 bg-black p-2 rounded-md">
                <input 
                  type="radio" 
                  checked={formData.status === 'Active'} 
                  onChange={() => setFormData(prev => ({ ...prev, status: 'Active' }))}
                  className="text-green-500" 
                />
                <span className="text-white">{formData.status}</span>
              </div>
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Created At</label>
              <input
                type="text"
                name="createdAt"
                value={formData.createdAt}
                onChange={handleInputChange}
                className="w-full bg-black text-white p-2 rounded-md border border-[#2a2a2a]"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Created By</label>
              <select 
                name="createdBy"
                value={formData.createdBy}
                onChange={handleInputChange}
                className="w-full bg-black text-white p-2 rounded-md border border-[#2a2a2a] appearance-none"
              >
                <option value="Zoffi Khan">Zoffi Khan</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">User Group*</label>
              <select 
                name="userGroup"
                value={formData.userGroup}
                onChange={handleInputChange}
                className="w-full bg-black text-white p-2 rounded-md border border-[#2a2a2a] appearance-none"
              >
                <option value="All">All</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Category</label>
              <select 
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full bg-black text-white p-2 rounded-md border border-[#2a2a2a] appearance-none"
              >
                <option value="Workout">Workout</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Type</label>
              <select 
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full bg-black text-white p-2 rounded-md border border-[#2a2a2a] appearance-none"
              >
                <option value="Promotional Offer">Promotional Offer</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>

          {/* Newsletter Title */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">Newsletter Title*</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full bg-black text-white p-2 rounded-md border border-[#2a2a2a]"
            />
          </div>

          {/* Newsletter Subtitle */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">Newsletter Subtitle*</label>
            <input
              type="text"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleInputChange}
              className="w-full bg-black text-white p-2 rounded-md border border-[#2a2a2a]"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">Content*</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              rows={4}
              className="w-full bg-black text-white p-2 rounded-md border border-[#2a2a2a] resize-none"
            />
          </div>

          {/* Button Text */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">Button Text</label>
            <input
              type="text"
              name="buttonText"
              value={formData.buttonText}
              onChange={handleInputChange}
              className="w-full bg-black text-white p-2 rounded-md border border-[#2a2a2a]"
            />
          </div>

          {/* Image */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">Image*</label>
            <div className="mt-2">
              <img
                src={formData.image}
                alt="Newsletter thumbnail"
                className="rounded-lg w-full max-w-md h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterDetails; 