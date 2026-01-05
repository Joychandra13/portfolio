import Card from './Card'
import Badge from './Badge'
import Button from './Button'

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
    <Card 
      hover={true}
      className={`group h-full min-h-[420px] transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${
        featured ? 'ring-2 ring-primary ring-opacity-50' : ''
      } ${className}`}
      {...props}
    >
      <figure className="relative overflow-hidden h-48 flex-shrink-0">
        <img
          src={image}
          alt={`Project Screenshot - ${title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            variant="outline"
            size="md"
            className="border-white text-white hover:bg-white hover:text-primary"
            href={href}
          >
            View Project
          </Button>
        </div>
        {featured && (
          <div className="absolute top-3 right-3 bg-primary text-primary-content px-2 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
        {period && (
          <div className="absolute top-3 left-3 bg-base-100/90 text-base-content px-2 py-1 rounded-full text-xs font-medium">
            {period}
          </div>
        )}
      </figure>
      
      <Card.Body className="flex-grow flex flex-col justify-between p-6">
        <div className="flex-grow">
          <Card.Title className="text-lg md:text-xl group-hover:text-primary transition-colors mb-3 leading-tight">
            {title}
          </Card.Title>
          <p className="text-base-content/70 text-sm leading-relaxed mb-4 line-clamp-4">
            {description}
          </p>
        </div>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag, tagIndex) => (
              <Badge
                key={tagIndex}
                variant="neutral"
                outline={true}
                size="sm"
                className="text-xs"
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="neutral" outline={true} size="sm" className="text-xs">
                +{tags.length - 3}
              </Badge>
            )}
          </div>
          
          <Card.Actions className="justify-between items-center">
            <a
              className="link link-primary font-semibold text-sm flex items-center hover:translate-x-1 transition-transform"
              href={href}
            >
              View Details
              <i className="fas fa-arrow-right ml-2 text-xs transition-transform group-hover:translate-x-1"></i>
            </a>
          </Card.Actions>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard