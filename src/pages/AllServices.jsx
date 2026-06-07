import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SeoHeader from '../components/SeoHeader';
import { servicesData } from '../data/services';
import './AllServices.css';

export default function AllServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="all-services-page">
      <SeoHeader 
        title="All Services | Bondlyn" 
        description="Explore all the professional therapy services we offer to support your child's development." 
      />
      
      <section className="section-wrapper all-services-header">
        <h4 className="services-prehead fade-up">OUR THERAPIES</h4>
        <h1 className="all-services-title fade-up" style={{ animationDelay: '0.1s' }}>Made for Your Child</h1>
        <p className="all-services-subtitle fade-up" style={{ animationDelay: '0.2s' }}>
          Explore our comprehensive range of evidence-based therapies designed to help your child thrive.
        </p>
      </section>

      <section className="section-wrapper">
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <Link 
              to={`/service/${service.slug}`} 
              key={service.id} 
              className="service-card grid-card fade-up" 
              style={{ 
                backgroundColor: service.color,
                animationDelay: `${0.1 * (index % 6)}s`
              }}
            >
              <div className="service-card-bg-shape">
                {service.shape === 'circle' && <div className="shape-circle"></div>}
                {service.shape === 'square' && <div className="shape-square"></div>}
                {service.shape === 'triangle' && <div className="shape-triangle"></div>}
                {service.shape === 'hexagon' && <div className="shape-hexagon"></div>}
                {service.shape === 'star' && <div className="shape-star"></div>}
              </div>
              <div className="service-card-content">
                <div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-subtitle">{service.subtitle}</p>
                </div>
                <div className="service-card-footer">
                  <span className="read-more">Read more &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
