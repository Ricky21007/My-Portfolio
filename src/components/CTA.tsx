
import { Button } from "@/components/ui/button";
import { Linkedin, Github } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Collaborate?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let's build something amazing together! Connect with me on LinkedIn or check out my projects on GitHub.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Button asChild className="bg-primary hover:bg-hero-accent">
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <a 
              href="https://www.linkedin.com/in/tyric-ramplin-39b028326" 
              target="_blank" 
              rel="external noopener"
              className="flex items-center gap-2"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <a 
              href="https://github.com/Ricky21007" 
              target="_blank" 
              rel="external noopener"
              className="flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
