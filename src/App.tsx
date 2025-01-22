import Navbar from './components/Navbar';
import ThreeBackground from './components/ThreeBackground';
import ExperienceTimeline from './components/ExperienceTimeline';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Mail, Linkedin, ArrowRight, Code, Globe, Database, Building2, Calendar, MapPin, Briefcase } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <ThreeBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-medium"
                >
                  👋 Hi there, I'm
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
                    SHAKTIVEL
                  </span>
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-gray-300"
                >
                  I build things for the web
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-lg text-gray-600 dark:text-gray-400 max-w-lg"
              >
                I'm a Full Stack Developer specializing in building exceptional digital experiences.
                Currently, I'm focused on building accessible, human-centered products.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex items-center space-x-4"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <motion.div className="flex items-center space-x-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Animated Developer Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[600px]"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="w-full h-full relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Developer Setup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/30 via-primary-400/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-900/40"></div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-10 right-10 w-20 h-20 bg-primary-400/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute bottom-10 left-10 w-32 h-32 bg-primary-600/20 rounded-full blur-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 dark:text-gray-300"
              >
                Hello! I'm a passionate Full Stack Developer with a love for creating beautiful, functional, and user-friendly websites and applications. With over 5 years of experience in web development, I specialize in building exceptional digital experiences.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 dark:text-gray-300"
              >
                My expertise includes modern frontend frameworks like React and Vue.js, backend technologies including Node.js and Python, and cloud platforms such as AWS and Google Cloud.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px]"
            >
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Developer workspace"
                className="rounded-lg shadow-xl h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Project Roadmap</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-800"></div>

            {[
              {
                title: 'E-commerce Platform',
                description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB.',
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                icon: <Globe className="w-6 h-6" />,
                position: 'left',
              },
              {
                title: 'Task Management App',
                description: 'A real-time task management application using React and Firebase.',
                image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                icon: <Code className="w-6 h-6" />,
                position: 'right',
              },
              {
                title: 'Social Media Dashboard',
                description: 'An analytics dashboard for social media management using Vue.js and D3.js.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                icon: <Database className="w-6 h-6" />,
                position: 'left',
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: project.position === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-16 ${
                  project.position === 'left' ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
                } md:w-[calc(50%-40px)]`}
              >
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden">
                  {/* Laptop Frame */}
                  <div className="relative">
                    <div className="bg-gray-800 dark:bg-gray-700 p-2 rounded-t-lg">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="relative group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <a
                          href="#"
                          className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-6 h-6 text-gray-900" />
                        </a>
                        <a
                          href="#"
                          className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-6 h-6 text-gray-900" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-full">
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                  </div>
                </div>
                {/* Timeline Dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
          </motion.div>

          <ExperienceTimeline />
        </div>
      </section>

     {/* Space-Inspired Skills Section */}
<section id="skills" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
  {/* Background Stars */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-0 left-0 w-4 h-4 bg-white rounded-full blur-sm animate-pulse"></div>
    <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-blue-500 rounded-full blur-md animate-pulse"></div>
    <div className="absolute bottom-10 right-10 w-5 h-5 bg-purple-600 rounded-full blur-lg animate-pulse"></div>
    <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-yellow-500 rounded-full blur-md animate-pulse"></div>
  </div>

  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
        Skills from the Cosmos
      </h2>
      <p className="text-gray-300 text-lg">
        Explore my technical stack, orbiting around web development and beyond.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
      {[
        { icon: <Code className="w-10 h-10 text-primary-500" />, label: 'Frontend Development' },
        { icon: <Database className="w-10 h-10 text-yellow-500" />, label: 'Backend Development' },
        { icon: <Globe className="w-10 h-10 text-green-500" />, label: 'Web Performance' },
        { icon: <Building2 className="w-10 h-10 text-indigo-500" />, label: 'Architecture Design' },
        { icon: <Calendar className="w-10 h-10 text-teal-500" />, label: 'Agile Workflows' },
        { icon: <Briefcase className="w-10 h-10 text-pink-500" />, label: 'Cloud Platforms' },
      ].map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: 'easeOut',
          }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-4 bg-gray-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform"
        >
          <div className="p-4 bg-gray-900 rounded-full">
            {skill.icon}
          </div>
          <p className="text-lg font-semibold">{skill.label}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <Mail className="w-5 h-5" />
                  <span>contact@example.com</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-800 dark:border-gray-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-800 dark:border-gray-600"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-800 dark:border-gray-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;