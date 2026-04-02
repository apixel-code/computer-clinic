import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mdlutfur Rhaman',
      date: 'July 2025',
      rating: 5,
      text: 'Very Good service. Excellent.',
      service: 'Computer Repair'
    },
    {
      name: 'Al-Amin Islam',
      date: 'June 2025',
      rating: 5,
      text: 'আমি উক্ত প্রতিষ্ঠান থেকে সেবা গ্রহণ করে সন্তুষ্ট হয়েছি।',
      service: 'Software Installation'
    },
    {
      name: 'Md Sohel Sarder',
      date: 'March 2025',
      rating: 5,
      text: 'আমি কম্পিউটার ক্লিনিকের নিকট কৃতজ্ঞ! আমার ল্যাপটপ নিয়ে খুবই হতাশার মধ্যে ছিলাম। সমাধান পেয়ে গেলাম! বিশ্বস্ততার এক নতুন ছোঁয়া আমি বিমোহিত!',
      service: 'Laptop Repair'
    },
    {
      name: 'Yousuf Hawlader',
      date: 'November 2022',
      rating: 5,
      text: 'Very good excellent service. I am happy.',
      service: 'General Service'
    },
    {
      name: 'Bengal Trading',
      date: 'October 2022',
      rating: 5,
      text: 'I received excellent service from Computer Clinic — when my PC died, the hard drive had crashed. He collected my PC from my home, kept me informed all the way, recommended the right SSD, recovered my data, and returned my PC on time. Highly recommended!',
      service: 'Data Recovery & SSD Upgrade'
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
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Real feedback from our satisfied customers
            </p>
            <div className="mt-8 inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-full">
              <FaStar className="text-white text-xl" />
              <span className="text-white font-bold text-lg">100% Recommended</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-[#1e1e3f] to-[#1a1a35] p-8 rounded-xl border border-cyan-500/20 relative"
              >
                <FaQuoteLeft className="text-4xl text-cyan-500/20 absolute top-6 right-6" />
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-orange-500 text-xl mr-1" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed text-lg italic relative z-10">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-cyan-500/20 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-lg" style={{ color: '#00bcd4' }}>
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">{testimonial.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-orange-500">{testimonial.service}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-500/30 p-8 rounded-xl text-center"
            >
              <div className="text-5xl font-bold mb-4" style={{ color: '#00bcd4', fontFamily: 'Rajdhani' }}>
                100%
              </div>
              <p className="text-xl font-semibold mb-2 text-white">Satisfaction Rate</p>
              <p className="text-gray-400">All clients satisfied</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30 p-8 rounded-xl text-center"
            >
              <div className="text-5xl font-bold mb-4" style={{ color: '#ff6600', fontFamily: 'Rajdhani' }}>
                5.0
              </div>
              <p className="text-xl font-semibold mb-2 text-white">Average Rating</p>
              <p className="text-gray-400">Out of 5 stars</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-500/30 p-8 rounded-xl text-center"
            >
              <div className="text-5xl font-bold mb-4" style={{ color: '#00bcd4', fontFamily: 'Rajdhani' }}>
                9+
              </div>
              <p className="text-xl font-semibold mb-2 text-white">Years Experience</p>
              <p className="text-gray-400">Since 2016</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1a1a2e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#00bcd4', fontFamily: 'Rajdhani' }}>
              Want to Experience Our Service?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join our list of satisfied customers. Call us today!
            </p>
            <a
              href="tel:+8801518336440"
              className="inline-block px-8 py-4 rounded-lg btn-orange font-semibold text-lg"
            >
              Contact Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;