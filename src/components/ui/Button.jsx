import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick, 
  href,
  type = 'button',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  ...props 
}) => {
  const baseClasses = 'btn transition-all duration-200'
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
    neutral: 'btn-neutral',
    success: 'btn-success',
    warning: 'btn-warning',
    error: 'btn-error'
  }
  
  const sizes = {
    xs: 'btn-xs text-xs',
    sm: 'btn-sm text-sm',
    md: 'text-base',
    lg: 'btn-lg text-lg'
  }
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${
    fullWidth ? 'btn-block' : ''
  } ${disabled ? 'btn-disabled' : ''} ${className}`
  
  const buttonProps = {
    whileHover: disabled ? {} : { scale: 1.05, y: -2 },
    whileTap: disabled ? {} : { scale: 0.95 },
    transition: { duration: 0.2 },
    className: buttonClasses,
    disabled: disabled || loading,
    ...props
  }
  
  const renderContent = () => (
    <>
      {loading && (
        <span className="loading loading-spinner loading-sm mr-2"></span>
      )}
      {icon && iconPosition === 'left' && !loading && (
        <span className={`${children ? 'mr-2' : ''} flex items-center`}>
          {React.isValidElement(icon) ? icon : <i className={icon}></i>}
        </span>
      )}
      {children}
      {icon && iconPosition === 'right' && !loading && (
        <span className={`${children ? 'ml-2' : ''} flex items-center`}>
          {React.isValidElement(icon) ? icon : <i className={icon}></i>}
        </span>
      )}
    </>
  )
  
  if (href && !disabled) {
    return (
      <motion.a 
        href={href} 
        {...buttonProps}
        onClick={(e) => {
          if (href.startsWith('#')) {
            e.preventDefault()
            const targetId = href.substring(1)
            const targetElement = document.getElementById(targetId)
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              })
            }
          }
          if (onClick) onClick(e)
        }}
      >
        {renderContent()}
      </motion.a>
    )
  }
  
  return (
    <motion.button type={type} onClick={onClick} {...buttonProps}>
      {renderContent()}
    </motion.button>
  )
}

export default Button