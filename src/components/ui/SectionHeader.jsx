import React from 'react'

const SectionHeader = ({ 
  title, 
  subtitle, 
  accent = true,
  level = 1,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  ...props 
}) => {
  // Standardized heading styles based on level
  const headingStyles = {
    1: 'text-4xl md:text-5xl lg:text-6xl font-black leading-tight',
    2: 'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
    3: 'text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight',
    4: 'text-xl md:text-2xl lg:text-3xl font-semibold leading-snug',
    5: 'text-lg md:text-xl lg:text-2xl font-medium leading-snug',
    6: 'text-base md:text-lg lg:text-xl font-medium leading-normal'
  }

  const HeadingTag = `h${level}`
  
  return (
    <header 
      className={`mb-12 ${className}`}
      {...props}
    >
      <HeadingTag
        className={`${headingStyles[level]} text-base-content mb-6 ${
          accent ? 'relative inline-block' : ''
        } ${titleClassName} hover:scale-105 transition-transform duration-200`}
      >
        {title}
        {accent && (
          <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/30 -z-10 rounded-sm"></span>
        )}
      </HeadingTag>
      {subtitle && (
        <p className={`text-lg md:text-xl leading-relaxed text-base-content/70 max-w-4xl ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </header>
  )
}

export default SectionHeader