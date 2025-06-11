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

  return (
    <SectionWrapper id="projects" title="My Projects" className="section-frame">
      <div className="mb-8 flex flex-wrap gap-2 justify-center md:justify-start">
        <button 
          onClick={() => handleFilter('all')} 
          className={`px-4 py-2 rounded-md transition-colors ${filter === 'all' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`}
          aria-pressed={filter === 'all'}
          aria-label="Show all projects"
        >
          All
        </button>
        <button 
          onClick={() => handleFilter('html')} 
          className={`px-4 py-2 rounded-md transition-colors ${filter === 'html' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`}
          aria-pressed={filter === 'html'}
          aria-label="Show HTML/CSS projects"
        >
          HTML/CSS
        </button>
        <button 
          onClick={() => handleFilter('javascript')} 
          className={`px-4 py-2 rounded-md transition-colors ${filter === 'javascript' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`}
          aria-pressed={filter === 'javascript'}
          aria-label="Show JavaScript projects"
        >
          JavaScript
        </button>
      </div>

      <div className="flex flex-row flex-nowrap gap-4 overflow-x-auto snap-x snap-mandatory">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="bg-card rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300 border border-blue-700 max-w-sm min-w-0 snap-center"
          >
            <div className="overflow-hidden w-full h-40">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover" 
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">
                {project.liveUrl ? (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="external noopener"
                    className="hover:text-primary transition-colors"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="mb-2 text-sm text-muted-foreground">{project.description}</p>
              <p className="text-xs mb-3">{project.context}</p>
              
              <div className="mb-3 flex flex-wrap gap-1">
                {project.technologies.map(tech => (
                  <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="external noopener"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Source Code
                  </a>
                )}
                
                {project.previewVideo && (
                  <button
                    onClick={() => openPreview(project.previewVideo)}
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Preview
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Preview Modal */}
      {previewSrc && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closePreview}
        >
          <div 
            className="relative max-w-6xl w-full flex justify-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-3xl text-foreground hover:text-primary"
              onClick={closePreview}
              aria-label="Close preview"
            >
              ×
            </button>
            <video 
              src={previewSrc} 
              className="w-full max-h-[480px] rounded-lg shadow-xl" 
              controls 
              autoPlay
            />
          </div>
        </div>
      )}
    </SectionWrapper>
  );
};

export default Projects;
