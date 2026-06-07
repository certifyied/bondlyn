import React from 'react';
import SeoHeader from '../components/SeoHeader';

export default function PrivacyPolicy() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <SeoHeader title="Privacy Policy" description="Read Bondlyn's Privacy Policy." />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h1 style={{ marginBottom: '1.5rem', color: 'var(--text-dark)' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-dark)', opacity: 0.8, lineHeight: 1.8 }}>
          At Bondlyn Child Development Centre, we are committed to protecting the privacy and personal information of our clients and website visitors. This policy outlines how we collect, use, and safeguard your data.
        </p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>Information We Collect</h2>
        <p style={{ color: 'var(--text-dark)', opacity: 0.8, lineHeight: 1.8 }}>
          We may collect personal information such as your name, email address, phone number, and details about your child when you contact us or use our services.
        </p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>How We Use Your Information</h2>
        <p style={{ color: 'var(--text-dark)', opacity: 0.8, lineHeight: 1.8 }}>
          We use your information solely to provide and improve our services, communicate with you, and send relevant updates. We never sell your data to third parties.
        </p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>Cookies</h2>
        <p style={{ color: 'var(--text-dark)', opacity: 0.8, lineHeight: 1.8 }}>
          Our website uses cookies to enhance user experience. You may choose to accept or decline cookies via the consent banner shown on your first visit.
        </p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>Contact</h2>
        <p style={{ color: 'var(--text-dark)', opacity: 0.8, lineHeight: 1.8 }}>
          If you have any questions about this policy, please contact us at our centre.
        </p>
      </div>
    </div>
  );
}
