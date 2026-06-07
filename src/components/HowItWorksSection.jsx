import React, { useState, useRef, useEffect } from 'react';
import { Loader2, CheckCircle2, ChevronDown, Lock } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { motion } from 'framer-motion';
import './HowItWorksSection.css';

const FOCUS_AREAS = [
  "",
  "Speech & Language",
  "Behaviour & Emotions",
  "Motor Skills",
  "Social Interaction",
  "General Development"
];

export default function HowItWorksSection() {
  const { openModal } = useModal();
  const [isRevealed, setIsRevealed] = useState(false);
  const [calcPhase, setCalcPhase] = useState('setup'); // 'setup' | 'calculating' | 'capture'
  const [calcProgress, setCalcProgress] = useState(0);
  
  const [formData, setFormData] = useState({ 
    age: '', 
    focusArea: '',
    currentCapacity: '2.5',
    desiredCapacity: '4.5',
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
    if (!formData.age || !formData.focusArea) return;
    
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
- Current Capacity Rating (1-5): ${formData.currentCapacity}
- Desired Capacity Rating (1-5): ${formData.desiredCapacity}

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
            <h3 className="step-title">Step 1: Calculate Your Intervention Advantage</h3>
            <p className="step-desc">
              Early support makes a lifetime of difference. Tell us about your child to generate a personalised roadmap.
            </p>
            
            <div className="calculator-wrapper">
              {submitStatus === 'success' ? (
                <div className="form-success">
                  <CheckCircle2 size={48} className="success-icon" />
                  <h4>Your Roadmap is on its way!</h4>
                  <p>We've received your details and will be in touch shortly to schedule your free screening and review your child's plan.</p>
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
                        <label className="calc-label">On a scale of 1-5, what is their current capacity in complex tasks?</label>
                        <div className="range-wrapper">
                          <input 
                            type="range" 
                            name="currentCapacity" 
                            min="1" max="5" step="0.1"
                            value={formData.currentCapacity} 
                            onChange={handleInputChange} 
                            className="calc-range"
                          />
                          <span className="range-value">{Number(formData.currentCapacity).toFixed(1)}/5</span>
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="calc-label">Where would you like their capacity to be in 6 months?</label>
                        <div className="range-wrapper">
                          <input 
                            type="range" 
                            name="desiredCapacity" 
                            min="1" max="5" step="0.1"
                            value={formData.desiredCapacity} 
                            onChange={handleInputChange} 
                            className="calc-range"
                          />
                          <span className="range-value">{Number(formData.desiredCapacity).toFixed(1)}/5</span>
                        </div>
                      </div>
                      
                      <button 
                        type="submit" 
                        className="btn-submit" 
                        disabled={!formData.age || !formData.focusArea}
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
                        <p>Enter your details to unlock your child's roadmap and claim your free screening session.</p>
                      </div>

                      <div className="form-group">
                        <input type="text" name="name" placeholder="Parent's Name" value={formData.name} onChange={handleInputChange} required />
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} required />
                        </div>
                        <div className="form-group">
                          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} />
                        </div>
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
            <h3 className="step-title">Step 2: Book Your Free Initial Screening</h3>
            
            <div className={`steps-remainder-wrapper ${!isRevealed ? 'is-blurred' : ''}`}>
              <p className="step-desc">
                Our free screening provides an initial overview of your child's development and helps identify whether a further detailed assessment is recommended. It's a no-pressure first step.
              </p>
              
              <button className="btn-claim-screening" onClick={handleClaimScreening}>
                Claim Free Screening
              </button>

              <div className="step-collapsible-inner">
                <div className="step-block">
                  <h3 className="step-title">Step 3: Personalised Plan</h3>
                  <p className="step-desc">
                    We build a therapy plan with clear goals, the right team, and a realistic timeline designed specifically for your child.
                  </p>
                </div>

                <div className="step-block">
                  <h3 className="step-title">Step 4: Therapy Begins</h3>
                  <p className="step-desc">
                    Sessions start in our warm, child-friendly centre or online—whichever works best for your family.
                  </p>
                </div>

                <div className="step-block">
                  <h3 className="step-title">Step 5: Progress You Can See</h3>
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
