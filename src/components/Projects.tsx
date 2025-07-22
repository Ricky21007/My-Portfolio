import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import SectionWrapper from './SectionWrapper';

type ProjectType = {
  id: string;
  image: string;
  title: string;
  description: string;
  context: string;
  tags: string[];
  technologies: string[];
  liveUrl?: string;
  sourceUrl?: string;
  previewVideo?: string;
};

const projects: ProjectType[] = [
  {
    id: "Resource System",
    image: "/Images/Digital.png",
    title: "Web-based Learning System",
    description: "A comprehensive digital resource request system built for educational institutions to streamline learning resource management. Features include user authentication, resource categorization, and administrative dashboard for efficient resource allocation.",
    context: "Built in 2024 for CAPACITI Program",
    tags: ["html", "javascript"],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveUrl: "http://127.0.0.1:5501/public/index.html/",
    previewVideo: "/Images/project1-preview.mp4"
  },
  {
    id: "travique",
    image: "/Images/Travique.png",
    title: "Travique",
    description: "Smart Travelling Assistant web app",
    context: "Travel app",
    tags: ["travel", "assistant"],
    technologies: ["React", "JavaScript", "API"],
    liveUrl: "https://aidan2125.github.io/Backend-testing/"
  },
  {
    id: "rating-app",
    image: "/Images/rating.webp",
    title: "Rating App",
    description: "A rating app that was created to make rating services easier",
    context: "Rating app",
    tags: ["rating", "services"],
    technologies: ["React", "JavaScript"],
    previewVideo: "/Images/RatingApp.mp4"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  const handleFilter = (filterValue: string) => {
    setFilter(filterValue);
  };

  const openPreview = (videoSrc?: string) => {
    if (videoSrc) {
      setPreviewSrc(videoSrc);
    }
  };

  const closePreview = () => {
    setPreviewSrc(null);
  };

  const filterButtons = [
    { value: 'all', label: 'All Projects', icon: '🚀' },
    { value: 'html', label: 'HTML/CSS', icon: '🎨' },
    { value: 'javascript', label: 'JavaScript', icon: '⚡' }
  ];

  return (
    <SectionWrapper id="projects" title="My Projects" className="projects-frame">
      
      {/* Filter buttons */}
      <div className="mb-12 flex flex-wrap gap-4 justify-center">
        {filterButtons.map(button => (
          <button
            key={button.value}
            onClick={() => handleFilter(button.value)}
            className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              filter === button.value
                ? 'bg-gradient-to-r from-project-accent to-neon-purple text-white scale-105'
                : 'bg-card/30 border border-primary/20 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5'
            }`}
            aria-pressed={filter === button.value}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{button.icon}</span>
              <span>{button.label}</span>
            </div>
            {filter !== button.value && (
              <div className="absolute -inset-1 bg-gradient-to-r from-project-accent/20 to-neon-purple/20 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            )}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-project-accent/40 via-neon-purple/30 to-neon-cyan/40 rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-500"></div>
            
            {/* Card */}
            <div className="relative bg-card/50 backdrop-blur-sm border border-project-accent/20 rounded-2xl overflow-hidden group-hover:border-project-accent/50 transition-all duration-500">
              
              {/* Image container */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="external noopener"
                      className="flex items-center gap-2 px-4 py-2 bg-primary/90 backdrop-blur-sm text-white rounded-xl font-medium hover:bg-primary transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  
                  {project.previewVideo && (
                    <button
                      onClick={() => openPreview(project.previewVideo)}
                      className="flex items-center gap-2 px-4 py-2 bg-accent/90 backdrop-blur-sm text-white rounded-xl font-medium hover:bg-accent transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Preview
                    </button>
                  )}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-project-accent transition-colors">
                    {project.liveUrl ? (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="external noopener"
                        className="hover:text-project-accent transition-colors"
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="text-sm text-project-accent/80 font-medium mb-3">{project.context}</p>
                  <p className="text-foreground/80 leading-relaxed text-sm">{project.description}</p>
                </div>
                
                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-muted-foreground">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs bg-project-accent/10 border border-project-accent/30 hover:bg-project-accent/20 transition-colors"
                        style={{ animationDelay: `${techIndex * 0.05}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="external noopener"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  
                  {project.sourceUrl && (
                    <a 
                      href={project.sourceUrl}
                      target="_blank"
                      rel="external noopener"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Source Code
                    </a>
                  )}
                  
                  {project.previewVideo && (
                    <button
                      onClick={() => openPreview(project.previewVideo)}
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Preview
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Preview Modal */}
      {previewSrc && (
        <div 
          className="fixed inset-0 bg-background/90 backdrop-blur-xl z-50 flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={closePreview}
        >
          <div 
            className="relative max-w-6xl w-full flex justify-center"
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute -top-16 right-0 w-12 h-12 flex items-center justify-center rounded-full bg-card/80 backdrop-blur-sm border border-primary/30 text-foreground hover:text-primary hover:border-primary/60 transition-all duration-300 z-10"
              onClick={closePreview}
              aria-label="Close preview"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Video container */}
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-2xl">
              <video 
                src={previewSrc} 
                className="w-full max-h-[80vh] rounded-2xl" 
                controls 
                autoPlay
              />
            </div>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
};

export default Projects;
