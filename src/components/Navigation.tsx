import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  GraduationCap, 
  Shield, 
  Award, 
  BookOpen, 
  Users, 
  Menu,
  X,
  Globe,
  ArrowLeft,
  Home
} from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const isHomePage = location.pathname === '/';

  const navItems = [
    { name: 'Dashboard', icon: GraduationCap, href: '/dashboard' },
    { name: 'Achievements', icon: Award, href: '/achievements' },
    { name: 'Safe Space', icon: Shield, href: '/safety' },
    { name: 'Scholarships', icon: BookOpen, href: '/scholarships' },
    { name: 'Mentorship', icon: Users, href: '#mentorship' },
  ];

  return (
    <nav className="nav-glass sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-4">
            {!isHomePage && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(-1)}
                className="professional-button mouse-hover"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            )}
            <Link to="/" className="flex items-center space-x-3 mouse-hover">
              <div className="p-2 rounded-xl hero-gradient animate-glow">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-gradient">
                EduVerify
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all duration-300 mouse-hover font-medium">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            {navItems.map((item) => {
              const isActive = location.pathname === item.href || 
                              (item.href.startsWith('#') && location.hash === item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 transition-all duration-300 mouse-hover font-medium ${
                    isActive 
                      ? 'text-primary font-semibold drop-shadow-sm' 
                      : 'text-muted-foreground hover:text-primary hover:scale-105'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" className="professional-button hover:scale-110 shadow-md">
                <Globe className="h-4 w-4 mr-2" />
                हिंदी
              </Button>
              <Button variant="default" className="hero-gradient professional-button hover:scale-110 shadow-lg">
                Login
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-up">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href || 
                              (item.href.startsWith('#') && location.hash === item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                    isActive 
                      ? 'bg-primary/15 text-primary font-semibold shadow-md' 
                      : 'hover:bg-muted/60 hover:shadow-md'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-5 w-5 text-primary" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <div className="pt-3 border-t border-border space-y-3">
              <Button variant="outline" className="w-full hover:scale-105 transition-all duration-300">
                <Globe className="h-4 w-4 mr-2" />
                Switch Language
              </Button>
              <Button className="w-full hero-gradient hover:scale-105 transition-all duration-300">
                Login to Platform
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};