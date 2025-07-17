import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, User, Play } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              iBRsistemas<span className="text-blue-500">.</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>Plataforma</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>Soluções</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>Explore</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Preços
            </a>
            
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Login</span>
            </Button>
            
            <Button variant="gradient" size="sm" className="flex items-center space-x-2">
              <Play className="w-4 h-4" />
              <span>Teste grátis</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-foreground hover:text-primary hover:bg-accent"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <a href="#" className="block py-2 text-foreground hover:text-primary">
              Plataforma
            </a>
            <a href="#" className="block py-2 text-foreground hover:text-primary">
              Soluções
            </a>
            <a href="#" className="block py-2 text-foreground hover:text-primary">
              Explore
            </a>
            <a href="#" className="block py-2 text-foreground hover:text-primary">
              Preços
            </a>
            <a href="#" className="block py-2 text-foreground hover:text-primary">
              Contato
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
              <Button variant="gradient" className="w-full justify-start">
                <Play className="w-4 h-4 mr-2" />
                Teste grátis
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;