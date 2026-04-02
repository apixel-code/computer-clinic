import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 navbar ${scrolled ? 'scrolled' : ''}`}
      style={{
        backgroundColor: scrolled ? 'rgba(26, 26, 46, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
              <span className="text-2xl font-bold" style={{ color: '#1a1a2e' }}>CC</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold" style={{ color: '#00bcd4', fontFamily: 'Rajdhani' }}>Computer Clinic</span>
              <span className="text-xs" style={{ color: '#ff6600' }}>Since 2016</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                style={{
                  color: location.pathname === link.path ? '#00bcd4' : '#ffffff',
                }}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-cyan-400"
                    style={{ bottom: '-8px' }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Call Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+8801518336440"
              className="flex items-center space-x-2 px-6 py-3 rounded-lg btn-cyan font-semibold"
            >
              <FaPhone className="text-sm" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white text-2xl focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-[#1a1a2e] border-t border-cyan-500/20"
        >
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white hover:text-cyan-400 transition-colors duration-300 py-2 font-medium"
                style={{
                  color: location.pathname === link.path ? '#00bcd4' : '#ffffff',
                }}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+8801518336440"
              className="flex items-center justify-center space-x-2 px-6 py-3 rounded-lg btn-cyan font-semibold w-full"
            >
              <FaPhone className="text-sm" />
              <span>Call Now</span>
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;