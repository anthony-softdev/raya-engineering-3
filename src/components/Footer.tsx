import React from 'react';
import { Building, Phone, Mail, FileText, Facebook, X, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (id: string) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer-section" className="bg-[#03303A] text-slate-100 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Logo & Intro column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => handleLinkClick('home')}>
              <div className="p-2 rounded-lg bg-white/10 text-[#E2A855]">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <span className="font-display text-lg font-bold tracking-tight uppercase block leading-none text-white">
                  Raya Engineering
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#E2A855] font-mono">
                  LTD · EST. 2024
                </span>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed pt-2">
              Raya Engineering LTD is a dedicated manufacturing engineering company in Nigeria that provides sustainable building solutions and decorative architectural facades designed for modern, high-efficiency construction.
            </p>
            <div className="flex items-center space-x-2 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs text-slate-300 font-mono font-medium">Factory Operations: Active</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-white/10">
              Quick Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Home Landing', id: 'home' },
                { name: 'About & Factory Story', id: 'about' },
                { name: 'Products Portfolio', id: 'products' },
                { name: 'CLC iBlox Blocks', id: 'iblox' },
                { name: 'Lightweight Screed', id: 'screed' },
                { name: 'GRP & GRC Facades', id: 'facade-elements' },
                { name: 'Technical Properties', id: 'technical' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-slate-300 hover:text-[#E2A855] transition-colors cursor-pointer text-left py-0.5"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-white/10">
              Resources & Specs
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Why CLC Blocks?', id: 'whyclc' },
                { name: 'Applications Grid', id: 'applications' },
                { name: 'Consultant Submittal Pack', id: 'submittal' },
                { name: 'Technical Data Sheets', id: 'technical' },
                { name: 'Contractor Enquiry', id: 'contact' },
                { name: 'Distribution Program', id: 'contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-slate-300 hover:text-[#E2A855] transition-colors cursor-pointer text-left py-0.5"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-5 pb-2 border-b border-white/10">
              Headquarters & Sales
            </h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start space-x-3.5">
                <Phone className="w-5 h-5 text-[#E2A855] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-slate-100">Phone / WhatsApp</span>
                  <a href="tel:+2347037686707" className="hover:text-[#E2A855] transition-colors">
                    +234 703 768 6707
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3.5">
                <Mail className="w-5 h-5 text-[#E2A855] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-slate-100">Enquiries</span>
                  <a href="mailto:Info@raya.ng" className="hover:text-[#E2A855] transition-colors">
                    Info@raya.ng
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3.5">
                <span className="w-5 h-5 text-[#E2A855] shrink-0 font-bold block mt-0.5">NG</span>
                <div>
                  <span className="block font-medium text-slate-100">Registered Office</span>
                  <span className="text-xs text-slate-300 block pt-0.5">Lagos, Nigeria</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar containing standards alignment badges and copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs">
          <div className="text-slate-400">
            &copy; 2026 Raya Engineering Limited. All rights reserved. Registered and manufactured in Nigeria.
          </div>
          <div className="flex items-center space-x-3 justify-center">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-slate-900/60 border border-slate-800 hover:border-[#E2A855] text-slate-300 hover:text-[#E2A855] rounded-md transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-slate-900/60 border border-slate-800 hover:border-[#E2A855] text-slate-300 hover:text-[#E2A855] rounded-md transition-all duration-300"
              aria-label="X"
            >
              <X className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-slate-900/60 border border-slate-800 hover:border-[#E2A855] text-slate-300 hover:text-[#E2A855] rounded-md transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-slate-900/60 border border-slate-800 hover:border-[#E2A855] text-slate-300 hover:text-[#E2A855] rounded-md transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
