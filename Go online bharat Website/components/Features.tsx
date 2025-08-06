
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Features() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: 'ri-rocket-line',
      title: 'Lightning Fast',
      description: 'Optimized performance with cutting-edge technology for blazing fast load times and seamless user experiences.',
      color: 'blue',
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Enterprise Security',
      description: 'Bank-level security protocols protect your data with advanced encryption and compliance standards.',
      color: 'purple',
    },
    {
      icon: 'ri-phone-line',
      title: 'Mobile First',
      description: 'Responsive designs that work perfectly across all devices, from smartphones to desktop computers.',
      color: 'cyan',
    },
    {
      icon: 'ri-bar-chart-line',
      title: 'Analytics Driven',
      description: 'Data-driven insights help optimize your digital strategy with comprehensive analytics and reporting.',
      color: 'green',
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
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 group-hover:from-blue-500/30 group-hover:to-blue-600/30',
    purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 group-hover:from-purple-500/30 group-hover:to-purple-600/30',
    cyan: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 group-hover:from-cyan-500/30 group-hover:to-cyan-600/30',
    green: 'from-green-500/20 to-green-600/20 border-green-500/30 group-hover:from-green-500/30 group-hover:to-green-600/30',
  };

  const iconColors = {
    blue: 'text-blue-400',
    purple: 'text-purple-400',
    cyan: 'text-cyan-400',
    green: 'text-green-400',
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            We deliver exceptional digital solutions that drive real results for your business
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${colorClasses[feature.color as keyof typeof colorClasses]} border rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-lg`}>
                <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <i className={`${feature.icon} text-4xl ${iconColors[feature.color as keyof typeof iconColors]}`}></i>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
