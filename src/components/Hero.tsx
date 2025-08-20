import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-background relative overflow-hidden pt-20">
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 max-w-6xl mx-auto">
          
          {/* Left content - Professional intro */}
          <div className="md:w-3/5 space-y-8 text-center md:text-left">
            
            {/* Professional greeting */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-lg md:text-xl text-muted-foreground">
                  Hello, I'm
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                  <span className="text-primary">TYRIC RAMPLIN</span>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/80">
                  Software Developer
                </h2>
              </div>
            </div>

            {/* Professional description */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed max-w-2xl text-foreground/90">
                Passionate about creating innovative digital solutions with modern web technologies. 
                I specialize in building responsive, user-friendly applications that deliver exceptional experiences.
              </p>
            </div>

            {/* Professional CTA Buttons */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start pt-6">
              <a 
                href="/Images/Tyric-Ramplin-CV.pdf" 
                className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-lg bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105" 
                download
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="/projects">
                  <span>View Projects</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </Button>
            </div>
          </div>

          {/* Profile image */}
          <div className="md:w-2/5 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="/Images/Tyric.jpeg"
                  alt="Tyric Ramplin - Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 rounded-full border border-primary/10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
