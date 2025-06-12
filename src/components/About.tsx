import SectionWrapper from './SectionWrapper';

const About = () => {
  return (
    <SectionWrapper id="about" title="About Me" className="section-frame">
      <div className="text-lg leading-relaxed space-y-4">
        <p>Hi! I'm Tyric Ramplin, a software developer passionate about building responsive, user-friendly websites with HTML, CSS, and JavaScript. I love blending creativity and technology to craft engaging digital experiences.</p>
        
        <p>My journey in web development has led to projects like a Web-based Resource Request System, and I'm always learning new skills to stay at the forefront of modern web technologies and AI integration.</p>
        
        <p>Let's create something amazing together! Connect with me on{' '}
          <a href="https://www.linkedin.com/in/tyric-ramplin-39b028326" target="_blank" rel="external nofollow noopener" className="text-primary hover:opacity-80 inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>{' '}
          or{' '}
          <a href="https://github.com/Ricky21007" target="_blank" rel="external noopener" className="text-primary hover:opacity-80 inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default About;