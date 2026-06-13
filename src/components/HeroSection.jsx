import React from 'react';
import joyfulBoy from '../assets/joyful_boy.webp';
import joyfulGirl from '../assets/joyful_girl.webp';
import { useModal } from '../context/ModalContext';

function FadeUpText({ text, delayStart = 0 }) {
  let globalCharIndex = 0;
  const parts = text.split(/(\s+)/);

  return (
    <>
      {parts.map((part, partIdx) => {
        if (!part) return null;

        const isWhitespace = /^\s+$/.test(part);

        if (isWhitespace) {
          globalCharIndex += part.length;
          return (
            <span key={partIdx}>
              {part.replace(/\s/g, '\u00A0')}
            </span>
          );
        }

        const chars = part.split('');
        return (
          <span key={partIdx} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {chars.map((char, charIdx) => {
              const delay = delayStart + globalCharIndex * 0.015;
              globalCharIndex++;
              return (
                <span
                  key={charIdx}
                  style={{
                    display: 'inline-block',
                    opacity: 0,
                    animation: `slideUpFade 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards ${delay}s`
                  }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        );
      })}
    </>
  );
}

export default function HeroSection() {
  const { openModal } = useModal();

  return (
    <section className="section-wrapper section-split hero-container">
      <div className="section-content hero-content">
        <h1 className="hero-title">
          <FadeUpText text="Every " delayStart={0} />
          <span className="highlight-swish">
            <FadeUpText text="Child" delayStart={6 * 0.015} />
          </span>
          <FadeUpText text=" Has Something" delayStart={11 * 0.015} />
          <br />
          <span className="highlight-swish highlight-yellow">
            <FadeUpText text="Extraordinary" delayStart={25 * 0.015} />
          </span>
          <FadeUpText text=" Inside." delayStart={38 * 0.015} />
          <br />
          <FadeUpText text="We Help It Come Out." delayStart={46 * 0.015} />
        </h1>
        <p className="hero-subtitle fade-up delay-1">
          Bondlyn is a child development centre built on one simple belief: given the right
          support, every child can grow, connect, and thrive.
        </p>
        <div className="hero-buttons fade-up delay-2">
          <button 
            className="btn btn-primary"
            onClick={() => {
              const servicesEl = document.querySelector('.services-section');
              servicesEl?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Our Services
          </button>
          <button className="btn btn-outline" onClick={openModal}>Book Your Initial Screening</button>
        </div>
      </div>

      <div className="hero-graphics fade-in delay-1">
        {/* Cloud + Book */}
        <div className="collage-item el-cloud anim-float-delay-1">
          <svg viewBox="0 0 100 80" width="100%" height="100%">
            <path d="M 25 50 Q 15 50 15 40 Q 15 30 25 30 Q 30 20 45 20 Q 55 20 60 25 Q 70 15 85 25 Q 95 35 85 50 Z" fill="white" />
            <path d="M 25 60 Q 10 60 10 45 Q 10 30 25 30 Q 30 15 50 15 Q 65 15 70 25 Q 85 20 95 35 Q 100 50 85 60 Z" fill="white" />
            <path d="M 35 35 L 50 40 L 65 35 L 65 50 L 50 55 L 35 50 Z" fill="#3b82f6" />
            <line x1="50" y1="40" x2="50" y2="55" stroke="white" strokeWidth="2" />
          </svg>
        </div>

        {/* Speech Bubble */}
        <div className="collage-item el-bubble anim-bounce">
          <svg viewBox="0 0 100 60" width="100%" height="100%">
            <path d="M 10 30 C 10 10, 90 10, 90 30 C 90 50, 60 50, 50 60 C 45 50, 10 50, 10 30 Z" fill="white" />
            <text x="50" y="34" fontFamily="Outfit, sans-serif" fontSize="12" fontWeight="700" fill="#0b1c3c" textAnchor="middle">Let's Learn!</text>
          </svg>
        </div>

        {/* Pink Scallop */}
        <div className="collage-item el-scallop anim-spin-slow">
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <path d="M 50.00 4.00 L 53.82 6.31 L 56.77 11.63 L 59.01 16.38 L 61.75 17.71 L 66.04 15.61 L 71.50 12.76 L 76.33 12.39 L 78.67 15.84 L 78.28 21.72 L 77.12 27.24 L 77.93 30.45 L 82.04 31.50 L 88.11 32.23 L 92.89 34.39 L 93.66 38.30 L 90.42 42.87 L 86.01 46.85 L 84.00 50.00 L 86.01 53.15 L 90.42 57.13 L 93.66 61.70 L 92.89 65.61 L 88.11 67.77 L 82.04 68.50 L 77.93 69.55 L 77.12 72.76 L 78.28 78.28 L 78.67 84.16 L 76.33 87.61 L 71.50 87.24 L 66.04 84.39 L 61.75 82.29 L 59.01 83.62 L 56.77 88.37 L 53.82 93.69 L 50.00 96.00 L 46.18 93.69 L 43.23 88.37 L 40.99 83.62 L 38.25 82.29 L 33.96 84.39 L 28.50 87.24 L 23.67 87.61 L 21.33 84.16 L 21.72 78.28 L 22.88 72.76 L 22.07 69.55 L 17.96 68.50 L 11.89 67.77 L 7.11 65.61 L 6.34 61.70 L 9.58 57.13 L 13.99 53.15 L 16.00 50.00 L 13.99 46.85 L 9.58 42.87 L 6.34 38.30 L 7.11 34.39 L 11.89 32.23 L 17.96 31.50 L 22.07 30.45 L 22.88 27.24 L 21.72 21.72 L 21.33 15.84 L 23.67 12.39 L 28.50 12.76 L 33.96 15.61 L 38.25 17.71 L 40.99 16.38 L 43.23 11.63 L 46.18 6.31 Z" fill="#f472b6" stroke="#f472b6" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Pink Star Circle */}
        <div className="collage-item el-pink-star anim-float">
          <svg viewBox="0 0 50 50" width="60%" height="60%">
            <polygon points="25,5 31,18 45,18 34,26 38,40 25,32 12,40 16,26 5,18 19,18" fill="white" />
          </svg>
        </div>

        {/* Blue Sparkle */}
        <div className="collage-item el-sparkle anim-bounce">
          <svg viewBox="0 0 50 50" width="100%" height="100%">
            <path d="M 25 0 Q 25 25 50 25 Q 25 25 25 50 Q 25 25 0 25 Q 25 25 25 0 Z" fill="#60a5fa" />
          </svg>
        </div>

        {/* Green Quarter Circle */}
        <div className="collage-item el-quarter-circle anim-float-delay-2"></div>

        {/* Boy Capsule */}
        <div className="collage-item el-boy-capsule anim-float">
          <img src={joyfulBoy} alt="Boy smiling" />
        </div>

        {/* Green Text Pill */}
        <div className="collage-item el-green-pill anim-pulse">
          <div>Bondlyn<br/>Centre</div>
        </div>

        {/* Green Asterisk */}
        <div className="collage-item el-asterisk anim-spin-slow">
          <svg viewBox="0 0 50 50" width="100%" height="100%">
            <path d="M 20 0 L 30 0 L 30 20 L 50 20 L 50 30 L 30 30 L 30 50 L 20 50 L 20 30 L 0 30 L 0 20 L 20 20 Z" fill="#2b9361" transform="rotate(45 25 25)" />
          </svg>
        </div>

        {/* Yellow Circle */}
        <div className="collage-item el-yellow-circle anim-float-delay-1"></div>

        {/* Blue Dot */}
        <div className="collage-item el-blue-dot"></div>

        {/* Pink School Circle */}
        <div className="collage-item el-pink-school anim-float-delay-2">
          <svg viewBox="0 0 100 100" width="50%" height="50%">
            <path d="M 50 15 L 80 40 L 80 85 L 20 85 L 20 40 Z" fill="white" />
            <rect x="40" y="60" width="20" height="25" fill="#f472b6" />
            <rect x="25" y="55" width="10" height="15" fill="#f472b6" />
            <rect x="65" y="55" width="10" height="15" fill="#f472b6" />
            <polygon points="50,0 55,5 55,15 45,15 45,5" fill="white" />
            <polygon points="55,0 70,5 55,10" fill="white" />
          </svg>
        </div>

        {/* Yellow O */}
        <div className="collage-item el-yellow-o anim-bounce"></div>

        {/* Blue Horizontal Pill */}
        <div className="collage-item el-blue-pill"></div>

        {/* Girl Element */}
        <div className="collage-item el-girl-wrapper anim-float">
          <img src={joyfulGirl} alt="Girl cheering" />
        </div>

      </div>
    </section>
  );
}
