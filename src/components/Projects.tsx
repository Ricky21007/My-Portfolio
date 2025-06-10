
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
    id: "web-learning-system",
    image: "/Images/Digital-resource-request-system.png",
    title: "Web-based Learning System",
    description: "A comprehensive digital resource request system built for educational institutions to streamline learning resource management. Features include user authentication, resource categorization, and administrative dashboard for efficient resource allocation.",
    context: "Built in 2024 for CAPACITI Program",
    tags: ["html", "javascript"],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveUrl: "https://xhantimbula.github.io/CodeCrussadersDigital/",
    previewVideo: "/Images/project1-preview.mp4"
  },
  {
    id: "ai-chatbot",
    image: "/Images/Chatbot.png",
    title: "AI Chatbot for CAPACITI",
    description: "An intelligent conversational AI chatbot designed to assist users with queries and provide automated customer support. Built with advanced natural language processing capabilities and user-friendly interface design.",
    context: "Built in 2024 for CAPACITI Program",
    tags: ["ai"],
    technologies: ["AI/ML", "Chatbot Design", "NLP", "User Experience"],
    liveUrl: "https://landbot.online/v3/H-2756684-SIA7X8KE2FBS86FE/index.html",
    previewVideo: "/Images/project2-preview.mp4"
  },
  {
    id: "whack-mole",
    image: "/Images/whack-mole.png",
    title: "Whack a Mole Game",
    description: "A fun, interactive browser-based game featuring score tracking, progressive difficulty levels, and engaging animations. Built with vanilla JavaScript and modern DOM manipulation techniques for optimal performance.",
    context: "Built in 2024 as a personal project",
    tags: ["javascript"],
    technologies: ["JavaScript", "Game Development", "DOM Manipulation", "CSS Animations"],
    liveUrl: "https://ricky21007.github.io/Whack-Mole/",
    sourceUrl: "https://github.com/Ricky21007/Whack-Mole",
    previewVideo: "/Images/project3-preview.mp4"
  },
  {
    id: "rock-paper-scissors",
    image: "/Images/Rock-Paper-Scissors.png",
    title: "Rock Paper Scissors Game",
    description: "Classic game implementation featuring modern UI/UX design, intelligent computer AI opponent, and comprehensive score tracking. Demonstrates clean code architecture and responsive design principles.",
    context: "Built in 2024 as a personal project",
    tags: ["javascript"],
    technologies: ["JavaScript", "UI/UX", "Game Logic", "Responsive Design"],
    liveUrl: "https://ricky21007.github.io/Rock-Paper-Scissors-Game/",
    sourceUrl: "https://github.com/Ricky21007/Rock-Paper-Scissors-Game",
    previewVideo: "/Images/project4-preview.mp4"
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
    <SectionWrapper id="projects" title="My Projects">
      <div className="mb-8 flex flex-wrap gap-2 justify-center md:justify-start">
        <button 
          onClick={() => handleFilter('all')} 
          className={`px-4 py-2 rounded-md transition-colors ${filter === 'all' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`}
          aria-pressed={filter === 'all'}
        >
          All
        </button>
        <button 
          onClick={() => handleFilter('html')} 
          className={`px-4 py-2 rounded-md transition-colors ${filter === 'html' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`}
          aria-pressed={filter === 'html'}
        >
          HTML/CSS
        </button>
        <button 
          onClick={() => handleFilter('javascript')} 
          className={`px-4 py-2 rounded-md transition-colors ${filter === 'javascript' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`}
          aria-pressed={filter === 'javascript'}
        >
          JavaScript
        </button>
        <button 
          onClick={() => handleFilter('ai')} 
          className={`px-4 py-2 rounded-md transition-colors ${filter === 'ai' ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`}
          aria-pressed={filter === 'ai'}
        >
          AI
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="bg-card rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover" 
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">
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
              <p className="mb-3 text-muted-foreground">{project.description}</p>
              <p className="text-sm mb-4">{project.context}</p>
              
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="external noopener"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Source Code
                  </a>
                )}
                
                {project.previewVideo && (
                  <button
                    onClick={() => openPreview(project.previewVideo)}
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            className="relative max-w-4xl w-full"
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
              className="w-full rounded-lg shadow-xl" 
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
