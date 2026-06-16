import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SeoHeader from '../components/SeoHeader';
import { servicesData } from '../data/services';
import { useModal } from '../context/ModalContext';
import './ServiceDetail.css';

export default function ServiceDetail() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const { openModal } = useModal();

  useEffect(() => {
    // Find the service based on the URL slug
    const foundService = servicesData.find(s => s.slug === slug);
    setService(foundService);
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <main className="service-detail-error">
        <div className="section-wrapper">
          <h2>Service not found</h2>
          <Link to="/">Return Home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="service-detail-page">
      <SeoHeader 
        title={`${service.title} | Bondlyn`} 
        description={service.description} 
      />
      
      {/* Hero Banner for Service */}
      <section className="service-detail-hero" style={{ backgroundColor: service.color }}>
        <div className="section-wrapper">
          <h1 className="service-detail-title fade-up">{service.title}</h1>
          <h2 className="service-detail-subtitle fade-up" style={{ animationDelay: '0.1s' }}>{service.subtitle}</h2>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-wrapper section-split service-detail-content">
        <div className="section-content">
          <h3>Overview</h3>
          <p className="service-description">{service.description}</p>
          <p className="service-placeholder">
            More detailed information about this therapy will be updated here. We work with each family to tailor this service perfectly to your child's needs.
          </p>
          <div className="service-actions">
            <button className="btn-primary" onClick={openModal}>Book Free Screening</button>
            <Link to="/" className="btn-secondary">Back to Home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
