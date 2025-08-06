'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

export default function AboutPage() {
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

  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Founder & Lead Developer',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20software%20developer%2C%20male%2C%20wearing%20modern%20business%20casual%20attire%2C%20friendly%20smile%2C%20clean%20background%20with%20soft%20lighting%2C%20professional%20photography%20style&width=400&height=400&seq=team1&orientation=squarish',
      bio: 'Full-stack developer with 8+ years of experience building scalable web applications. Passionate about clean code and user experience.',
      skills: ['React', 'Node.js', 'AWS', 'TypeScript'],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: 'Sarah Chen',
      role: 'UI/UX Design Lead',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20creative%20female%20UI%20UX%20designer%2C%20Asian%2C%20modern%20professional%20attire%2C%20confident%20expression%2C%20clean%20studio%20background%2C%20contemporary%20photography%20style&width=400&height=400&seq=team2&orientation=squarish',
      bio: 'Creative designer specializing in user-centered design and modern interfaces. 6 years of experience in digital product design.',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      social: {
        linkedin: '#',
        dribbble: '#',
        behance: '#'
      }
    },
    {
      name: 'Mike Rodriguez',
      role: 'Backend Architect',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20experienced%20software%20architect%2C%20Hispanic%20male%2C%20business%20shirt%2C%20serious%20professional%20expression%2C%20office%20background%2C%20corporate%20photography%20style&width=400&height=400&seq=team3&orientation=squarish',
      bio: 'Senior backend engineer with expertise in microservices and cloud architecture. 10+ years in enterprise software development.',
      skills: ['Python', 'Docker', 'Kubernetes', 'PostgreSQL'],
      social: {
        linkedin: '#',
        github: '#',
        medium: '#'
      }
    },
    {
      name: 'Emily Watson',
      role: 'Project Manager',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20female%20project%20manager%2C%20blonde%2C%20business%20professional%20attire%2C%20warm%20smile%2C%20modern%20office%20setting%2C%20executive%20photography%20style&width=400&height=400&seq=team4&orientation=squarish',
      bio: 'Agile project manager ensuring smooth delivery and client satisfaction. 7 years of experience in tech project management.',
      skills: ['Agile', 'Scrum', 'Stakeholder Management', 'Process Optimization'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  const timeline = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Started as a small team with a vision to create exceptional web experiences.',
      icon: 'ri-rocket-line'
    },
    {
      year: '2019',
      title: 'First Major Client',
      description: 'Successfully delivered our first enterprise-level project, setting the foundation for growth.',
      icon: 'ri-trophy-line'
    },
    {
      year: '2020',
      title: 'Team Expansion',
      description: 'Grew our team to 10+ specialists and expanded our service offerings.',
      icon: 'ri-team-line'
    },
    {
      year: '2021',
      title: 'International Reach',
      description: 'Extended our services globally, working with clients across 15+ countries.',
      icon: 'ri-global-line'
    },
    {
      year: '2022',
      title: 'Innovation Award',
      description: 'Received recognition for innovative web development practices and client satisfaction.',
      icon: 'ri-award-line'
    },
    {
      year: '2023',
      title: 'Present Day',
      description: 'Continuing to push boundaries with cutting-edge technology and exceptional service.',
      icon: 'ri-star-line'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We stay ahead of the curve by embracing new technologies and methodologies.',
      icon: 'ri-lightbulb-line',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Quality',
      description: 'Every line of code and design element is crafted with precision and attention to detail.',
      icon: 'ri-star-line',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve their business goals.',
      icon: 'ri-team-line',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Transparency',
      description: 'Open communication and honest feedback drive our client relationships.',
      icon: 'ri-eye-line',
      color: 'from-orange-500 to-red-500'
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
                <i className="ri-team-line w-4 h-4 flex items-center justify-center mr-2"></i>
                About Our Story
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                We Build Digital
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  Experiences
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                We're a passionate team of developers, designers, and strategists dedicated to creating 
                exceptional web experiences that drive business growth and user engagement.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                  { number: '5+', label: 'Years of Excellence' },
                  { number: '100+', label: 'Projects Delivered' },
                  { number: '50+', label: 'Happy Clients' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Our Mission &
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                    Vision
                  </span>
                </h2>
                <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                  We believe that great web experiences should be accessible to businesses of all sizes. 
                  Our mission is to democratize cutting-edge web technology and make it available to 
                  companies looking to make a real impact online.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Our vision is to become the go-to partner for businesses seeking innovative, 
                  scalable, and user-centric digital solutions that drive measurable growth.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20tech%20team%20collaborating%20in%20bright%20office%20space%20with%20multiple%20monitors%20showing%20code%20and%20design%20work%2C%20diverse%20group%20of%20professionals%20brainstorming%2C%20contemporary%20workspace%20with%20natural%20lighting&width=600&height=500&seq=mission&orientation=landscape"
                  alt="Team collaboration"
                  className="rounded-2xl object-cover w-full h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-2xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Core
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  Values
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                These principles guide everything we do and shape how we work with our clients and each other.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${value.color} rounded-xl mx-auto mb-4`}>
                    <i className={`${value.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet Our
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  Team
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A diverse group of passionate professionals united by our love for creating amazing digital experiences.
              </p>
            </motion.div>

            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 text-center group"
                >
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.bio}</p>

                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-3">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        className="w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-blue-500 text-gray-400 hover:text-white rounded-full transition-all duration-300 cursor-pointer"
                      >
                        <i className={`ri-${platform}-line text-sm`}></i>
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {' '}Journey
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From a small startup to a growing team of digital specialists, here's our story.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-center mb-12"
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} w-full`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300">
                        <div className="text-blue-400 font-bold mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>

                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0 z-10">
                      <i className={`${item.icon} text-white`}></i>
                    </div>

                    <div className="flex-1"></div>
                  </div>

                  {index < timeline.length - 1 && (
                    <div className="absolute left-1/2 top-16 w-px h-16 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2"></div>
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
                Ready to Work
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  Together?
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-12">
                Let's discuss how our team can help bring your digital vision to life.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-full text-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25 whitespace-nowrap cursor-pointer"
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}