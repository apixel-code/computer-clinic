import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptop, FaWindows, FaTools, FaVirus, FaHdd, FaPrint, FaNetworkWired, FaPhone, FaCheckCircle } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaLaptop,
      title: 'Computer Setup',
      description: 'Complete PC and laptop setup with hardware installation, software configuration, and system optimization. We ensure your device is ready to use with all necessary drivers and applications.',
      features: ['Hardware Installation', 'Driver Setup', 'Software Installation', 'Performance Optimization']
    },
    {
      icon: FaWindows,
      title: 'Windows Install',
      description: 'Fresh Windows OS installation with genuine activation. We backup your data, install the latest Windows version, and configure all settings for optimal performance.',
      features: ['Data Backup', 'Fresh OS Install', 'Genuine Activation', 'Driver Installation']
    },
    {
      icon: FaTools,
      title: 'Soft Problem Fix',
      description: 'Expert software troubleshooting and repair services. We diagnose and fix system errors, application crashes, slow performance, and other software-related issues.',
      features: ['Error Diagnosis', 'System Repair', 'Speed Optimization', 'Application Fixes']
    },
    {
      icon: FaVirus,
      title: 'Virus Removal',
      description: 'Complete malware and virus cleanup with advanced security tools. We remove all types of malicious software and protect your system from future threats.',
      features: ['Malware Removal', 'Virus Cleanup', 'Security Scan', 'Protection Setup']
    },
    {
      icon: FaHdd,
      title: 'Hard Disk Recovery',
      description: 'Professional data recovery from failed, corrupted, or damaged hard drives. We recover your precious files, documents, photos, and important data.',
      features: ['Data Recovery', 'Drive Repair', 'File Restoration', 'Backup Solutions']
    },
    {
      icon: FaPrint,
      title: 'Printing Solution',
      description: 'Complete printer setup, troubleshooting, and repair services. We fix printing issues, install drivers, and ensure smooth operation of your printing devices.',
      features: ['Printer Setup', 'Driver Installation', 'Error Fixing', 'Maintenance']
    },
    {
      icon: FaNetworkWired,
      title: 'Networking',
      description: 'Professional home and office network setup with Wi-Fi configuration, router setup, and network security. Get reliable and fast internet connectivity.',
      features: ['Network Setup', 'Wi-Fi Config', 'Router Installation', 'Security Setup']
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
              Our Services
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Professional computer repair and IT solutions for all your technology needs
            </p>
            
            {/* On-Call Service Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center space-x-2 mt-8 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
            >
              <FaCheckCircle className="text-white text-xl" />
              <span className="text-white font-semibold text-lg">On-Call / Home Service Available</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="service-card bg-gradient-to-br from-[#1e1e3f] to-[#1a1a35] p-8 rounded-xl group"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="text-3xl text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#00bcd4' }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-cyan-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Rajdhani' }}>
              Need Any of These Services?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Call us now for fast and reliable computer repair services
            </p>
            <a
              href="tel:+8801518336440"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-cyan-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              <FaPhone />
              <span>+880 1518-336440</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;