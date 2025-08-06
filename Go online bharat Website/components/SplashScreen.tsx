
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-orange-950 to-green-950 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <i className="ri-global-line text-3xl text-white"></i>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Go Online Bharat
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-orange-950 to-green-950 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              i % 3 === 0 ? 'bg-orange-500/30' : i % 3 === 1 ? 'bg-green-500/30' : 'bg-blue-500/30'
            }`}
            initial={{ 
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0, 
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
              scale: 0 
            }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1
            }}
          />
        ))}
      </div>

      <div className="text-center z-10">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1.2,
            type: "spring",
            stiffness: 100
          }}
          className="mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(249, 115, 22, 0.5)",
                  "0 0 40px rgba(34, 197, 94, 0.5)",
                  "0 0 20px rgba(249, 115, 22, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-24 h-24 bg-gradient-to-r from-orange-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto"
            >
              <i className="ri-global-line text-3xl text-white"></i>
            </motion.div>
            
            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-orange-400/30 rounded-2xl"
            />
          </div>
        </motion.div>

        {/* Company Name Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent mb-4"
        >
          Go Online Bharat
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-gray-300 text-lg mb-8 font-light"
        >
          Accelerating Digital Transformation
        </motion.p>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="w-64 mx-auto"
        >
          <div className="bg-gray-800 rounded-full h-1 mb-4 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 to-green-600 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="text-gray-400 text-sm"
          >
            Loading... {progress}%
          </motion.p>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${
                i % 3 === 0 ? 'bg-orange-400' : i % 3 === 1 ? 'bg-green-400' : 'bg-blue-400'
              }`}
              initial={{ 
                x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
                y: typeof window !== 'undefined' ? window.innerHeight + 10 : 800
              }}
              animate={{ 
                y: -10,
                x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0
              }}
              transition={{ 
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
              style={{
                left: `${10 + (i * 10)}%`,
                top: '60%'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
