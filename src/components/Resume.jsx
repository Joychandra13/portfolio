import React from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './ui/AnimatedSection'
import { SectionHeader, Button } from './ui'
import { FaDownload, FaBriefcase, FaGraduationCap, FaLaptop, FaTrophy, FaGlobe } from 'react-icons/fa'
import { LiaCertificateSolid } from 'react-icons/lia'

const Resume = () => {
  const workExperience = [
    {
      title: 'Web Designer & Developer',
      company: 'Arak International Properties • Remote',
      period: 'Nov 2024 – Jul 2025',
      current: false,
      description: 'Designed and developed responsive WordPress websites for real estate businesses. Focused on clean UI, performance optimization, SEO best practices, and mobile-first layouts to improve user engagement and lead conversion.',
      skills: ['WordPress', 'HTML', 'CSS', 'Responsive Web Design', 'SEO']
    },
    {
      title: 'Web Designer',
      company: 'FindInstruct (UK & PH) • Remote',
      period: 'Feb 2024 – Jul 2025',
      current: false,
      description: 'Built and customized directory-based websites using Brilliant Directories. Created responsive pages, improved navigation flow, and ensured cross-device compatibility for service-based platforms.',
      skills: ['Web Design', 'Brilliant Directories', 'HTML', 'CSS', 'Responsive Design']
    },
    {
      title: 'Freelance Web Designer',
      company: 'Self-Employed • Remote',
      period: '2021 – Present',
      current: true,
      description: 'Delivered modern, user-friendly websites using Wix, WordPress, and Squarespace for global clients. Completed 100+ projects with a strong focus on clean design, responsiveness, and client satisfaction.',
      skills: ['Wix', 'WordPress', 'Squarespace', 'Web Design', 'Responsive Web Design']
    },
    {
      title: 'MERN Stack Student',
      company: 'Self-Learning • Online',
      period: '2023 – Present',
      current: true,
      description: 'Currently expanding skills in full-stack development with MongoDB, Express.js, React, and Node.js. Building projects to master backend development, API integration, and database management.',
      skills: ['MongoDB', 'Express.js', 'Node.js', 'React', 'API Integration']
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Business Administration (BBA) – Accounting',
      school: 'National University of Bangladesh',
      period: '2021 – Present',
      description: 'Currently pursuing a Bachelor of Business Administration with a focus on Accounting. Developing strong analytical and business management skills while balancing academic studies with web development career.'
    },
    {
      degree: 'Higher Secondary School Certificate (HSC) – Business/Commerce',
      school: 'Madhupur Shahid Smrity Higher Secondary School',
      period: '2019 – 2020',
      description: 'Completed Higher Secondary education with a concentration in Business and Commerce. Built foundational knowledge in business principles, economics, and analytical thinking.'
    }
  ]

  const certifications = [
    {
      title: 'WordPress & E-Commerce Course',
      organization: 'CodemanBD',
      period: 'Aug 2024',
      description: 'Comprehensive course covering WordPress development, e-commerce solutions, and responsive web design techniques.',
      skills: ['WordPress', 'WordPress Design', 'Web Design', 'Responsive Web Design', 'Website Building']
    },
    {
      title: 'Semrush SEO Toolkit Course',
      organization: 'Semrush',
      period: 'Jan 2024',
      description: 'Advanced SEO training covering search engine optimization strategies, keyword research, and e-commerce SEO best practices.',
      skills: ['SEO', 'E-Commerce']
    },
    {
      title: 'Wix & Squarespace Course',
      organization: 'CodemanBD',
      period: 'Sep 2023',
      description: 'Specialized training in Wix and Squarespace platforms, focusing on custom design, responsive layouts, and website building.',
      skills: ['Wix', 'Wix Website Builder', 'Squarespace', 'Web Design', 'Responsive Web Design', 'Website Building']
    }
  ]

  const skills = {
    frontend: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
    cms: ['WordPress', 'Wix', 'Squarespace', 'WooCommerce'],
    backend: ['Node.js (Learning)', 'Express.js (Learning)', 'MongoDB (Learning)', 'API Integration'],
    tools: ['Git', 'VS Code', 'Figma', 'SEO Tools']
  }

  const achievements = [
    {
      title: '100+ Completed Projects',
      organization: 'Since 2021',
      icon: <FaBriefcase className="text-xl" />,
      color: 'success'
    },
    {
      title: 'WordPress & E-Commerce Course',
      organization: 'CodemanBD • Aug 2024',
      icon: <LiaCertificateSolid className="text-xl" />,
      color: 'warning'
    },
    {
      title: 'Semrush SEO Toolkit Course',
      organization: 'Semrush • Jan 2024',
      icon: <LiaCertificateSolid className="text-xl" />,
      color: 'info'
    },
    {
      title: 'Wix & Squarespace Course',
      organization: 'CodemanBD • Sep 2023',
      icon: <LiaCertificateSolid className="text-xl" />,
      color: 'warning'
    }
  ]

  return (
    <AnimatedSection>
      {/* Page Header */}
      <SectionHeader
        title="My Resume"
        subtitle="Frontend Developer and MERN Stack Student with 100+ completed projects since 2021. Passionate about creating clean, responsive, and user-friendly web interfaces."
        level={2}
        className="mb-8"
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
      >
        <div className="flex-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex items-center gap-3 mb-6"
          >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <FaBriefcase className="text-lg sm:text-xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-base-content">Work Experience</h3>
            </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <Button
            variant="primary"
            size="lg"
            icon={<FaDownload />}
            href="https://drive.google.com/file/d/10hQtlyCgdkiyV4XC2OE8hoh6eXbU_pa8/view?usp=drive_link"
            className="w-full sm:w-auto"
          >
            Resume
          </Button>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        {/* Left Column (Timeline Content) */}
        <div className="lg:col-span-8 flex flex-col gap-8 lg:gap-12">
          {/* Work Experience Section */}
          <AnimatedSection.Item>
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body p-4 sm:p-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="space-y-6"
                >
                  {workExperience.map((job, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      className={`${index !== 0 ? 'pt-6 border-t border-base-300' : ''}`}
                    >
                      <div className="flex flex-col gap-2 mb-3">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                          <h4 className="font-bold text-base sm:text-lg text-base-content leading-tight">{job.title}</h4>
                          <div className={`badge badge-sm sm:badge-md ${
                            job.current 
                              ? 'badge-success'
                              : 'badge-neutral'
                          }`}>
                            {job.period}
                          </div>
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-primary">{job.company}</div>
                      </div>
                      <p className="text-base-content/70 text-xs sm:text-sm leading-relaxed mb-3">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {job.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="badge badge-outline badge-xs sm:badge-sm hover:scale-105 transition-transform duration-200"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </AnimatedSection.Item>

          {/* Education Section */}
          <AnimatedSection.Item>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <FaGraduationCap className="text-lg sm:text-xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-base-content">Education</h3>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="card bg-base-200 shadow-lg"
            >
              <div className="card-body p-4 sm:p-6">
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      className={`${index !== 0 ? 'pt-6 border-t border-base-300' : ''}`}
                    >
                      <div className="flex flex-col gap-2 mb-2">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                          <h4 className="font-bold text-base sm:text-lg text-base-content leading-tight">{edu.degree}</h4>
                          <div className="badge badge-neutral badge-sm sm:badge-md">
                            {edu.period}
                          </div>
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-primary">{edu.school}</div>
                      </div>
                      <p className="text-base-content/70 text-xs sm:text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatedSection.Item>
        </div>

        {/* Right Column (Skills & Achievements) */}
        <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-10">
          {/* Skills Section */}
          <AnimatedSection.Item
            className="card bg-base-200 shadow-lg"
          >
            <div className="card-body p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <FaLaptop className="text-primary text-lg sm:text-xl" />
                <h3 className="card-title text-base sm:text-lg text-base-content">Technical Skills</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-base-content/60 uppercase tracking-wider mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {skills.frontend.map((skill, index) => (
                      <div
                        key={index}
                        className="badge badge-primary badge-outline badge-xs sm:badge-sm hover:scale-105 transition-transform duration-200"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-base-content/60 uppercase tracking-wider mb-2">CMS & Platforms</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {skills.cms.map((skill, index) => (
                      <div
                        key={index}
                        className="badge badge-secondary badge-outline badge-xs sm:badge-sm hover:scale-105 transition-transform duration-200"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-base-content/60 uppercase tracking-wider mb-2">Backend (Learning)</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {skills.backend.map((skill, index) => (
                      <div
                        key={index}
                        className="badge badge-accent badge-outline badge-xs sm:badge-sm hover:scale-105 transition-transform duration-200"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-base-content/60 uppercase tracking-wider mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {skills.tools.map((skill, index) => (
                      <div
                        key={index}
                        className="badge badge-neutral badge-outline badge-xs sm:badge-sm hover:scale-105 transition-transform duration-200"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection.Item>

          {/* Achievements */}
          <AnimatedSection.Item>
            <div className="flex items-center gap-2 mb-4">
              <FaTrophy className="text-primary text-lg sm:text-xl" />
              <h3 className="text-base sm:text-lg font-bold text-base-content">Achievements & Certificates</h3>
            </div>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                >
                  <div className="card-body p-3 sm:p-4">
                    <div className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center ${
                        achievement.color === 'warning' ? 'bg-warning/20 text-warning' :
                        achievement.color === 'info' ? 'bg-info/20 text-info' :
                        'bg-success/20 text-success'
                      }`}>
                        <div className="text-base sm:text-lg">
                          {achievement.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-xs sm:text-sm text-base-content leading-tight">{achievement.title}</h4>
                        <p className="text-xs text-base-content/60 mt-0.5 leading-tight">{achievement.organization}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection.Item>

          {/* Languages */}
          <AnimatedSection.Item
            className="card bg-primary shadow-lg"
          >
            <div className="card-body p-4 sm:p-6 text-white">
              <h3 className="card-title flex items-center gap-2 text-base sm:text-lg">
                <FaGlobe className="text-lg sm:text-xl" />
                Languages
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-medium">Bengali</span>
                  <span className="text-xs opacity-80">Native</span>
                </div>
                <div className="w-full bg-black/20 rounded-full h-1.5">
                  <div className="bg-primary-content h-1.5 rounded-full w-full transition-all duration-1000" />
                </div>
                <div className="flex justify-between items-end mt-2">
                  <span className="text-sm font-medium">English</span>
                  <span className="text-xs opacity-80">Professional</span>
                </div>
                <div className="w-full bg-black/20 rounded-full h-1.5">
                  <div className="bg-primary-content h-1.5 rounded-full w-[90%] transition-all duration-1000" />
                </div>
              </div>
            </div>
          </AnimatedSection.Item>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default Resume