import React from 'react'
import { AnimatedSection, SkillCard, SectionHeader } from './ui'
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaWordpress, 
  FaShopify,
  FaSearch
} from 'react-icons/fa'
import { 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiWix, 
  SiSquarespace 
} from 'react-icons/si'

const Skills = () => {
  const skills = [
    {
      icon: <FaReact className="text-4xl text-info" />,
      title: 'React Development',
      description: 'Building modern web applications with React components, hooks, routing, and state management. Creating reusable UI components and implementing responsive designs.'
    },
    {
      icons: [
        <FaJs className="text-warning" />,
        <FaHtml5 className="text-error" />,
        <FaCss3Alt className="text-info" />
      ],
      title: 'Frontend Technologies',
      description: 'Expert in ES6+ JavaScript, HTML5, and CSS3. Creating clean, semantic markup and modern styling with responsive design principles.'
    },
    {
      icon: <SiTailwindcss className="text-4xl text-info" />,
      title: 'Responsive UI Design',
      description: 'Crafting beautiful, mobile-first responsive interfaces using Tailwind CSS and modern CSS techniques. Focus on user experience and accessibility.'
    },
    {
      icons: [
        <FaNodeJs className="text-success" />,
        <SiExpress className="text-neutral" />,
        <SiMongodb className="text-success" />
      ],
      title: 'MERN Stack (Learning)',
      description: 'Currently mastering Node.js, Express.js, and MongoDB to become a full-stack developer. Building RESTful APIs and database integration.'
    },
    {
      icons: [
        <SiWix className="text-primary" />,
        <FaWordpress className="text-info" />,
        <SiSquarespace className="text-neutral" />
      ],
      title: 'CMS & Website Builders',
      description: 'Specialized in Wix, WordPress & WooCommerce, and Squarespace. Created 100+ websites with custom designs and e-commerce functionality.'
    },
    {
      icon: <FaShopify className="text-4xl text-success" />,
      title: 'E-commerce Development',
      description: 'Building online stores and landing pages with focus on conversion optimization. Experience with various e-commerce platforms and payment integrations.'
    },
    {
      icon: <FaSearch className="text-4xl text-warning" />,
      title: 'SEO Optimization',
      description: 'Implementing on-page SEO best practices and website speed optimization. Ensuring websites rank well and load fast across all devices.'
    },
    {
      icons: [
        <FaReact className="text-info" />,
        <FaJs className="text-warning" />,
        <FaCss3Alt className="text-info" />
      ],
      title: 'API Integration',
      description: 'Connecting frontend applications with backend services and third-party APIs. Experience with REST APIs and modern data fetching patterns.'
    }
  ]

  return (
    <AnimatedSection>
      <SectionHeader
        title="What I Do"
        subtitle="I specialize in creating modern, clean, and user-friendly websites. With 100+ completed projects since 2021, I bring expertise in both frontend development and popular CMS platforms. Currently expanding my skills in the MERN stack to offer full-stack solutions."
        level={2}
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
        {skills.map((skill, index) => (
          <AnimatedSection.Item key={index} delay={index * 0.1} className="h-full">
            <SkillCard {...skill} />
          </AnimatedSection.Item>
        ))}
      </div>
    </AnimatedSection>
  )
}

export default Skills