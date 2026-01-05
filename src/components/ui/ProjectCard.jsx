import { motion } from 'framer-motion'
import Card from './Card'
import Badge from './Badge'
import Button from './Button'
import { FaArrowRight } from 'react-icons/fa'

const ProjectCard = ({ 
  title,
  description,
  image,
  tags = [],
  href = '#',
  featured = false,
  period,
  className = '',
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="h-full"
    >
      <Card 
        hover={true}
        className={`group h-full min-h-[420px] transition-all duration-300 ${
          featured ? 'ring-2 ring-primary ring-opacity-50' : ''
        } ${className}`}
        {...props}
      >
        <motion.figure 
          className="relative overflow-hidden h-48 flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={image}
            alt={`Project Screenshot - ${title}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-primary/90 flex items-center justify-center"
          >
            <Button
              variant="outline"
              size="md"
              className="border-white text-white hover:bg-white hover:text-primary"
              href={href}
            >
              View Project
            </Button>
          </motion.div>
          {featured && (
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="absolute top-3 right-3 bg-primary text-primary-content px-2 py-1 rounded-full text-xs font-semibold"
            >
              Featured
            </motion.div>
          )}
          {period && (
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="absolute top-3 left-3 bg-base-100/90 text-base-content px-2 py-1 rounded-full text-xs font-medium"
            >
              {period}
            </motion.div>
          )}
        </motion.figure>
        
        <Card.Body className="flex-grow flex flex-col justify-between p-6">
          <div className="flex-grow">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <Card.Title className="text-lg md:text-xl group-hover:text-primary transition-colors mb-3 leading-tight">
                {title}
              </Card.Title>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-base-content/70 text-sm leading-relaxed mb-4 line-clamp-4"
            >
              {description}
            </motion.p>
          </div>
          
          <div className="mt-auto">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              {tags.slice(0, 3).map((tag, tagIndex) => (
                <motion.div
                  key={tagIndex}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + tagIndex * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge
                    variant="neutral"
                    outline={true}
                    size="sm"
                    className="text-xs"
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
              {tags.length > 3 && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge variant="neutral" outline={true} size="sm" className="text-xs">
                    +{tags.length - 3}
                  </Badge>
                </motion.div>
              )}
            </motion.div>
            
            <Card.Actions className="justify-between items-center">
              <motion.a
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                whileHover={{ x: 4 }}
                className="link link-primary font-semibold text-sm flex items-center transition-transform"
                href={href}
              >
                View Details
                <FaArrowRight className="ml-2 text-xs transition-transform group-hover:translate-x-1" />
              </motion.a>
            </Card.Actions>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  )
}

export default ProjectCard