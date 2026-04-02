import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/8801518336440"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 1000,
        width: '60px',
        height: '60px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
      }}
    >
      <FaWhatsapp className="text-white text-3xl" />
      
      {/* Pulse effect */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          backgroundColor: '#25D366',
        }}
      />
    </motion.a>
  );
};

export default FloatingWhatsApp;