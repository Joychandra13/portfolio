import React from 'react'

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  shadow = 'lg',
  background = 'base-200',
  size = 'md',
  aspectRatio = null,
  ...props 
}) => {
  const baseClasses = 'card transition-all duration-200'
  
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl'
  }
  
  const backgroundClasses = {
    'base-100': 'bg-base-100',
    'base-200': 'bg-base-200',
    'base-300': 'bg-base-300',
    'primary': 'bg-primary text-primary-content',
    'secondary': 'bg-secondary text-secondary-content',
    'gradient': 'bg-gradient-to-br from-primary to-secondary text-primary-content'
  }
  
  const sizeClasses = {
    sm: 'card-compact',
    md: '',
    lg: 'p-6'
  }
  
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]'
  }
  
  const cardClasses = `${baseClasses} ${backgroundClasses[background]} ${shadowClasses[shadow]} ${sizeClasses[size]} ${
    aspectRatio ? aspectRatioClasses[aspectRatio] : ''
  } ${hover ? 'hover:-translate-y-0.5 hover:scale-101' : ''} ${className}`
  
  return (
    <div 
      className={cardClasses}
      {...props}
    >
      {children}
    </div>
  )
}

const CardBody = ({ children, className = '', padding = 'default', ...props }) => {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    default: 'card-body',
    lg: 'p-8'
  }
  
  return (
    <div className={`${paddingClasses[padding]} ${className}`} {...props}>
      {children}
    </div>
  )
}

const CardTitle = ({ children, className = '', size = 'md', ...props }) => {
  const sizeClasses = {
    sm: 'text-lg font-semibold',
    md: 'card-title',
    lg: 'text-2xl font-bold'
  }
  
  return (
    <h2 className={`${sizeClasses[size]} ${className}`} {...props}>
      {children}
    </h2>
  )
}

const CardActions = ({ children, className = '', justify = 'end', ...props }) => {
  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between'
  }
  
  return (
    <div className={`card-actions ${justifyClasses[justify]} ${className}`} {...props}>
      {children}
    </div>
  )
}

Card.Body = CardBody
Card.Title = CardTitle
Card.Actions = CardActions

export default Card