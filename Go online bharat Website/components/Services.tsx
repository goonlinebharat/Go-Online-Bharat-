'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Services() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: 'ri-code-s-slash-line',
      title: 'Custom Web Development',
      description: 'Tailored web solutions built with modern technologies like React, Next.js, and Node.js for optimal performance.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly', 'Scalable Architecture'],
      color: 'blue',
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile-First Design',
      description: 'Mobile-optimized websites that provide seamless experiences across all devices and screen sizes.',
      features: ['Cross-Platform', 'Touch Optimized', 'Fast Loading', 'App-like Feel'],
      color: 'purple',
    },
    {
      icon: 'ri-shopping-cart-line',
      title: 'E-Commerce Solutions',
      description: 'Complete online stores with payment integration, inventory management, and conversion optimization.',
      features: ['Payment Gateway', 'Inventory System', 'Order Management', 'Analytics Dashboard'],
      color: 'green',
    },
    {
      icon: 'ri-dashboard-line',
      title: 'Web Applications',
      description: 'Complex web applications with advanced functionality, user management, and data processing.',
      features: ['User Authentication', 'Database Integration', 'Real-time Features', 'Admin Panels'],
      color: 'orange',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const colorClasses = {
    blue: 'from-blue-500/10 to-blue-600/10 border-blue-500/20 group-hover:from-blue-500/20 group-hover:to-blue-600/20 text-blue-400',
    purple: 'from-purple-500/10 to-purple-600/10 border-purple-500/20 group-hover:from-purple-500/20 group-hover:to-purple-600/20 text-purple-400',
    green: 'from-green-500/10 to-green-600/10 border-green-500/20 group-hover:from-green-500/20 group-hover:to-green-600/20 text-green-400',
    orange: 'from-orange-500/10 to-orange-600/10 border-orange-500/20 group-hover:from-orange-500/20 group-hover:to-orange-600/20 text-orange-400',
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium">
              Our Services
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            What We Build
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            From simple websites to complex web applications, we deliver solutions that drive your business forward
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses]} border rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:shadow-${service.color}-500/10`}>
                <div className="w-16 h-16 flex items-center justify-center mb-6 bg-white/5 rounded-xl">
                  <i className={`${service.icon} text-4xl ${colorClasses[service.color as keyof typeof colorClasses].split(' ').pop()}`}></i>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <i className={`ri-check-line w-5 h-5 flex items-center justify-center mr-3 ${colorClasses[service.color as keyof typeof colorClasses].split(' ').pop()}`}></i>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-8 w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white py-3 rounded-xl transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}