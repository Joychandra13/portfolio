import React from 'react'
import { motion } from 'framer-motion'
import { Button, Image } from './ui'
import { FaBriefcase, FaFileAlt } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="hero min-h-[100vh]">
          <div className="hero-content flex-col lg:flex-row-reverse gap-12 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:w-1/3 w-full flex justify-center"
            >
              <div className="relative">
                <Image
                  src="https://ik.imagekit.io/joy1414/Green%20White%20Modern%20Business%20LinkedIn%20Profile%20Picture%20(3).png"
                  alt="Portrait of Joy, Frontend Developer and MERN Stack Student"
                  aspectRatio="portrait"
                  size="full"
                  rounded="lg"
                  className="max-w-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                  hover={true}
                />
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.4, type: "spring" }}
                  className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg"
                >
                  <FaBriefcase className="text-primary-content text-xl" />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="lg:w-2/3 text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-base-content mb-4 leading-tight"
              >
                Hi, I'm Joy
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xl md:text-2xl lg:text-3xl text-primary font-semibold mb-6 leading-snug"
              >
                Frontend Developer & MERN Stack Student
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-lg md:text-xl leading-relaxed mb-8 text-base-content/70 max-w-2xl"
              >
                I'm focused on building clean, responsive, and user-friendly web interfaces. 
                I also specialize in Wix, WordPress, and Squarespace website design, with{' '}
                <span className="font-semibold text-primary">100+ completed projects</span>{' '}
                since 2021. Let's work together to make your project awesome!
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  variant="primary"
                  size="lg"
                  icon={<FaBriefcase />}
                  href="#portfolio"
                >
                  View Portfolio
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  icon={<FaFileAlt />}
                  href="#resume"
                >
                  View Resume
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero