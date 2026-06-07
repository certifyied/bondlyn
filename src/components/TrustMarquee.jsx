import React from 'react';
import { CheckCircle } from 'lucide-react';
import './TrustMarquee.css';

const trustItems = [
  "ISO 9001:2015 Certified",
  "RCI Registered Professionals",
  "Certified Autism Specialists",
  "Licensed Clinical Psychologists",
  "Evidence-Based Practices",
  "AIOTA Registered Members",
  "100% Verified Child Experts",
  "Pediatric Therapy Certified",
  "Safe & Audited Environments"
];

export default function TrustMarquee() {
  return (
    <div className="trust-marquee-wrapper">
      <div className="trust-marquee-track">
        <div className="trust-marquee-content">
          {trustItems.map((item, index) => (
            <span key={`a-${index}`} className="trust-item">
              <CheckCircle size={16} className="trust-icon" /> {item}
            </span>
          ))}
        </div>
        <div className="trust-marquee-content">
          {trustItems.map((item, index) => (
            <span key={`b-${index}`} className="trust-item">
              <CheckCircle size={16} className="trust-icon" /> {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
