'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');
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

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 2999,
      annualPrice: 29999,
      popular: false,
      features: [
        'Custom Website Design (5 pages)',
        'Responsive Mobile Design',
        'Basic SEO Optimization',
        'Contact Form Integration',
        'Social Media Links',
        '1 Month Free Support',
        'Basic Analytics Setup',
        'SSL Certificate'
      ],
      icon: 'ri-rocket-line',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 4999,
      annualPrice: 49999,
      popular: true,
      features: [
        'Custom Website Design (10 pages)',
        'Advanced Responsive Design',
        'Complete SEO Package',
        'CMS Integration',
        'E-commerce Functionality',
        '3 Months Free Support',
        'Advanced Analytics',
        'Performance Optimization',
        'Blog System',
        'Newsletter Integration'
      ],
      icon: 'ri-star-line',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      description: 'For large businesses and corporations',
      monthlyPrice: 9999,
      annualPrice: 99999,
      popular: false,
      features: [
        'Unlimited Pages',
        'Custom Web Application',
        'Advanced E-commerce',
        'Multi-language Support',
        'Custom Integrations',
        '6 Months Free Support',
        'Dedicated Project Manager',
        'Priority Support',
        'Advanced Security',
        'Performance Monitoring',
        'Custom Training',
        'White-label Solutions'
      ],
      icon: 'ri-building-line',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const faqs = [
    {
      question: 'What\'s included in the development process?',
      answer: 'Our development process includes discovery, design mockups, development, testing, deployment, and post-launch support. We work closely with you throughout the entire process.'
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary based on complexity. Starter projects typically take 2-4 weeks, Professional projects 4-8 weeks, and Enterprise projects 8-16 weeks.'
    },
    {
      question: 'Do you provide ongoing maintenance?',
      answer: 'Yes! All plans include free support for the specified period, and we offer ongoing maintenance packages to keep your website updated and secure.'
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Absolutely! You can upgrade your plan at any time. We\'ll work with you to add the additional features and functionality you need.'
    },
    {
      question: 'Do you work with existing websites?',
      answer: 'Yes, we can redesign, optimize, or add features to existing websites. We\'ll evaluate your current site and recommend the best approach.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern technologies including React, Next.js, Node.js, and various CMS platforms. We choose the best tech stack for your specific needs.'
    }
  ];

  const [openFaq, setOpenFaq] = useState(null);

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
                <i className="ri-price-tag-3-line w-4 h-4 flex items-center justify-center mr-2"></i>
                Transparent Pricing
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Simple, Transparent
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  Pricing
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                Choose the perfect plan for your business. All plans include our core features 
                with no hidden fees or surprise charges.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center mb-16">
                <span className={`mr-4 ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    billingCycle === 'annual' ? 'bg-blue-600' : 'bg-gray-600'
                  } cursor-pointer`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`ml-4 ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
                  Annual
                </span>
                {billingCycle === 'annual' && (
                  <span className="ml-3 px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full">
                    Save 17%
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  variants={itemVariants}
                  className={`relative bg-gray-900/50 backdrop-blur-sm border ${
                    plan.popular ? 'border-purple-500' : 'border-gray-700'
                  } rounded-2xl p-8 hover:border-blue-500 transition-all duration-300 ${
                    plan.popular ? 'scale-105' : 'hover:scale-105'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${plan.color} rounded-xl mb-6`}>
                    <i className={`${plan.icon} text-2xl text-white`}></i>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-8">{plan.description}</p>

                  <div className="mb-8">
                    <span className="text-4xl font-bold text-white">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    <span className="text-gray-400 ml-2">
                      {billingCycle === 'monthly' ? '/project' : '/year'}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-400 mr-3 mt-0.5"></i>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                        : 'border-2 border-gray-600 text-gray-300 hover:border-blue-500 hover:text-white'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  Questions
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Got questions? We've got answers. Here are the most common questions about our pricing and services.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="mb-4"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-blue-500 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                      <i className={`ri-${openFaq === index ? 'subtract' : 'add'}-line w-5 h-5 flex items-center justify-center text-gray-400`}></i>
                    </div>
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6 bg-gray-900/30 border-l border-r border-b border-gray-700 rounded-b-xl"
                    >
                      <p className="text-gray-300 pt-4">{faq.answer}</p>
                    </motion.div>
                  )}
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
                Ready to Start Your
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  Project?
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-12">
                Get a free consultation and detailed project proposal. No commitment required.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-full text-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25 whitespace-nowrap cursor-pointer"
              >
                Get Free Consultation
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}