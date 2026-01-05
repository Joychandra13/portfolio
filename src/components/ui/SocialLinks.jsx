import { motion } from 'framer-motion'
import Button from './Button'
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const SocialLinks = ({ 
  links = [],
  variant = 'circle',
  size = 'sm',
  className = '',
  showLabels = false,
  ...props 
}) => {
  const defaultLinks = [
    { 
      icon: <FaXTwitter />, 
      href: 'https://x.com/Joy_ShutraDhar', 
      label: 'X (Twitter)', 
      color: 'hover:text-gray-900 hover:bg-gray-100' 
    },
    { 
      icon: <FaLinkedinIn />, 
      href: 'https://www.linkedin.com/in/joy-shutradhar/', 
      label: 'LinkedIn', 
      color: 'hover:text-blue-600 hover:bg-blue-50' 
    },
    { 
      icon: <FaGithub />, 
      href: 'https://github.com/Joychandra13', 
      label: 'GitHub', 
      color: 'hover:text-gray-800 hover:bg-gray-100' 
    },
    { 
      icon: <FaWhatsapp />, 
      href: 'https://wa.me/8801709879535', 
      label: 'WhatsApp', 
      color: 'hover:text-green-600 hover:bg-green-50' 
    }
  ]
  
  const socialLinks = links.length > 0 ? links : defaultLinks
  
  const getButtonClasses = (link) => {
    const baseClasses = variant === 'circle' ? 'btn-circle' : ''
    const colorClasses = `transition-all duration-200 ${link.color || ''}`
    return `${baseClasses} btn-outline ${colorClasses}`
  }
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex ${showLabels ? 'flex-col gap-3' : 'gap-3 justify-center'} ${className}`}
      {...props}
    >
      {socialLinks.map((link, index) => (
        <motion.div 
          key={index} 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.3, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="transition-all duration-300"
        >
          <Button
            variant="ghost"
            size={size}
            href={link.href}
            className={getButtonClasses(link)}
            aria-label={link.label}
            target={link.href.startsWith('http') ? '_blank' : '_self'}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
          >
            <span className={`flex items-center ${showLabels ? 'mr-2' : ''}`}>
              {link.icon}
            </span>
            {showLabels && <span className="font-medium">{link.label}</span>}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default SocialLinks