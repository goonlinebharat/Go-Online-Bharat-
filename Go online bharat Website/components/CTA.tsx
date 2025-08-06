'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function CTA() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
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

  return (
    <section className="py-24 relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20collaborative%20workspace%20with%20developers%20working%20on%20multiple%20screens%20showing%20code%20and%20web%20designs%2C%20team%20meeting%20in%20high-tech%20office%20with%20futuristic%20elements%2C%20professional%20atmosphere%20with%20blue%20and%20purple%20lighting&width=1920&height=600&seq=cta-bg&orientation=landscape')`,
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium">
              Ready to Get Started?
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
          >
            Let's Build Something
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
              Amazing Together
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to transform your digital presence? Get a free consultation and detailed project proposal. 
            Let's discuss how we can help your business grow online.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-full text-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25 whitespace-nowrap cursor-pointer flex items-center"
            >
              <span>Start Your Project</span>
              <i className="ri-arrow-right-line w-6 h-6 flex items-center justify-center ml-3"></i>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-400 text-gray-300 px-12 py-5 rounded-full text-xl font-semibold hover:border-white transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center"
            >
              <i className="ri-calendar-line w-6 h-6 flex items-center justify-center mr-3"></i>
              <span>Schedule Call</span>
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-xl mx-auto mb-4">
                <i className="ri-time-line text-2xl text-blue-400"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quick Response</h3>
              <p className="text-gray-400 text-sm">Get a response within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-500/10 rounded-xl mx-auto mb-4">
                <i className="ri-money-dollar-circle-line text-2xl text-purple-400"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Free Consultation</h3>
              <p className="text-gray-400 text-sm">No commitment, just honest advice</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-green-500/10 rounded-xl mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-green-400"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Guaranteed Results</h3>
              <p className="text-gray-400 text-sm">Your success is our priority</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}