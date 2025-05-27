import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4 lg:py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top Bar - Only visible on medium and large screens */}
        <div className="hidden md:flex justify-between items-center mb-2 text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              <span>+91 9880023099</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-primary" />
              <span>Mon-Sat: 9AM - 8PM, Sun: 11AM - 5PM</span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="text-2xl md:text-3xl font-heading font-bold text-primary flex items-center gap-2"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="hidden sm:block"
            >
              <rect x="3" y="3" width="8" height="8" rx="1" />
              <rect x="13" y="3" width="8" height="8" rx="1" />
              <rect x="3" y="13" width="8" height="8" rx="1" />
              <rect x="13" y="13" width="8" height="8" rx="1" />
            </svg>
            MODI TILES
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              <li>
                <a href="#" className="hover:text-primary font-medium transition-colors">Home</a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary font-medium transition-colors">Products</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary font-medium transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary font-medium transition-colors">Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary font-medium transition-colors">Contact</a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition-colors"
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white absolute w-full shadow-lg py-4 fade-in">
          <nav className="container mx-auto px-4">
            <ul className="flex flex-col gap-4">
              <li>
                <a 
                  href="#" 
                  className="block py-2 hover:text-primary font-medium transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  className="block py-2 hover:text-primary font-medium transition-colors"
                  onClick={toggleMenu}
                >
                  Products
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="block py-2 hover:text-primary font-medium transition-colors"
                  onClick={toggleMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="block py-2 hover:text-primary font-medium transition-colors"
                  onClick={toggleMenu}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="block py-2 hover:text-primary font-medium transition-colors"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </li>
              <li className="mt-2">
                <a 
                  href="#contact" 
                  className="block w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md text-center transition-colors"
                  onClick={toggleMenu}
                >
                  Get a Quote
                </a>
              </li>
              <li className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-primary" />
                  <span>+919880023099</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-primary" />
                  <span>Mon-Sat: 9AM - 8PM, Sun: 11AM - 5PM</span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;