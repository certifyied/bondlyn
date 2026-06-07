import React, { useEffect } from 'react';
import SeoHeader from '../components/SeoHeader';

export default function BlogPage() {
  useEffect(() => {
    // The Certifyied widget uses the URL to determine if it should render a single post or grid.
    // Ensure the external script is loaded.
    const script = document.createElement('script');
    script.src = "https://bloggfeature.certifyied.workers.dev/adminApiBlog/api/embed";
    script.async = true;
    if (!document.querySelector(`script[src="${script.src}"]`)) {
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
      <SeoHeader 
        title="Blog & Resources" 
        description="Read the latest insights and guides on pediatric therapy from the Bondlyn team." 
      />
      
      <div className="section-wrapper" style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        {/* Container where the single blog post or full archive will load dynamically based on URL */}
        <div id="certifyied-blog-post" data-project-id="1b0fb173-fba8-46b7-9b7d-54b76de75d9f"></div>
      </div>
    </div>
  );
}
