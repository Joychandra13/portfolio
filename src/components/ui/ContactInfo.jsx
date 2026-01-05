import React from 'react'
import { motion } from 'framer-motion'
import Card from './Card'

const ContactInfo = ({ 
  info = [],
  className = '',
  ...props 
}) => {
  const defaultInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'simon.doe@example.com',
      href: 'mailto:simon.doe@example.com'
    },
    {
      icon: 'fas fa-phone-alt',
      title: 'Phone',
      value: '+1 (234) 567-890',
      href: 'tel:+1234567890'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'San Francisco, CA',
      href: null
    }
  ]
  
  const contactInfo = info.length > 0 ? info : defaultInfo
  
  return (
    <Card 
      background="base-200" 
      hover={true}
      className={`h-full min-h-[300px] ${className}`} 
      {...props}
    >
      <Card.Body className="p-6">
        <Card.Title className="text-xl md:text-2xl mb-6 text-center">
          Contact Info
        </Card.Title>
        <div className="space-y-6 flex-grow">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-base-100/50 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <i className={`${item.icon} text-lg`}></i>
              </div>
              <div className="flex-grow">
                <h4 className="font-semibold text-base md:text-lg text-base-content mb-1">
                  {item.title}
                </h4>
                {item.href ? (
                  <motion.a
                    whileHover={{ color: '#54B689' }}
                    className="link link-primary text-sm md:text-base font-medium"
                    href={item.href}
                  >
                    {item.value}
                  </motion.a>
                ) : (
                  <span className="text-base-content/70 text-sm md:text-base">
                    {item.value}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Card.Body>
    </Card>
  )
}

export default ContactInfo