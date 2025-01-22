import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Calendar, MapPin, Briefcase, X } from 'lucide-react';

interface Experience {
  id: number;
  company: string;
  title: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  industry: string;
  logo: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: 'Tech Innovators Inc.',
    title: 'Senior Full Stack Developer',
    period: '2021 - Present',
    location: 'San Francisco, CA',
    description: 'Leading development of enterprise-scale applications',
    responsibilities: [
      'Architected and implemented scalable web applications',
      'Led a team of 5 developers in agile development',
      'Established CI/CD pipelines and coding standards'
    ],
    achievements: [
      'Reduced application load time by 40%',
      'Implemented microservices architecture',
      'Mentored 3 junior developers to promotion'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB'],
    industry: 'Enterprise Software',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 2,
    company: 'Digital Solutions Ltd.',
    title: 'Full Stack Developer',
    period: '2019 - 2021',
    location: 'Austin, TX',
    description: 'Developed and maintained client projects',
    responsibilities: [
      'Built responsive web applications',
      'Optimized application performance',
      'Collaborated with UX/UI designers'
    ],
    achievements: [
      'Delivered 12 major projects on time',
      'Achieved 98% client satisfaction rate',
      'Introduced automated testing'
    ],
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis'],
    industry: 'Digital Agency',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 3,
    company: 'Creative Web Agency',
    title: 'Frontend Developer',
    period: '2017 - 2019',
    location: 'Seattle, WA',
    description: 'Created interactive web applications',
    responsibilities: [
      'Developed responsive user interfaces',
      'Implemented design systems',
      'Optimized frontend performance'
    ],
    achievements: [
      'Reduced bounce rate by 25%',
      'Created reusable component library',
      'Won "Best Design" award'
    ],
    technologies: ['React', 'TypeScript', 'SASS', 'Webpack'],
    industry: 'Web Development',
    logo: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  }
];

export default function ExperienceTimeline() {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const [hoveredExp, setHoveredExp] = useState<Experience | null>(null);

  return (
    <div className="relative">
      {/* Timeline */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/20 via-primary-500/40 to-primary-500/20">
        <motion.div
          className="absolute inset-0 bg-primary-500/50"
          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Experience Items */}
      <div className="space-y-12 relative">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row gap-8 items-center ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline Marker */}
            <motion.div
              className="relative flex-1 w-full md:w-[calc(50%-2rem)]"
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setHoveredExp(exp)}
              onHoverEnd={() => setHoveredExp(null)}
              onClick={() => setSelectedExp(exp)}
            >
              <div
                className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg cursor-pointer
                          border-2 border-transparent hover:border-primary-500 transition-all duration-300"
                role="button"
                tabIndex={0}
                aria-label={`View details for ${exp.title} at ${exp.company}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400">{exp.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                      <MapPin className="w-4 h-4 ml-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Tooltip */}
              <AnimatePresence>
                {hoveredExp?.id === exp.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-10
                             bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl
                             border border-primary-500/20"
                  >
                    <p className="text-sm font-medium">{exp.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Timeline Dot */}
            <div className="relative">
              <motion.div
                className="w-6 h-6 rounded-full bg-primary-500 border-4 border-white dark:border-gray-800
                          shadow-lg z-10 relative"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary-500/30"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>

            <div className="flex-1 w-full md:w-[calc(50%-2rem)]" />
          </motion.div>
        ))}
      </div>

      {/* Detailed Experience Modal */}
      <AnimatePresence>
        {selectedExp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedExp(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {selectedExp.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">{selectedExp.company}</p>
                </div>
                <button
                  onClick={() => setSelectedExp(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  aria-label="Close details"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{selectedExp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{selectedExp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    <span>{selectedExp.industry}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Key Responsibilities
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    {selectedExp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Notable Achievements</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    {selectedExp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600
                                 dark:text-primary-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}