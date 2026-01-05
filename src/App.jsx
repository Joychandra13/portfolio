import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Portfolio from './components/Portfolio.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { ScrollToTop } from './components/ui'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.setAttribute('data-theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="font-body bg-base-100 text-base-content transition-colors duration-300 min-h-screen">
      <div className="flex flex-col md:flex-row min-h-screen">
        <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-1 overflow-x-hidden">
          <div className="opacity-100 transition-opacity duration-500">
            <section id="hero">
              <Hero />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="portfolio">
              <Portfolio />
            </section>
            <section id="resume">
              <Resume />
            </section>
            <section id="contact">
              <Contact />
            </section>
            <Footer />
          </div>
        </main>
      </div>
      <ScrollToTop />
    </div>
  )
}

export default App