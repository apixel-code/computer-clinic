import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptop, FaShieldAlt, FaTachometerAlt, FaClock } from 'react-icons/fa';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      icon: FaTachometerAlt,
      title: 'How to Speed Up Your Slow PC',
      excerpt: 'Learn effective methods to boost your computer performance and eliminate slowdowns.',
      date: 'Coming Soon',
      category: 'Performance',
      color: '#00bcd4'
    },
    {
      id: 2,
      icon: FaShieldAlt,
      title: 'Signs Your Hard Disk is Failing',
      excerpt: 'Recognize the warning signs of hard disk failure before you lose your important data.',
      date: 'Coming Soon',
      category: 'Hardware',
      color: '#ff6600'
    },
    {
      id: 3,
      icon: FaShieldAlt,
      title: 'How to Protect Your PC from Viruses',
      excerpt: 'Essential tips and best practices to keep your computer safe from malware and viruses.',
      date: 'Coming Soon',
      category: 'Security',
      color: '#00bcd4'
    },
    {
      id: 4,
      icon: FaLaptop,
      title: 'Windows 11 vs Windows 10: Which is Better?',
      excerpt: 'A comprehensive comparison to help you decide which Windows version suits your needs.',
      date: 'Coming Soon',
      category: 'Software',
      color: '#ff6600'
    },
    {
      id: 5,
      icon: FaClock,
      title: 'When to Upgrade Your Computer',
      excerpt: 'Find out if it\'s time to upgrade your hardware or if repairs are still worth it.',
      date: 'Coming Soon',
      category: 'Advice',
      color: '#00bcd4'
    },
    {
      id: 6,
      icon: FaLaptop,
      title: 'Essential Software Every Computer Should Have',
      excerpt: 'Our recommended list of must-have applications for productivity and security.',
      date: 'Coming Soon',
      category: 'Software',
      color: '#ff6600'
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
              Tech Tips & Insights
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Stay updated with our latest computer tips, guides, and tech insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-[#1e1e3f] to-[#1a1a35] rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="p-8">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${post.color}20` }}
                  >
                    <post.icon className="text-3xl" style={{ color: post.color }} />
                  </div>
                  
                  <div className="flex items-center space-x-3 mb-4">
                    <span 
                      className="px-3 py-1 text-xs font-semibold rounded-full"
                      style={{ 
                        backgroundColor: `${post.color}20`,
                        color: post.color
                      }}
                    >
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3" style={{ color: '#00bcd4' }}>
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="px-8 pb-8">
                  <div className="inline-flex items-center text-orange-500 font-semibold text-sm hover:text-orange-400 transition-colors">
                    Read More →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-cyan-500/10 to-orange-500/10 border border-cyan-500/30 px-8 py-6 rounded-xl">
              <p className="text-lg text-gray-300">
                <span className="font-semibold" style={{ color: '#00bcd4' }}>More articles coming soon!</span>
                <br />
                <span className="text-sm text-gray-400">Stay tuned for helpful computer tips and tech guides</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#00bcd4', fontFamily: 'Rajdhani' }}>
              Need Computer Help Right Now?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Don't wait for articles — get expert help immediately!
            </p>
            <a
              href="tel:+8801518336440"
              className="inline-block px-8 py-4 rounded-lg btn-orange font-semibold text-lg"
            >
              Call Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;