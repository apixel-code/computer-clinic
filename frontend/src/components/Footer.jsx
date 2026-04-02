import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <footer className="bg-[#0f0f1e] border-t border-cyan-500/20 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                <span className="text-2xl font-bold" style={{ color: '#1a1a2e' }}>CC</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold" style={{ color: '#00bcd4', fontFamily: 'Rajdhani' }}>Computer Clinic</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              ব্যস্ততা হোক আনন্দময়; আমরা আছি সবসময়!
            </p>
            <p className="text-sm text-gray-500">
              Your trusted computer repair and IT service provider since 2016.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6" style={{ color: '#00bcd4' }}>Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6" style={{ color: '#00bcd4' }}>Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <FaPhone className="text-orange-500 mt-1 flex-shrink-0" />
                <a href="tel:+8801518336440" className="hover:text-cyan-400 transition-colors">
                  +880 1518-336440
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <FaWhatsapp className="text-orange-500 mt-1 flex-shrink-0 text-lg" />
                <a href="https://wa.me/8801518336440" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <FaEnvelope className="text-orange-500 mt-1 flex-shrink-0" />
                <a href="mailto:bochonit@gmail.com" className="hover:text-cyan-400 transition-colors">
                  bochonit@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <FaMapMarkerAlt className="text-orange-500 mt-1 flex-shrink-0" />
                <span>Tajmohol Road, Mohammadpur, Dhaka - 1212</span>
              </li>
            </ul>
          </motion.div>

          {/* Social & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6" style={{ color: '#00bcd4' }}>Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://facebook.com/ComputerClinic24"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center hover:bg-cyan-500 hover:scale-110 transition-all duration-300 group"
              >
                <FaFacebook className="text-xl text-cyan-400 group-hover:text-white" />
              </a>
            </div>
            <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2" style={{ color: '#ff6600' }}>Business Hours</h4>
              <p className="text-sm text-gray-400">On-Call Service Available</p>
              <p className="text-sm text-gray-400">We come to you!</p>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-cyan-500/20 mt-12 pt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            © 2016–2025 Computer Clinic. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Trusted Computer Repair & IT Services in Dhaka, Bangladesh
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;