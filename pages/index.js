import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navigation />
      
      <main className="pt-20">
        {/* 1. Hero Section - First impression and main value proposition */}
        <section className="relative h-screen flex items-center">
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/assets/videos/hero-background.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 
              className="text-5xl md:text-7xl font-bold text-pluracure-primary mb-6 tracking-wider"
              data-aos="fade-up"
            >
              PLURACURE&trade;
            </h1>
            <p 
              className="text-2xl md:text-3xl font-bold text-pluracure-primary mb-6 max-w-3xl mx-auto"
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              Science for a Healthier Tomorrow
            </p>
            <p 
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-4xl mx-auto"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              Developing groundbreaking therapies for non-curable chronic (autoimmune) diseases.
              <br/><br/>
              We are passionate about transforming lives by pushing the boundaries of immunomedicine.
            </p>
            <br/><br/>
            <a 
                className="bg-pluracure-primary text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pluracure-primary focus:ring-opacity-50"
                data-aos="fade-up" 
                data-aos-delay="300"
                href="/waitlist"
              >
                Get on the Waiting List
              </a>
          </div>
        </section>

        {/* 2. Why Choose PLURACURE? - Immediately build trust and show value */}
        <section className="py-16 md:py-24 bg-pluracure-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 
                className="text-3xl md:text-5xl font-bold mb-8 text-pluracure-primary"
                data-aos="fade-up"
              >
                Why Choose PLURACURE&trade;?
              </h2>
              <p 
                className="text-lg md:text-2xl text-gray-700 leading-relaxed mb-12"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Leading the way in innovative therapeutic solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Innovation */}
              <div 
                className="bg-white rounded-lg shadow-lg p-8"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="text-2xl font-semibold mb-4 text-pluracure-primary">
                  Cutting-edge Innovation
                </h3>
                <p className="text-gray-700">
                  Our advanced computational biology platform combines artificial intelligence with experimental validation to discover novel therapeutic approaches.
                </p>
              </div>

              {/* Patient-Centric */}
              <div 
                className="bg-white rounded-lg shadow-lg p-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="text-2xl font-semibold mb-4 text-pluracure-primary">
                  Patient-Centric Approach
                </h3>
                <p className="text-gray-700">
                  We prioritize patient outcomes by developing targeted therapies that address the root causes of chronic and autoimmune diseases.
                </p>
              </div>

              {/* Scientific Excellence */}
              <div 
                className="bg-white rounded-lg shadow-lg p-8"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-pluracure-primary">
                  Scientific Excellence
                </h3>
                <p className="text-gray-700">
                  Our world-class team of scientists and researchers brings decades of experience in drug discovery and development.
                </p>
              </div>

              {/* Global Impact */}
              <div 
                className="bg-white rounded-lg shadow-lg p-8"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3 className="text-2xl font-semibold mb-4 text-pluracure-primary">
                  Global Impact
                </h3>
                <p className="text-gray-700">
                  We're committed to making our innovative treatments accessible to patients worldwide, transforming lives across borders.
                </p>
              </div>

              {/* Collaborative Research */}
              <div 
                className="bg-white rounded-lg shadow-lg p-8"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <h3 className="text-2xl font-semibold mb-4 text-pluracure-primary">
                  Collaborative Research
                </h3>
                <p className="text-gray-700">
                  We partner with leading academic institutions and biotech companies to accelerate the development of breakthrough therapies.
                </p>
              </div>

              {/* Sustainable Development */}
              <div 
                className="bg-white rounded-lg shadow-lg p-8"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <h3 className="text-2xl font-semibold mb-4 text-pluracure-primary">
                  Sustainable Development
                </h3>
                <p className="text-gray-700">
                  Our commitment to sustainable practices ensures we develop treatments that are both effective and environmentally responsible.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div 
              className="text-center mt-16"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <a 
                href="/purpose"
                className="inline-block bg-pluracure-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Learn More About Our Mission
              </a>
            </div>
          </div>
        </section>

        {/* 3. Our Focus Areas - Show expertise and relevance */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 
                className="text-3xl md:text-5xl font-bold mb-8 text-pluracure-primary"
                data-aos="fade-up"
              >
                Our Focus Areas
              </h2>
              <p 
                className="text-lg md:text-2xl text-gray-700 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Targeting critical areas of medical need with innovative solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* IBD */}
              <div 
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="text-2xl font-semibold mb-4 text-pluracure-primary">Inflammatory Bowel Disease</h3>
                <ul className="space-y-3">
                  <li className="hover:text-pluracure-primary transition-colors">
                    <a href="/treatments/ibd/supplements">Nutrition Supplements</a>
                  </li>
                  <li className="hover:text-pluracure-primary transition-colors">
                    <a href="/treatments/ibd/biologics">Anti-TNF Drugs</a>
                  </li>
                  <li className="hover:text-pluracure-primary transition-colors">
                    <a href="/treatments/ibd/cell-therapy">Cell-based Therapies</a>
                  </li>
                </ul>
              </div>

              {/* Arthritis */}
              <div 
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="text-2xl font-semibold mb-4 text-pluracure-primary">Arthritis</h3>
                <ul className="space-y-3">
                  <li className="hover:text-pluracure-primary transition-colors">
                    <a href="/treatments/arthritis/dmards">DMARDs</a>
                  </li>
                </ul>
              </div>

              {/* Eczema */}
              <div 
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-pluracure-primary">Eczema</h3>
                <ul className="space-y-3">
                  <li className="hover:text-pluracure-primary transition-colors">
                    <a href="/treatments/eczema/dupilumab">Dupilumab</a>
                  </li>
                </ul>
              </div>

              {/* Cancer */}
              <div 
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3 className="text-2xl font-semibold mb-4 text-pluracure-primary">Cancer</h3>
                <ul className="space-y-3">
                  <li className="hover:text-pluracure-primary transition-colors">
                    <a href="/treatments/cancer/pembrolizumab">Pembrolizumab</a>
                  </li>
                  <li className="hover:text-pluracure-primary transition-colors">
                    <a href="/treatments/cancer/ipilimumab">Ipilimumab</a>
                  </li>
                </ul>
              </div>

              {/* Schizophrenia */}
              <div 
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <h3 className="text-2xl font-semibold mb-4 text-pluracure-primary">Schizophrenia</h3>
                <ul className="space-y-3">
                  <li className="hover:text-pluracure-primary transition-colors">
                    <a href="/treatments/schizophrenia/risperidone">Risperidone</a>
                  </li>
                </ul>
              </div>

              {/* Diabetes */}
              <div 
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <h3 className="text-2xl font-semibold mb-4 text-pluracure-primary">Diabetes</h3>
                <ul className="space-y-3">
                  <li className="hover:text-pluracure-primary transition-colors">
                    <a href="/treatments/diabetes/semaglutide">Semaglutide</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Science - Demonstrate credibility */}
        <section className="py-16 md:py-24 bg-pluracure-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 
                className="text-3xl md:text-5xl font-bold mb-8 text-pluracure-primary"
                data-aos="fade-up"
              >
                Pioneering Scientific Innovation
              </h2>
              <p 
                className="text-lg md:text-2xl text-gray-700 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Discovering novel medicines in the global scientific ecosystem and bringing them to patients through our advanced computational biology platform and rigorous experimental validation.
              </p>
              <div 
                className="mt-12"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <a 
                  href="/publications"
                  className="inline-block bg-pluracure-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
                >
                  Explore Our Research
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Leadership - Build further trust with human element */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 
                className="text-3xl md:text-5xl font-bold mb-8 text-pluracure-primary"
                data-aos="fade-up"
              >
                World-Class Leadership Team
              </h2>
              <p 
                className="text-lg md:text-2xl text-gray-700 leading-relaxed mb-12"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                We are drug hunters, data scientists, biologists, chemists, and engineers united by a conviction that leveraging evolved medicines will improve outcomes for patients.
              </p>
              <div 
                className="mt-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <a 
                  href="/company#leadership"
                  className="inline-block bg-pluracure-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
                >
                  Meet Our Team
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Final Call to Action - Drive conversion */}
        <section className="py-16 md:py-24 bg-pluracure-bg">
          <div className="container mx-auto px-4 text-center">
            <h2 
              className="text-3xl md:text-5xl font-bold mb-8 text-pluracure-primary"
              data-aos="fade-up"
            >
              Join Us in Transforming Healthcare
            </h2>
            <p 
              className="text-lg md:text-2xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Be part of our journey to develop groundbreaking therapies for chronic and autoimmune diseases.
            </p>
            
            <div 
              className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 max-w-4xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Patient Registration Button */}
              <a 
                href="/waitlist"
                className="w-full md:w-auto bg-pluracure-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pluracure-primary focus:ring-opacity-50"
              >
                Join the Waiting List
              </a>

              {/* Careers Button */}
              <a 
                href="/careers"
                className="w-full md:w-auto bg-white text-pluracure-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pluracure-primary focus:ring-opacity-50 border-2 border-pluracure-primary"
              >
                Join Our Team
              </a>

              {/* Investors Button */}
              <a 
                href="/investors#opportunity"
                className="w-full md:w-auto bg-white text-pluracure-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pluracure-primary focus:ring-opacity-50 border-2 border-pluracure-primary"
              >
                Invest in PLURACURE
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
} 