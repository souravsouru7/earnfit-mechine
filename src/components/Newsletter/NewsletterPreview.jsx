import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImage from "./banner.svg";

const NewsletterPreview = () => {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate('/newsletter/create');
  };

  return (
    <div className="bg-black min-h-full pt-24 px-6">
      <div className="flex items-center gap-2 mb-4">
        <button className="text-white">← Promotional</button>
        <div className="ml-auto">
          <button className="text-white">...</button>
        </div>
      </div>
      <div className="bg-white rounded-lg overflow-hidden max-w-[800px] mx-auto">
        <div className="bg-pink-50 pt-6 px-6 text-center">
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-1">⌛ Offer Ending Soon ⌛</h2>
            <p>
              Grab Your <span className="text-[#ff6b6b]">50% limited time Discount</span> Now!
            </p>
          </div>
          <div className="mb-6">
            <img 
              src={bannerImage} 
              alt="10% Discount" 
              className="w-full max-w-[500px] mx-auto"
            />
          </div>
        </div>
        <div className="px-6 py-4">
          <p className="mb-2">Hi Zoffi</p>
          <p className="mb-4">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,✨</p>
          <p className="text-gray-600 mb-4">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor 
            Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud 
            Exercitation Ullamco Laboris
          </p>
          <p className="font-medium mb-4">Get The Premium Subscription At 50% Off Now!</p>
          <button className="w-full bg-[#ff6b6b] text-white py-3 rounded-md mb-4">
            Get Subscription Now
          </button>
          <p className="text-gray-600 mb-6">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor 
            Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud 
            Exercitation Ullamco Laboris
          </p>
          <p className="mb-1">Thanks</p>
          <p className="mb-6">FitnEarn Team</p>
        </div>
        <div className="bg-pink-50 px-6 py-4 text-center">
          <p className="text-sm mb-3">Follow on Social Media</p>
          <div className="flex justify-center gap-4 mb-3">
            <a href="#" className="text-black">fb</a>
            <a href="#" className="text-black">in</a>
            <a href="#" className="text-black">tw</a>
            <a href="#" className="text-black">ig</a>
          </div>
          <div className="text-xs text-gray-600">
            <a href="#" className="hover:underline">Privacy</a>
            {' • '}
            <a href="#" className="hover:underline">Terms & Condition</a>
            {' • '}
            <a href="#" className="hover:underline">Unsubscribe</a>
          </div>
        </div>
      </div>
      <div className="flex justify-end max-w-[800px] mx-auto mt-4">
        <button 
          onClick={handleCreate}
          className="bg-white text-black px-4 py-1.5 rounded-md text-sm"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default NewsletterPreview; 