import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Difference from '@/components/Difference';
import About from '@/components/About';
import MembersDirectory from '@/components/MembersDirectory';
import BusinessNetwork from '@/components/BusinessNetwork';
import Podcast from '@/components/Podcast';
import Events from '@/components/Events';
import KnowledgeHub from '@/components/KnowledgeHub';
import SocialImpact from '@/components/SocialImpact';
import Gallery from '@/components/Gallery';
import JoinUs from '@/components/JoinUs';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Difference />
      <About />
      <MembersDirectory />
      <BusinessNetwork />
      <Podcast />
      <Events />
      <KnowledgeHub />
      <SocialImpact />
      <Gallery />
      <JoinUs />
      <Footer />
    </main>
  );
}
