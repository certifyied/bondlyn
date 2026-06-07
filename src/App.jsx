import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import CtaBlock from './components/CtaBlock';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Nav />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <CtaBlock />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
