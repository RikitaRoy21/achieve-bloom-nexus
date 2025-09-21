import React from 'react';
import { Users, Shield, Award, Globe } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '50,000+',
    label: 'Active Students',
    description: 'Across 500+ institutions'
  },
  {
    icon: Award,
    number: '2,00,000+',
    label: 'Verified Achievements',
    description: 'Blockchain-secured certificates'
  },
  {
    icon: Shield,
    number: '100%',
    label: 'Safe Reporting',
    description: 'Anonymous & secure'
  },
  {
    icon: Globe,
    number: '15+',
    label: 'Languages',
    description: 'Local language support'
  }
];

export const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-success/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-fade-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mx-auto mb-4 w-fit">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};