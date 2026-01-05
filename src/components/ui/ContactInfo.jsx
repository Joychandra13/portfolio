import React from 'react'
import { motion } from 'framer-motion'
import Card from './Card'
import { IoCallOutline } from 'react-icons/io5'

const ContactInfo = ({ 
  info = [],
  className = '',
  ...props 
}) => {
  const defaultInfo = [
    {
      title: 'Email',
      value: 'joychandra1414@gmail.com',
      href: 'mailto:joychandra1414@gmail.com'
    },
    {
      title: 'Phone',
      value: '+8801709879535',
      href: 'tel:+8801709879535'
    },
    {
      title: 'Location',
      value: 'Tangail, Dhaka, Bangaladesh',
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