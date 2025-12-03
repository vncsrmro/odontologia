
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Treatments from './components/Treatments';
import Technology from './components/Technology';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Treatments />
      <Technology />
      <Testimonials />
      <Gallery />
      <Contact />
    </Layout>
  );
}

export default App;
