import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Video,
  PlayCircle,
  FileText,
  Newspaper,
  Calendar,
  HelpCircle,
  List,
  FolderTree,
  Film,
  FileBarChart,
  Mail,
  Lock
} from 'lucide-react';
import Logo from './logo.svg';

const Sidebar = ({ activeView, setActiveView }) => {
  const navigate = useNavigate();
  const [expandedItems, setExpandedItems] = useState({
    query: false,
    category: false,
    newsletter: true
  });

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <Users size={20} />, label: 'Coach Management', path: '/coach' },
    { icon: <PlayCircle size={20} />, label: 'Live Session Management', path: '/live-session' },
    { icon: <Video size={20} />, label: 'Workout Video Management', path: '/workout-video' },
    { icon: <FileText size={20} />, label: 'Posts Management', path: '/posts' },
    { icon: <Newspaper size={20} />, label: 'Blog Management', path: '/blog' },
    { icon: <Calendar size={20} />, label: 'Booking Management', path: '/booking' },
    { icon: <HelpCircle size={20} />, label: 'Query', path: '/query', hasSubmenu: true },
    { icon: <List size={20} />, label: 'Category Management', path: '/category', hasSubmenu: true },
    { icon: <Film size={20} />, label: 'Media Management', path: '/media' },
    { icon: <FileBarChart size={20} />, label: 'Report Management', path: '/report' },
    { icon: <Mail size={20} />, label: 'Newsletter Management', path: '/newsletter', hasSubmenu: true },
    { icon: <Lock size={20} />, label: 'Access Control Management', path: '/access-control' }
  ];

  const handleMenuClick = (item) => {
    if (item.hasSubmenu) {
      toggleExpand(item.label.toLowerCase().split(' ')[0]);
    } else {
      navigate(item.path);
    }
  };

  const toggleExpand = (item) => {
    setExpandedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const handleSubmenuClick = (view, path) => {
    setActiveView(view);
    navigate(path);
  };

  return (
    <div className="w-64 min-h-screen bg-black text-white py-4">
      <div className="px-6 mb-8">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="FitnEarnPal Logo" className="w-8 h-8" />
          <span className="text-xl font-semibold text-white">FitnEarnPal</span>
        </div>
      </div>

      <nav className="px-4">
        {menuItems.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => handleMenuClick(item)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg
                hover:bg-[#1E1E1E] transition-colors
                ${item.label === 'Newsletter Management' ? 'bg-[#1E1E1E] text-white' : 'text-white'}`}
            >
              <span className="text-white">{item.icon}</span>
              <span className="flex-grow text-left text-sm">{item.label}</span>
            </button>
            
            {item.label === 'Newsletter Management' && expandedItems.newsletter && (
              <div className="ml-12 mt-2 space-y-2">
                <button
                  onClick={() => handleSubmenuClick('subscribers', '/subscribers')}
                  className={`block w-full py-2 text-sm text-white rounded-lg px-4 transition-colors ${
                    activeView === 'subscribers' ? 'bg-[#1E1E1E]' : 'hover:bg-[#1E1E1E]'
                  }`}
                >
                  Subscribers
                </button>
                <button
                  onClick={() => handleSubmenuClick('newsletter', '/newsletter')}
                  className={`block w-full py-2 text-sm text-white rounded-lg px-4 transition-colors ${
                    activeView === 'newsletter' ? 'bg-[#1E1E1E]' : 'hover:bg-[#1E1E1E]'
                  }`}
                >
                  Newsletter
                </button>
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;