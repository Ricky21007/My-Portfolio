
import { useEffect, useRef } from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, title, children, className = '' }: SectionWrapperProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-16 mx-4 my-8 section-animate ${className}`}
      role="region"
      aria-label={title}
    >
      <div className="container mx-auto px-6">
        {/* Section icon */}
        <div className="text-center mb-8">
          <span className="text-4xl text-primary">⚡️</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-10 sticky top-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 z-10 text-primary">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
