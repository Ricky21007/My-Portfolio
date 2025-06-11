import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bold text-xl md:text-2xl">Tyric Ramplin</div>
        
        <Button variant="ghost" size="icon" onClick={toggleDarkMode} aria-label="Toggle dark mode">
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#education" className="hover:text-primary transition-colors">Education</a></li>
            <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="relative z-50 w-10 h-10 flex flex-col justify-center items-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-foreground mt-1.5 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-foreground mt-1.5 transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
          
          {/* Mobile Navigation Overlay */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-background z-40">
              <div className="flex flex-col items-center justify-center h-full">
                <nav>
                  <ul className="text-center space-y-6 text-xl">
                    <li><a href="#about" onClick={toggleMobileMenu} className="hover:text-primary transition-colors">About</a></li>
                    <li><a href="#education" onClick={toggleMobileMenu} className="hover:text-primary transition-colors">Education</a></li>
                    <li><a href="#projects" onClick={toggleMobileMenu} className="hover:text-primary transition-colors">Projects</a></li>
                    <li><a href="#contact" onClick={toggleMobileMenu} className="hover:text-primary transition-colors">Contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
