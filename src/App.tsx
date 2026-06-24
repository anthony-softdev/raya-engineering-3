import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Views
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ProductsView from './components/ProductsView';
import ProductIbloxView from './components/ProductIbloxView';
import ProductScreedView from './components/ProductScreedView';
import ProductFacadeView from './components/ProductFacadeView';
import WhyClcView from './components/WhyClcView';
import TechnicalView from './components/TechnicalView';
import ApplicationsView from './components/ApplicationsView';
import SubmittalView from './components/SubmittalView';
import ContactView from './components/ContactView';

type ViewId = 'home' | 'about' | 'products' | 'iblox' | 'screed' | 'facade-elements' | 'whyclc' | 'technical' | 'applications' | 'submittal' | 'contact';

export default function App() {
  const [activeView, setActiveView] = useState<ViewId>('home');

  // Smooth scroll back to top upon view swaps
  const handleNavigation = (viewId: string) => {
    setActiveView(viewId as ViewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveView = () => {
    switch (activeView) {
      case 'home':
        return <HomeView onNavigate={handleNavigation} />;
      case 'about':
        return <AboutView />;
      case 'products':
        return <ProductsView onNavigate={handleNavigation} />;
      case 'iblox':
        return <ProductIbloxView onNavigate={handleNavigation} />;
      case 'screed':
        return <ProductScreedView onNavigate={handleNavigation} />;
      case 'facade-elements':
        return <ProductFacadeView onNavigate={handleNavigation} />;
      case 'whyclc':
        return <WhyClcView onNavigate={handleNavigation} />;
      case 'technical':
        return <TechnicalView />;
      case 'applications':
        return <ApplicationsView onNavigate={handleNavigation} />;
      case 'submittal':
        return <SubmittalView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView onNavigate={handleNavigation} />;
    }
  };

  return (
    <div id="raya-app-root" className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-[#03303A] selection:text-white">
      
      {/* Navigation Header */}
      <Navbar activeView={activeView} onNavigate={handleNavigation} />

      {/* Main Panel View Transitions */}
      <main id="raya-main-content" className="flex-grow">
        <div 
          key={activeView} 
          className="animate-in fade-in slide-in-from-bottom-2 duration-300"
        >
          {renderActiveView()}
        </div>
      </main>

      {/* Persistent Footer */}
      <Footer onNavigate={handleNavigation} />

    </div>
  );
}
