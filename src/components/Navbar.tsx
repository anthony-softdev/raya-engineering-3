import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

interface NavbarProps {
  activeView: string;
  onNavigate: (view: string) => void;
}

export default function Navbar({ activeView, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling on the body when the mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset overflow when component unmounts
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const productSubLinks = [
    { label: 'All Products', id: 'products' },
    { label: 'CLC iBlox', id: 'iblox' },
    { label: 'CLC Screed', id: 'screed' },
    { label: 'GRP & GRC', id: 'facade-elements' },
  ];

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Products', id: 'products', hasDropdown: true },
    { label: 'Why CLC?', id: 'whyclc' },
    { label: 'Technical', id: 'technical' },
    { label: 'Applications', id: 'applications' },
    { label: 'Submittal', id: 'submittal' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#03303A] text-white shadow-xl py-3'
          : 'bg-white text-slate-800 border-b border-slate-100 py-3 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand Area */}
          <div
            id="nav-logo"
            className="flex items-center cursor-pointer group"
            onClick={() => handleLinkClick('home')}
          >
            <img 
              src="/Raya Logo-01.svg"
              alt="Raya Engineering Logo" 
              className={`h-10 md:h-12 w-auto transition-all duration-300 ${isScrolled ? 'filter brightness-0 invert' : ''}`} 
            />
          </div>

          {/* Desktop Menu & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div id="desktop-links" className="flex items-center space-x-1.5 xl:space-x-2.5">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  const isProductsActive = ['products', 'iblox', 'screed', 'facade-elements'].includes(activeView);
                  return (
                    <div
                      key={link.id}
                      id="nav-dropdown-wrapper"
                      className="relative group"
                    >
                      <button
                        id={`nav-link-${link.id}`}
                        onClick={() => handleLinkClick(link.id)}
                        className={`flex items-center space-x-1 px-3 py-2 rounded-md text-[13px] xl:text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                          isProductsActive
                            ? isScrolled
                              ? 'text-[#E2A855] bg-white/5 font-semibold'
                              : 'text-[#03303A] bg-[#03303A]/5 font-semibold'
                            : isScrolled
                              ? 'text-slate-100 hover:text-[#E2A855] hover:bg-white/5'
                              : 'text-slate-600 hover:text-[#03303A] hover:bg-slate-50'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                      </button>

                      {/* Desktop Dropdown Container */}
                      <div
                        id="products-dropdown-menu"
                        className={`absolute left-0 mt-1 w-52 rounded-lg shadow-xl border transition-all duration-200 origin-top-left 
                          opacity-0 scale-95 pointer-events-none -translate-y-1 
                          group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto group-hover:translate-y-0 ${
                          isScrolled
                            ? 'bg-[#03303A] text-white border-white/10'
                            : 'bg-white text-slate-800 border-slate-100'
                        } py-2 z-50`}
                      >
                        {productSubLinks.map((sub) => {
                          const isSubActive = activeView === sub.id;
                          return (
                            <button
                              key={sub.id}
                              id={`dropdown-sub-${sub.id}`}
                              onClick={() => {
                                handleLinkClick(sub.id);
                              }}
                              className={`w-full text-left px-4 py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                                isSubActive
                                  ? isScrolled
                                    ? 'text-[#E2A855] bg-white/10 font-semibold'
                                    : 'text-[#03303A] bg-slate-100 font-semibold'
                                  : isScrolled
                                    ? 'text-slate-200 hover:text-white hover:bg-white/5'
                                    : 'text-slate-600 hover:text-[#03303A] hover:bg-slate-50'
                              }`}
                            >
                              {sub.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                const isActive = activeView === link.id;
                return (
                  <button
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className={`px-3 py-2 rounded-md text-[13px] xl:text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                      isActive
                        ? isScrolled
                          ? 'text-[#E2A855] bg-white/5 font-semibold'
                          : 'text-[#03303A] bg-[#03303A]/5 font-semibold'
                        : isScrolled
                          ? 'text-slate-100 hover:text-[#E2A855] hover:bg-white/5'
                          : 'text-slate-600 hover:text-[#03303A] hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
            <div id="nav-cta-desktop">
              <button
                id="nav-cta-btn-desktop"
                onClick={() => handleLinkClick('contact')}
                className={`flex items-center space-x-2 px-4.5 py-2.5 rounded-md font-medium text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isScrolled
                    ? 'bg-[#E2A855] hover:bg-[#c99042] text-[#03303A] shadow-md hover:shadow-lg'
                    : 'bg-[#03303A] hover:bg-[#054857] text-white shadow-md'
                }`}
              >
                <span>Contact</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile/Tablet Menu & CTA */}
          <div className="lg:hidden flex items-center space-x-2">
            <div id="nav-cta-mobile" className="hidden sm:block">
              <button
                id="nav-cta-btn-mobile"
                onClick={() => handleLinkClick('contact')}
                className={`flex items-center space-x-2 px-4.5 py-2.5 rounded-md font-medium text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isScrolled
                    ? 'bg-[#E2A855] hover:bg-[#c99042] text-[#03303A] shadow-md hover:shadow-lg'
                    : 'bg-[#03303A] hover:bg-[#054857] text-white shadow-md'
                }`}
              >
                <span>Contact</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div id="mobile-toggle">
              <button
                id="mobile-menu-btn"
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md focus:outline-none cursor-pointer ${
                  isScrolled ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden fixed inset-x-0 top-[64px] bottom-0 bg-white border-b border-slate-200 shadow-2xl py-4 px-6 z-40 animate-in fade-in slide-in-from-top-4 duration-200 overflow-y-auto"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                const isProductsActive = ['products', 'iblox', 'screed', 'facade-elements'].includes(activeView);
                return (
                  <div key={link.id} className="flex flex-col space-y-1">
                    <button
                      id={`mobile-link-${link.id}`}
                      onClick={() => handleLinkClick(link.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-md text-sm font-bold tracking-wide uppercase ${
                        isProductsActive
                          ? 'bg-[#03303A] text-white'
                          : 'text-slate-800 bg-slate-100/50'
                      }`}
                    >
                      {link.label}
                    </button>
                    {/* Sublinks indented */}
                    <div className="pl-4 flex flex-col space-y-1 border-l-2 border-slate-200 ml-4 py-1">
                      {productSubLinks.map((sub) => {
                        const isSubActive = activeView === sub.id;
                        return (
                          <button
                            key={sub.id}
                            id={`mobile-sublink-${sub.id}`}
                            onClick={() => handleLinkClick(sub.id)}
                            className={`w-full text-left px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                              isSubActive
                                ? 'bg-[#E2A855] text-[#03303A] font-semibold'
                                : 'text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            {sub.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              const isActive = activeView === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#03303A] text-white font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#03303A]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              id="mobile-drawer-cta"
              onClick={() => handleLinkClick('contact')}
              className="w-full flex items-center justify-between mt-3 px-4 py-3.5 bg-[#03303A] text-white rounded-md text-sm font-semibold tracking-wider uppercase transition-colors hover:bg-[#054857]"
            >
              <span>Contact</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
