import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/common/Sidebar';
import Header from "./components/common/Header";
import NewsletterTable from './components/Newsletter/NewsletterTable';
import SubscribersTable from './components/Subscribe/SubscribersTable';
import NewsletterLayout from './components/Newsletter/NewsletterLayout';
import NewsletterPreview from './components/Newsletter/NewsletterPreview';
import NewsletterCreate from './components/Newsletter/NewsletterCreate';
import NewsletterDetails from './components/Newsletter/NewsletterDetails';

// Create a separate AppContent component that uses hooks
function AppContent() {
  const [activeView, setActiveView] = useState('subscribers');
  const [selectedUser, setSelectedUser] = useState(null);
  const location = useLocation();

  const getCurrentPath = () => {
    const paths = location.pathname.split('/').filter(Boolean);
    let currentPath = ['Newsletter Management'];
    
    switch(paths[0]) {
      case 'newsletter':
        currentPath.push('Newsletter');
        if (paths[1]) {
          switch(paths[1]) {
            case 'preview':
              currentPath.push('Preview');
              break;
            case 'create':
              currentPath.push('New');
              break;
            case 'layout':
              currentPath.push(paths[2] ? 'Layout Details' : 'Layout');
              break;
            case 'details':
              currentPath.push('Details');
              break;
            default:
              break;
          }
        }
        break;
      case 'subscribers':
        currentPath.push('Subscribers');
        if (selectedUser) {
          currentPath.push(`User Details - ${selectedUser.name || 'Unknown User'}`);
        }
        break;
      default:
        break;
    }
    
    return currentPath;
  };

  React.useEffect(() => {
    if (!location.pathname.includes('subscribers')) {
      setSelectedUser(null);
    }
  }, [location.pathname]);

  React.useEffect(() => {
    setActiveView(location.pathname.split('/')[1] || 'subscribers');
  }, [location]);

  return (
    <div className="flex h-screen bg-black overflow-hidden">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 flex flex-col bg-black">
        <Header currentPath={getCurrentPath()} />
        <main className="flex-1 overflow-auto bg-black pt-[100px]">
          <Routes>
            {/* Newsletter routes */}
            <Route path="/newsletter" element={<NewsletterTable />} />
            <Route path="/newsletter/preview" element={<NewsletterPreview />} />
            <Route path="/newsletter/create" element={<NewsletterCreate />} />
            <Route path="/newsletter/layout" element={<NewsletterLayout />} />
            <Route path="/newsletter/layout/:id" element={<NewsletterLayout />} />
            <Route path="/newsletter/details/:id" element={<NewsletterDetails />} />
            
            {/* Subscribers route */}
            <Route path="/subscribers" element={<SubscribersTable selectedUser={selectedUser} setSelectedUser={setSelectedUser} />} />
            
            {/* Default redirect */}
            <Route path="/" element={<Navigate to="/subscribers" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

// Main App component that provides the Router context
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;