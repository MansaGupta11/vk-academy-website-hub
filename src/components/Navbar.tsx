
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-vk-blue">VK</span>
          <span className="text-2xl font-medium">Academy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-vk-slate hover:text-vk-blue transition-colors font-medium">
            Home
          </Link>
          <Link to="/about" className="text-vk-slate hover:text-vk-blue transition-colors font-medium">
            About Us
          </Link>
          <Link to="/courses" className="text-vk-slate hover:text-vk-blue transition-colors font-medium">
            Courses
          </Link>
          <Link to="/contact" className="text-vk-slate hover:text-vk-blue transition-colors font-medium">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-vk-blue hover:bg-vk-indigo text-white">
            Enroll Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-vk-slate" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-vk-slate hover:text-vk-blue transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-vk-slate hover:text-vk-blue transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/courses" 
              className="text-vk-slate hover:text-vk-blue transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link 
              to="/contact" 
              className="text-vk-slate hover:text-vk-blue transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-vk-blue hover:bg-vk-indigo text-white w-full mt-2">
              Enroll Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
