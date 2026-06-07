import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './BlogSection.css';

export default function BlogSection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://bloggfeature.certifyied.workers.dev/adminApiBlog/api/embed";
    script.async = true;
    // Prevent duplicate scripts if navigating back and forth
    if (!document.querySelector(`script[src="${script.src}"]`)) {
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="blog-section section-wrapper">
      <motion.div 
        className="blog-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h4 className="blog-prehead">LATEST RESOURCES</h4>
        <h2 className="blog-title">Insights for Your Journey</h2>
        <p className="blog-subtitle">
          Expert advice, success stories, and practical tips for parents.
        </p>
      </motion.div>

      {/* Embed Container for the 3x3 Grid */}
      <motion.div 
        id="certifyied-blog-container" 
        data-project-id="1b0fb173-fba8-46b7-9b7d-54b76de75d9f" 
        data-limit="9" 
        data-redirect-url="/blog"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      ></motion.div>
    </section>
  );
}
