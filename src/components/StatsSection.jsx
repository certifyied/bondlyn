import React from 'react';
import { motion } from 'framer-motion';
import './StatsSection.css';

export default function StatsSection() {
  const stats = [
    { number: "20+ Years", label: "of Serving Families" },
    { number: "7.5k+", label: "Children Supported" },
    { number: "25+", label: "Specialist Therapists" },
    { number: "4.8k sq ft", label: "Child-Friendly Space" },
    { number: "270k+", label: "Sessions Delivered" }
  ];

  return (
    <section className="stats-section">
      <div className="section-wrapper">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
            >
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
