'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Stats() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    {
      number: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered web solutions across various industries',
      icon: 'ri-briefcase-line',
      color: 'blue',
    },
    {
      number: '250+',
      label: 'Happy Clients',
      description: 'Businesses trust us with their digital presence',
      icon: 'ri-user-heart-line',
      color: 'green',
    },
    {
      number: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Reliable hosting and maintenance services',
      icon: 'ri-shield-check-line',
      color: 'purple',
    },
    {
      number: '48hrs',
      label: 'Average Response',
      description: 'Fast turnaround time for project delivery',
      icon: 'ri-time-line',
      color: 'orange',
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const colorClasses = {
    blue: 'text-blue-400',
    green: 'text-green-400', 
    purple: 'text-purple-400',
    orange: 'text-orange-400',
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                <div className={`w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl`}>
                  <i className={`${stat.icon} text-3xl ${colorClasses[stat.color as keyof typeof colorClasses]}`}></i>
                </div>
                
                <div className={`text-4xl font-bold mb-2 ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
                  {stat.number}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {stat.label}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}