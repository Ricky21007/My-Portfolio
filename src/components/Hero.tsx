import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-background relative">
      {/* Animated gradient background removed */}
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 max-w-6xl mx-auto">
          <div className="md:w-3/5 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold hero-text-shadow">I'm Tyric Ramplin</h1>
            <p className="text-2xl md:text-3xl text-primary font-medium">Frontend Developer</p>
            <p className="text-xl opacity-90 font-normal leading-relaxed">Turning Ideas into Functional & Aesthetic Web Apps</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="/Images/Tyric-CV.pdf" 
                className="inline-flex items-center gap-2 px-6 py-3 font-bold text-primary hover:text-hero-accent transition-colors duration-300" 
                download
              >
                📄 Download Resume
              </a>
              <button className="portfolio-btn">
                <a href="#projects">View My Work</a>
              </button>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center md:justify-end">
            <img 
              src="/Images/Tyric.jpeg" 
              alt="Tyric Ramplin" 
              className="max-w-full h-auto rounded-2xl border-4 border-primary shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
