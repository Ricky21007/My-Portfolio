import SectionWrapper from './SectionWrapper';

const About = () => {
  return (
    <SectionWrapper id="about" title="About Me" className="section-frame">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6">
              <p className="text-lg leading-relaxed text-foreground/90">
                Hi! I'm <span className="text-neon-cyan font-semibold">Tyric Ramplin</span>, a software developer passionate about building responsive, user-friendly websites with modern technologies. I love blending <span className="text-neon-purple font-semibold">creativity</span> and <span className="text-neon-pink font-semibold">technology</span> to craft engaging digital experiences.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6">
              <p className="text-lg leading-relaxed text-foreground/90">
                My journey in web development has led to projects like a <span className="text-neon-green font-semibold">Web-based Resource Request System</span>, and I'm always learning new skills to stay at the forefront of modern web technologies and <span className="text-neon-orange font-semibold">AI integration</span>.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink via-neon-green to-neon-purple rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6">
              <p className="text-lg leading-relaxed text-foreground/90">
                Let's create something <span className="text-neon-cyan font-semibold">amazing</span> together! Connect with me and let's build the future of web development.
              </p>
            </div>
          </div>
        </div>

        {/* Skills & Social */}
        <div className="space-y-6">
          
          {/* Skills showcase */}
          <div className="relative">
            <h3 className="text-xl font-bold mb-4 text-center lg:text-left">Tech Stack</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "React", color: "neon-cyan" },
                { name: "JavaScript", color: "neon-orange" },
                { name: "TypeScript", color: "neon-blue" },
                { name: "Node.js", color: "neon-green" },
                { name: "HTML5", color: "neon-pink" },
                { name: "CSS3", color: "neon-purple" }
              ].map((skill, index) => (
                <div
                  key={skill.name}
                  className="relative group cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute -inset-1 bg-${skill.color}/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300`}></div>
                  <div className="relative bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg p-3 text-center transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/5">
                    <span className="text-sm font-mono font-medium">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-center lg:text-left">Connect</h3>
            
            <a 
              href="https://www.linkedin.com/in/tyric-ramplin-39b028326" 
              target="_blank" 
              rel="external nofollow noopener" 
              className="group flex items-center gap-3 p-4 rounded-xl border border-primary/20 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:scale-105"
            >
              <div className="relative p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 group-hover:from-blue-400 group-hover:to-blue-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <div className="absolute inset-0 bg-blue-400/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">LinkedIn</p>
                <p className="text-sm text-primary font-mono">@tyric-ramplin</p>
              </div>
              <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <a 
              href="https://github.com/Ricky21007" 
              target="_blank" 
              rel="external noopener" 
              className="group flex items-center gap-3 p-4 rounded-xl border border-primary/20 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:scale-105"
            >
              <div className="relative p-2 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-gray-700 group-hover:to-gray-800 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                <div className="absolute inset-0 bg-white/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">GitHub</p>
                <p className="text-sm text-primary font-mono">@Ricky21007</p>
              </div>
              <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
