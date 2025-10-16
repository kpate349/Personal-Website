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
  ];

  return (
    <nav className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6">
        <Link to="/" onClick={closeMenu}>
          <img 
            src="/profile_picture.jpg" 
            alt="Logo" 
            className="h-10 w-auto hover:opacity-80 transition-opacity"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.title}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            className="p-2 ml-2 text-primary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background pt-16 md:hidden animate-fade-in">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col space-y-6 pt-8">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="text-xl font-medium hover:text-primary/80 transition-colors"
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