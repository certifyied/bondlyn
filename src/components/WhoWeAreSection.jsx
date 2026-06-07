import React from 'react';
import { motion } from 'framer-motion';

export default function WhoWeAreSection() {
  return (
    <section className="who-we-are">
      <div className="section-wrapper section-split wwa-container">
        
        {/* Graphics Section (Order changed in CSS for mobile) */}
        <motion.div 
          className="section-graphics wwa-graphics"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Inner Grid */}
          <div className="wwa-grid-item">
            <img src="/src/assets/kerala_kid_1.png" alt="Happy child" />
          </div>
          <div className="wwa-grid-item wwa-bg-sage"></div>
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
            <img src="/src/assets/puzzle_piece_sage.png" alt="Sage Puzzle Piece" />
          </div>
          <div className="wwa-float-puzzle wwa-puzzle-2">
            <img src="/src/assets/puzzle_piece_blue.png" alt="Blue Puzzle Piece" />
          </div>
          <div className="wwa-float-puzzle wwa-puzzle-3">
            <img src="/src/assets/puzzle_piece_yellow.png" alt="Yellow Puzzle Piece" />
          </div>
        </motion.div>

        {/* Text Content Section */}
        <div className="section-content wwa-content">
          <motion.h4 
            className="wwa-prehead"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Who We Are
          </motion.h4>
          <motion.h2 
            className="wwa-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            Not Just a Therapy Centre.<br/>A Place Where Children Feel Safe
          </motion.h2>
          
          <motion.p 
            className="wwa-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            At Bondlyn, we believe that every child—no matter where they are in their journey—deserves a space where they feel seen, heard, and genuinely supported. Our approach is built around your child—their personality, their pace, their strengths. We set clear, trackable goals so you're never left wondering if things are moving forward. Because they are.
          </motion.p>
          <motion.p 
            className="wwa-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            We are a team of passionate therapists, educators, and child development specialists who believe therapy should never feel like a task. It should feel natural, encouraging, and filled with small wins that add up to big changes.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
