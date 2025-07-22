import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Software Developer";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-neon-pink/20 to-neon-green/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animation: `float-gentle 4s ease-in-out infinite, twinkle 2s ease-in-out infinite alternate`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 max-w-6xl mx-auto">
          
          {/* Left content */}
          <div className="md:w-3/5 space-y-8 text-center md:text-left">
            {/* Greeting with animation */}
            <div className="space-y-2">
              <div className="inline-block">
                <span className="text-lg md:text-xl font-mono text-primary opacity-80 animate-pulse">
                  &gt; Hello, world! 👋
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold hero-text-shadow leading-tight">
                I'm{" "}
                <span className="relative inline-block">
                  Tyric Ramplin
                  <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                </span>
              </h1>
            </div>

            {/* Animated typing effect */}
            <div className="h-12 flex items-center justify-center md:justify-start">
              <p className="text-2xl md:text-3xl font-bold text-primary font-mono">
                {text}
                <span className="animate-ping text-neon-cyan">|</span>
              </p>
            </div>

            {/* Description with glowing effect */}
            <div className="space-y-4">
              <p className="text-xl md:text-2xl opacity-90 font-light leading-relaxed max-w-2xl">
                Turning{" "}
                <span className="text-neon-cyan font-semibold">Ideas</span> into{" "}
                <span className="text-neon-purple font-semibold">Functional</span> &{" "}
                <span className="text-neon-pink font-semibold">Aesthetic</span> Web Apps
              </p>
              
              {/* Tech stack showcase */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-6">
                {["React", "TypeScript", "Node.js", "MongoDB", "Tailwind"].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm font-mono bg-card/50 border border-primary/30 rounded-full backdrop-blur-sm hover:border-primary/60 transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons with modern styling */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start pt-4">
              <a 
                href="/Images/Tyric-CV-7.pdf" 
                className="group relative inline-flex items-center gap-3 px-8 py-4 font-bold text-lg bg-card/20 border-2 border-primary/40 rounded-xl backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:scale-105" 
                download
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </span>
              </a>
              
              <button className="portfolio-btn group">
                <a href="#projects" className="flex items-center gap-2">
                  <span>View My Work</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </button>
            </div>
          </div>

          {/* Right side - Profile image with modern effects */}
          <div className="md:w-2/5 flex justify-center md:justify-end">
            <div className="relative group">
              {/* Glowing background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative">
                <img 
                  src="/Images/Tyric.jpeg" 
                  alt="Tyric Ramplin" 
                  className="relative z-10 max-w-full h-auto rounded-2xl border-2 border-primary/30 shadow-2xl transition-all duration-500 group-hover:border-primary group-hover:scale-105 float"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-cyan rounded-full opacity-60 animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-pink rounded-full opacity-60 animate-ping delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-neon-purple rounded-full opacity-60 animate-ping delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
