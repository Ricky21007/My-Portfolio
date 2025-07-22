import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Software Developer";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    // Show name immediately
    setShowName(true);
    
    // Start typing animation after a short delay
    const nameDelay = setTimeout(() => {
      if (currentIndex < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, 100);
        return () => clearTimeout(timeout);
      }
    }, 1000);

    return () => clearTimeout(nameDelay);
  }, [currentIndex, fullText]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-background relative overflow-hidden pt-20">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-neon-cyan/30 to-neon-green/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-neon-orange/30 to-neon-green/30 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-neon-green/20 to-neon-cyan/20 rounded-full blur-2xl animate-pulse animation-delay-500"></div>
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-70 particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 max-w-6xl mx-auto">
          
          {/* Left content - Enhanced */}
          <div className="md:w-3/5 space-y-8 text-center md:text-left">
            
            {/* Console.log greeting - First */}
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-lg md:text-xl font-mono text-primary opacity-80 animate-pulse">
                  &gt; console.log("Hello, world!") 👋
                </span>
              </div>
            </div>

            {/* Enhanced name display - Fixed positioning */}
            <div className="space-y-6">
              <h1 className="leading-tight">
                <span className="block text-foreground/70 text-2xl md:text-3xl lg:text-4xl font-normal mb-3 animate-fade-in">
                  I am
                </span>
                <span
                  className={`relative inline-block transition-all duration-1000 text-5xl md:text-6xl lg:text-8xl font-bold ${
                    showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <span className="hero-text-shadow bg-gradient-to-r from-neon-cyan via-neon-green to-neon-orange bg-clip-text text-transparent animate-gradient-shift">
                    Tyric Ramplin
                  </span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-neon-cyan/20 via-neon-green/20 to-neon-orange/20 rounded-xl blur-xl opacity-50 animate-pulse"></div>
                </span>
              </h1>
            </div>

            {/* Enhanced animated typing effect */}
            <div className="h-16 flex items-center justify-center md:justify-start">
              <div className="text-2xl md:text-4xl font-bold font-mono bg-gradient-to-r from-neon-cyan to-neon-green bg-clip-text text-transparent">
                <span className="mr-2">&gt;</span>
                {text}
                <span className="animate-ping text-neon-cyan ml-1">|</span>
              </div>
            </div>

            {/* Enhanced description */}
            <div className="space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed max-w-2xl">
                Crafting{" "}
                <span className="relative inline-block">
                  <span className="text-neon-cyan font-bold">innovative</span>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-neon-cyan to-transparent"></div>
                </span>{" "}
                digital experiences with{" "}
                <span className="relative inline-block">
                  <span className="text-neon-green font-bold">modern</span>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-neon-green to-transparent"></div>
                </span>{" "}
                web technologies
              </p>
              
              {/* Enhanced tech stack showcase */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground">Tech Arsenal</h3>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {[
                    { name: "React", color: "from-neon-cyan to-neon-blue", icon: "⚛️" },
                    { name: "TypeScript", color: "from-neon-blue to-neon-green", icon: "📘" },
                    { name: "Node.js", color: "from-neon-green to-neon-cyan", icon: "🟢" },
                    { name: "MongoDB", color: "from-neon-green to-neon-orange", icon: "🍃" },
                    { name: "Tailwind", color: "from-neon-orange to-neon-cyan", icon: "🎨" }
                  ].map((tech, index) => (
                    <div
                      key={tech.name}
                      className="group relative overflow-hidden tech-fade-in"
                      style={{ animationDelay: `${2 + index * 0.1}s` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-20 rounded-full blur group-hover:opacity-40 transition-opacity duration-300`}></div>
                      <span className="relative flex items-center gap-2 px-4 py-2 text-sm font-mono bg-card/50 border border-primary/30 rounded-full backdrop-blur-sm hover:border-primary/60 transition-all duration-300 cursor-default group-hover:scale-105">
                        <span>{tech.icon}</span>
                        <span>{tech.name}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start pt-6">
              <a 
                href="/Images/Tyric-CV-7.pdf" 
                className="group relative inline-flex items-center gap-3 px-8 py-4 font-bold text-lg overflow-hidden rounded-xl transition-all duration-300 hover:scale-105" 
                download
              >
                <div className="absolute inset-0 bg-gradient-to-r from-card/80 to-card/60 rounded-xl border border-primary/40 backdrop-blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-neon-green/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </span>
              </a>
              
              <button className="portfolio-btn group relative overflow-hidden">
                <a href="#projects" className="flex items-center gap-3 relative z-10">
                  <span>View Projects</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </button>
            </div>
          </div>

          {/* Enhanced profile image - Fixed positioning to stay out of header */}
          <div className="md:w-2/5 flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative group">
              {/* Enhanced multiple glow layers */}
              <div className="absolute -inset-6 bg-gradient-to-r from-neon-cyan via-neon-green to-neon-orange rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-orange via-neon-green to-neon-cyan rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse animation-delay-500"></div>
              
              {/* Image container with enhanced effects */}
              <div className="relative">
                <img 
                  src="/Images/Tyric.jpeg" 
                  alt="Tyric Ramplin - Software Developer" 
                  className="relative z-10 max-w-full h-auto rounded-2xl border-2 border-primary/40 shadow-2xl transition-all duration-500 group-hover:border-primary group-hover:scale-105 float"
                />
                
                {/* Enhanced overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-neon-green/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Enhanced floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-neon-cyan to-neon-green rounded-full opacity-60 animate-ping"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-neon-orange to-neon-green rounded-full opacity-60 animate-ping animation-delay-1000"></div>
              <div className="absolute top-1/2 -right-10 w-6 h-6 bg-gradient-to-r from-neon-green to-neon-orange rounded-full opacity-60 animate-ping animation-delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary/60 rounded-full flex justify-center backdrop-blur-sm bg-card/20">
          <div className="w-1.5 h-4 bg-gradient-to-b from-primary to-neon-green rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        .particle-float {
          animation: float-gentle 6s ease-in-out infinite, twinkle 3s ease-in-out infinite alternate;
        }
        
        .tech-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
