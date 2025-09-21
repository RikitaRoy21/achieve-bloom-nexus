import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Phone, Globe, Heart, AlertTriangle } from 'lucide-react';

export const SafetySection = () => {
  return (
    <section id="safety" className="py-24 bg-gradient-to-br from-success/15 to-accent/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <div className="p-4 rounded-full safety-gradient mx-auto mb-6 w-fit shadow-2xl hover:scale-110 transition-all duration-300">
            <Shield className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 drop-shadow-sm">
            Safe Space for Everyone
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 font-medium">
            Anonymous reporting system designed to encourage and protect students, 
            especially supporting girls' education and safety
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Safety Features */}
          <div className="space-y-8">
            <Card className="border-success/30 shadow-xl bg-card/98 backdrop-blur-md hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Lock className="h-6 w-6 text-success" />
                  <span className="drop-shadow-sm">Complete Anonymity</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">
                  End-to-end encrypted reporting system with no identity tracking. 
                  Your safety and privacy are our top priority.
                </p>
              </CardContent>
            </Card>

            <Card className="border-success/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Globe className="h-6 w-6 text-accent" />
                  <span className="drop-shadow-sm">Multi-language Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">
                  Report in your comfortable language. Available in 15+ regional languages 
                  to ensure you can express yourself clearly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-success/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <span className="drop-shadow-sm">24/7 Crisis Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">
                  Immediate response system with trained counselors. 
                  Emergency helpline available even in low connectivity areas.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center lg:text-left">
            <div className="dashboard-card safety-gradient text-white p-8 hover:scale-105 transition-all duration-300 shadow-2xl">
              <Heart className="h-16 w-16 text-white/90 mb-6" />
              <h3 className="text-2xl font-bold mb-4">
                Your Voice Matters
              </h3>
              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                If you're facing harassment, discrimination, or any form of misconduct, 
                you're not alone. Our platform provides a safe, secure way to report 
                incidents and get help.
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-white text-success hover:bg-white/90 hover:scale-105 font-semibold shadow-lg transition-all duration-300"
                >
                  <Shield className="mr-2 h-5 w-5" />
                  Report Safely Now
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency Helpline
                </Button>
              </div>
            </div>

            <div className="mt-8 p-4 bg-warning/10 rounded-lg border border-warning/20">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <strong>Emergency:</strong> For immediate danger, please contact local authorities 
                  or call emergency services. This platform complements but doesn't replace emergency response.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-xl bg-card/98 border border-success/30 shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-md">
            <div className="text-2xl font-bold text-success mb-2">256-bit</div>
            <div className="text-muted-foreground font-medium">SSL Encryption</div>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-card/98 border border-success/30 shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-md">
            <div className="text-2xl font-bold text-success mb-2">GDPR</div>
            <div className="text-muted-foreground font-medium">Compliant</div>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-card/98 border border-success/30 shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-md">
            <div className="text-2xl font-bold text-success mb-2">ISO 27001</div>
            <div className="text-muted-foreground font-medium">Certified Security</div>
          </div>
        </div>
      </div>
    </section>
  );
};