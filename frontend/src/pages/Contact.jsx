import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaClock, FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';
import { useToast } from '../hooks/use-toast';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Frontend validation
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      
      toast({
        title: 'Success!',
        description: 'Your message has been sent. We will contact you soon!',
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try calling us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: '+880 1518-336440',
      link: 'tel:+8801518336440',
      color: '#00bcd4'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      details: '+880 1518-336440',
      link: 'https://wa.me/8801518336440',
      color: '#25D366'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: 'bochonit@gmail.com',
      link: 'mailto:bochonit@gmail.com',
      color: '#ff6600'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: 'Tajmohol Road (Minar Mosque West Gate), Mohammadpur, Dhaka - 1212',
      link: null,
      color: '#00bcd4'
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-[#0f0f1e] to-[#1a1a2e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#00bcd4', fontFamily: 'Rajdhani' }}>
              Get In Touch
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Have a computer problem? Reach out to us and we'll get back to you right away!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1e1e3f] to-[#1a1a35] p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${info.color}20` }}
                  >
                    <info.icon className="text-3xl" style={{ color: info.color }} />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#00bcd4' }}>
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-gray-300">{info.details}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#00bcd4', fontFamily: 'Rajdhani' }}>
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1e1e3f] border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Phone <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1e1e3f] border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1e1e3f] border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Message <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-[#1e1e3f] border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="Describe your computer problem..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-lg btn-cyan font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaPaperPlane />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#00bcd4', fontFamily: 'Rajdhani' }}>
                  Visit Our Location
                </h2>
                <div className="rounded-xl overflow-hidden border border-cyan-500/30">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9080485831207!2d90.36346431543653!3d23.750877494585686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4c9c8f8b91%3A0x2b0c0c0f0f0f0f0f!2sMohammadpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Computer Clinic Location"
                  ></iframe>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <FaClock className="text-3xl text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#ff6600' }}>
                      Business Hours
                    </h3>
                    <p className="text-gray-300 mb-2">On-Call Service Available</p>
                    <p className="text-gray-400 text-sm">We provide home and office visit services at your convenience</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-500/30 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#00bcd4' }}>
                  Connect With Us
                </h3>
                <a
                  href="https://facebook.com/ComputerClinic24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <FaFacebook className="text-2xl" />
                  <span>Follow us on Facebook</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;