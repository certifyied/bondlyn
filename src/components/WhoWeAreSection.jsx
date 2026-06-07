import React from 'react';

export default function WhoWeAreSection() {
  return (
    <section className="who-we-are">
      <div className="wwa-container">
        
        {/* Graphics Section (Order changed in CSS for mobile) */}
        <div className="wwa-graphics">
          
          {/* Inner Grid */}
          <div className="wwa-grid-item">
            <img src="/src/assets/kerala_kid_1.png" alt="Happy child" />
          </div>
          <div className="wwa-grid-item wwa-bg-red"></div>
          <div className="wwa-grid-item wwa-bg-blue"></div>
          <div className="wwa-grid-item">
            <img src="/src/assets/kerala_kid_2.png" alt="Laughing child" />
          </div>

          {/* Center Logo Bubble */}
          <div className="wwa-center-logo">
            <img src="/src/assets/bondlyn_logo.png" alt="Bondlyn Logo" />
          </div>

          {/* Floating Puzzle Pieces (3D Images) */}
          <div className="wwa-float-puzzle wwa-puzzle-1">
            <img src="/src/assets/puzzle_piece_red.png" alt="Red Puzzle Piece" />
          </div>
          <div className="wwa-float-puzzle wwa-puzzle-2">
            <img src="/src/assets/puzzle_piece_blue.png" alt="Blue Puzzle Piece" />
          </div>
          <div className="wwa-float-puzzle wwa-puzzle-3">
            <img src="/src/assets/puzzle_piece_yellow.png" alt="Yellow Puzzle Piece" />
          </div>
          
        </div>

        {/* Text Content Section */}
        <div className="wwa-content">
          <h4 className="wwa-prehead">Who We Are</h4>
          <h2 className="wwa-title">Not Just a Therapy Centre.<br/>A Place Where Children Feel Safe</h2>
          
          <p className="wwa-text">
            At Bondlyn, we believe that every child—no matter where they are in their journey—deserves a space where they feel seen, heard, and genuinely supported. Our approach is built around your child—their personality, their pace, their strengths. We set clear, trackable goals so you're never left wondering if things are moving forward. Because they are.
          </p>
          <p className="wwa-text">
            We are a team of passionate therapists, educators, and child development specialists who believe therapy should never feel like a task. It should feel natural, encouraging, and filled with small wins that add up to big changes.
          </p>
        </div>

      </div>
    </section>
  );
}
