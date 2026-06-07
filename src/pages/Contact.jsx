import SeoHeader from '../components/SeoHeader';

export default function Contact() {
  return (
    <main>
      <SeoHeader title="Contact Us" description="Get in touch with us via our contact form." />
      <section>
        <h1>Contact Us</h1>
        <p>Please fill out the form below to reach out to us.</p>
        <form>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>Name:</label>
            <input type="text" id="name" name="name" style={{ width: '100%', padding: '0.5rem' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email:</label>
            <input type="email" id="email" name="email" style={{ width: '100%', padding: '0.5rem' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem' }}>Message:</label>
            <textarea id="message" name="message" rows="4" style={{ width: '100%', padding: '0.5rem' }}></textarea>
          </div>
          <button type="submit" style={{ padding: '0.5rem 1rem' }}>Submit</button>
        </form>
      </section>
    </main>
  );
}
