import React from 'react';
import SeoHeader from '../components/SeoHeader';

export default function Terms() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <SeoHeader title="Terms & Conditions" description="Read Bondlyn's Terms and Conditions." />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h1 style={{ marginBottom: '1.5rem', color: 'var(--text-dark)' }}>Terms &amp; Conditions</h1>
        <p style={{ color: 'var(--text-dark)', opacity: 0.8, lineHeight: 1.8 }}>
          By accessing and using the Bondlyn Child Development Centre website, you agree to the following terms and conditions. Please read them carefully.
        </p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>Use of Services</h2>
        <p style={{ color: 'var(--text-dark)', opacity: 0.8, lineHeight: 1.8 }}>
          Our services are intended to support the development and wellbeing of children. All information provided on this site is for general purposes only and does not constitute medical or therapeutic advice.
        </p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>Appointments & Cancellations</h2>
        <p style={{ color: 'var(--text-dark)', opacity: 0.8, lineHeight: 1.8 }}>
          Appointments must be cancelled with at least 24 hours notice. Late cancellations may be subject to a fee. Bondlyn reserves the right to modify or cancel appointments where necessary.
        </p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>Intellectual Property</h2>
        <p style={{ color: 'var(--text-dark)', opacity: 0.8, lineHeight: 1.8 }}>
          All content on this website including text, images, and logos is the property of Bondlyn Child Development Centre and may not be reproduced without permission.
        </p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>Contact</h2>
        <p style={{ color: 'var(--text-dark)', opacity: 0.8, lineHeight: 1.8 }}>
          For queries about these terms, please reach out to us via our Contact page.
        </p>
      </div>
    </div>
  );
}
