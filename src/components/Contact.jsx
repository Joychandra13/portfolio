import React, { useState } from 'react'
import { 
  Button, 
  Card, 
  Input, 
  SectionHeader, 
  AnimatedSection, 
  SocialLinks, 
  ContactInfo 
} from './ui'
import { FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  const subjectOptions = [
    'General Inquiry',
    'Project Proposal',
    'Freelance Opportunity',
    'Website Development',
    'E-commerce Store',
    'Other'
  ]

  return (
    <AnimatedSection>
      <AnimatedSection.Item>
        <SectionHeader
          title="Contact Me"
          subtitle="Ready to bring your project to life? I'd love to hear about your ideas and discuss how we can work together. Fill out the form below or reach me directly via WhatsApp for a quick response!"
          level={2}
        />
      </AnimatedSection.Item>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatedSection.Item className="lg:col-span-1">
          <Card background="base-200" className="h-full">
            <Card.Body className="p-8">
              <Card.Title className="text-2xl mb-6">Send Me a Message</Card.Title>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Name"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Input
                    label="Email"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <Input.Select
                  label="Subject"
                  id="subject"
                  name="subject"
                  options={subjectOptions}
                  value={formData.subject}
                  onChange={handleChange}
                />
                <Input.Textarea
                  label="Message"
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, requirements, timeline, and budget..."
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={<FaPaperPlane />}
                  className="w-full md:w-auto"
                >
                  Send Message
                </Button>
              </form>
            </Card.Body>
          </Card>
        </AnimatedSection.Item>

        <AnimatedSection.Item className="lg:col-span-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactInfo />
            <Card background="base-200" hover={true} className="h-full">
              <Card.Body className="p-6 text-center">
                <Card.Title className="text-xl mb-4 flex items-center justify-center gap-2">
                  <span>🌐</span>
                  Follow Me
                </Card.Title>
                <p className="text-base-content/70 text-sm mb-6 leading-relaxed">
                  Stay connected and follow my journey as a frontend developer. 
                  Let's connect on social media!
                </p>
                <SocialLinks 
                  variant="circle" 
                  size="md"
                  className="justify-center"
                />
                <div className="mt-6 pt-4 border-t border-base-300">
                  <p className="text-xs text-base-content/60">
                    Available for freelance projects
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm text-success font-medium">Online</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </AnimatedSection.Item>
      </div>
    </AnimatedSection>
  )
}

export default Contact