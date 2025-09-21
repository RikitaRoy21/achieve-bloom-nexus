import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play, Shield, Award, Users } from 'lucide-react';

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <iframe
          className="w-full h-full object-cover scale-110"
          src="https://www.youtube.com/embed/IrMBIgoy7Ro?autoplay=1&mute=1&loop=1&playlist=IrMBIgoy7Ro&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Secure Educational
            <span className="block bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
              Excellence Platform
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Blockchain-verified achievements, real-time analytics, safe reporting, 
            and comprehensive student development - all in one secure platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-xl shadow-lg"
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
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-xl"
            >
              <Link to="/safety">
                <Play className="mr-2 h-5 w-5" />
                Safe Space
              </Link>
            </Button>
          </div>

          {/* Key Features Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="dashboard-card text-center animate-scale-in">
              <div className="p-3 rounded-full bg-accent/20 mx-auto mb-4 w-fit">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-white mb-2">Verified Achievements</h3>
              <p className="text-white/70 text-sm">Blockchain-secured certificates and portfolios</p>
            </div>
            
            <div className="dashboard-card text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="p-3 rounded-full bg-success/20 mx-auto mb-4 w-fit">
                <Shield className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-semibold text-white mb-2">Safe Reporting</h3>
              <p className="text-white/70 text-sm">Anonymous, secure incident reporting system</p>
            </div>
            
            <div className="dashboard-card text-center animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="p-3 rounded-full bg-warning/20 mx-auto mb-4 w-fit">
                <Users className="h-6 w-6 text-warning" />
              </div>
              <h3 className="font-semibold text-white mb-2">Smart Mentorship</h3>
              <p className="text-white/70 text-sm">AI-powered career guidance and mentorship</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};