import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Upload, 
  Shield, 
  Award, 
  BookOpen, 
  Users, 
  BarChart3,
  Globe,
  Smartphone,
  Lock,
  Brain,
  FileCheck,
  Headphones
} from 'lucide-react';

const features = [
  {
    icon: Upload,
    title: 'Achievement Upload',
    description: 'Upload academic, cultural, technical achievements with metadata for searchable profiles',
    color: 'from-primary to-accent',
    href: '#achievements'
  },
  {
    icon: Shield,
    title: 'Safe Reporting',
    description: 'Anonymous harassment reporting system with secure access for student safety',
    color: 'from-success to-accent',
    href: '#safety'
  },
  {
    icon: Award,
    title: 'Verified Portfolios',
    description: 'Faculty-approved profiles with blockchain-secured certificates and QR verification',
    color: 'from-warning to-primary',
    href: '#portfolios'
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Performance tracking, attendance monitoring with offline caching capabilities',
    color: 'from-accent to-primary',
    href: '#analytics'
  },
  {
    icon: BookOpen,
    title: 'Scholarship Portal',
    description: 'Government scholarships, fellowships, and employment programs in one place',
    color: 'from-primary to-success',
    href: '#scholarships'
  },
  {
    icon: Brain,
    title: 'Smart Mentorship',
    description: 'AI-powered career recommendations based on performance and interests',
    color: 'from-success to-warning',
    href: '#mentorship'
  },
  {
    icon: FileCheck,
    title: 'NAAC Compliance',
    description: 'Automated NAAC reporting with peer-reviewed tools and validation dashboards',
    color: 'from-warning to-accent',
    href: '#naac'
  },
  {
    icon: Smartphone,
    title: 'PWA Design',
    description: 'Offline-first design for rural areas with low bandwidth optimization',
    color: 'from-accent to-success',
    href: '#mobile'
  },
  {
    icon: Globe,
    title: 'Multi-language',
    description: 'Local language support for inclusive education across diverse regions',
    color: 'from-primary to-warning',
    href: '#languages'
  }
];

export const FeaturesGrid = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Educational
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Management Platform
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for modern, secure, and inclusive education management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="card-hover group cursor-pointer animate-scale-in bg-card/98 backdrop-blur-md border-border/60 shadow-xl"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="text-center">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.color} mx-auto mb-4 w-fit group-hover:scale-125 transition-all duration-300 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground drop-shadow-sm">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6 leading-relaxed font-medium">
                  {feature.description}
                </p>
                <Button 
                  variant="outline" 
                  className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="dashboard-card text-center hover:scale-105 transition-all duration-300">
            <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-foreground">Enterprise Security</h3>
            <p className="text-muted-foreground font-medium">SSL encryption, RBAC, GDPR compliance with complete audit trails</p>
          </div>
          
          <div className="dashboard-card text-center hover:scale-105 transition-all duration-300">
            <Headphones className="h-12 w-12 text-success mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-foreground">24/7 Support</h3>
            <p className="text-muted-foreground font-medium">SMS alerts for low connectivity regions with offline support</p>
          </div>
          
          <div className="dashboard-card text-center hover:scale-105 transition-all duration-300">
            <Users className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-foreground">Faculty Tools</h3>
            <p className="text-muted-foreground font-medium">Digital training, analytics for pedagogy and management efficiency</p>
          </div>
        </div>
      </div>
    </section>
  );
};