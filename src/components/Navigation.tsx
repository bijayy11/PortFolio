import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/education', label: 'Education' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/portfolio-links', label: 'Portfolio Links' },
    { path: '/testimonials', label: 'Testimonials' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  // Don't show navigation on home page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => handleNavigation('/')}
            className="flex items-center space-x-2 text-xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            <span>Bijay Sapkota</span>
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`nav-link group px-3 py-2 text-sm font-medium transition-all duration-300 
                ${location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'}
                hover:text-primary relative overflow-hidden rounded-md
                hover:bg-accent/50`}
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-[32rem] opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
          } overflow-hidden`}
        >
          <div className="py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-md transition-all duration-300
                ${location.pathname === item.path 
                  ? 'bg-accent text-primary' 
                  : 'text-muted-foreground hover:bg-accent/50 hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;