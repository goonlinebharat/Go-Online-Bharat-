'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'saas', label: 'SaaS Platform' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'startup', label: 'Startup' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'TechStart E-commerce Platform',
      category: 'ecommerce',
      client: 'TechStart Inc.',
      duration: '12 weeks',
      description: 'Complete e-commerce solution with advanced inventory management and AI-powered recommendations.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20showing%20product%20listings%2C%20shopping%20cart%2C%20and%20checkout%20process%20with%20blue%20and%20purple%20theme%2C%20professional%20design%20with%20clean%20layout%20and%20advanced%20filtering%20options&width=600&height=400&seq=case1&orientation=landscape',
      results: [
        { metric: '250%', description: 'Increase in online sales' },
        { metric: '40%', description: 'Faster page load times' },
        { metric: '180%', description: 'Mobile conversion rate' }
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      challenge: 'TechStart needed a scalable e-commerce platform that could handle high traffic volumes while providing personalized shopping experiences.',
      solution: 'We built a modern, responsive platform with microservices architecture, real-time inventory management, and AI-powered product recommendations.',
      testimonial: {
        text: "The team delivered exactly what we needed. Our sales increased by 250% in the first quarter after launch.",
        author: 'Sarah Johnson',
        role: 'CEO, TechStart Inc.'
      }
    },
    {
      id: 2,
      title: 'CloudSync SaaS Dashboard',
      category: 'saas',
      client: 'CloudSync Solutions',
      duration: '16 weeks',
      description: 'Enterprise-grade SaaS platform with real-time analytics and team collaboration features.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20SaaS%20dashboard%20interface%20with%20analytics%20charts%2C%20team%20collaboration%20tools%2C%20real-time%20data%20visualization%2C%20modern%20dark%20theme%20with%20blue%20accents%20and%20clean%20navigation&width=600&height=400&seq=case2&orientation=landscape',
      results: [
        { metric: '300%', description: 'User engagement increase' },
        { metric: '50%', description: 'Reduction in churn rate' },
        { metric: '99.9%', description: 'Platform uptime achieved' }
      ],
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
      challenge: 'CloudSync required a comprehensive SaaS platform that could scale to thousands of users while maintaining real-time performance.',
      solution: 'We developed a cloud-native solution with microservices architecture, real-time WebSocket connections, and advanced caching strategies.',
      testimonial: {
        text: "Outstanding work! The platform exceeded our expectations and our customers love the new features.",
        author: 'Michael Chen',
        role: 'CTO, CloudSync Solutions'
      }
    },
    {
      id: 3,
      title: 'GreenTech Corporate Website',
      category: 'corporate',
      client: 'GreenTech Industries',
      duration: '8 weeks',
      description: 'Modern corporate website with sustainability focus and interactive environmental impact calculator.',
      image: 'https://readdy.ai/api/search-image?query=Corporate%20website%20for%20environmental%20technology%20company%20showing%20green%20energy%20solutions%2C%20solar%20panels%2C%20wind%20turbines%2C%20modern%20professional%20design%20with%20green%20and%20blue%20color%20scheme&width=600&height=400&seq=case3&orientation=landscape',
      results: [
        { metric: '400%', description: 'Increase in lead generation' },
        { metric: '60%', description: 'Longer average session time' },
        { metric: '90%', description: 'Lighthouse performance score' }
      ],
      technologies: ['React', 'Gatsby', 'GraphQL', 'Contentful', 'Netlify'],
      challenge: 'GreenTech needed a website that would effectively communicate their environmental mission while generating quality leads.',
      solution: 'We created an engaging, performance-optimized website with interactive calculators, case studies, and compelling sustainability messaging.',
      testimonial: {
        text: "Our new website perfectly represents our brand and has significantly increased our lead quality.",
        author: 'Emma Wilson',
        role: 'Marketing Director, GreenTech Industries'
      }
    },
    {
      id: 4,
      title: 'StartupLab MVP Platform',
      category: 'startup',
      client: 'StartupLab',
      duration: '10 weeks',
      description: 'Rapid MVP development for startup incubator platform with mentorship matching and progress tracking.',
      image: 'https://readdy.ai/api/search-image?query=Startup%20platform%20interface%20showing%20mentor%20matching%20system%2C%20progress%20tracking%20dashboard%2C%20startup%20profiles%2C%20modern%20interface%20with%20purple%20and%20blue%20gradients%2C%20innovative%20design&width=600&height=400&seq=case4&orientation=landscape',
      results: [
        { metric: '200%', description: 'Faster mentor matching' },
        { metric: '150%', description: 'Increase in user retention' },
        { metric: '80%', description: 'Reduction in development time' }
      ],
      technologies: ['Vue.js', 'Firebase', 'Node.js', 'Express', 'Stripe'],
      challenge: 'StartupLab needed to quickly validate their business model with a functional MVP that could connect startups with mentors.',
      solution: 'We delivered a fully functional platform in just 10 weeks, featuring user matching algorithms, payment processing, and real-time messaging.',
      testimonial: {
        text: "They helped us get to market quickly without compromising on quality. Our investors were impressed!",
        author: 'David Park',
        role: 'Founder, StartupLab'
      }
    },
    {
      id: 5,
      title: 'HealthTech Patient Portal',
      category: 'saas',
      client: 'MedConnect',
      duration: '14 weeks',
      description: 'HIPAA-compliant patient portal with telemedicine capabilities and appointment scheduling.',
      image: 'https://readdy.ai/api/search-image?query=Healthcare%20patient%20portal%20interface%20showing%20appointment%20scheduling%2C%20telemedicine%20video%20calls%2C%20medical%20records%2C%20secure%20messaging%2C%20professional%20medical%20design%20with%20blue%20and%20white%20theme&width=600&height=400&seq=case5&orientation=landscape',
      results: [
        { metric: '300%', description: 'Increase in online appointments' },
        { metric: '45%', description: 'Reduction in no-shows' },
        { metric: '100%', description: 'HIPAA compliance achieved' }
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'AWS HIPAA'],
      challenge: 'MedConnect required a secure, compliant platform that would streamline patient-doctor interactions while meeting strict healthcare regulations.',
      solution: 'We built a comprehensive portal with end-to-end encryption, secure video calls, and automated compliance monitoring.',
      testimonial: {
        text: "The platform has transformed how we interact with patients. Security and usability are both excellent.",
        author: 'Dr. Lisa Rodriguez',
        role: 'Chief Medical Officer, MedConnect'
      }
    },
    {
      id: 6,
      title: 'RetailMax Inventory System',
      category: 'ecommerce',
      client: 'RetailMax Chain',
      duration: '18 weeks',
      description: 'Multi-store inventory management system with real-time sync and predictive analytics.',
      image: 'https://readdy.ai/api/search-image?query=Retail%20inventory%20management%20dashboard%20showing%20real-time%20stock%20levels%2C%20analytics%20charts%2C%20multi-store%20synchronization%2C%20barcode%20scanning%20interface%2C%20professional%20retail%20software%20design&width=600&height=400&seq=case6&orientation=landscape',
      results: [
        { metric: '35%', description: 'Reduction in stock-outs' },
        { metric: '25%', description: 'Improved profit margins' },
        { metric: '60%', description: 'Faster inventory processes' }
      ],
      technologies: ['Angular', 'Python', 'PostgreSQL', 'Redis', 'Docker'],
      challenge: 'RetailMax needed to synchronize inventory across 50+ locations while predicting demand patterns.',
      solution: 'We developed an AI-powered system with real-time synchronization, demand forecasting, and automated reordering.',
      testimonial: {
        text: "Our inventory management has never been more efficient. The predictive features are game-changing.",
        author: 'Robert Kim',
        role: 'Operations Director, RetailMax Chain'
      }
    }
  ];

  const filteredCaseStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <ParticleBackground />
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-8">
                <i className="ri-trophy-line w-4 h-4 flex items-center justify-center mr-2"></i>
                Success Stories
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Our Success
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  Stories
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                Discover how we've helped businesses transform their digital presence and achieve 
                remarkable results through innovative web solutions.
              </p>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      activeFilter === filter.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  variants={itemVariants}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500 transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full mb-2">
                        {study.category.charAt(0).toUpperCase() + study.category.slice(1)}
                      </span>
                      <h3 className="text-xl font-bold text-white">{study.title}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400">{study.client}</span>
                      <span className="text-gray-400">{study.duration}</span>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{study.description}</p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-blue-400 mb-1">{result.metric}</div>
                          <div className="text-xs text-gray-400">{result.description}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 whitespace-nowrap cursor-pointer"
                    >
                      View Full Case Study
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Proven Track Record of
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  Success
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '100+', label: 'Projects Delivered', icon: 'ri-rocket-line' },
                { number: '95%', label: 'Client Satisfaction', icon: 'ri-heart-line' },
                { number: '250%', label: 'Average ROI Increase', icon: 'ri-line-chart-line' },
                { number: '24/7', label: 'Support Available', icon: 'ri-customer-service-line' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-blue-500 transition-all duration-300"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mx-auto mb-4">
                    <i className={`${stat.icon} text-2xl text-white`}></i>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Ready to Be Our Next
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  Success Story?
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-12">
                Let's discuss how we can help you achieve similar results for your business.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-full text-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25 whitespace-nowrap cursor-pointer"
              >
                Start Your Project
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}