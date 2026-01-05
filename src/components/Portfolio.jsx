import React from 'react'
import { SectionHeader, AnimatedSection, ProjectCard } from './ui'

const Portfolio = () => {
  const projects = [
    {
      title: 'TicketBari',
      description: 'Built a full-stack ticket booking system using React, Node.js, Express, and MongoDB. Implemented Firebase authentication with secure JWT-based API protection, integrated Stripe payment gateway with booking status and payment history, and developed role-based access control (User, Vendor, Admin).',
      image: 'https://ik.imagekit.io/joy1414/ticket-bari-client-01-05-2026_06_48_PM.png',
      tags: ['React', 'Express', 'MongoDB', 'Firebase', 'Stripe', 'JWT'],
      href: 'https://ticketbari.netlify.app/',
      featured: true,
      period: 'Dec 2025'
    },
    {
      title: 'Future Box — Habit Tracking Web App',
      description: 'A responsive habit-tracking web app with animated UI, progress tracking, and auth-protected details. Features habit tracking with progress & streaks, 30-day progress indicator, and CRUD operations with Node.js + MongoDB backend.',
      image: 'https://ik.imagekit.io/joy1414/Future-Box-Client-01-04-2026_04_36_PM.png',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'MongoDB', 'Node.js'],
      href: 'https://b12-a10-future-box-joy.netlify.app/',
      featured: true,
      period: 'Nov 2025'
    },
    {
      title: 'Hero Apps',
      description: 'Hero Apps is a web application that showcases a collection of top-rated mobile applications. Users can browse, search, and view detailed information about each app, including ratings, reviews, and download statistics.',
      image: 'https://ik.imagekit.io/joy1414/a08-hero-apps-11-20-2025_09_29_PM.png',
      tags: ['React', 'React Router', 'Tailwind CSS', 'DaisyUI', 'Recharts'],
      href: 'https://a008-hero-apps.netlify.app/',
      period: 'Oct 2025'
    },
    {
      title: 'A Reading Adventure',
      description: 'Designed and developed a clean, user-friendly website for book lovers and readers on Wix. Created a digital space where people can explore reading journeys, find book recommendations, and get inspired to read more with interactive sections and reading challenges.',
      image: 'https://ik.imagekit.io/joy1414/Our-Books-A-Reading-Adventure.jpg',
      tags: ['Wix', 'Web Design', 'Responsive Design', 'UI/UX'],
      href: 'https://joychandra1313.wixsite.com/areadingadventure',
      period: 'Aug 2023'
    }
  ]

  return (
    <AnimatedSection>
      <SectionHeader
        title="My Portfolio"
        subtitle="Welcome to my portfolio showcasing 100+ completed projects since 2021. From modern React applications to beautiful CMS websites, I create clean, responsive, and user-friendly web solutions that help businesses grow online."
        level={2}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
        {projects.map((project, index) => (
          <AnimatedSection.Item key={index} delay={index * 0.1} className="h-full">
            <ProjectCard {...project} />
          </AnimatedSection.Item>
        ))}
      </div>
    </AnimatedSection>
  )
}

export default Portfolio