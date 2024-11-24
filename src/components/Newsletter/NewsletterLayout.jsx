import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import page from "../page.svg";
import NewsletterPreview from './NewsletterPreview';

const NewsletterLayout = () => {
  const { id } = useParams();
  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (id) {
      console.log('Newsletter ID:', id);
    }
  }, [id]);

  const templates = [
    { id: 1, image: page },
    { id: 2, image: page },
    { id: 3, image: page },
    { id: 4, image: page },
    { id: 5, image: page },
    { id: 6, image: page }
  ];

  if (showPreview) {
    return <NewsletterPreview />;
  }

  return (
    <div className="p-6 bg-black">
      {/* Header with Title and Import button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-xl">Newsletter Layout</h2>
        <button className="flex items-center gap-2 px-3 py-1.5 text-white bg-zinc-900 rounded text-sm">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          Import
        </button>
      </div>

      {/* Grid of Templates */}
      <div className="grid grid-cols-3 gap-6">
        {templates.map((template) => (
          <div key={template.id} className="relative bg-white rounded-lg overflow-hidden w-[270px] h-[368px] group">
            {/* Template Image */}
            <img 
              src={template.image} 
              alt="Newsletter Template" 
              className="w-full h-36 object-cover"
            />

            {/* Overlay Text */}
            <div className="absolute top-2 left-0 right-0 text-center">
              <div className="text-[10px] text-center mb-0.5">⚡ Offer Ending Soon ⚡</div>
              <div className="text-[10px]">
                Grab Your <span className="text-[#ff6b6b]">50% limited time Discount</span> Now!
              </div>
            </div>

            {/* Content Area */}
            <div className="p-4">
              <div className="text-[11px]">
                Hi Zoffi!
              </div>
              <div className="text-[11px] text-gray-600 mb-2">
                Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing Elit ✨
              </div>
              <div className="text-[11px] mb-3">
                Get The Premium Subscription At 91% Off Now!
              </div>

              {/* Red Button */}
              <div className="bg-[#ff6b6b] text-white text-[11px] py-2 rounded text-center mb-3">
                Get Subscription Now
              </div>

              {/* Additional Description */}
              <div className="text-[11px] text-gray-600 mb-4">
                Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
              </div>

              {/* Title Input Area */}
              <div className="mb-1">
                <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-sm">
                  <input 
                    type="text" 
                    placeholder="Title" 
                    className="w-full h-7 bg-transparent text-white px-2 text-[11px] outline-none placeholder-white"
                  />
                </div>
                <div className="text-gray-500 text-[10px]">Type of newsletter</div>
              </div>
            </div>

            {/* Hover Buttons - Hidden by default, shown on hover */}
            <div className="absolute bottom-0 left-0 right-0 flex gap-2 p-2 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                className="flex-1 py-1.5 bg-white hover:bg-gray-100 text-gray-800 rounded-sm text-xs"
                onClick={() => navigate('/newsletter/create')}
              >
                Create
              </button>
              <button 
                className="flex-1 py-1.5 bg-gray-800 hover:bg-gray-900 text-white rounded-sm text-xs"
                onClick={() => setShowPreview(true)}
              >
                Preview
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsletterLayout;