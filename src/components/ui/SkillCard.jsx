import React from 'react'
import { motion } from 'framer-motion'
import Card from './Card'

const SkillCard = ({ 
  icon,
  icons = [],
  title,
  description,
  className = '',
  ...props 
}) => {
  return (
    <Card 
      background="base-200" 
      hover={true}
      className={`h-full min-h-[280px] transition-shadow duration-300 ${className}`}
      whileHover={{ y: -5, scale: 1.02 }}
      {...props}
    >
      <Card.Body className="items-center h-full flex flex-col justify-between p-6">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="mb-6 flex-shrink-0"
        >
          {icons.length > 0 ? (
            <div className="flex space-x-3 text-4xl justify-center items-center">
              {icons.map((iconElement, iconIndex) => (
                <span key={iconIndex} className="flex items-center">
                  {React.isValidElement(iconElement) ? iconElement : <i className={iconElement}></i>}
                </span>
              ))}
            </div>
          ) : (
            <span className="flex items-center justify-center">
              {React.isValidElement(icon) ? icon : <i className={icon}></i>}
            </span>
          )}
        </motion.div>
        
        <div className="flex-grow flex flex-col justify-center">
          <Card.Title className="text-lg md:text-xl text-base-content mb-4 leading-tight">
            {title}
          </Card.Title>
          <p className="text-sm md:text-base text-base-content/70 leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>
      </Card.Body>
    </Card>
  )
}

export default SkillCard