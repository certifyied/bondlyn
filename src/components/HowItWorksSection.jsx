import React, { useState, useRef, useEffect } from 'react';
import { Loader2, CheckCircle2, ChevronDown, Lock } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { motion } from 'framer-motion';
import './HowItWorksSection.css';

const FOCUS_AREAS = [
  "Speech & Language",
  "Social Communication & Interaction",
  "Behaviour, Attention & Emotions",
  "Sensory Processing",
  "Motor Skills",
  "Learning & Academic Skills",
  "Feeding & Eating Skills",
  "Overall Development",
  "I’m Not Sure / Need Professional Guidance"
];

export default function HowItWorksSection() {
  const { openModal } = useModal();
  const [isRevealed, setIsRevealed] = useState(false);
  const [calcPhase, setCalcPhase] = useState('setup'); // 'setup' | 'calculating' | 'capture'
  const [calcProgress, setCalcProgress] = useState(0);
  
  const [formData, setFormData] = useState({ 
    age: '', 
    focusArea: '',
    concernLevel: '3.0',
    preferredMode: '',
    name: '', 
    email: '', 
    phone: '' 
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or error string
  
  const step1Ref = useRef(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!formData.age || !formData.focusArea || !formData.preferredMode) return;
    
    setCalcPhase('calculating');
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setCalcProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => setCalcPhase('capture'), 300);
      }
    }, 80);
  };

  const handleSubmitLead = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      let ipDetails = "IP data unavailable";
      try {
        const ipRes = await fetch('https://ipapi.co/json/');
        if (ipRes.ok) {
          const ipData = await ipRes.json();
          ipDetails = `IP: ${ipData.ip} | Location: ${ipData.city}, ${ipData.region}, ${ipData.country_name}`;
        }
      } catch (err) {
        console.warn("Could not fetch IP data", err);
      }

      const fullMessage = `
Lead Details (Calculator):
- Child's Age: ${formData.age}
- Primary Focus Area: ${formData.focusArea}
- Concern Level (1-5): ${formData.concernLevel || '3.0'}
- Preferred Mode: ${formData.preferredMode}

Contact Info:
- Parent Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone || 'N/A'}

System Details:
- ${ipDetails}
      `.trim();

      const payload = {
        sender_name: formData.name,
        sender_email: formData.email,
        phone_number: formData.phone || '',
        subject: "Bondlyn Website - Calculator Lead",
        message: fullMessage
      };

      const webhookUrl = "https://bloggfeature.certifyied.workers.dev/adminApiBlog/api/contact?projectId=1b0fb173-fba8-46b7-9b7d-54b76de75d9f";

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setSubmitStatus('success');
      } else {
        const errText = await response.text();
        setSubmitStatus(`API Error: ${response.status} - ${errText || response.statusText}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus(`Network Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClaimScreening = () => {
    if (step1Ref.current) {
      step1Ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="hiw-section">
      <div className="section-wrapper">
        <motion.div 
          className="hiw-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h4 className="hiw-prehead">HOW IT WORKS</h4>
          <h2 className="hiw-title">
            Your First Step Is the Easiest One
          </h2>
        </motion.div>

        <div className="hiw-flow-container">
          
          {/* STEP 1: CALCULATOR */}
          <motion.div 
            className="step-block" 
            ref={step1Ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="step-title">Step 1: Reach Out</h3>
            <p className="step-desc">
              Early support makes a lifetime of difference. Tell us about your child to generate a personalised roadmap.
            </p>
            
            <div className="calculator-wrapper">
              {submitStatus === 'success' ? (
                <div className="form-success">
                  <CheckCircle2 size={48} className="success-icon" />
                  <h4>Your Roadmap is on its way!</h4>
                  <p>We've received your details and will be in touch shortly to schedule your initial screening and review your child's plan.</p>
                </div>
              ) : (
                <>
                  {/* PHASE 0: SETUP */}
                  {calcPhase === 'setup' && (
                    <form onSubmit={handleCalculate} className="calc-phase calc-setup fade-in">
                      <div className="calc-header">
                        <span>Developmental Priority Engine</span>
                      </div>
                      
                      <div className="form-group">
                        <label className="calc-label">What is your child's age?</label>
                        <input 
                          type="text" 
                          name="age" 
                          placeholder="e.g. 4 years old" 
                          value={formData.age} 
                          onChange={handleInputChange} 
                          required 
                        />
                      </div>

                      <div className="form-group">
                        <label className="calc-label">What is your primary area of focus?</label>
                        <select 
                          name="focusArea" 
                          className="calc-select"
                          value={formData.focusArea} 
                          onChange={handleInputChange} 
                          required
                        >
                          <option value="" disabled>Select an area...</option>
                          {FOCUS_AREAS.filter(Boolean).map(area => (
                            <option key={area} value={area}>{area}</option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="calc-label">On a scale of 1-5, how concerned are you about this area? <span style={{ color: 'var(--accent-pink)' }}>*</span></label>
                        <div className="range-wrapper">
                          <input 
                            type="range" 
                            name="concernLevel" 
                            min="1" max="5" step="0.5"
                            value={formData.concernLevel || '3.0'} 
                            onChange={handleInputChange} 
                            className="calc-range"
                          />
                          <span className="range-value">{Number(formData.concernLevel || 3.0).toFixed(1)}/5</span>
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="calc-label">Parent's Email Address <span style={{ color: 'var(--accent-pink)' }}>*</span></label>
                        <input 
                          type="email" 
                          name="email" 
                          placeholder="e.g. parent@example.com" 
                          value={formData.email} 
                          onChange={handleInputChange} 
                          required 
                        />
                      </div>

                      <div className="form-group">
                        <label className="calc-label">Parent's Phone Number <span style={{ color: 'var(--accent-pink)' }}>*</span></label>
                        <input 
                          type="tel" 
                          name="phone" 
                          placeholder="e.g. +91 98765 43210" 
                          value={formData.phone} 
                          onChange={handleInputChange} 
                          required 
                        />
                      </div>

                      <div className="form-group">
                        <label className="calc-label">Preferred Mode <span style={{ color: 'var(--accent-pink)' }}>*</span></label>
                        <select 
                          name="preferredMode" 
                          className="calc-select"
                          value={formData.preferredMode} 
                          onChange={handleInputChange} 
                          required
                        >
                          <option value="" disabled>Select mode...</option>
                          <option value="Online">Online Consultation</option>
                          <option value="Offline">Offline (In-Centre at Kannur)</option>
                          <option value="Both">Both (Hybrid)</option>
                        </select>
                      </div>
                      
                      <button 
                        type="submit" 
                        className="btn-submit" 
                        disabled={!formData.age || !formData.focusArea || !formData.email || !formData.phone || !formData.preferredMode}
                      >
                        Calculate Roadmap
                      </button>
                    </form>
                  )}

                  {/* PHASE 1: CALCULATING */}
                  {calcPhase === 'calculating' && (
                    <div className="calc-phase calc-processing fade-in">
                      <Loader2 className="spinner giant-spinner" size={48} />
                      <h4 className="processing-text">Analyzing developmental windows...</h4>
                      <div className="progress-bar-container">
                        <div className="progress-bar-fill" style={{ width: `${calcProgress}%` }}></div>
                      </div>
                      <p className="processing-subtext">Generating personalised milestone strategies for {formData.focusArea}...</p>
                    </div>
                  )}

                  {/* PHASE 2: LEAD CAPTURE */}
                  {calcPhase === 'capture' && (
                    <form onSubmit={handleSubmitLead} className="calc-phase calc-capture fade-in">
                      <div className="capture-header">
                        <div className="lock-icon-wrapper"><Lock size={20} /></div>
                        <h4>Your Action Plan is Ready</h4>
                        <p>Enter your name to unlock your child's roadmap and book your initial screening session.</p>
                      </div>

                      <div className="form-group">
                        <input type="text" name="name" placeholder="Parent's Name" value={formData.name} onChange={handleInputChange} required />
                      </div>
                      
                      {submitStatus && submitStatus !== 'success' && (
                        <div className="form-error">
                          <strong>Failed to Submit:</strong> {submitStatus}
                        </div>
                      )}
                      
                      <button type="submit" className="btn-submit" disabled={isSubmitting}>
                        {isSubmitting ? <><Loader2 className="spinner" size={18} /> Sending...</> : 'Unlock My Roadmap'}
                      </button>
                    </form>
                  )}
                </>
              )}
            </div>
          </motion.div>

          {/* STEP 2 AND BEYOND */}
          <motion.div 
            className="step-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <h3 className="step-title">Step 2: Book your free initial screening</h3>
            
            <div className={`steps-remainder-wrapper ${!isRevealed ? 'is-blurred' : ''}`}>
              <p className="step-desc">
                Our initial screening (available both online and offline) provides an initial overview of your child's development and helps identify whether a further detailed assessment is recommended. It's a no-pressure first step.
              </p>
              
              <button className="btn-claim-screening" onClick={handleClaimScreening}>
                Book your free initial screening
              </button>

              <div className="step-collapsible-inner">
                <div className="step-block">
                  <h3 className="step-title">Step 3: Detailed Assessment</h3>
                  <p className="step-desc">
                    If recommended, our specialist therapists conduct a comprehensive, detailed assessment (available online or in-centre/offline) to understand your child's specific developmental profile.
                  </p>
                </div>

                <div className="step-block">
                  <h3 className="step-title">Step 4: Personalised Plan</h3>
                  <p className="step-desc">
                    We build a therapy plan with clear goals, the right team, and a realistic timeline designed specifically for your child.
                  </p>
                </div>

                <div className="step-block">
                  <h3 className="step-title">Step 5: Therapy Begins</h3>
                  <p className="step-desc">
                    Sessions start in our warm, child-friendly centre (offline) or online—whichever works best for your family.
                  </p>
                </div>

                <div className="step-block">
                  <h3 className="step-title">Step 6: Progress You Can See</h3>
                  <p className="step-desc">
                    We track every milestone and share regular updates so you always know how your child is growing.
                  </p>
                </div>
              </div>

              {!isRevealed && (
                <div className="blur-overlay">
                  <button className="btn-reveal prominent-reveal" onClick={() => setIsRevealed(true)}>
                    Reveal More Steps <ChevronDown size={20} />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
