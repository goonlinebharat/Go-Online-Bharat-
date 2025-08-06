
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Enhanced Background with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20Indian%20digital%20workspace%20showing%20web%20development%2C%20online%20business%20growth%2C%20digital%20transformation%20of%20Indian%20businesses%20with%20orange%20and%20green%20elements%2C%20professional%20technology%20environment%20with%20Indian%20flag%20colors%20theme&width=1920&height=1080&seq=gob-hero-bg&orientation=landscape')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-950/60" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            variants={floatingVariants}
            animate="animate"
            className={`absolute opacity-20 ${
              i % 4 === 0 ? 'text-orange-400' : 
              i % 4 === 1 ? 'text-green-400' : 
              i % 4 === 2 ? 'text-blue-400' : 'text-white'
            }`}
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${20 + (i * 6)}%`,
              fontSize: `${1 + (i % 3)}rem`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            <i className={`ri-${
              ['code-line', 'smartphone-line', 'global-line', 'rocket-line', 'store-line', 'india-line'][i % 6]
            } w-6 h-6 flex items-center justify-center`}></i>
          </motion.div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500/20 to-green-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium backdrop-blur-sm shadow-lg shadow-orange-500/10 cursor-pointer"
            >
              <motion.i 
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="ri-award-line w-4 h-4 flex items-center justify-center mr-2"
              ></motion.i>
              Empowering Indian Businesses Since 2019
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-none tracking-tight"
          >
            Take Your Business
            <motion.span 
              className="bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent block mt-4"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Online Today
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 leading-relaxed max-w-5xl mx-auto font-light"
          >
            We empower Indian businesses, startups, and entrepreneurs with affordable, modern, and scalable 
            digital solutions. From websites to automation - we make going digital simple and successful.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20"
          >
            <motion.a
              href="https://wa.me/918604708453"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(249, 115, 22, 0.5)",
                y: -5 
              }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-orange-600 to-green-600 text-white px-12 py-6 rounded-full text-xl font-semibold hover:from-orange-700 hover:to-green-700 transition-all duration-500 shadow-2xl shadow-orange-500/25 whitespace-nowrap cursor-pointer flex items-center relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
              <span className="relative z-10">Get Free Quote</span>
              <motion.i 
                whileHover={{ x: 5 }}
                className="ri-whatsapp-line w-6 h-6 flex items-center justify-center ml-3 relative z-10"
              ></motion.i>
            </motion.a>
            
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255,255,255,0.15)",
                borderColor: "#ffffff"
              }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-gray-400 text-gray-300 px-12 py-6 rounded-full text-xl font-semibold hover:text-white transition-all duration-500 whitespace-nowrap cursor-pointer flex items-center backdrop-blur-sm"
            >
              <motion.i 
                whileHover={{ scale: 1.2 }}
                className="ri-play-circle-line w-6 h-6 flex items-center justify-center mr-3"
              ></motion.i>
              <span>View Portfolio</span>
            </motion.button>
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {[
              { number: "50+", label: "Happy Clients", color: "from-orange-400 to-red-400", icon: "ri-heart-line" },
              { number: "70%", label: "Cost Savings", color: "from-green-400 to-emerald-400", icon: "ri-money-rupee-circle-line" },
              { number: "5+", label: "Years Experience", color: "from-blue-400 to-cyan-400", icon: "ri-time-line" },
              { number: "24/7", label: "Support Available", color: "from-purple-400 to-pink-400", icon: "ri-customer-service-line" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 cursor-pointer group"
              >
                <motion.i 
                  className={`${stat.icon} w-8 h-8 flex items-center justify-center mx-auto mb-3 text-2xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                />
                <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trusted Brands */}
          <motion.div
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
          >
            <div className="text-gray-400 text-lg mb-8 font-medium">Trusted by innovative Indian businesses:</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {["Truffé Chocolaterie", "Upscale Solution", "Radifizz", "Fugoli"].map((brand, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                  className="text-2xl font-bold text-gray-500 cursor-pointer transition-all duration-300"
                >
                  {brand}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer group"
      >
        <div className="flex flex-col items-center">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center mb-2 group-hover:border-white/60 transition-colors duration-300">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2 group-hover:bg-white/80 transition-colors duration-300"
            />
          </div>
          <span className="text-white/50 text-xs font-medium group-hover:text-white/80 transition-colors duration-300">Scroll</span>
        </div>
      </motion.div>
    </section>
  );
}
