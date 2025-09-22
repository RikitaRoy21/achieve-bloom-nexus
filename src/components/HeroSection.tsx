import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play, Shield, Award, Users } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fixed Background Video */}
      <div className="fixed inset-0 z-0">
        <iframe
          className="w-full h-full object-cover scale-110"
          src="https://www.youtube.com/embed/-YPw6oH6G5M?autoplay=1&mute=1&loop=1&playlist=-YPw6oH6G5M&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&start=12"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-primary/5 to-accent/8 backdrop-blur-[0.5px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl filter brightness-110">
            Secure Educational
            <span className="block bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent drop-shadow-lg filter brightness-125">
              Excellence Platform
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-semibold filter brightness-110">
            Blockchain-verified achievements, real-time analytics, safe reporting, 
            and comprehensive student development - all in one secure platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              asChild
              size="lg" 
              className="bg-white/95 text-primary hover:bg-white hover:scale-105 text-lg px-8 py-4 rounded-xl shadow-2xl professional-button mouse-hover backdrop-blur-sm border border-white/20"
            >
              <Link to="/dashboard">
                <Shield className="mr-2 h-5 w-5" />
                Student Portal
              </Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:scale-105 text-lg px-8 py-4 rounded-xl professional-button backdrop-blur-md shadow-xl"
            >
              <Link to="/safety">
                <Play className="mr-2 h-5 w-5" />
                Safe Space
              </Link>
            </Button>
          </div>

          {/* Theme Toggle */}
          <div className="flex justify-center mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-3 border border-white/10 shadow-2xl">
              <ThemeToggle />
            </div>
          </div>

          {/* Key Features Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card text-center animate-scale-in hover:scale-105 transition-all duration-300">
              <div className="p-3 rounded-full bg-accent/30 backdrop-blur-sm mx-auto mb-4 w-fit border border-accent/40">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2 drop-shadow-md filter brightness-110">Verified Achievements</h3>
              <p className="text-white text-sm drop-shadow-sm filter brightness-105">Blockchain-secured certificates and portfolios</p>
            </div>
            
            <div className="glass-card text-center animate-scale-in hover:scale-105 transition-all duration-300" style={{animationDelay: '0.2s'}}>
              <div className="p-3 rounded-full bg-success/30 backdrop-blur-sm mx-auto mb-4 w-fit border border-success/40">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2 drop-shadow-md filter brightness-110">Safe Reporting</h3>
              <p className="text-white text-sm drop-shadow-sm filter brightness-105">Anonymous, secure incident reporting system</p>
            </div>
            
            <div className="glass-card text-center animate-scale-in hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
              <div className="p-3 rounded-full bg-warning/30 backdrop-blur-sm mx-auto mb-4 w-fit border border-warning/40">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2 drop-shadow-md filter brightness-110">Smart Mentorship</h3>
              <p className="text-white text-sm drop-shadow-sm filter brightness-105">AI-powered career guidance and mentorship</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <div className="w-1 h-3 bg-white/90 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};