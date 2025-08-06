
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-500 rounded-lg flex items-center justify-center">
              <i className="ri-global-line text-white text-xl"></i>
            </div>
            <span className="text-xl font-bold text-white">Go Online Bharat</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* WhatsApp Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/918604708453"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-all duration-300 cursor-pointer"
            >
              <i className="ri-whatsapp-line text-xl"></i>
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-600 to-green-600 text-white px-6 py-2 rounded-full hover:from-orange-700 hover:to-green-700 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Get Started
            </motion.button>
          </div>

          <button
            className="md:hidden text-white w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 bg-gray-900/95 rounded-lg p-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-gray-300 hover:text-white py-2 transition-colors duration-300 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-3 mt-4">
              <a
                href="https://wa.me/918604708453"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-all duration-300 cursor-pointer"
              >
                <i className="ri-whatsapp-line text-xl"></i>
              </a>
              <button className="flex-1 bg-gradient-to-r from-orange-600 to-green-600 text-white py-2 rounded-full hover:from-orange-700 hover:to-green-700 transition-all duration-300 whitespace-nowrap cursor-pointer">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918604708453"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer animate-bounce"
      >
        <i className="ri-whatsapp-line text-2xl"></i>
      </a>
    </header>
  );
}
