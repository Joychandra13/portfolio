import React, { useState } from 'react'

const Image = ({
  src,
  alt,
  className = '',
  aspectRatio = 'auto',
  size = 'full',
  rounded = 'md',
  hover = true,
  loading = 'lazy',
  objectFit = 'cover',
  placeholder = true,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const aspectRatioClasses = {
    auto: '',
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    wide: 'aspect-[21/9]'
  }

  const sizeClasses = {
    xs: 'w-16 h-16',
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64',
    full: 'w-full h-full'
  }

  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full'
  }

  const objectFitClasses = {
    contain: 'object-contain',
    cover: 'object-cover',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down'
  }

  const hoverClass = hover ? 'hover:scale-105 transition-transform duration-300' : ''
  const imageClasses = `${sizeClasses[size]} ${aspectRatioClasses[aspectRatio]} ${roundedClasses[rounded]} ${objectFitClasses[objectFit]} ${hoverClass} transition-all duration-300 ${className}`

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  if (hasError) {
    return (
      <div className={`${imageClasses} bg-base-300 flex items-center justify-center`}>
        <div className="text-center text-base-content/50">
          <i className="fas fa-image text-2xl mb-2 block"></i>
          <span className="text-sm">Image not found</span>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${aspectRatioClasses[aspectRatio] || sizeClasses[size]}`}>
      {isLoading && placeholder && (
        <div className={`absolute inset-0 ${roundedClasses[rounded]} bg-base-300 animate-pulse flex items-center justify-center`}>
          <div className="loading loading-spinner loading-md text-base-content/30"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`${imageClasses} ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  )
}

export default Image