import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhone, FaWhatsapp, FaLaptop, FaWindows, FaTools, FaVirus, FaHdd, FaPrint, FaNetworkWired, FaStar, FaCheckCircle } from 'react-icons/fa';

const Home = () => {
  const [counters, setCounters] = useState({
    years: 0,
    reviews: 0,
    recommendation: 0,
  });

  // Counter animation
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      years: 9,
      reviews: 6,
      recommendation: 100,
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        years: Math.floor(targets.years * progress),
        reviews: Math.floor(targets.reviews * progress),
        recommendation: Math.floor(targets.recommendation * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const services = [
    { icon: FaLaptop, title: 'Computer Setup', description: 'Full PC/laptop setup and configuration' },
    { icon: FaWindows, title: 'Windows Install', description: 'Fresh OS installation and activation' },
    { icon: FaTools, title: 'Soft Problem Fix', description: 'Software troubleshooting and repair' },
    { icon: FaVirus, title: 'Virus Removal', description: 'Complete malware and virus cleanup' },
    { icon: FaHdd, title: 'Hard Disk Recovery', description: 'Data recovery from failed drives' },
    { icon: FaPrint, title: 'Printing Solution', description: 'Printer setup and troubleshooting' },
  ];

  const testimonials = [
    {
      name: 'Mdlutfur Rhaman',
      date: 'July 2025',
      rating: 5,
      text: 'Very Good service. Excellent.',
    },
    {
      name: 'Al-Amin Islam',
      date: 'June 2025',
      rating: 5,
      text: 'আমি উক্ত প্রতিষ্ঠান থেকে সেবা গ্রহণ করে সন্তুষ্ট হয়েছি।',
    },
    {
      name: 'Md Sohel Sarder',
      date: 'March 2025',
      rating: 5,
      text: 'আমি কম্পিউটার ক্লিনিকের নিকট কৃতজ্ঞ! আমার ল্যাপটপ নিয়ে খুবই হতাশার মধ্যে ছিলাম। সমাধান পেয়ে গেলাম! বিশ্বস্ততার এক নতুন ছোঁয়া আমি বিমোহিত!',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section circuit-bg relative flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              style={{ fontFamily: 'Rajdhani' }}
            >
              <span className="text-white">Have a Computer </span>
              <span className="text-orange-500">Problem?</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl md:text-5xl font-semibold mb-6"
              style={{ color: '#00bcd4' }}
            >
              Receive Instant Service
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl mb-12 text-gray-300"
              style={{ fontFamily: 'Rajdhani' }}
            >
              ব্যস্ততা হোক আনন্দময়; আমরা আছি সবসময়!<br />
              কম্পিউটার সংক্রান্ত প্রয়োজনে আমাদের কল করুন!!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <a
                href="tel:+8801518336440"
                className="flex items-center space-x-3 px-8 py-4 rounded-lg btn-cyan font-semibold text-lg"
              >
                <FaPhone className="text-xl" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/8801518336440"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-8 py-4 rounded-lg btn-orange font-semibold text-lg"
              >
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp Us</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Snapshot */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#00bcd4', fontFamily: 'Rajdhani' }}>
              Our Services
            </h2>
            <p className="text-gray-400 text-lg">Professional computer repair and IT solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="service-card bg-[#1e1e3f] p-8 rounded-xl"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center">
                    <service.icon className="text-4xl text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center" style={{ color: '#00bcd4' }}>
                  {service.title}
                </h3>
                <p className="text-gray-400 text-center leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-block px-8 py-4 rounded-lg btn-orange font-semibold text-lg"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Stats */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#00bcd4', fontFamily: 'Rajdhani' }}>
              Why Choose Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-500/30 p-8 rounded-xl text-center"
            >
              <div className="text-6xl font-bold mb-4" style={{ color: '#00bcd4', fontFamily: 'Rajdhani' }}>
                {counters.years}+
              </div>
              <p className="text-xl font-semibold mb-2 text-white">Years of Experience</p>
              <p className="text-gray-400">Since 2016</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30 p-8 rounded-xl text-center"
            >
              <div className="text-6xl font-bold mb-4" style={{ color: '#ff6600', fontFamily: 'Rajdhani' }}>
                {counters.recommendation}%
              </div>
              <p className="text-xl font-semibold mb-2 text-white">Recommended</p>
              <p className="text-gray-400">By all clients</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-500/30 p-8 rounded-xl text-center"
            >
              <div className="text-6xl font-bold mb-4" style={{ color: '#00bcd4', fontFamily: 'Rajdhani' }}>
                {counters.reviews}
              </div>
              <p className="text-xl font-semibold mb-2 text-white">Happy Reviews</p>
              <p className="text-gray-400">5-Star Ratings</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#00bcd4', fontFamily: 'Rajdhani' }}>
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1e1e3f] p-8 rounded-xl border border-cyan-500/20"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-orange-500 text-xl mr-1" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold" style={{ color: '#00bcd4' }}>{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/testimonials"
              className="inline-block px-8 py-4 rounded-lg btn-cyan font-semibold text-lg"
            >
              Read All Reviews
            </Link>
          </motion.div>
        </div>
      </section>

      {/* On Call Service Banner */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between text-center md:text-left"
          >
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Rajdhani' }}>
                <FaCheckCircle className="inline-block mr-3" />
                ON CALL SERVICE
              </h2>
              <p className="text-xl text-white/90">We come to you! Home and office service available</p>
            </div>
            <a
              href="tel:+8801518336440"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center space-x-2"
            >
              <FaPhone />
              <span>Call Now</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-16 bg-[#0f0f1e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#00bcd4', fontFamily: 'Rajdhani' }}>
              Need Help? Call or WhatsApp us anytime!
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+8801518336440"
                className="flex items-center space-x-3 px-8 py-4 rounded-lg btn-cyan font-semibold text-lg"
              >
                <FaPhone className="text-xl" />
                <span>+880 1518-336440</span>
              </a>
              <a
                href="https://wa.me/8801518336440"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-8 py-4 rounded-lg btn-orange font-semibold text-lg"
              >
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
