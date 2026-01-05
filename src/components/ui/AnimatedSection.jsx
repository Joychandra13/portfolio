import React from 'react'
import { motion } from 'framer-motion'

const AnimatedSection = ({ 
  children, 
  className = '',
  stagger = true,
  delay = 0,
  padding = true,
  ...props 
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger ? 0.1 : 0,
        delay
      }
    }
  }
  
  const paddingClasses = padding ? 'py-16 px-8 md:px-12 lg:px-16' : ''
  
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className={`${paddingClasses} ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  )
}

const AnimatedItem = ({ 
  children, 
  className = '',
  delay = 0,
  direction = 'up',
  ...props 
}) => {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 }
  }
  
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      ...directions[direction]
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        delay
      }
    }
  }
  
  return (
    <motion.div
      variants={itemVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

AnimatedSection.Item = AnimatedItem

export default AnimatedSection