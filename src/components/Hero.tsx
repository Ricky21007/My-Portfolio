
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">I'm Tyric Ramplin</h1>
            <p className="text-2xl md:text-3xl text-primary">Frontend Developer</p>
            <p className="text-xl opacity-90">Turning Ideas into Functional & Aesthetic Web Apps</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="/Tyric-CV.pdf" 
                className="inline-flex items-center gap-2 px-6 py-3 font-medium text-background bg-primary rounded-md hover:bg-primary/90 transition-colors" 
                download
              >
                📄 Download Resume
              </a>
              <Button asChild>
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="/Images/Tyric.jpeg" 
              alt="Tyric Ramplin" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-primary shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
