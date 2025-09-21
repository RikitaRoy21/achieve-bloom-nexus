import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Shield, 
  Lock, 
  Phone, 
  AlertTriangle, 
  Heart,
  Eye,
  EyeOff,
  Globe,
  MessageCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SafeReporting = () => {
  const { toast } = useToast();
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Report Submitted Safely",
      description: "Your report has been received securely. Support team will respond appropriately.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-success/5 to-accent/5 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="p-4 rounded-full safety-gradient mx-auto mb-6 w-fit">
            <Shield className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Safe Reporting Portal</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A secure, confidential space to report incidents. Your safety and privacy are our top priority.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Reporting Form */}
          <div className="lg:col-span-2">
            <Card className="border-success/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Lock className="h-6 w-6 text-success" />
                  <span>Confidential Report</span>
                  <div className="ml-auto flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-accent" />
                    <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="hindi">हिंदी</SelectItem>
                        <SelectItem value="bengali">বাংলা</SelectItem>
                        <SelectItem value="tamil">தமிழ்</SelectItem>
                        <SelectItem value="telugu">తెలుగు</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Anonymity Toggle */}
                  <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                    <div className="flex items-center space-x-3">
                      <Checkbox 
                        id="anonymous" 
                        checked={isAnonymous}
                        onCheckedChange={(checked) => setIsAnonymous(checked === true)}
                      />
                      <div className="flex items-center space-x-2">
                        {isAnonymous ? (
                          <EyeOff className="h-5 w-5 text-success" />
                        ) : (
                          <Eye className="h-5 w-5 text-warning" />
                        )}
                        <Label htmlFor="anonymous" className="font-medium">
                          Submit anonymously (Recommended)
                        </Label>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 ml-8">
                      When anonymous, no personal information is stored or tracked
                    </p>
                  </div>

                  {/* Incident Type */}
                  <div>
                    <Label htmlFor="incident-type">Type of Incident *</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select incident type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="harassment">Harassment</SelectItem>
                        <SelectItem value="discrimination">Discrimination</SelectItem>
                        <SelectItem value="bullying">Bullying</SelectItem>
                        <SelectItem value="assault">Physical/Sexual Assault</SelectItem>
                        <SelectItem value="stalking">Stalking</SelectItem>
                        <SelectItem value="threat">Threats/Intimidation</SelectItem>
                        <SelectItem value="academic">Academic Misconduct</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Severity */}
                  <div>
                    <Label htmlFor="severity">Urgency Level *</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="How urgent is this?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">🔴 Emergency - Immediate danger</SelectItem>
                        <SelectItem value="urgent">🟡 Urgent - Needs quick response</SelectItem>
                        <SelectItem value="moderate">🟢 Moderate - Can wait for proper review</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Incident Details */}
                  <div>
                    <Label htmlFor="details">Incident Description *</Label>
                    <Textarea 
                      id="details" 
                      placeholder="Please describe what happened. Include when, where, and who was involved (you can use initials instead of names). Take your time - every detail helps us help you better."
                      className="mt-1 min-h-[120px]"
                    />
                  </div>

                  {/* Location and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Where did this occur?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="classroom">Classroom</SelectItem>
                          <SelectItem value="hostel">Hostel</SelectItem>
                          <SelectItem value="library">Library</SelectItem>
                          <SelectItem value="lab">Laboratory</SelectItem>
                          <SelectItem value="campus">Campus Grounds</SelectItem>
                          <SelectItem value="online">Online Platform</SelectItem>
                          <SelectItem value="off-campus">Off-Campus</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="timeframe">When did this occur?</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Time frame" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="today">Today</SelectItem>
                          <SelectItem value="yesterday">Yesterday</SelectItem>
                          <SelectItem value="this-week">This week</SelectItem>
                          <SelectItem value="this-month">This month</SelectItem>
                          <SelectItem value="ongoing">Ongoing issue</SelectItem>
                          <SelectItem value="prefer-not">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Support Needed */}
                  <div>
                    <Label htmlFor="support">What kind of support do you need? *</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="How can we help you?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="counseling">Counseling Support</SelectItem>
                        <SelectItem value="investigation">Formal Investigation</SelectItem>
                        <SelectItem value="mediation">Mediation/Resolution</SelectItem>
                        <SelectItem value="safety">Safety Measures</SelectItem>
                        <SelectItem value="academic">Academic Support</SelectItem>
                        <SelectItem value="information">Just want to report/get information</SelectItem>
                        <SelectItem value="unsure">Not sure - need guidance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <Label htmlFor="additional">Additional Information</Label>
                    <Textarea 
                      id="additional" 
                      placeholder="Any other details you'd like to share? Previous incidents, witnesses, or anything else that might help..."
                      className="mt-1"
                    />
                  </div>

                  {/* Submit Actions */}
                  <div className="space-y-4 pt-4">
                    <Button type="submit" className="w-full safety-gradient text-lg py-6">
                      <Shield className="mr-2 h-5 w-5" />
                      Submit Secure Report
                    </Button>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <Button type="button" variant="outline" className="w-full">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Crisis Helpline
                      </Button>
                      <Button type="button" variant="outline" className="w-full">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Live Chat Support
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Emergency Contacts */}
            <Card className="border-destructive/20 bg-destructive/5">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-destructive">
                  <AlertTriangle className="h-5 w-5" />
                  <span>Emergency Contacts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-card rounded-lg">
                  <h4 className="font-semibold text-sm mb-1">Campus Security</h4>
                  <p className="text-destructive font-bold">📞 100 / 1091</p>
                </div>
                
                <div className="p-3 bg-card rounded-lg">
                  <h4 className="font-semibold text-sm mb-1">Women Helpline</h4>
                  <p className="text-destructive font-bold">📞 1091 / 181</p>
                </div>
                
                <div className="p-3 bg-card rounded-lg">
                  <h4 className="font-semibold text-sm mb-1">Counseling Center</h4>
                  <p className="text-primary font-bold">📞 +91-XXX-XXXX</p>
                </div>
              </CardContent>
            </Card>

            {/* Privacy Assurance */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="h-5 w-5 text-success" />
                  <span>Your Privacy</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                  <p className="text-sm">End-to-end encryption</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                  <p className="text-sm">No IP address tracking</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                  <p className="text-sm">GDPR compliant storage</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                  <p className="text-sm">Professional confidentiality</p>
                </div>
              </CardContent>
            </Card>

            {/* Support Resources */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-accent" />
                  <span>Support Resources</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start text-left">
                  📚 Self-Help Guides
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  🤝 Peer Support Groups
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  💬 Anonymous Chat Support
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  📱 Safety Apps & Tools
                </Button>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card className="dashboard-card text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-success mb-2">95%</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Reports receive response within 24 hours
                </p>
                <div className="text-lg font-semibold text-accent mb-1">24/7</div>
                <p className="text-xs text-muted-foreground">Crisis support available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeReporting;