
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Collaborate?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let's build something amazing together! Check out my projects on GitHub or drop me a message to discuss your ideas.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/Ricky21007" target="_blank" rel="external noopener">
              View GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
