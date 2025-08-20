import { useState } from 'react';

const Projects = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const projects = [
    {
      title: "Web-based Resource Request System",
      description: "A comprehensive system for managing resource requests with user authentication, real-time notifications, and administrative controls. Bridge the gap to your dream job with this powerful platform.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      features: [
        "User authentication and authorization",
        "Real-time request tracking",
        "Administrative dashboard",
        "Email notifications"
      ],
      image: "/Images/Digital.png",
      githubUrl: "https://github.com/Ricky21007",
      liveUrl: "https://resource-request-system.vercel.app",
      isVideo: false,
      hasPreview: false
    },
    {
      title: "Travique Travel Platform",
      description: "A travel booking platform with destination browsing, booking management, and user reviews.",
      technologies: ["React", "JavaScript", "CSS3", "API Integration"],
      features: [
        "Destination search and filtering",
        "Booking management system",
        "User review system",
        "Payment integration"
      ],
      image: "/Images/Travique.png",
      githubUrl: "https://github.com/Ricky21007",
      liveUrl: "https://aidan2125.github.io/Backend-testing/",
      isVideo: false,
      hasPreview: false
    },
    {
      title: "CAPACITI Placement Portal",
      description: "A comprehensive portal for managing student placements, company partnerships, and application tracking.",
      technologies: ["React", "Node.js", "Database", "Authentication"],
      features: [
        "Student profile management",
        "Company partnership system",
        "Application tracking",
        "Automated matching algorithm"
      ],
      image: "/Images/Placement portal.PNG",
      githubUrl: "https://github.com/Ricky21007",
      liveUrl: "https://capacitiplacementportal.netlify.app",
      isVideo: false,
      hasPreview: false
    },
    {
      title: "Rating & Review System",
      description: "A flexible rating and review system that can be integrated into various applications.",
      technologies: ["React", "JavaScript", "API Design", "Database"],
      features: [
        "Multi-criteria rating system",
        "Review moderation",
        "Analytics and insights",
        "API for integration"
      ],
      image: "/Images/rating.webp",
      videoUrl: "/Images/RatingApp.mp4",
      githubUrl: "https://github.com/Ricky21007",
      liveUrl: "",
      isVideo: false,
      hasPreview: true
    }
  ];

  const openVideoModal = () => {
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background theme-transition">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Projects</h1>
            <p className="text-xl text-gray-600">Showcase of my development work and technical expertise</p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border-2 border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* Project Image */}
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                  <p className="text-black text-sm leading-relaxed mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-black mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-blue-50 text-primary text-xs rounded-md border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-black mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-1">
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.hasPreview ? (
                      // Special case for Rating & Review System
                      <button
                        onClick={openVideoModal}
                        className="w-full px-4 py-2 bg-primary text-white rounded-lg text-center text-sm font-medium hover:bg-primary/90 transition-all duration-300"
                      >
                        <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                        </svg>
                        Play Preview
                      </button>
                    ) : (
                      // Regular projects with code and live demo buttons
                      <>
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 bg-blue-50 text-primary border border-primary/20 rounded-lg text-center text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300"
                        >
                          <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                          </svg>
                          Code
                        </a>
                        
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 bg-primary text-white rounded-lg text-center text-sm font-medium hover:bg-primary/90 transition-all duration-300"
                        >
                          <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-xl p-8 border-2 border-gray-200 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">Interested in My Work?</h2>
              <p className="text-black mb-6">
                I'm always excited to work on new projects and collaborate with fellow developers and businesses.
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
              >
                Get In Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative bg-white rounded-xl overflow-hidden max-w-5xl w-full max-h-[95vh] shadow-2xl">
            {/* Close button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 bg-black/70 text-white rounded-full p-3 hover:bg-black/90 transition-all duration-200 hover:scale-110"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Container */}
            <div className="relative bg-black">
              <video
                src="/Images/RatingApp.mp4"
                className="w-full h-auto max-h-[70vh] object-contain"
                controls
                autoPlay
                muted
                playsInline
              />
            </div>

            {/* Modal content */}
            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
              <h3 className="text-2xl font-bold text-primary mb-3">Rating & Review System</h3>
              <p className="text-gray-700 leading-relaxed">
                Watch this preview to see the Rating & Review System in action. This flexible system can be integrated into various applications with multi-criteria rating, review moderation, and analytics capabilities.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://github.com/Ricky21007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
