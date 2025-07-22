const Footer = () => {
  return (
    <footer className="relative mt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-card/50 to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-r from-neon-pink/10 to-neon-green/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative glass border-t border-primary/20 backdrop-blur-xl py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold font-mono mb-4">
                <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
                  &lt;Tyric/&gt;
                </span>
              </h3>
              <p className="text-foreground/80 max-w-md">
                Building the future of web development, one line of code at a time.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { href: "#about", label: "About" },
                  { href: "#education", label: "Education" },
                  { href: "#projects", label: "Projects" },
                  { href: "#contact", label: "Contact" }
                ].map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-foreground/70 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4 text-primary">Connect</h4>
              <div className="flex justify-center md:justify-end gap-4">
                <a
                  href="https://www.linkedin.com/in/tyric-ramplin-39b028326"
                  target="_blank"
                  rel="external noopener"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-white group-hover:text-blue-100" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                <a
                  href="https://github.com/Ricky21007"
                  target="_blank"
                  rel="external noopener"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5 text-white group-hover:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-primary/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-foreground/60 text-sm">
                © {new Date().getFullYear()} Tyric Ramplin. All rights reserved.
              </p>
              
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <span>Built with</span>
                <span className="text-neon-cyan">React</span>
                <span>+</span>
                <span className="text-neon-purple">TypeScript</span>
                <span>+</span>
                <span className="text-neon-pink">Tailwind</span>
                <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
