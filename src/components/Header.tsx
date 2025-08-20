import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/education", label: "Education" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* Glass morphism background */}
      <div className="glass border-b border-primary/20 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo with professional styling */}
            <div className="relative group">
              <a href="/" className="block">
                <h1 className="font-bold text-xl md:text-2xl font-mono cursor-pointer transition-all duration-300 group-hover:scale-105">
                  <span className="text-primary">
                    &lt;Tyric/&gt;
                  </span>
                </h1>
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <li key={item.href}>
                    <a 
                      href={item.href} 
                      className="relative px-4 py-2 font-medium transition-all duration-300 hover:text-primary group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="relative z-10">{item.label}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></div>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right side controls */}
            <div className="flex items-center space-x-4">
              
              {/* Theme toggle with enhanced styling */}
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleDarkMode} 
                className="relative group w-10 h-10 rounded-full border border-primary/30 bg-card/20 backdrop-blur-sm hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {darkMode ? (
                  <Sun className="h-5 w-5 text-primary relative z-10 transition-transform group-hover:rotate-12" />
                ) : (
                  <Moon className="h-5 w-5 text-primary relative z-10 transition-transform group-hover:rotate-12" />
                )}
              </Button>
              
              {/* Mobile Menu Toggle */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMobileMenu}
                  className="relative group w-10 h-10 rounded-full border border-primary/30 bg-card/20 backdrop-blur-sm hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label="Toggle mobile menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5 text-primary relative z-10 transition-transform group-hover:rotate-90" />
                  ) : (
                    <Menu className="h-5 w-5 text-primary relative z-10 transition-transform group-hover:scale-110" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 transition-all duration-300">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            onClick={toggleMobileMenu}
          ></div>
          
          {/* Menu content */}
          <div className="relative flex flex-col items-center justify-center h-full">
            <nav className="text-center space-y-8">
              {navItems.map((item, index) => (
                <div
                  key={item.href}
                  className="opacity-0 animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <a 
                    href={item.href} 
                    onClick={toggleMobileMenu}
                    className="relative group block text-2xl font-bold transition-all duration-300 hover:text-primary px-8 py-4"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </a>
                </div>
              ))}
            </nav>

            {/* Mobile menu decoration */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-neon-pink/20 to-neon-green/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes animate-gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: animate-gradient-shift 3s ease infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        
        .bg-size-200 {
          background-size: 200% 200%;
        }
      `}</style>
    </header>
  );
};

export default Header;
