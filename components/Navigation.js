import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Navigation */}
      <nav className="bg-pluracure-bg shadow-lg fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-pluracure-primary">
                PLURACURE&trade;
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {/* Our Focus Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-pluracure-primary px-3 py-2 group-hover:text-pluracure-primary">
                  Our Focus
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    <div className="px-4 py-2">
                      <span className="font-semibold text-sm">IBD</span>
                      <a href="/treatments/ibd/nutrition-supplements" className="block pl-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Nutrition Supplements</a>
                      <a href="/treatments/ibd/biologics" className="block pl-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Anti-TNF Drugs</a>
                      <a href="/treatments/ibd/cell-therapy" className="block pl-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Cell-based Therapies</a>
                    </div>
                    <div className="px-4 py-2">
                      <span className="font-semibold text-sm">Arthritis</span>
                      <a href="/treatments/arthritis/dmards" className="block pl-4 py-1 text-sm text-gray-700 hover:bg-gray-100">DMARDs</a>
                    </div>
                    <div className="px-4 py-2">
                      <span className="font-semibold text-sm">Eczema</span>
                      <a href="/treatments/eczema/dupilumab" className="block pl-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Dupilumab</a>
                    </div>
                    <div className="px-4 py-2">
                      <span className="font-semibold text-sm">Cancer</span>
                      <a href="/treatments/cancer/pembrolizumab" className="block pl-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Pembrolizumab</a>
                      <a href="/treatments/cancer/ipilimumab" className="block pl-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Ipilimumab</a>
                    </div>
                    <div className="px-4 py-2">
                      <span className="font-semibold text-sm">Schizophrenia</span>
                      <a href="/treatments/schizophrenia/risperidone" className="block pl-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Risperidone</a>
                    </div>
                    <div className="px-4 py-2">
                      <span className="font-semibold text-sm">Diabetes</span>
                      <a href="/treatments/diabetes/semaglutide" className="block pl-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Semaglutide</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Science Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-pluracure-primary px-3 py-2 group-hover:text-pluracure-primary">
                  Science
                </button>
                <div className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    <a href="/purpose" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Purpose</a>
                    <a href="/approach" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Approach</a>
                    <a href="/publications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Research</a>
                    <a href="/story" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Story</a>
                  </div>
                </div>
              </div>

              {/* Who We Serve Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-pluracure-primary px-3 py-2 group-hover:text-pluracure-primary">
                  Who We Serve
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <a href="/customers#patients" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Patients</a>
                  <a href="/customers#academia" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Academia</a>
                  <a href="/customers#pharma-biotech" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pharma/Biotech</a>
                  <a href="/customers#clinical-labs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Clinical Laboratories</a>
                  <a href="/customers#healthcare" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Healthcare Professionals</a>
                  <a href="/customers#cro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contract Research Organizations</a>
                </div>
              </div>

              {/* Company Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-pluracure-primary px-3 py-2 group-hover:text-pluracure-primary">
                  Company
                </button>
                <div className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    {/* Leadership */}
                    <div className="px-4 py-2">
                      <span className="font-semibold text-sm">Team</span>
                      <a href="/company#leadership" className="block pl-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Leadership</a>
                      <a href="/company#board-of-directors" className="block pl-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Board of Directors</a>
                      <a href="/company#scientific-advisory-board" className="block pl-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Scientific Advisory Boards</a>
                    </div>

                    {/* Investor Relations */}
                    <div className="px-4 py-2">
                      <span className="font-semibold text-sm">Investor Relations</span>
                      <a href="/investors#info" className="block pl-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Company Info</a>
                      <a href="/investors#financials" className="block pl-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Financials</a>
                      <a href="/investors#opportunity" className="block pl-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Investment Opportunity</a>
                      <a href="/investors#events" className="block pl-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Events</a>
                    </div>

                    <a href="/partners" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Partners & Collaborations</a>
                    <a href="/compliance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Compliance & Ethics</a>
                    <a href="/giving" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Corporate Giving</a>
                  </div>
                </div>
              </div>

              {/* News Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-pluracure-primary px-3 py-2 group-hover:text-pluracure-primary">
                  News
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <a href="/news/announcements" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Announcements</a>
                  <a href="/news/awards" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Awards</a>
                  <a href="/news/media" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Media Alerts</a>
                  <a href="/news/press" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Press Coverage</a>
                </div>
              </div>

              {/* Careers */}
              <a href="/careers" className="text-gray-700 hover:text-pluracure-primary px-3 py-2">
                Careers
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-pluracure-primary focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`fixed inset-0 bg-gray-900 bg-opacity-95 z-40 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Close button */}
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 text-white hover:text-pluracure-primary"
        >
          <span className="sr-only">Close menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="container mx-auto px-4 py-8">
          {/* Our Focus */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-white">Our Focus</h3>
            <ul className="space-y-4">
              <li><Link href="/focus/ibd" className="text-white hover:text-pluracure-primary transition" onClick={closeMenu}>Inflammatory Bowel Disease</Link></li>
              <li><Link href="/focus/arthritis" className="text-white hover:text-pluracure-primary transition" onClick={closeMenu}>Arthritis</Link></li>
              <li><Link href="/focus/eczema" className="text-white hover:text-pluracure-primary transition" onClick={closeMenu}>Eczema</Link></li>
              <li><Link href="/focus/cancer" className="text-white hover:text-pluracure-primary transition" onClick={closeMenu}>Cancer</Link></li>
              <li><Link href="/focus/schizophrenia" className="text-white hover:text-pluracure-primary transition" onClick={closeMenu}>Schizophrenia</Link></li>
              <li><Link href="/focus/diabetes" className="text-white hover:text-pluracure-primary transition" onClick={closeMenu}>Diabetes</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/purpose" className="text-white hover:text-pluracure-primary transition" onClick={closeMenu}>Purpose</Link></li>
              <li><Link href="/approach" className="text-white hover:text-pluracure-primary transition" onClick={closeMenu}>Approach</Link></li>
              <li><Link href="/our-story" className="text-white hover:text-pluracure-primary transition" onClick={closeMenu}>Our Story</Link></li>
              <li><Link href="/leadership" className="text-white hover:text-pluracure-primary transition" onClick={closeMenu}>Leadership</Link></li>
              <li><Link href="/careers" className="text-white hover:text-pluracure-primary transition" onClick={closeMenu}>Careers</Link></li>
              <li><Link href="/news" className="text-white hover:text-pluracure-primary transition" onClick={closeMenu}>News</Link></li>
              <li><Link href="/investors" className="text-white hover:text-pluracure-primary transition" onClick={closeMenu}>Investor Relations</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/patients" className="text-white hover:text-pluracure-primary transition" onClick={closeMenu}>Patients</Link></li>
              <li><Link href="/contact" className="text-white hover:text-pluracure-primary transition" onClick={closeMenu}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Connect With Us</h3>
            <a 
              href="https://linkedin.com/company/pluracure" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-3xl text-white hover:text-pluracure-primary transition-colors duration-300"
              aria-label="LinkedIn"
              onClick={closeMenu}
            >
              <FontAwesomeIcon 
                icon={faLinkedin} 
                className="w-8 h-8" 
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
} 