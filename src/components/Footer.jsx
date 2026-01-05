import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="footer footer-center py-16 px-8 md:px-12 lg:px-16 border-t border-base-300 text-base-content"
    >
      <motion.p 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        whileHover={{ scale: 1.05 }}
        className="text-base-content/60 transition-transform duration-200"
      >
        © 2024 Joy. All rights reserved.
      </motion.p>
    </motion.footer>
  )
}

export default Footer