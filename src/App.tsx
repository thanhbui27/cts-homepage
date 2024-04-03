import AboutUs from './components/AboutUs';
import { Banner } from './components/Banner';
import CollectionCard from './components/Card';
import CarouselCaseStudies from './components/CarouselCaseStudies';
import { Contact } from './components/Contact';
import CustomerSay from './components/CustomerSay';
import PartnerLogo from './components/PartnerLogo';
import Layout from './components/common/Layout';

function App() {
  return (
    <Layout>
      <Banner />
      <AboutUs />
      <CollectionCard />
      <CarouselCaseStudies />
      <PartnerLogo />
      <CustomerSay />
      <Contact />
    </Layout>
  );
}

export default App;
