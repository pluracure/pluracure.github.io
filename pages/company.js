import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Company() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  // Example data structure for team members
  const leadership = [
    {
      name: "Suriyaa Rocky Sundararuban",
      title: "Founder & Chief Executive Officer",
      image: "/assets/images/team/suriyaa-sundararuban.jpg",
      linkedin: "https://www.linkedin.com/in/suriyaasundararuban/"
    },
    // Add more team members here
  ];

  const boardOfDirectors = [
    // Add more board members here
  ];

  const scientificAdvisors = [
    // Add more advisors here
  ];

  return (
    <>
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-pluracure-bg py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-center text-pluracure-primary mb-8">
              Our Company
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto text-gray-700">
              Pioneering novel medicines through computational biology and experimental investigation
            </p>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">Leadership</h2>
            <p className="text-xl text-center max-w-3xl mx-auto mb-16 text-gray-700">
              Our diverse team combines computational biology and experimental investigation with deep expertise at the intersection of these fields.
            </p>

            {/* Leadership Team Gallery */}
            <div id="leadership" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-24">
              {leadership.map((member, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center" 
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                >
                  <div className="relative w-64 h-64 mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-center">{member.name}</h3>
                  <p className="text-lg text-gray-600 mb-4 text-center">{member.title}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pluracure-primary hover:text-pluracure-primary-dark transition-colors duration-300"
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                  </a>
                </div>
              ))}
            </div>

            {/* Board of Directors */}
            <h2 id="board-of-directors" className="text-4xl font-bold text-center mb-16">Board of Directors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-24">
              {boardOfDirectors.map((member, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center" 
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                >
                  <div className="relative w-64 h-64 mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-center">{member.name}</h3>
                  <p className="text-lg text-gray-600 mb-4 text-center">{member.title}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pluracure-primary hover:text-pluracure-primary-dark transition-colors duration-300"
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                  </a>
                </div>
              ))}
            </div>

            {/* Scientific Advisory Board */}
            <h2 id="scientific-advisory-board" className="text-4xl font-bold text-center mb-16">Scientific Advisory Board</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {scientificAdvisors.map((member, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center" 
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                >
                  <div className="relative w-64 h-64 mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-center">{member.name}</h3>
                  <p className="text-lg text-gray-600 mb-4 text-center">{member.title}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pluracure-primary hover:text-pluracure-primary-dark transition-colors duration-300"
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
} 