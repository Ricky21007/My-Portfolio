import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import SectionWrapper from './SectionWrapper';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mldjdror', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thanks for reaching out. I'll get back to you soon.",
          duration: 5000,
        });
        reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" title="Let's Connect" className="section-frame">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
          <p className="mb-6 text-lg">
            I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about frontend development, feel free to reach out!
          </p>
          <div className="space-y-4">
            <div className="group flex items-center gap-3 p-3 rounded-xl border border-primary/20 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/5">
              <div className="relative p-2 rounded-lg bg-gradient-to-br from-red-500 to-red-700 group-hover:from-red-400 group-hover:to-red-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="absolute inset-0 bg-red-400/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Email</p>
                <a href="mailto:ramplintyric2@gmail.com" className="text-sm text-primary hover:text-primary/80 transition-colors font-mono">ramplintyric2@gmail.com</a>
              </div>
              <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <div className="group flex items-center gap-3 p-3 rounded-xl border border-primary/20 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/5">
              <div className="relative p-2 rounded-lg bg-gradient-to-br from-green-500 to-green-700 group-hover:from-green-400 group-hover:to-green-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="absolute inset-0 bg-green-400/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Phone</p>
                <p className="text-sm text-primary font-mono">0672660487</p>
              </div>
            </div>
            <div className="group flex items-center gap-3 p-3 rounded-xl border border-primary/20 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/5">
              <div className="relative p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 group-hover:from-blue-400 group-hover:to-blue-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <div className="absolute inset-0 bg-blue-400/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">LinkedIn</p>
                <a href="https://www.linkedin.com/in/tyric-ramplin-39b028326" target="_blank" rel="external noopener" className="text-sm text-primary hover:text-primary/80 transition-colors font-mono">@tyric-ramplin</a>
              </div>
              <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <div className="group flex items-center gap-3 p-3 rounded-xl border border-primary/20 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/5">
              <div className="relative p-2 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-gray-700 group-hover:to-gray-800 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                <div className="absolute inset-0 bg-white/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">GitHub</p>
                <a href="https://github.com/Ricky21007" target="_blank" rel="external noopener" className="text-sm text-primary hover:text-primary/80 transition-colors font-mono">@Ricky21007</a>
              </div>
              <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
            <Input 
              id="name" 
              placeholder="Your Name" 
              {...register('name', { required: 'Name is required' })}
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
            <Input 
              id="email"
              type="email" 
              placeholder="Your Email" 
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email address'
                }
              })}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
            <Input 
              id="subject" 
              placeholder="Subject" 
              {...register('subject', { required: 'Subject is required' })}
              aria-invalid={errors.subject ? 'true' : 'false'}
            />
            {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium">Your Message</label>
            <Textarea 
              id="message" 
              placeholder="Your Message" 
              rows={5} 
              {...register('message', { required: 'Message is required' })}
              aria-invalid={errors.message ? 'true' : 'false'}
            />
            {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
          </div>
          
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
