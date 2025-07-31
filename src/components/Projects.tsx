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
  features: string[];
  liveUrl?: string;
  sourceUrl?: string;
  previewVideo?: string;
  status: 'completed' | 'in-progress' | 'planning';
  year: string;
};

const projects: ProjectType[] = [
  {
    id: "capaciti-placement",
    image: "/Images/Placement portal.PNG",
    title: "Capaciti Placement Portal",
    description: "Streamlined placement management platform that accelerates the candidate placement process and simplifies communication between candidates, placement companies, and monitoring teams.",
    context: "CAPACITI Placement Solution",
    tags: ["react", "frontend"],
    technologies: ["React", "Vite", "Node.js", "TypeScript", "Tailwind CSS"],
    features: ["🏢 Company Management", "👥 Candidate Tracking", "💬 Communication Hub", "📊 Interaction Analytics"],
    liveUrl: "https://capacitiplacementportal.netlify.app",
    status: "completed",
    year: "2024"
  },
  {
    id: "resource-system",
    image: "/Images/Digital.png",
    title: "Digital Learning Hub",
    description: "Enterprise-grade educational resource management platform with advanced user authentication and analytics.",
    context: "CAPACITI Program 2024",
    tags: ["frontend", "education"],
    technologies: ["HTML5", "CSS3", "JavaScript", "PWA"],
    features: ["🔐 Authentication", "📚 Resource Management", "📊 Analytics", "📱 Mobile-First"],
    liveUrl: "http://127.0.0.1:5501/public/index.html/",
    status: "completed",
    year: "2024"
  },
  {
    id: "travique",
    image: "/Images/Travique.png",
    title: "Travique AI Assistant",
    description: "Next-generation intelligent travel companion with AI-powered recommendations and real-time booking.",
    context: "Full-Stack Travel Solution",
    tags: ["react", "ai"],
    technologies: ["React", "TypeScript", "Node.js", "APIs"],
    features: ["🤖 AI Recommendations", "🗺️ Interactive Maps", "💰 Price Comparison", "📅 Smart Planning"],
    liveUrl: "https://aidan2125.github.io/Backend-testing/",
    status: "completed",
    year: "2024"
  },
  {
    id: "rating-system",
    image: "/Images/rating.webp",
    title: "Universal Rating Engine",
    description: "Advanced rating and review management platform with sentiment analysis and fraud detection.",
    context: "Service Excellence Platform",
    tags: ["react", "analytics"],
    technologies: ["React", "TypeScript", "Firebase", "Chart.js"],
    features: ["⭐ Multi-criteria Rating", "📈 Analytics", "🔍 Sentiment Analysis", "🛡️ Fraud Detection"],
    previewVideo: "/Images/RatingApp.mp4",
    status: "completed",
    year: "2024"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(filter));

  const currentProject = filteredProjects[currentProjectIndex];

  const nextProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  // Reset index when filter changes
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setCurrentProjectIndex(0);
  };

  const filterOptions = [
    { value: 'all', label: 'All', icon: '🚀', count: projects.length },
    { value: 'frontend', label: 'Frontend', icon: '🎨', count: projects.filter(p => p.tags.includes('frontend')).length },
    { value: 'react', label: 'React', icon: '⚛️', count: projects.filter(p => p.tags.includes('react')).length },
    { value: 'ai', label: 'AI', icon: '🤖', count: projects.filter(p => p.tags.includes('ai')).length }
  ];

  const statusColors = {
    completed: 'from-neon-green to-green-400',
    'in-progress': 'from-neon-orange to-orange-400', 
    planning: 'from-neon-blue to-blue-400'
  };

  return (
    <SectionWrapper id="projects" title="Featured Projects" className="projects-frame">
      
      {/* Compact Filter Section */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {filterOptions.map(option => (
            <button
              key={option.value}
              onClick={() => handleFilterChange(option.value)}
              className={`group relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                filter === option.value
                  ? 'bg-gradient-to-r from-neon-cyan to-neon-green text-white scale-105'
                  : 'bg-card/30 border border-primary/20 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{option.icon}</span>
                <span>{option.label}</span>
                <span className="text-xs bg-background/20 px-1.5 py-0.5 rounded-full">{option.count}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Single Project Display with Navigation */}
      {filteredProjects.length > 0 && (
        <div className="max-w-xl mx-auto">
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={prevProject}
              disabled={filteredProjects.length <= 1}
              className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg bg-card/50 border border-primary/20 hover:border-primary/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>

            <div className="text-center">
              <span className="text-xs text-muted-foreground">
                {currentProjectIndex + 1} of {filteredProjects.length}
              </span>
            </div>

            <button
              onClick={nextProject}
              disabled={filteredProjects.length <= 1}
              className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg bg-card/50 border border-primary/20 hover:border-primary/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              Next
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Current Project Display */}
          <div
            key={currentProject.id}
            className="group relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer"
            onMouseEnter={() => setHoveredProject(currentProject.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-project-accent/40 via-neon-green/30 to-neon-cyan/40 rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-500"></div>
            
            {/* Compact Project Card */}
            <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-project-accent/20 rounded-2xl overflow-hidden group-hover:border-project-accent/60 transition-all duration-500 h-full">
              
              {/* Image Container */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Status & Year Badges */}
                <div className="absolute top-2 left-2 right-2 flex justify-between">
                  <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-gradient-to-r ${statusColors[currentProject.status]} text-white text-xs font-semibold`}>
                    {currentProject.status === 'completed' ? '✅' : currentProject.status === 'in-progress' ? '🚧' : '📋'}
                  </div>
                  <div className="px-2 py-1 rounded-lg bg-background/80 backdrop-blur-sm text-primary font-mono text-xs">
                    {currentProject.year}
                  </div>
                </div>
                
                {/* Quick Actions Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-background/90 to-transparent transition-opacity duration-300 ${
                  hoveredProject === currentProject.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-2 left-2 right-2 flex gap-2">
                    {currentProject.liveUrl && (
                      <a
                        href={currentProject.liveUrl}
                        target="_blank"
                        rel="external noopener"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-1 px-3 py-1 bg-primary/90 text-white rounded-lg text-xs font-medium hover:bg-primary transition-colors"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live
                      </a>
                    )}

                    {currentProject.previewVideo && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setPreviewSrc(currentProject.previewVideo!);
                        }}
                        className="flex items-center justify-center gap-1 px-3 py-1 bg-neon-green/90 text-white rounded-lg text-xs font-medium hover:bg-neon-green transition-colors"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        </svg>
                        Play
                      </button>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="text-lg font-bold mb-1 group-hover:text-project-accent transition-colors">
                    {currentProject.title}
                  </h3>
                  <p className="text-xs text-project-accent/80 font-medium mb-2">{currentProject.context}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{currentProject.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-xs font-medium text-muted-foreground">Key Features</h4>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    {currentProject.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-foreground/80">
                        <span className="text-xs">{feature.split(' ')[0]}</span>
                        <span className="truncate">{feature.split(' ').slice(1).join(' ')}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-1">
                  <h4 className="text-xs font-medium text-muted-foreground">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {currentProject.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs px-2 py-0.5 bg-project-accent/10 border border-project-accent/30 hover:bg-project-accent/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}



      {/* Compact Video Preview Modal */}
      {previewSrc && (
        <div 
          className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
          onClick={() => setPreviewSrc(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center rounded-full bg-card/80 backdrop-blur-sm border border-primary/30 text-foreground hover:text-primary transition-all"
              onClick={() => setPreviewSrc(null)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-2xl">
              <video 
                src={previewSrc} 
                className="w-full max-h-[70vh] rounded-2xl" 
                controls 
                autoPlay
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </SectionWrapper>
  );
};

export default Projects;
