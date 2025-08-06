
'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Web Development', href: '/services' },
      { name: 'E-commerce Solutions', href: '/services' },
      { name: 'Mobile Apps', href: '/services' },
      { name: 'Digital Marketing', href: '/services' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Support', href: '/support' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800 relative">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-500 rounded-lg flex items-center justify-center">
                <i className="ri-global-line text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold text-white">Go Online Bharat</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              We empower Indian businesses with affordable, modern, and scalable digital solutions. 
              Made in India for Indian businesses.
            </p>
            <div className="mb-6">
              <div className="flex items-center text-gray-400 mb-2">
                <i className="ri-phone-line w-5 h-5 flex items-center justify-center mr-3"></i>
                <a href="tel:+918604708453" className="hover:text-white transition-colors cursor-pointer">+91-8604708453</a>
              </div>
              <div className="flex items-center text-gray-400 mb-2">
                <i className="ri-mail-line w-5 h-5 flex items-center justify-center mr-3"></i>
                <a href="mailto:info@gonlinebharat.com" className="hover:text-white transition-colors cursor-pointer">info@gonlinebharat.com</a>
              </div>
              <div className="flex items-center text-gray-400">
                <i className="ri-time-line w-5 h-5 flex items-center justify-center mr-3"></i>
                <span>Mon–Sat | 10 AM – 7 PM</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/gonlinebharat" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-pink-500 rounded-full transition-all duration-300 cursor-pointer">
                <i className="ri-instagram-line text-white"></i>
              </a>
              <a href="https://www.linkedin.com/company/gonlinebharat" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-blue-600 rounded-full transition-all duration-300 cursor-pointer">
                <i className="ri-linkedin-fill text-white"></i>
              </a>
              <a href="https://wa.me/918604708453" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-green-500 rounded-full transition-all duration-300 cursor-pointer">
                <i className="ri-whatsapp-line text-white"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Go Online Bharat. All rights reserved. Made in India 🇮🇳
            </p>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300 cursor-pointer">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300 cursor-pointer">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
