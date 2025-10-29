import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { title: "About", path: "/about" },
    { title: "Blog", path: "/blog" },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full bg-background/70 backdrop-blur-md border-b border-border/40 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
          <img 
            src="/profile_picture.jpg" 
            alt="Logo" 
            className="h-10 w-10 rounded-full ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 object-cover"
          />
        <span className="font-semibold text-lg hidden sm:block bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          KushAIAgents
        </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-200"
            >
              {item.title}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="p-2 rounded-lg hover:bg-secondary/50 text-foreground transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg pt-16 md:hidden animate-fade-in">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col space-y-4 pt-8">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="px-4 py-3 rounded-lg text-lg font-medium hover:bg-secondary/50 hover:text-primary transition-all"
                  onClick={closeMenu}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}