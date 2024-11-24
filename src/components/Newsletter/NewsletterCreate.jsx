import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ScheduleModal from './ScheduleModal';
import Notification from '../common/Notification';

const NewsletterCreate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (id) {
  
      fetchNewsletterData(id);
    }
  }, [id]);

  const fetchNewsletterData = async (newsletterId) => {
    try {
   
      const response = await fetch(`/api/newsletter/${newsletterId}`);
      const data = await response.json();
      setFormData(data);
    } catch (error) {
      console.error('Error fetching newsletter:', error);
    }
  };


  const formFields = {
    selectOptions: {
      userGroup: [
        { value: 'Enter media name', label: 'Enter media name' },
        { value: 'Group 1', label: 'Group 1' },
        { value: 'Group 2', label: 'Group 2' },
        { value: 'Group 3', label: 'Group 3' },
      ],
      createdBy: [
        { value: 'Zoffi Khan', label: 'Zoffi Khan' },
        { value: 'User 1', label: 'User 1' },
        { value: 'User 2', label: 'User 2' },
        { value: 'User 3', label: 'User 3' },
      ],
      type: [
        { value: 'General', label: 'General' },
        { value: 'Special', label: 'Special' },
        { value: 'Promotional', label: 'Promotional' },
        { value: 'Newsletter', label: 'Newsletter' },
      ],
      category: [
        { value: 'Workout', label: 'Workout' },
        { value: 'Nutrition', label: 'Nutrition' },
        { value: 'Lifestyle', label: 'Lifestyle' },
        { value: 'Health', label: 'Health' },
      ],
    },
    inputFields: [
      {
        name: 'title',
        label: 'Newsletter Title*',
        type: 'text',
        required: true,
      },
      {
        name: 'subtitle',
        label: 'Newsletter Subtitle*',
        type: 'text',
        required: true,
      },
      {
        name: 'buttonText',
        label: 'Button Text',
        type: 'text',
        required: false,
      },
    ],
  };

  const [formData, setFormData] = useState({
    status: 'Inactive',
    createdAt: '',
    userGroup: '',
    createdBy: '',
    type: '',
    category: '',
    title: '',
    subtitle: '',
    buttonText: '',
    content: '',
    image: ''
  });

  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.userGroup || formData.userGroup === 'Enter media name') {
      newErrors.userGroup = 'User Group is required';
    }
    if (!formData.createdBy) {
      newErrors.createdBy = 'Created By is required';
    }
    if (!formData.type) {
      newErrors.type = 'Type is required';
    }
    if (!formData.category) {
      newErrors.category = 'Category is required';
    }
    if (!formData.title) {
      newErrors.title = 'Title is required';
    }
    if (!formData.subtitle) {
      newErrors.subtitle = 'Subtitle is required';
    }
    if (!formData.content) {
      newErrors.content = 'Content is required';
    }
    if (!formData.image) {
      newErrors.image = 'Image is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (checked ? 'Active' : 'Inactive') : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  // Render select field with dynamic options
  const renderSelect = (name, label, options) => (
    <div>
      <label className="block mb-2 text-sm text-gray-300">{label}</label>
      <div className="relative">
        <select 
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className={`w-full bg-zinc-900 border ${errors[name] ? 'border-red-500' : 'border-zinc-800'} rounded p-2 text-sm appearance-none focus:outline-none focus:border-zinc-700`}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors[name] && <span className="text-red-500 text-xs mt-1">{errors[name]}</span>}
      </div>
    </div>
  );

  // Render input field
  const renderInput = (field) => (
    <div key={field.name}>
      <label className="block mb-2 text-sm text-gray-300">{field.label}</label>
      <input
        type={field.type}
        name={field.name}
        value={formData[field.name]}
        onChange={handleChange}
        required={field.required}
        className="w-full bg-zinc-900 border border-zinc-800 rounded p-2 text-sm focus:outline-none focus:border-zinc-700"
      />
    </div>
  );

  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [notification, setNotification] = useState({
    isVisible: false,
    type: '',
    message: ''
  });

  const handleScheduleOpen = () => {
    setIsScheduleModalOpen(true);
  };

  const handleScheduleClose = () => {
    setIsScheduleModalOpen(false);
  };

  const handleScheduleSave = () => {
    // Handle the schedule save logic here
    setIsScheduleModalOpen(false);
    
    // Show success notification
    setNotification({
      isVisible: true,
      type: 'Schedule',
      message: 'Newsletter has been successfully scheduled.'
    });
    
    // Auto-hide notification after 3 seconds
    setTimeout(() => {
      setNotification(prev => ({ ...prev, isVisible: false }));
    }, 3000);
  };

  const handlePreview = () => {
    navigate('/newsletter/preview');
  };

  const handleSend = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Show success notification
      setNotification({
        isVisible: true,
        type: 'Send',
        message: 'Newsletter has been sent'
      });

      // Redirect to newsletter table after a short delay
      setTimeout(() => {
        navigate('/newsletter');
      }, 1500);
    } else {
      // Show error notification
      setNotification({
        isVisible: true,
        type: 'Error',
        message: 'Please fill in all required fields'
      });
    }
  };

  const isFormValid = () => {
    return formData.userGroup && 
           formData.userGroup !== 'Enter media name' &&
           formData.createdBy && 
           formData.type && 
           formData.category && 
           formData.title && 
           formData.subtitle && 
           formData.content && 
           formData.image;
  };

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      {/* Notification Component */}
      <Notification
        type={notification.type}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={() => setNotification(prev => ({ ...prev, isVisible: false }))}
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <button className="text-white text-sm flex items-center gap-2">
            <span>←</span> Newsletter Details
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={handleScheduleOpen}
            className="flex items-center gap-2 text-white text-sm bg-transparent"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            Schedule
          </button>
          <button className="text-white">...</button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-[800px] space-y-6">
        {/* Status */}
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span>Status :</span>
            <label className="flex items-center gap-2">
              <input 
                type="checkbox" 
                name="status"
                checked={formData.status === 'Active'} 
                onChange={handleChange}
                className="form-checkbox rounded border-gray-600"
              />
              <span>Active</span>
            </label>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm text-gray-300">Created At</label>
            <input
              type="text"
              name="createdAt"
              value={formData.createdAt}
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-zinc-800 rounded p-2 text-sm focus:outline-none focus:border-zinc-700"
            />
          </div>
          {renderSelect('userGroup', 'User Group*', formFields.selectOptions.userGroup)}
        </div>

        <div className="grid grid-cols-2 gap-6">
          {renderSelect('createdBy', 'Created By', formFields.selectOptions.createdBy)}
          {renderSelect('type', 'Type', formFields.selectOptions.type)}
        </div>

        {renderSelect('category', 'Category', formFields.selectOptions.category)}
        
        {formFields.inputFields.map(field => renderInput(field))}

        <div>
          <label className="block mb-2 text-sm text-gray-300">Content*</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows={6}
            className="w-full bg-zinc-900 border border-zinc-800 rounded p-2 text-sm focus:outline-none focus:border-zinc-700"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-2 text-sm text-gray-300">Image*</label>
          <div className="border border-dashed border-zinc-700 rounded-lg p-4">
            <div className="text-center">
              <img 
                src="https://example.com/workout-image.jpg" 
                alt="Thumbnail" 
                className="max-w-[300px] mx-auto rounded"
              />
            </div>
          </div>
        </div>
            
        <div className="flex justify-end gap-3 pt-4">
          <button 
            type="button" 
            onClick={handlePreview}
            className="px-4 py-1.5 bg-zinc-800 rounded text-sm hover:bg-zinc-700"
          >
            Preview
          </button>
          <button 
            type="button" 
            onClick={handleSend}
            disabled={!isFormValid()}
            className={`px-4 py-1.5 rounded text-sm ${
              isFormValid() 
                ? 'bg-white text-black hover:bg-gray-100' 
                : 'bg-gray-500 text-gray-300 cursor-not-allowed'
            }`}
          >
            Send
          </button>
        </div>
      </form>

      <ScheduleModal 
        isOpen={isScheduleModalOpen}
        onClose={handleScheduleClose}
        onSave={handleScheduleSave}
      />
    </div>
  );
};

export default NewsletterCreate; 