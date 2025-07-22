import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import SectionWrapper from './SectionWrapper';

type ProjectType = {
  id: string;
  image: string;
  title: string;
  description: string;
  longDescription: string;
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
    id: "resource-system",
    image: "/Images/Digital.png",
    title: "Digital Learning Hub",
    description: "Enterprise-grade educational resource management platform",
    longDescription: "A comprehensive digital ecosystem designed to revolutionize how educational institutions manage and distribute learning resources. Features advanced user authentication, intelligent resource categorization, real-time analytics, and an intuitive administrative dashboard.",
    context: "CAPACITI Program 2024",
    tags: ["frontend", "education", "enterprise"],
    technologies: ["HTML5", "CSS3", "JavaScript ES6+", "Local Storage API", "Responsive Design", "Progressive Web App"],
    features: [
      "🔐 Multi-level Authentication System",
      "📚 Smart Resource Categorization", 
      "📊 Real-time Analytics Dashboard",
      "📱 Mobile-First Responsive Design",
      "⚡ Offline-First Architecture",
      "🎨 Modern UI/UX Design"
    ],
    liveUrl: "http://127.0.0.1:5501/public/index.html/",
    status: "completed",
    year: "2024"
  },
  {
    id: "travique",
    image: "/Images/Travique.png",
    title: "Travique AI Assistant",
    description: "Next-generation intelligent travel companion",
    longDescription: "Revolutionary travel planning application powered by AI algorithms to provide personalized travel recommendations, real-time booking assistance, and intelligent itinerary optimization. Integrates with multiple APIs for comprehensive travel data.",
    context: "Full-Stack Travel Solution",
    tags: ["react", "ai", "travel"],
    technologies: ["React 18", "TypeScript", "Node.js", "REST APIs", "Geolocation API", "Machine Learning"],
    features: [
      "🤖 AI-Powered Recommendations",
      "🗺️ Interactive Travel Maps",
      "💰 Real-time Price Comparison",
      "📅 Smart Itinerary Planning",
      "🌍 Multi-language Support",
      "📱 Cross-platform Compatibility"
    ],
    liveUrl: "https://aidan2125.github.io/Backend-testing/",
    status: "completed",
    year: "2024"
  },
  {
    id: "rating-system",
    image: "/Images/rating.webp",
    title: "Universal Rating Engine",
    description: "Advanced rating and review management platform",
    longDescription: "Sophisticated rating system designed to streamline service evaluations across multiple industries. Features intelligent sentiment analysis, fraud detection, and comprehensive analytics to help businesses understand customer feedback.",
    context: "Service Excellence Platform",
    tags: ["react", "analytics", "saas"],
    technologies: ["React", "TypeScript", "Chart.js", "Firebase", "Sentiment Analysis API", "Progressive Web App"],
    features: [
      "⭐ Multi-criteria Rating System",
      "📈 Advanced Analytics Dashboard", 
      "🔍 Sentiment Analysis Engine",
      "🛡️ Fraud Detection System",
      "📊 Real-time Reporting",
      "🎯 Customizable Rating Categories"
    ],
    previewVideo: "/Images/RatingApp.mp4",
    status: "completed",
    year: "2024"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  const filterOptions = [
    { value: 'all', label: 'All Projects', icon: '🚀', color: 'from-neon-cyan to-neon-purple' },
    { value: 'frontend', label: 'Frontend', icon: '🎨', color: 'from-neon-purple to-neon-pink' },
    { value: 'react', label: 'React Apps', icon: '⚛️', color: 'from-neon-cyan to-neon-green' },
    { value: 'ai', label: 'AI Powered', icon: '🤖', color: 'from-neon-orange to-neon-pink' }
  ];

  const statusColors = {
    completed: 'from-neon-green to-green-400',
    'in-progress': 'from-neon-orange to-orange-400', 
    planning: 'from-neon-purple to-purple-400'
  };

  const statusIcons = {
    completed: '✅',
    'in-progress': '🚧',
    planning: '📋'
  };

  return (
    <SectionWrapper id="projects" title="Featured Projects" className="projects-frame">
      
      {/* Enhanced Filter Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore my portfolio of innovative projects, from enterprise solutions to cutting-edge AI applications
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center">
          {filterOptions.map(option => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value)}
              className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-500 ${
                filter === option.value
                  ? `bg-gradient-to-r ${option.color} text-white scale-105 shadow-2xl`
                  : 'bg-card/30 border border-primary/20 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 hover:scale-105'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{option.icon}</span>
                <span className="text-lg">{option.label}</span>
              </div>
              {filter !== option.value && (
                <div className={`absolute -inset-1 bg-gradient-to-r ${option.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="group relative rounded-3xl overflow-hidden transition-all duration-700 hover:scale-105 cursor-pointer"
            style={{ animationDelay: `${index * 0.2}s` }}
            onClick={() => setSelectedProject(project)}
          >
            {/* Enhanced Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-project-accent/60 via-neon-purple/40 to-neon-cyan/60 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
            
            {/* Project Card */}
            <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-project-accent/20 rounded-3xl overflow-hidden group-hover:border-project-accent/60 transition-all duration-500">
              
              {/* Enhanced Image Container */}
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${statusColors[project.status]} text-white text-sm font-semibold backdrop-blur-sm`}>
                    <span>{statusIcons[project.status]}</span>
                    <span className="capitalize">{project.status.replace('-', ' ')}</span>
                  </div>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-primary/30 text-primary font-mono text-sm">
                    {project.year}
                  </div>
                </div>
                
                {/* Overlay with Quick Actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="external noopener"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/90 backdrop-blur-sm text-white rounded-xl font-medium hover:bg-primary transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                    
                    {project.previewVideo && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setPreviewSrc(project.previewVideo!);
                        }}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-accent/90 backdrop-blur-sm text-white rounded-xl font-medium hover:bg-accent transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        </svg>
                        Preview
                      </button>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Enhanced Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-project-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-project-accent/80 font-medium mb-2">{project.context}</p>
                  <p className="text-foreground/80 leading-relaxed">{project.description}</p>
                </div>
                
                {/* Feature Highlights */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                    <span>✨</span> Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-1 text-xs">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-foreground/70">
                        <span className="w-1 h-1 bg-primary rounded-full"></span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-muted-foreground">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs bg-project-accent/10 border border-project-accent/30 hover:bg-project-accent/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs bg-muted/50">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                {/* Learn More Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full mt-4 py-3 px-4 bg-gradient-to-r from-project-accent/10 to-neon-purple/10 border border-project-accent/30 rounded-xl font-medium hover:from-project-accent/20 hover:to-neon-purple/20 hover:border-project-accent/50 transition-all duration-300 group/btn"
                >
                  <span className="flex items-center justify-center gap-2">
                    Learn More
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 transition-opacity duration-300">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            
            {/* Enhanced Modal Content */}
            <div className="relative bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl border border-primary/30 rounded-3xl overflow-hidden">
              
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-card/80 backdrop-blur-sm border border-primary/30 text-foreground hover:text-primary hover:border-primary/60 transition-all duration-300 z-10"
                onClick={() => setSelectedProject(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Project Header */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h2 className="text-4xl font-bold mb-2">{selectedProject.title}</h2>
                  <p className="text-project-accent font-semibold">{selectedProject.context}</p>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 space-y-8">
                
                {/* Description */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
                  <p className="text-lg leading-relaxed text-foreground/90">{selectedProject.longDescription}</p>
                </div>

                {/* Features Grid */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-card/50 rounded-xl border border-primary/20">
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        className="text-sm px-4 py-2 bg-project-accent/20 border border-project-accent/40 hover:bg-project-accent/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {selectedProject.liveUrl && (
                    <a 
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="external noopener"
                      className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Live Project
                    </a>
                  )}
                  
                  {selectedProject.previewVideo && (
                    <button
                      onClick={() => setPreviewSrc(selectedProject.previewVideo!)}
                      className="flex items-center gap-3 px-8 py-4 bg-card/80 border border-primary/40 rounded-xl font-semibold hover:bg-card hover:scale-105 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      </svg>
                      Watch Preview
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Video Preview Modal */}
      {previewSrc && (
        <div 
          className="fixed inset-0 bg-background/95 backdrop-blur-xl z-60 flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setPreviewSrc(null)}
        >
          <div 
            className="relative max-w-6xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute -top-16 right-0 w-12 h-12 flex items-center justify-center rounded-full bg-card/80 backdrop-blur-sm border border-primary/30 text-foreground hover:text-primary hover:border-primary/60 transition-all duration-300 z-10"
              onClick={() => setPreviewSrc(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
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
