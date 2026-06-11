import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/bondlyn_logo.webp';
import './Nav.css';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        {/* Left: Hamburger */}
        <div className="nav-left">
          <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Center: Logo */}
        <div className="nav-center">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Bondlyn Logo" className="nav-logo" />
          </Link>
        </div>

        {/* Right: Empty for balance, or desktop links */}
        <div className="nav-right">
          <ul className="desktop-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Mobile Slide-down Menu */}
        {isOpen && (
          <div className="mobile-menu">
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/services" onClick={closeMenu}>Services</Link>
            <Link to="/blog" onClick={closeMenu}>Blog & Resources</Link>
            <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
          </div>
        )}
      </nav>

      {/* SVG ClipPath for wavy desktop navbar */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <defs>
          <clipPath id="nav-wave" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 L 1,0.82 Q 0.75 0.94, 0.5 0.82 Q 0.25 0.70, 0 0.82 Z" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
