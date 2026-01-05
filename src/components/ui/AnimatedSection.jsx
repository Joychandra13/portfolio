import React from 'react'

const AnimatedSection = ({ 
  children, 
  className = '',
  stagger = true,
  delay = 0,
  padding = true,
  ...props 
}) => {
  const paddingClasses = padding ? 'py-16 px-8 md:px-12 lg:px-16' : ''
  
  return (
    <section
      className={`${paddingClasses} ${className}`}
      {...props}
    >
      {children}
    </section>
  )
}

const AnimatedItem = ({ 
  children, 
  className = '',
  delay = 0,
  direction = 'up',
  ...props 
}) => {
  return (
    <div
      className={className}
      {...props}
    >
      {children}
    </div>
  )
}

AnimatedSection.Item = AnimatedItem

export default AnimatedSection