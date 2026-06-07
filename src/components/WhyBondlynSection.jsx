import React from 'react';
import { Compass, Target, Users, BookOpenCheck, ShieldCheck, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import './WhyBondlynSection.css';

const features = [
  {
    icon: <Compass className="why-icon" />,
    title: "A Truly Child-Led Experience",
    description: "Your child isn't just following a programme. They're guiding it. We watch, listen, and adapt so therapy always feels right for them."
  },
  {
    icon: <Target className="why-icon" />,
    title: "Goals You Can Actually See",
    description: "We set SMART goals—Specific, Measurable, Achievable, Relevant, and Time-Bound. No vague promises. Just real milestones you can track week by week."
  },
  {
    icon: <Users className="why-icon" />,
    title: "Parents Are Partners, Not Observers",
    description: "We train and involve parents at every stage. What happens in the therapy room continues at home and that's where the magic really happens."
  },
  {
    icon: <BookOpenCheck className="why-icon" />,
    title: "Evidence-Based, Always",
    description: "Every therapy method we use is backed by research. We stay updated with the latest in child development science so your child always gets what works."
  },
  {
    icon: <ShieldCheck className="why-icon" />,
    title: "Honest and Transparent",
    description: "We tell you the truth about progress, challenges, and what to expect. No surprises. No false hope. Just clear, caring communication."
  },
  {
    icon: <MapPin className="why-icon" />,
    title: "World-Class Standards, Close to Home",
    description: "You don't have to travel far for exceptional care. Bondlyn brings the highest standards of paediatric therapy right to your community."
  }
];

export default function WhyBondlynSection() {
  return (
    <section className="why-section">
      <div className="section-wrapper">
        <motion.div 
          className="why-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h4 className="why-prehead">WHY BONDLYN</h4>
          <h2 className="why-title">
            What Makes Us Different?<br/>Honestly, Everything.
          </h2>
        </motion.div>
        
        <div className="why-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="why-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.1 }}
            >
              <div className="why-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="why-card-title">{feature.title}</h3>
              <p className="why-card-desc">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
