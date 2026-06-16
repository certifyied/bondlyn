import React from 'react';
import { useModal } from '../context/ModalContext';
import { motion } from 'framer-motion';
import './CtaBlock.css';

export default function CtaBlock() {
  const { openModal } = useModal();

  return (
    <div className="cta-wrapper">
      <div className="cta-container">
        
        {/* Graphics Section */}
        <motion.div 
          className="cta-graphics"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-shape cta-orange-half anim-cta-float"></div>
          
          <div className="cta-shape cta-green-rect anim-cta-pulse" style={{ animationName: 'none', transform: 'rotate(-30deg)' }}></div>
          
          <div className="cta-shape cta-yellow-o anim-cta-spin"></div>
          
          {/* Pink Scallop SVG */}
          <div className="cta-shape cta-pink-scallop anim-cta-float-delay">
            <svg viewBox="0 0 100 100" width="100%" height="100%">
              <path d="M 50.00 4.00 L 53.82 6.31 L 56.77 11.63 L 59.01 16.38 L 61.75 17.71 L 66.04 15.61 L 71.50 12.76 L 76.33 12.39 L 78.67 15.84 L 78.28 21.72 L 77.12 27.24 L 77.93 30.45 L 82.04 31.50 L 88.11 32.23 L 92.89 34.39 L 93.66 38.30 L 90.42 42.87 L 86.01 46.85 L 84.00 50.00 L 86.01 53.15 L 90.42 57.13 L 93.66 61.70 L 92.89 65.61 L 88.11 67.77 L 82.04 68.50 L 77.93 69.55 L 77.12 72.76 L 78.28 78.28 L 78.67 84.16 L 76.33 87.61 L 71.50 87.24 L 66.04 84.39 L 61.75 82.29 L 59.01 83.62 L 56.77 88.37 L 53.82 93.69 L 50.00 96.00 L 46.18 93.69 L 43.23 88.37 L 40.99 83.62 L 38.25 82.29 L 33.96 84.39 L 28.50 87.24 L 23.67 87.61 L 21.33 84.16 L 21.72 78.28 L 22.88 72.76 L 22.07 69.55 L 17.96 68.50 L 11.89 67.77 L 7.11 65.61 L 6.34 61.70 L 9.58 57.13 L 13.99 53.15 L 16.00 50.00 L 13.99 46.85 L 9.58 42.87 L 6.34 38.30 L 7.11 34.39 L 11.89 32.23 L 17.96 31.50 L 22.07 30.45 L 22.88 27.24 L 21.72 21.72 L 21.33 15.84 L 23.67 12.39 L 28.50 12.76 L 33.96 15.61 L 38.25 17.71 L 40.99 16.38 L 43.23 11.63 L 46.18 6.31 Z" fill="#f472b6" stroke="#f472b6" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Blue Circle with Bars */}
          <div className="cta-shape cta-blue-circle anim-cta-bounce">
            <svg viewBox="0 0 50 50" width="40%" height="40%">
              <rect x="10" y="25" width="6" height="15" fill="white" rx="3" />
              <rect x="22" y="15" width="6" height="25" fill="white" rx="3" />
              <rect x="34" y="20" width="6" height="20" fill="white" rx="3" />
            </svg>
          </div>

          {/* Pink Play Button */}
          <div className="cta-shape cta-pink-play anim-cta-bounce" style={{ animationDelay: '0.5s' }}>
            <svg viewBox="0 0 50 50" width="30%" height="30%" style={{ marginLeft: '4px' }}>
              <polygon points="15,10 40,25 15,40" fill="white" />
            </svg>
          </div>
          
          {/* Sparkles */}
          <div className="cta-shape cta-sparkle" style={{ top: '25%', left: '20%', transform: 'scale(0.5)' }}></div>
          <div className="cta-shape cta-sparkle" style={{ top: '55%', left: '45%', transform: 'scale(0.6)' }}></div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="cta-title">Your Child's Best Days<br />Are Still Ahead.</h2>
          <p className="cta-subtitle">
            Bondlyn is here to help make them happen.<br />
            Let's start with a simple conversation.
          </p>
          <div className="cta-buttons">
            <button className="btn-cta-primary" onClick={openModal}>Book Free Screening</button>
            <a 
              href="tel:+917356403139" 
              className="btn-cta-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
            >
              Call 73564 03139
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
