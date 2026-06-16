import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import './TestimonialsSection.css';

const TESTIMONIALS = [
  {
    text: "ഞങ്ങൾ ആദ്യം ബോണ്ട്‌ലിനിൽ എത്തുമ്പോൾ എന്റെ മകന് ഒരു വാക്കുപോലും സംസാരിക്കാൻ കഴിഞ്ഞിരുന്നില്ല. ആറുമാസത്തിനുശേഷം, അവന് ആവശ്യമുള്ളതെല്ലാം പൂർണ്ണ വാക്യങ്ങളിൽ അവൻ ചോദിക്കുന്നു. അതിനെക്കുറിച്ച് ചിന്തിക്കുമ്പോൾ എനിക്കിപ്പോഴും കണ്ണുനിറയും. ഈ ടീം എന്റെ കുട്ടിയെ ചികിത്സിക്കുക മാത്രമല്ല ചെയ്തത്; ഞാൻ അവനിൽ വിശ്വസിക്കാൻ പഠിക്കുന്നതിന് മുമ്പേ അവർ അവനിൽ വിശ്വസിച്ചു.",
    author: "Parent of a 4-year-old",
    service: "Speech Therapy"
  },
  {
    text: "We started speech therapy for our son at the age of 2 due to speech delay. Our therapist Sana mam was incredibly patient, caring, and dedicated throughout the journey. With her guidance and support, our son's speech improved remarkably, and by the age of 2 years and 3 months, he was speaking well. For our family, Sana was truly a blessing from God. We are forever grateful for her support and dedication.",
    author: "Sreya K., Parent of a 2-year-old",
    service: "Speech Therapy"
  },
  {
    text: "Even the online sessions were brilliant. We were nervous it wouldn't be as effective, but the therapist connected with our son from day one. He actually looks forward to his sessions—which I never expected.",
    author: "Parent of a 7-year-old",
    service: "Online Therapy"
  },
  {
    text: "Thank you to Lamia’s speech therapist for helping her with her basic vocabulary through therapy sessions. As parents we can see the progress and lamia’s steady improvement in communication with her loved ones. Your patience and creative sessions has helped Lamia find her voice and true potential. Your dedication is the best thing that has happened in her.",
    author: "Parents of Lamia",
    service: "Speech Therapy"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section section-wrapper">
      <motion.div 
        className="testimonials-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h4 className="testimonials-prehead">WHAT PARENTS SAY</h4>
        <h2 className="testimonials-title">Real Families. Real Progress. Real Words.</h2>
        <p className="testimonials-subtitle">
          We don't need to tell you how good we are. These parents can do that better than we ever could.
        </p>
      </motion.div>

      <div className="testimonials-grid">
        {TESTIMONIALS.map((t, idx) => (
          <motion.div 
            key={idx} 
            className="testimonial-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (idx % 2) * 0.15 }}
          >
            <Quote size={48} className="quote-icon" />
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">
              <div className="author-role">{t.author}</div>
              <div className="author-service">{t.service}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
