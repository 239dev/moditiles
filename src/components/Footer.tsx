import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter,
  ArrowRight
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold flex items-center gap-2 mb-6">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="8" height="8" rx="1" />
                <rect x="13" y="3" width="8" height="8" rx="1" />
                <rect x="3" y="13" width="8" height="8" rx="1" />
                <rect x="13" y="13" width="8" height="8" rx="1" />
              </svg>
              MODI TILES
            </h3>
            <p className="text-gray-400 mb-6">
              Premium tiles and sanitaryware for your dream spaces. Quality products and
              expert consultation for residential and commercial projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight size={16} /> Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight size={16} /> About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight size={16} /> Products
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight size={16} /> Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight size={16} /> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight size={16} /> Floor Tiles
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight size={16} /> Wall Tiles
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight size={16} /> Bathroom Tiles
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight size={16} /> Sanitaryware
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight size={16} /> Bath Fittings
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Near willow park, k Channasandra, RAMPURA road, kalkere, Bengaluru, Karnataka 560043, India
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-primary flex-shrink-0" />
                <span className="text-gray-400">+919880023099</span>
              </li>
              <li className="flex gap-3">
                <Clock className="text-primary flex-shrink-0" />
                <span className="text-gray-400">Mon-Sat: 9AM - 8PM, Sun: 11AM - 5PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} MODI TILES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;