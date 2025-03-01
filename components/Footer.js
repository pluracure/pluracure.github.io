import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Our Focus */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Focus</h3>
            <ul className="space-y-2">
              <li><Link href="/treatments/ibd" className="hover:text-pluracure-primary transition">Inflammatory Bowel Disease</Link></li>
              <li><Link href="/treatments/arthritis" className="hover:text-pluracure-primary transition">Arthritis</Link></li>
              <li><Link href="/treatments/eczema" className="hover:text-pluracure-primary transition">Eczema</Link></li>
              <li><Link href="/treatments/cancer" className="hover:text-pluracure-primary transition">Cancer</Link></li>
              <li><Link href="/treatments/schizophrenia" className="hover:text-pluracure-primary transition">Schizophrenia</Link></li>
              <li><Link href="/treatments/diabetes" className="hover:text-pluracure-primary transition">Diabetes</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/purpose" className="hover:text-pluracure-primary transition">Our Purpose</Link></li>
              <li><Link href="/approach" className="hover:text-pluracure-primary transition">Our Approach</Link></li>
              <li><Link href="/story" className="hover:text-pluracure-primary transition">Our Story</Link></li>
              <li><Link href="/company#leadership" className="hover:text-pluracure-primary transition">Leadership</Link></li>
              <li><Link href="/careers" className="hover:text-pluracure-primary transition">Careers</Link></li>
              <li><Link href="/news" className="hover:text-pluracure-primary transition">News</Link></li>
              <li><Link href="/investors" className="hover:text-pluracure-primary transition">Investor Relations</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
                <li><Link href="/customers#patients" className="hover:text-pluracure-primary transition">Patients</Link></li>
                <li><Link href="/customers#healthcare-professionals" className="hover:text-pluracure-primary transition">Healthcare Professionals</Link></li>
                <li><Link href="/customers#pharma-biotech" className="hover:text-pluracure-primary transition">Pharma/Biotech</Link></li>
                <li><Link href="/contact" className="hover:text-pluracure-primary transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <a 
              href="https://linkedin.com/company/pluracure" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-3xl hover:text-pluracure-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon 
                icon={faLinkedin} 
                className="w-8 h-8" 
              />
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              <Link href="/privacy" className="hover:text-pluracure-primary transition">Privacy Notice</Link>
              <Link href="/terms" className="hover:text-pluracure-primary transition">Terms of Use</Link>
              <Link href="/imprint" className="hover:text-pluracure-primary transition">Legal Notice</Link>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © 2025 PLURACURE&trade; All Rights Reserved. PLURACURE&trade; logo are trademarks owned by PLURACURE&trade;.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 