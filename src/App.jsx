import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Nav from './components/Nav';
import Footer, { CookieBanner } from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import AllServices from './pages/AllServices';
import BlogPage from './pages/BlogPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import CtaBlock from './components/CtaBlock';
import { ModalProvider } from './context/ModalContext';
import EnquiryModal from './components/EnquiryModal';

function App() {
  return (
    <HelmetProvider>
      <ModalProvider>
        <Router>
          <EnquiryModal />
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Nav />
            <div style={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<AllServices />} />
                <Route path="/service/:slug" element={<ServiceDetail />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/*" element={<BlogPage />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
              </Routes>
            </div>
            <CtaBlock />
            <Footer />
            <CookieBanner />
          </div>
        </Router>
      </ModalProvider>
    </HelmetProvider>
  );
}

export default App;
