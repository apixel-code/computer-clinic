import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaAward, FaHandshake, FaClock } from 'react-icons/fa';

const About = () => {
  const milestones = [
    { year: '2016', title: 'Company Founded', description: 'Started with a vision to provide reliable computer services in Dhaka' },
    { year: '2018', title: 'Expanded Services', description: 'Added networking and enterprise solutions to our portfolio' },
    { year: '2020', title: 'On-Call Service', description: 'Launched home and office visit service for customer convenience' },
    { year: '2025', title: '100% Recommended', description: 'Achieved perfect satisfaction rate from all our clients' },
  ];

  const values = [
    {
      icon: FaCheckCircle,
      title: 'Reliability',
      description: 'We deliver on our promises with consistent, high-quality service every time.'
    },
    {
      icon: FaAward,
      title: 'Expertise',
      description: 'Our team has years of experience solving complex computer and IT problems.'
    },
    {
      icon: FaHandshake,
      title: 'Trust',
      description: 'Building lasting relationships through honest, transparent service.'
    },
    {
      icon: FaClock,
      title: 'Speed',
      description: 'Fast response times and quick solutions to minimize your downtime.'
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
              About Computer Clinic
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for computer repair and IT services since 2016
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#00bcd4', fontFamily: 'Rajdhani' }}>
                Our Story
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Founded on <span className="text-orange-500 font-semibold">April 1, 2016</span>, Computer Clinic began with a simple mission: to provide reliable, affordable, and professional computer repair services to the people of Dhaka.
                </p>
                <p className="text-lg">
                  Over the years, we have built a reputation for excellence, earning the trust of countless individuals and businesses across Dhaka Division. Our commitment to quality service and customer satisfaction has made us a preferred choice for all computer-related needs.
                </p>
                <p className="text-lg">
                  Today, we proudly serve our community with a <span className="text-cyan-400 font-semibold">100% recommendation rate</span>, reflecting the trust and satisfaction of every client we've served.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-500/30 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#ff6600' }}>Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Established</p>
                    <p className="text-gray-400">April 1, 2016</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Service Area</p>
                    <p className="text-gray-400">Dhaka, Dhaka Division, Bangladesh</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Recommendation Rate</p>
                    <p className="text-gray-400">100% by all reviewers</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Specialization</p>
                    <p className="text-gray-400">Computer Repair & IT Services</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8" style={{ color: '#00bcd4', fontFamily: 'Rajdhani' }}>
              Our Mission
            </h2>
            <div className="bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-cyan-500/30 p-12 rounded-2xl">
              <p className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: '#ffffff', fontFamily: 'Rajdhani' }}>
                "We make your tech problems disappear — quickly, reliably, and affordably"
              </p>
              <p className="text-lg text-gray-400">
                Our goal is to provide hassle-free computer solutions that let you focus on what matters most
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#00bcd4', fontFamily: 'Rajdhani' }}>
              Our Journey
            </h2>
            <p className="text-gray-400 text-lg">Milestones that shaped our success</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-12 border-l-2 border-cyan-500/30 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-orange-500 rounded-full" style={{ transform: 'translateX(-9px)' }}></div>
                <div className="bg-[#1e1e3f] p-6 rounded-xl border border-cyan-500/20">
                  <div className="text-3xl font-bold mb-2" style={{ color: '#ff6600', fontFamily: 'Rajdhani' }}>
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#00bcd4' }}>
                    {milestone.title}
                  </h3>
                  <p className="text-gray-400">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#00bcd4', fontFamily: 'Rajdhani' }}>
              Our Values
            </h2>
            <p className="text-gray-400 text-lg">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1e1e3f] p-8 rounded-xl border border-cyan-500/20 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#00bcd4' }}>
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;