import React, { useEffect, useRef, useState } from 'react';
import { useModal } from '../context/ModalContext';
import { X, Loader2, CheckCircle2, Lock } from 'lucide-react';
import './EnquiryModal.css';

const FOCUS_AREAS = [
  "Speech & Language",
  "Behaviour & Emotions",
  "Motor Skills",
  "Social Interaction",
  "General Development"
];

export default function EnquiryModal() {
  const { isOpen, closeModal } = useModal();
  const dialogRef = useRef(null);
  
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    focusArea: '',
    notes: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | error string

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
      // Lock scroll on background
      document.body.style.overflow = 'hidden';
    } else {
      try {
        dialog.close();
      } catch (e) {
        // Ignore if already closed
      }
      document.body.style.overflow = '';
      // Reset form status when closing
      setSubmitStatus(null);
    }
  }, [isOpen]);

  // Handle escape key or dialog's native close
  const handleClose = () => {
    closeModal();
  };

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
Lead Details (Enquiry Modal - Initial Screening):
- Parent Name: ${formData.parentName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Child's Name: ${formData.childName}
- Child's Age: ${formData.childAge || 'N/A'}
- Primary Focus Area: ${formData.focusArea || 'N/A'}
- Additional Notes: ${formData.notes || 'N/A'}

System Details:
- ${ipDetails}
      `.trim();

      const payload = {
        sender_name: formData.parentName,
        sender_email: formData.email,
        phone_number: formData.phone,
        subject: "Bondlyn Website - Initial Screening Enquiry",
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
        // Reset form inputs
        setFormData({
          parentName: '',
          email: '',
          phone: '',
          childName: '',
          childAge: '',
          focusArea: '',
          notes: ''
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

  // Fallback backdrop click close
  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.current) {
      closeModal();
    }
  };

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      onClick={handleBackdropClick}
      className="enquiry-dialog"
      aria-labelledby="dialog-title"
    >
      <div className="dialog-content">
        <button className="dialog-close-btn" onClick={closeModal} aria-label="Close dialog">
          <X size={24} />
        </button>

        {submitStatus === 'success' ? (
          <div className="modal-success-state">
            <CheckCircle2 size={64} className="modal-success-icon" />
            <h2 className="success-title">Enquiry Submitted!</h2>
            <p className="success-text">
              We have received your details for the Initial Screening. Our team will contact you shortly to schedule the session.
            </p>
            <button className="btn-modal-close" onClick={closeModal}>
              Close Window
            </button>
          </div>
        ) : (
          <>
            <div className="dialog-header">
              <div className="lock-badge">
                <Lock size={14} style={{ marginRight: '6px' }} /> Initial Screening Request
              </div>
              <h2 id="dialog-title" className="dialog-title">Book Your Initial Screening</h2>
              <p className="dialog-subtitle">
                Enter your details below, and our specialist therapists will contact you to arrange an initial developmental overview.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="dialog-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="parentName">Parent Name <span className="req">*</span></label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    placeholder="e.g. John Doe"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

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
                  <label htmlFor="phone">Phone Number <span className="req">*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="childName">Child's Name <span className="req">*</span></label>
                  <input
                    type="text"
                    id="childName"
                    name="childName"
                    placeholder="e.g. Ryan"
                    value={formData.childName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="childAge">Child's Age (Optional)</label>
                  <input
                    type="text"
                    id="childAge"
                    name="childAge"
                    placeholder="e.g. 4 years"
                    value={formData.childAge}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="focusArea">Area of Concern (Optional)</label>
                  <select
                    id="focusArea"
                    name="focusArea"
                    className="modal-select"
                    value={formData.focusArea}
                    onChange={handleInputChange}
                  >
                    <option value="">Select an area...</option>
                    {FOCUS_AREAS.map(area => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group full-width" style={{ marginTop: '0.5rem' }}>
                <label htmlFor="notes">Additional Information (Optional)</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  placeholder="Tell us a bit about your child or any questions you have..."
                  value={formData.notes}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              {submitStatus && submitStatus !== 'success' && (
                <div className="modal-error-message">
                  <strong>Error:</strong> {submitStatus}
                </div>
              )}

              <button type="submit" className="btn-modal-submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="spinner animate-spin" size={18} style={{ marginRight: '8px', display: 'inline-block' }} /> Submitting...
                  </>
                ) : (
                  'Book Initial Screening'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}
