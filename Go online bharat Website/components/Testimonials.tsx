'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function Testimonials() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20businesswoman%20CEO%20in%20modern%20office%2C%20confident%20smile%2C%20business%20attire%2C%20clean%20corporate%20headshot%20style%20with%20soft%20lighting%20and%20neutral%20background&width=150&height=150&seq=testimonial-sarah&orientation=squarish',
      content: 'Working with this team transformed our online presence completely. Our website conversion rate increased by 340% within the first month. The attention to detail and technical expertise is unmatched.',
      rating: 5,
      project: 'E-commerce Platform'
    },
    {
      name: 'Michael Chen',
      position: 'Founder, DigitalFlow',
      company: 'DigitalFlow',
      image: 'https://readdy.ai/api/search-image?query=Professional%20businessman%20founder%20in%20modern%20startup%20office%2C%20friendly%20smile%2C%20casual%20business%20attire%2C%20tech%20entrepreneur%20headshot%20with%20contemporary%20lighting%20and%20minimal%20background&width=150&height=150&seq=testimonial-michael&orientation=squarish',
      content: 'The web application they built for us handles over 10,000 users daily without any issues. The performance optimization and scalable architecture they implemented exceeded our expectations.',
      rating: 5,
      project: 'Web Application'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Marketing Director, InnovateLab',
      company: 'InnovateLab',
      image: 'https://readdy.ai/api/search-image?query=Professional%20marketing%20director%20in%20contemporary%20office%20space%2C%20warm%20smile%2C%20professional%20blazer%2C%20corporate%20headshot%20with%20modern%20lighting%20and%20clean%20background&width=150&height=150&seq=testimonial-emily&orientation=squarish',
      content: 'Their mobile-first approach and SEO optimization brought our organic traffic up by 450%. The website loads incredibly fast and looks amazing on all devices. Highly recommended!',
      rating: 5,
      project: 'Corporate Website'
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

  return (
    <section className="py-24 relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Abstract%20geometric%20pattern%20with%20interconnected%20nodes%20and%20lines%2C%20modern%20tech%20background%20with%20subtle%20gradients%2C%20dark%20blue%20and%20purple%20tones%20with%20glowing%20connection%20points&width=1920&height=800&seq=testimonials-bg&orientation=landscape')`,
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-300 text-sm font-medium">
              Client Success Stories
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Real feedback from businesses we've helped grow through exceptional web development
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 mb-8">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-2xl w-6 h-6 flex items-center justify-center"></i>
                  ))}
                </div>
                
                <blockquote className="text-2xl md:text-3xl text-white mb-8 leading-relaxed font-light">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover object-top mr-4"
                  />
                  <div className="text-left">
                    <div className="text-xl font-semibold text-white">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-gray-400">
                      {testimonials[activeTestimonial].position}
                    </div>
                    <div className="text-blue-400 text-sm mt-1">
                      Project: {testimonials[activeTestimonial].project}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-12 h-12 rounded-full border-2 transition-all duration-300 cursor-pointer ${
                    activeTestimonial === index
                      ? 'border-blue-500 bg-blue-500/20'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  <img
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    className="w-full h-full rounded-full object-cover object-top"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}