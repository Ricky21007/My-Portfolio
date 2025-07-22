import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
    }`}>
      
      {/* Glow effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-lg opacity-50 animate-pulse"></div>
      
      {/* Button */}
      <Button
        onClick={scrollToTop}
        className="relative w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent border border-primary/30 shadow-2xl hover:scale-110 hover:rotate-12 transition-all duration-300 group"
        aria-label="Back to top"
      >
        {/* Inner glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Icon */}
        <ArrowUp className="relative z-10 h-6 w-6 text-white group-hover:text-primary-foreground transition-colors duration-300" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animation: `float-particle 2s ease-in-out infinite`
              }}
            />
          ))}
        </div>
      </Button>

      <style jsx>{`
        @keyframes float-particle {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
            opacity: 0.6; 
          }
          50% { 
            transform: translateY(-8px) scale(1.2); 
            opacity: 1; 
          }
        }
      `}</style>
    </div>
  );
};

export default BackToTop;
