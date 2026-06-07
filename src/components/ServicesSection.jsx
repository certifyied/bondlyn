import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { motion } from 'framer-motion';
import './ServicesSection.css';

export default function ServicesSection() {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const [hasViewed, setHasViewed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasViewed) {
          setHasViewed(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [hasViewed]);

  return (
    <section className="services-section" ref={containerRef}>
      <div className="section-wrapper services-header-wrapper">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h4 className="services-prehead">WHAT WE DO</h4>
          <h2 className="services-title">Therapies That Actually Work Because They're Made for Your Child</h2>
        </motion.div>
      </div>
      
      <div className={`services-carousel-container ${hasViewed ? 'hint-scroll-anim' : ''}`}>
        <div className="services-carousel" ref={scrollRef}>
            {servicesData.map((service) => (
              <Link to={`/service/${service.slug}`} key={service.id} className="service-card" style={{ backgroundColor: service.color }}>
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
      </div>
      
      <div className="services-cta-container">
        <Link to="/services" className="btn-view-all">View All Services</Link>
      </div>
    </section>
  );
}
