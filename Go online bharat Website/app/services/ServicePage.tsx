'use client';

import Header from '@/components/Header';
import ParticleBackground from '@/components/ParticleBackground';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function ServicePage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'web-development',
      title: 'Custom Web Development',
      subtitle: 'Modern, scalable web solutions',
      icon: 'ri-code-s-slash-line',
      description: 'We build custom websites and web applications using the latest technologies like React, Next.js, and Node.js. Our solutions are designed for performance, scalability, and user experience.',
      features: [
        'Responsive Design',
        'Performance Optimization',
        'SEO Friendly Structure',
        'Scalable Architecture',
        'Cross-browser Compatibility',
        'Security Best Practices',
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL'],
      process: [
        'Discovery & Planning',
        'Design & Prototyping', 
        'Development & Testing',
        'Launch & Optimization'
      ],
      color: 'blue',
    },
    {
      id: 'mobile-development',
      title: 'Mobile App Development',
      subtitle: 'Native & cross-platform apps',
      icon: 'ri-smartphone-line',
      description: 'Create stunning mobile applications that work seamlessly across iOS and Android platforms. We focus on user experience, performance, and native functionality.',
      features: [
        'Native iOS & Android',
        'Cross-platform Solutions',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
        'Third-party Integrations',
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
      process: [
        'Market Research',
        'UI/UX Design',
        'Development & Testing',
        'App Store Submission'
      ],
      color: 'purple',
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Solutions',
      subtitle: 'Complete online store platforms',
      icon: 'ri-shopping-cart-line',
      description: 'Build powerful e-commerce platforms that drive sales and provide exceptional shopping experiences. From simple stores to complex marketplaces.',
      features: [
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Processing',
        'Customer Accounts',
        'Analytics Dashboard',
        'Multi-currency Support',
      ],
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Magento', 'BigCommerce'],
      process: [
        'Business Analysis',
        'Platform Selection',
        'Custom Development',
        'Testing & Launch'
      ],
      color: 'green',
    },
    {
      id: 'web-apps',
      title: 'Web Applications',
      subtitle: 'Complex business solutions',
      icon: 'ri-dashboard-line',
      description: 'Develop sophisticated web applications with advanced functionality, user management, real-time features, and complex business logic.',
      features: [
        'User Authentication',
        'Database Integration',
        'Real-time Features',
        'Admin Dashboards',
        'API Development',
        'Cloud Integration',
      ],
      technologies: ['React', 'Vue.js', 'Express.js', 'Django', 'Laravel', 'AWS'],
      process: [
        'Requirements Analysis',
        'System Architecture',
        'Development Sprints',
        'Quality Assurance'
      ],
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
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400',
    purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-400',
    green: 'from-green-500/20 to-green-600/20 border-green-500/30 text-green-400',
    orange: 'from-orange-500/20 to-orange-600/20 border-orange-500/30 text-orange-400',
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <ParticleBackground />
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="text-center mb-20"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium">
                Our Services
              </span>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white mb-8"
            >
              What We 
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                Build For You
              </span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              From simple websites to complex web applications, we deliver cutting-edge digital solutions that drive your business forward and exceed your expectations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.button
                key={index}
                whileHover={{ y: -5 }}
                onClick={() => setActiveService(index)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeService === index 
                    ? `bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses]} border-current` 
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="w-12 h-12 flex items-center justify-center mb-4 bg-white/10 rounded-xl">
                  <i className={`${service.icon} text-2xl ${activeService === index ? colorClasses[service.color as keyof typeof colorClasses].split(' ').pop() : 'text-gray-400'}`}></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.subtitle}</p>
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl mr-6">
                    <i className={`${services[activeService].icon} text-3xl ${colorClasses[services[activeService].color as keyof typeof colorClasses].split(' ').pop()}`}></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{services[activeService].title}</h2>
                    <p className="text-gray-400">{services[activeService].subtitle}</p>
                  </div>
                </div>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {services[activeService].description}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services[activeService].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <i className={`ri-check-line w-5 h-5 flex items-center justify-center mr-3 ${colorClasses[services[activeService].color as keyof typeof colorClasses].split(' ').pop()}`}></i>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  Get Started
                </motion.button>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Technologies We Use</h3>
                  <div className="flex flex-wrap gap-3">
                    {services[activeService].technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Our Process</h3>
                  <div className="space-y-4">
                    {services[activeService].process.map((step, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold mr-4 ${colorClasses[services[activeService].color as keyof typeof colorClasses].replace('text-', 'bg-').replace('-400', '-500/20 text-').concat('-400')}`}>
                          {idx + 1}
                        </div>
                        <span className="text-gray-300">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Ready to Start?</h4>
                  <p className="text-gray-400 text-sm mb-4">Get a free consultation and project estimate.</p>
                  <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white py-3 rounded-xl transition-all duration-300 whitespace-nowrap cursor-pointer">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}