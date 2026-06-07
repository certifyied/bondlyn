import React, { useState } from 'react';
import SeoHeader from '../components/SeoHeader';
import { Phone, Mail, MapPin, Clock, Loader2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | error string

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
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
Message from Contact Form:
- Sender Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone || 'N/A'}
- Subject: ${formData.subject}
- Message:
${formData.message}

System Details:
- ${ipDetails}
      `.trim();

      const payload = {
        sender_name: formData.name,
        sender_email: formData.email,
        phone_number: formData.phone || '',
        subject: `Contact Form - ${formData.subject}`,
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
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
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

  return (
    <main className="contact-page">
      <SeoHeader title="Contact Us | Bondlyn" description="Get in touch with Bondlyn Child Development Centre Kozhikode. Book appointments and ask questions." />
      
      <div className="contact-container">
        
        {/* Left Column: Contact info */}
        <motion.div 
          className="contact-info-card"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="contact-info-header">
            <h2>Get In Touch</h2>
            <p>
              We're here to help answer your questions about developmental milestones, therapies, and custom roadmaps. Reach out today.
            </p>
          </div>

          <div className="contact-details-list">
            <div className="contact-detail-item">
              <div className="contact-icon-wrapper">
                <Phone size={24} />
              </div>
              <div className="contact-detail-text">
                <h4>Call Us</h4>
                <a href="tel:+918078556606">+91 80785 56606</a>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon-wrapper">
                <Mail size={24} />
              </div>
              <div className="contact-detail-text">
                <h4>Email Us</h4>
                <a href="mailto:info@bondlyn.com">info@bondlyn.com</a>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon-wrapper">
                <MapPin size={24} />
              </div>
              <div className="contact-detail-text">
                <h4>Visit Us</h4>
                <p>
                  Bondlyn Child Development Centre,<br />
                  1st Floor, Near KSRTC,<br />
                  Thamarassery, Kozhikode, Kerala - 673573
                </p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon-wrapper">
                <Clock size={24} />
              </div>
              <div className="contact-detail-text">
                <h4>Working Hours</h4>
                <p>Mon - Sat: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="contact-info-footer">
            <h4>Location Note</h4>
            <p>Our child-friendly centre is located right next to the KSRTC bus stand, Kozhikode, ensuring easy access for families across the region.</p>
          </div>
        </motion.div>

        {/* Right Column: Contact form */}
        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {submitStatus === 'success' ? (
            <div className="contact-success-state">
              <CheckCircle2 size={64} className="contact-success-icon" />
              <h2 className="contact-success-title">Message Sent!</h2>
              <p className="contact-success-text">
                Thank you for reaching out to Bondlyn. We have received your message and will respond as soon as possible.
              </p>
              <button className="btn-contact-reset" onClick={() => setSubmitStatus(null)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <h2>Send a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name <span className="req">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g. Jane Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="email">Email Address <span className="req">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. parent@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject <span className="req">*</span></label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="e.g. Speech Therapy Enquiry"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message <span className="req">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="How can we help your child today?"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                {submitStatus && submitStatus !== 'success' && (
                  <div className="contact-error-message">
                    <strong>Error:</strong> {submitStatus}
                  </div>
                )}

                <button type="submit" className="btn-contact-submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="spinner animate-spin" size={18} style={{ marginRight: '8px', display: 'inline-block' }} /> Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </>
          )}
        </motion.div>

      </div>
    </main>
  );
}
