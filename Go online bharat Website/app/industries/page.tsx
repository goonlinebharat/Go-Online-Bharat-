'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

export default function IndustriesPage() {
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

  const industries = [
    {
      name: 'E-commerce & Retail',
      description: 'Comprehensive online stores with advanced inventory management, payment processing, and customer analytics.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20showing%20online%20shopping%2C%20product%20catalog%2C%20shopping%20cart%2C%20payment%20processing%2C%20mobile-first%20design%20with%20clean%20professional%20layout&width=600&height=400&seq=ecommerce&orientation=landscape',
      solutions: ['Custom E-commerce Platforms', 'Inventory Management Systems', 'Payment Gateway Integration', 'Mobile Shopping Apps', 'Analytics & Reporting'],
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'React', 'Node.js'],
      clients: ['RetailMax Chain', 'TechStart Inc.', 'Fashion Forward'],
      results: ['250% increase in online sales', '40% faster checkout process', '180% mobile conversion boost'],
      color: 'from-blue-500 to-cyan-500',
      icon: 'ri-shopping-cart-line'
    },
    {
      name: 'Healthcare & Medical',
      description: 'HIPAA-compliant platforms for patient management, telemedicine, and healthcare administration.',
      image: 'https://readdy.ai/api/search-image?query=Healthcare%20medical%20platform%20interface%20showing%20patient%20portal%2C%20telemedicine%20video%20calls%2C%20appointment%20scheduling%2C%20medical%20records%2C%20clean%20white%20and%20blue%20professional%20design&width=600&height=400&seq=healthcare&orientation=landscape',
      solutions: ['Patient Portal Systems', 'Telemedicine Platforms', 'Medical Record Management', 'Appointment Scheduling', 'HIPAA-Compliant Solutions'],
      technologies: ['React', 'Node.js', 'WebRTC', 'AWS HIPAA', 'MongoDB'],
      clients: ['MedConnect', 'HealthFirst Clinic', 'CareNet Solutions'],
      results: ['300% increase in online appointments', '45% reduction in no-shows', '100% HIPAA compliance achieved'],
      color: 'from-green-500 to-emerald-500',
      icon: 'ri-health-book-line'
    },
    {
      name: 'Financial Services',
      description: 'Secure fintech solutions with advanced encryption, compliance features, and real-time transaction processing.',
      image: 'https://readdy.ai/api/search-image?query=Financial%20services%20dashboard%20showing%20banking%20interface%2C%20investment%20portfolio%2C%20transaction%20history%2C%20charts%20and%20analytics%2C%20secure%20professional%20design%20with%20blue%20and%20gold%20accents&width=600&height=400&seq=fintech&orientation=landscape',
      solutions: ['Banking Platforms', 'Investment Dashboards', 'Payment Processing', 'Risk Management Tools', 'Compliance Reporting'],
      technologies: ['Angular', 'Python', 'PostgreSQL', 'Blockchain', 'AWS'],
      clients: ['SecureBank', 'InvestSmart', 'PayTech Solutions'],
      results: ['99.9% uptime achieved', '50% faster transaction processing', '200% user engagement increase'],
      color: 'from-yellow-500 to-orange-500',
      icon: 'ri-bank-line'
    },
    {
      name: 'Education & E-learning',
      description: 'Interactive learning platforms with course management, student tracking, and virtual classroom capabilities.',
      image: 'https://readdy.ai/api/search-image?query=Online%20education%20platform%20showing%20virtual%20classroom%2C%20video%20lectures%2C%20student%20dashboard%2C%20course%20materials%2C%20interactive%20learning%20tools%2C%20modern%20educational%20interface%20design&width=600&height=400&seq=education&orientation=landscape',
      solutions: ['Learning Management Systems', 'Virtual Classrooms', 'Student Portals', 'Course Creation Tools', 'Assessment Platforms'],
      technologies: ['React', 'Firebase', 'WebRTC', 'Node.js', 'MongoDB'],
      clients: ['EduTech Institute', 'Online Academy', 'SkillBuilder Pro'],
      results: ['400% increase in course completion', '60% improved student engagement', '90% satisfaction rate'],
      color: 'from-purple-500 to-pink-500',
      icon: 'ri-graduation-cap-line'
    },
    {
      name: 'Real Estate',
      description: 'Property management platforms with virtual tours, CRM integration, and automated marketing tools.',
      image: 'https://readdy.ai/api/search-image?query=Real%20estate%20platform%20showing%20property%20listings%2C%20virtual%20home%20tours%2C%20interactive%20maps%2C%20property%20search%20filters%2C%20professional%20real%20estate%20website%20design&width=600&height=400&seq=realestate&orientation=landscape',
      solutions: ['Property Listing Platforms', 'Virtual Tour Integration', 'CRM Systems', 'Lead Management', 'Market Analytics'],
      technologies: ['Next.js', 'Mapbox', 'Stripe', 'PostgreSQL', 'AWS'],
      clients: ['PropertyPro', 'Elite Realty', 'HomeFinder Plus'],
      results: ['300% more qualified leads', '50% faster property sales', '80% client retention rate'],
      color: 'from-indigo-500 to-blue-500',
      icon: 'ri-home-4-line'
    },
    {
      name: 'Manufacturing & Industry',
      description: 'Industrial IoT solutions, supply chain management, and automated production monitoring systems.',
      image: 'https://readdy.ai/api/search-image?query=Industrial%20manufacturing%20dashboard%20showing%20production%20metrics%2C%20supply%20chain%20management%2C%20IoT%20sensors%20monitoring%2C%20factory%20automation%20controls%2C%20professional%20industrial%20interface&width=600&height=400&seq=manufacturing&orientation=landscape',
      solutions: ['Supply Chain Management', 'IoT Monitoring Systems', 'Production Dashboards', 'Quality Control Tools', 'Automated Reporting'],
      technologies: ['Vue.js', 'Python', 'IoT Sensors', 'PostgreSQL', 'Docker'],
      clients: ['IndusTech Corp', 'Manufacturing Plus', 'AutoProd Systems'],
      results: ['35% reduction in downtime', '25% cost savings', '60% efficiency improvement'],
      color: 'from-gray-500 to-slate-500',
      icon: 'ri-settings-3-line'
    },
    {
      name: 'Travel & Hospitality',
      description: 'Booking platforms, hotel management systems, and travel planning tools with integrated payment processing.',
      image: 'https://readdy.ai/api/search-image?query=Travel%20booking%20platform%20showing%20hotel%20reservations%2C%20flight%20search%2C%20travel%20itinerary%20planner%2C%20destination%20guides%2C%20vacation%20booking%20interface%20with%20tropical%20theme&width=600&height=400&seq=travel&orientation=landscape',
      solutions: ['Booking Platforms', 'Hotel Management Systems', 'Travel Planning Tools', 'Review & Rating Systems', 'Mobile Travel Apps'],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe', 'Google Maps'],
      clients: ['TravelEase', 'Hotel Chain Pro', 'Adventure Bookings'],
      results: ['200% booking increase', '40% improved customer satisfaction', '150% mobile usage growth'],
      color: 'from-teal-500 to-cyan-500',
      icon: 'ri-plane-line'
    },
    {
      name: 'Non-Profit & Social Impact',
      description: 'Donation platforms, volunteer management systems, and impact tracking tools for social organizations.',
      image: 'https://readdy.ai/api/search-image?query=Non-profit%20organization%20website%20showing%20donation%20platform%2C%20volunteer%20registration%2C%20impact%20metrics%2C%20community%20outreach%20programs%2C%20warm%20inspiring%20design%20with%20earth%20tones&width=600&height=400&seq=nonprofit&orientation=landscape',
      solutions: ['Donation Platforms', 'Volunteer Management', 'Impact Tracking', 'Event Management', 'Community Portals'],
      technologies: ['WordPress', 'React', 'PayPal', 'Mailchimp', 'Analytics'],
      clients: ['GreenEarth Foundation', 'Community Care', 'Hope Alliance'],
      results: ['400% increase in donations', '300% volunteer registration growth', '90% donor retention'],
      color: 'from-green-600 to-lime-500',
      icon: 'ri-heart-line'
    }
  ];

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
                <i className="ri-building-line w-4 h-4 flex items-center justify-center mr-2"></i>
                Industry Expertise
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Industries We
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  Transform
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                We bring deep industry knowledge and cutting-edge technology to deliver 
                tailored solutions that drive growth across diverse sectors.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {[
                  { number: '8+', label: 'Industries Served' },
                  { number: '100+', label: 'Projects Delivered' },
                  { number: '50+', label: 'Enterprise Clients' },
                  { number: '99%', label: 'Client Satisfaction' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="space-y-16"
            >
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl overflow-hidden hover:border-blue-500 transition-all duration-300"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img
                        src={industry.image}
                        alt={industry.name}
                        className="w-full h-96 lg:h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent lg:bg-gradient-to-r"></div>
                    </div>

                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${industry.color} rounded-xl mb-6`}>
                        <i className={`${industry.icon} text-2xl text-white`}></i>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{industry.name}</h3>
                      <p className="text-lg text-gray-400 mb-8 leading-relaxed">{industry.description}</p>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Our Solutions:</h4>
                          <div className="flex flex-wrap gap-2">
                            {industry.solutions.slice(0, 3).map((solution, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-blue-500/10 text-blue-300 text-sm rounded-full border border-blue-500/20"
                              >
                                {solution}
                              </span>
                            ))}
                            <span className="px-3 py-1 bg-gray-800 text-gray-400 text-sm rounded-full">
                              +{industry.solutions.length - 3} more
                            </span>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Key Results:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {industry.results.map((result, idx) => (
                              <div key={idx} className="text-center p-3 bg-gray-800/50 rounded-xl">
                                <div className="text-sm text-gray-300">{result}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {industry.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`bg-gradient-to-r ${industry.color} text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg whitespace-nowrap cursor-pointer flex items-center`}
                        >
                          <span>Explore Solutions</span>
                          <i className="ri-arrow-right-line w-5 h-5 flex items-center justify-center ml-2"></i>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Industry-Focused
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  Approach
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We don't believe in one-size-fits-all solutions. Each industry has unique challenges and requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Deep Research',
                  description: 'We study your industry\'s specific challenges, regulations, and market dynamics.',
                  icon: 'ri-search-line',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Custom Solutions',
                  description: 'Every solution is tailored to address your industry\'s unique requirements and workflows.',
                  icon: 'ri-settings-3-line',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  title: 'Continuous Innovation',
                  description: 'We stay updated with industry trends and emerging technologies to keep you ahead.',
                  icon: 'ri-lightbulb-line',
                  color: 'from-green-500 to-emerald-500'
                }
              ].map((approach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${approach.color} rounded-xl mx-auto mb-6`}>
                    <i className={`${approach.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{approach.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{approach.description}</p>
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
                Don't See Your
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  Industry?
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-12">
                We love exploring new industries and challenges. Let's discuss how we can help transform your sector.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-full text-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25 whitespace-nowrap cursor-pointer"
                >
                  Let's Talk
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-400 text-gray-300 px-12 py-5 rounded-full text-xl font-semibold hover:border-white hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  View All Work
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}