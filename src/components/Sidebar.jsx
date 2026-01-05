import React from 'react'
import { Image, Button } from './ui'
import { 
  FaUser, 
  FaCogs, 
  FaLaptopCode, 
  FaFileAlt, 
  FaEnvelope, 
  FaLinkedinIn, 
  FaGithub, 
  FaWhatsapp,
  FaPaperPlane,
  FaAdjust
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Sidebar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = React.useState('hero')

  const navItems = [
    { icon: <FaUser />, text: 'About Me', href: '#hero', id: 'hero' },
    { icon: <FaCogs />, text: 'Skills', href: '#skills', id: 'skills' },
    { icon: <FaLaptopCode />, text: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { icon: <FaFileAlt />, text: 'Resume', href: '#resume', id: 'resume' },
    { icon: <FaEnvelope />, text: 'Contact', href: '#contact', id: 'contact' },
  ]

  const socialLinks = [
    { icon: <FaXTwitter />, href: 'https://x.com/Joy_ShutraDhar', label: 'X (Twitter)', color: 'hover:text-gray-300' },
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/joy-shutradhar/', label: 'LinkedIn', color: 'hover:text-blue-300' },
    { icon: <FaGithub />, href: 'https://github.com/Joychandra13', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/8801709879535', label: 'WhatsApp', color: 'hover:text-green-300' },
    { icon: <FaPaperPlane />, href: '#contact', label: 'Email', color: 'hover:text-blue-300' },
  ]

  const handleNavClick = (e, href, id) => {
    e.preventDefault()
    const targetId = href.substring(1) // Remove the '#' from href
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      setActiveSection(id)
      // Add a small offset to account for any fixed elements
      const offsetTop = targetElement.offsetTop - 20
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  // Add scroll listener to update active section
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'portfolio', 'resume', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <aside className="w-full md:w-72 bg-primary text-primary-content flex flex-col shrink-0 h-[100vh] md:h-screen md:sticky md:top-0 overflow-y-auto no-scrollbar">
      {/* Profile Section */}
      <div className="flex flex-col items-center p-8 text-center border-b border-primary-content/10">
        <h1 className="text-2xl md:text-3xl font-black mb-4 leading-tight hover:scale-105 transition-transform duration-200">
          Joy
        </h1>
        
        <div className="mb-4 hover:scale-105 transition-transform duration-300">
          <Image
            src="https://ik.imagekit.io/joy1414/Green%20White%20Modern%20Business%20LinkedIn%20Profile%20Picture%20(3).png"
            alt="Profile Picture of Joy, Frontend Developer and MERN Stack Student"
            size="md"
            rounded="full"
            className="ring ring-primary-content ring-opacity-20 ring-offset-primary ring-offset-2"
            hover={true}
          />
        </div>
        
        <p className="text-sm opacity-90 leading-relaxed mb-6 max-w-xs">
          Hi, I'm Joy, a frontend developer and MERN stack student. Welcome to my portfolio!
        </p>
        
        <div className="flex space-x-2 justify-center mb-2">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              className={`btn btn-ghost btn-circle btn-sm transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 active:scale-95 ${link.color}`}
              href={link.href}
              aria-label={link.label}
              target={link.href.startsWith('http') ? '_blank' : '_self'}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
              onClick={link.href.startsWith('#') ? (e) => handleNavClick(e, link.href) : undefined}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 w-full px-4 py-6">
        <ul className="menu menu-vertical w-full space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                className={`flex items-center space-x-3 rounded-lg p-3 cursor-pointer transition-all duration-200 hover:translate-x-1 hover:bg-primary-content/10 active:scale-98 ${
                  activeSection === item.id 
                    ? 'bg-primary-content/20 text-primary-content' 
                    : ''
                }`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.id)}
              >
                <span className="w-5 text-center text-base flex items-center justify-center">
                  {item.icon}
                </span>
                <span className="font-medium">{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Action Section */}
      <div className="p-6 mt-auto space-y-6 border-t border-primary-content/10">
        <Button
          variant="outline"
          fullWidth={true}
          icon={<FaPaperPlane />}
          href="#contact"
          className="border-primary-content/30 text-primary-content hover:bg-primary-content hover:text-primary"
        >
          Hire Me
        </Button>
        
        <div className="flex flex-col items-center space-y-3">
          <span className="text-xs font-semibold uppercase opacity-80 tracking-wider flex items-center">
            <FaAdjust className="mr-2" />
            Dark Mode
          </span>
          <input
            type="checkbox"
            className="toggle toggle-sm border-none toggle-accent active:scale-95 transition-transform"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
        </div>
      </div>
    </aside>
  )
}

export default Sidebar