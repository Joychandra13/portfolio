import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import Button from './Button'

const ScrollToTop = ({ 
  showAfter = 300,
  className = '',
  ...props 
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAfter) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [showAfter])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      } ${className}`}
      {...props}
    >
      <Button
        variant="primary"
        size="lg"
        onClick={scrollToTop}
        className="btn-circle shadow-lg hover:shadow-xl transition-shadow duration-300"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-lg" />
      </Button>
    </div>
  )
}

export default ScrollToTop