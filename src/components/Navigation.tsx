import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { 
  GraduationCap, 
  Shield, 
  Award, 
  BookOpen, 
  Users, 
  Menu,
  X,
  Globe
} from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', icon: GraduationCap, href: '/dashboard' },
    { name: 'Achievements', icon: Award, href: '/achievements' },
    { name: 'Safe Space', icon: Shield, href: '/safety' },
    { name: 'Scholarships', icon: BookOpen, href: '/scholarships' },
    { name: 'Mentorship', icon: Users, href: '#mentorship' },
  ];

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-3">
            <div className="p-2 rounded-lg hero-gradient">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              EduVerify
            </span>
          </Link>
        </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href || 
                              (item.href.startsWith('#') && location.hash === item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 transition-colors ${
                    isActive 
                      ? 'text-primary font-medium' 
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Globe className="h-4 w-4 mr-2" />
                हिंदी
              </Button>
              <Button variant="default" className="hero-gradient">
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
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-primary/10 text-primary font-medium' 
                      : 'hover:bg-muted/50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-5 w-5 text-primary" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <div className="pt-3 border-t border-border space-y-3">
              <Button variant="outline" className="w-full">
                <Globe className="h-4 w-4 mr-2" />
                Switch Language
              </Button>
              <Button className="w-full hero-gradient">
                Login to Platform
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};