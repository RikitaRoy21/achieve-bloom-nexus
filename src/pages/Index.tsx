import React from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesGrid } from '@/components/FeaturesGrid';
import { StatsSection } from '@/components/StatsSection';
import { SafetySection } from '@/components/SafetySection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <FeaturesGrid />
      <SafetySection />
    </div>
  );
};

export default Index;