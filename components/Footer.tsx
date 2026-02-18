

import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 text-white" style={{ backgroundColor: '#1a0f1a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top Heading */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight font-heading">
            Let's work together
          </h2>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 – Brand Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-heading">Victory Sylvanus Ekpo</h3>
            <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
              Professional Virtual Assistant helping businesses stay organized and responsive.
            </p>
          </div>

          {/* Column 2 – Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Quick Links</h4>
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</Link>
              <Link to="/work" className="text-gray-300 hover:text-white transition-colors text-sm">Work</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</Link>
            </div>
          </div>

          {/* Column 3 – Contact Information */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Contact</h4>
            <div className="flex flex-col space-y-4">
              <a href="mailto:osuaks94@gmail.com" className="text-gray-300 hover:text-white transition-colors flex items-center gap-3 text-sm">
                <Mail size={16} className="text-[#A376A2]" /> osuaks94@gmail.com
              </a>
              <span className="text-gray-300 flex items-center gap-3 text-sm">
                <MapPin size={16} className="text-[#A376A2]" /> Lagos, Nigeria (Remote)
              </span>
            </div>
          </div>

          {/* Column 4 – Social Media */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Social</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/osuake-slyvanus-598120391" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#A376A2] transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a href="mailto:osuakes94@gmail.com" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#A376A2] transition-all duration-300">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex justify-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Victory Sylvanus Ekpo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
