const Education = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Education</h1>
            <p className="text-xl text-muted-foreground">My academic background and certifications</p>
          </div>

          <div className="space-y-12">
            
            {/* Education Timeline */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-primary mb-8">Academic Background</h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/30"></div>
                
                <div className="space-y-8">
                  <div className="relative flex items-start gap-6">
                    {/* Timeline dot */}
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm z-10">
                      2024
                    </div>
                    
                    <div className="flex-1 bg-card rounded-xl p-6 border border-border shadow-lg">
                      <h3 className="text-xl font-bold text-primary mb-2">
                        Diploma in Software Development
                      </h3>
                      <p className="text-muted-foreground mb-4">University of Technology Jamaica</p>
                      <p className="text-foreground/90">
                        Comprehensive program focusing on modern software development practices, 
                        web technologies, and software engineering principles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-primary mb-8">Certifications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Web Development Fundamentals",
                    issuer: "Various Online Platforms",
                    description: "Comprehensive understanding of HTML, CSS, JavaScript, and modern web development practices."
                  },
                  {
                    title: "React Development",
                    issuer: "Online Courses",
                    description: "Advanced React concepts including hooks, state management, and component architecture."
                  },
                  {
                    title: "Node.js Backend Development",
                    issuer: "Online Learning",
                    description: "Server-side JavaScript development, API creation, and database integration."
                  },
                  {
                    title: "Modern JavaScript (ES6+)",
                    issuer: "Self-Study",
                    description: "Advanced JavaScript features, async programming, and modern development patterns."
                  }
                ].map((cert, index) => (
                  <div 
                    key={index}
                    className="bg-card rounded-xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-primary mb-1">{cert.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                        <p className="text-foreground/90 text-sm leading-relaxed">{cert.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Development */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-primary mb-8">Continuous Learning</h2>
              
              <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  I believe in continuous learning and staying updated with the latest technologies and best practices in software development. 
                  I regularly engage with online courses, tutorials, and hands-on projects to expand my knowledge and skills.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Frontend Development",
                    "Backend Development", 
                    "Database Design",
                    "API Development",
                    "Version Control",
                    "Problem Solving",
                    "Team Collaboration",
                    "Project Management"
                  ].map((skill, index) => (
                    <div
                      key={skill}
                      className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-center text-sm font-medium transition-all duration-300 hover:bg-primary/20"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
