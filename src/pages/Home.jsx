import SeoHeader from '../components/SeoHeader';
import HeroSection from '../components/HeroSection';
import WhoWeAreSection from '../components/WhoWeAreSection';
import './Home.css';

export default function Home() {
  return (
    <main>
      <SeoHeader title="Home" description="Every Child Has Something Extraordinary Inside. We Help It Come Out." />
      <HeroSection />
      <WhoWeAreSection />
    </main>
  );
}
