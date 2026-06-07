export default function Footer() {
  return (
    <footer style={{ padding: '1rem', borderTop: '1px solid #ccc', marginTop: '2rem' }}>
      <p>&copy; {new Date().getFullYear()} Our App. All rights reserved.</p>
    </footer>
  );
}
