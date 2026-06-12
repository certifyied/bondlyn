import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/bondlyn_logo.webp';
import './Footer.css';

// Inline SVGs since lucide-react version doesn't include social icons
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms & Conditions', to: '/terms' },
];

const SOCIALS = [
  { label: 'Twitter / X', href: 'https://twitter.com', icon: <XIcon /> },
  { label: 'Instagram', href: 'https://instagram.com', icon: <InstagramIcon /> },
  { label: 'Facebook', href: 'https://facebook.com', icon: <FacebookIcon /> },
];

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('bondlyn_cookie_consent');
    if (!consent) {
      // Small delay so it doesn't flash immediately
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('bondlyn_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('bondlyn_cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="alertdialog" aria-label="Cookie consent">
      <p className="cookie-text">
        🍪 We use cookies to improve your experience. By continuing, you agree to our{' '}
        <Link to="/privacy">Privacy Policy</Link> and{' '}
        <Link to="/terms">Terms & Conditions</Link>.
      </p>
      <div className="cookie-actions">
        <button className="btn-cookie-decline" onClick={handleDecline}>Decline</button>
        <button className="btn-cookie-accept" onClick={handleAccept}>Accept All</button>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Column 1: Brand & Contact Info */}
          <div className="footer-column footer-brand-col">
            <img src={logo} alt="Bondlyn Logo" className="footer-logo" />
            <p className="footer-tagline" style={{ textAlign: 'left', margin: '0 0 1.5rem 0' }}>
              Every Child Has Something<br />
              Extraordinary Inside.<br />
              We Help It Come Out.
            </p>
            <div className="footer-contact-info">
              <p><strong>Address:</strong> Chettipedika, Kannur, Kerala - 670004</p>
              <p><strong>Email:</strong> <a href="mailto:bondlyncdc@gmail.com">bondlyncdc@gmail.com</a></p>
              <p><strong>Mob:</strong> <a href="tel:+917356403139">73564 03139</a>, <a href="tel:+918921730594">89217 30594</a></p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-column footer-links-col">
            <h4>Quick Links</h4>
            <ul className="footer-nav-vertical">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Map Embed */}
          <div className="footer-column footer-map-col">
            <h4>Our Location</h4>
            <div className="footer-map-container">
              <iframe
                title="Bondlyn Location Map"
                src="https://maps.google.com/maps?q=Bondlyn%20Child%20Development%20Centre%20Chettipedika%20Kannur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="150"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a 
                href="https://maps.app.goo.gl/UXRkq4e3B8YyVcVt5?g_st=aw" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="view-map-link"
              >
                View on Google Maps &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Social Pills */}
        <div className="footer-socials">
          {SOCIALS.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              {s.icon}
              {s.label}
            </a>
          ))}
        </div>

        <hr className="footer-divider" />

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Bondlyn Child Development Centre. All rights reserved.
          </p>
          <p className="footer-credit">
            Developed with <span className="heart">♥</span> by{' '}
            <a href="https://certifyied.com" target="_blank" rel="noopener noreferrer">
              Certifyied
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
