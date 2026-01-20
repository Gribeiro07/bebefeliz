import './App.css';
import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Benefits } from './sections/Benefits';
import { MethodFeatures } from './sections/MethodFeatures';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { Buy } from './sections/Buy';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-warm overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Benefits />
        <MethodFeatures />
        <Testimonials />
        <FAQ />
        <Buy />
      </main>
      <Footer />
    </div>
  );
}

export default App;
