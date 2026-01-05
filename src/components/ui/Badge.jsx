import React from 'react'

const Badge = ({ 
  children, 
  variant = 'neutral', 
  size = 'md',
  outline = false,
  className = '',
  hover = true,
  ...props 
}) => {
  const baseClasses = 'badge'
  
  const variants = {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    accent: 'badge-accent',
    neutral: 'badge-neutral',
    info: 'badge-info',
    success: 'badge-success',
    warning: 'badge-warning',
    error: 'badge-error'
  }
  
  const sizes = {
    xs: 'badge-xs',
    sm: 'badge-sm',
    md: '',
    lg: 'badge-lg'
  }
  
  const outlineClass = outline ? 'badge-outline' : ''
  const hoverClass = hover ? 'hover:scale-105 transition-transform duration-200' : ''
  
  const badgeClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${outlineClass} ${hoverClass} ${className}`
  
  return (
    <div 
      className={badgeClasses}
      {...props}
    >
      {children}
    </div>
  )
}

export default Badge