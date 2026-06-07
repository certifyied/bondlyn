import React from 'react';
import { 
  Sprout, 
  Puzzle, 
  Zap, 
  MessageCircle, 
  BookOpen, 
  Brain, 
  Hand, 
  Apple, 
  Users, 
  Dna, 
  Activity, 
  Palette 
} from 'lucide-react';
import { motion } from 'framer-motion';
import './WhoCanBenefitSection.css';

const benefitsList = [
  { text: "Developmental Delay", icon: <Sprout size={20} /> },
  { text: "Autism Spectrum Disorder (ASD)", icon: <Puzzle size={20} /> },
  { text: "ADHD / Attention Difficulties", icon: <Zap size={20} /> },
  { text: "Speech & Language Delay", icon: <MessageCircle size={20} /> },
  { text: "Learning Difficulties", icon: <BookOpen size={20} /> },
  { text: "Behavioural Concerns", icon: <Brain size={20} /> },
  { text: "Sensory Processing Difficulties", icon: <Hand size={20} /> },
  { text: "Feeding & Swallowing Difficulties", icon: <Apple size={20} /> },
  { text: "Social Communication Difficulties", icon: <Users size={20} /> },
  { text: "Down Syndrome / Genetic Disorders", icon: <Dna size={20} /> },
  { text: "Cerebral Palsy & Neurological Conditions", icon: <Activity size={20} /> },
  { text: "Difficulties in Play & Daily Living Skills", icon: <Palette size={20} /> }
];

export default function WhoCanBenefitSection() {
  return (
    <section className="benefit-section">
      <div className="section-wrapper">
        <motion.div 
          className="benefit-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h4 className="benefit-prehead">WHO CAN BENEFIT? (0 - 18 YEARS)</h4>
          <h2 className="benefit-title">Whatever Your Child Is Navigating, You're Not Navigating It Alone</h2>
        </motion.div>
        
        <div className="benefit-grid">
          {benefitsList.map((item, index) => (
            <motion.div 
              key={index} 
              className="benefit-box"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (index % 4) * 0.08 }}
            >
              <span className="benefit-icon" aria-hidden="true">{item.icon}</span>
              <span className="benefit-text">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
