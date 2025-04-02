// Navbar.jsx
import React, { useState } from 'react';
import { FaHome, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-dark bg-opacity-80 backdrop-blur-sm text-primary font-outfit p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Partie gauche : Logo Home */}
        <div className="flex items-center">
          {/* Desktop : icône home dans un cercle */}
          <a href="#home" className="hidden md:flex items-center justify-center w-10 h-10 bg-dark rounded-full border border-[var(--color-darkPrimary)] text-primary hover:text-white">
            <FaHome className="w-6 h-6" />
          </a>
          {/* Mobile : simple lien HOME */}
          <a href="#home" className="md:hidden text-primary hover:text-white">
            HOME
          </a>
        </div>

        {/* Partie droite : Navigation */}
        <div>
          {/* Desktop : liens de navigation */}
          <ul className="hidden md:flex space-x-6">
            <li><a href="#skills" className="hover:text-white transition-colors">COMPETENCES</a></li>
            <li><a href="#experiences" className="hover:text-white transition-colors">PARCOURS</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors">PROJECTS</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">CONTACT</a></li>
          </ul>
          {/* Mobile : Menu hamburger */}
          <div className="md:hidden relative">
            <button onClick={toggleMenu} className="text-primary hover:text-white">
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
            {isOpen && (
              <ul className="absolute right-0 mt-2 bg-dark bg-opacity-90 backdrop-blur-sm rounded shadow-lg p-4 flex flex-col space-y-2">
                <li><a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">COMPETENCES</a></li>
                <li><a href="#experiences" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">PARCOURS</a></li>
                <li><a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">PROJECTS</a></li>
                <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">CONTACT</a></li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;