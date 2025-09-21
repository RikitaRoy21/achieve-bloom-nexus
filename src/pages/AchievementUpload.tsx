import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Upload, 
  FileText, 
  Image, 
  Award, 
  Calendar,
  Tag,
  Users,
  MapPin,
  Clock
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AchievementUpload = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Achievement Submitted",
      description: "Your achievement has been sent for faculty verification.",
    });
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Upload Achievement</h1>
          <p className="text-muted-foreground">
            Submit your academic, cultural, technical, or internship achievements for verification
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="achievement-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Achievement Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Category Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category">Category *</Label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="academic">Academic</SelectItem>
                          <SelectItem value="cultural">Cultural</SelectItem>
                          <SelectItem value="technical">Technical</SelectItem>
                          <SelectItem value="internship">Internship</SelectItem>
                          <SelectItem value="sports">Sports</SelectItem>
                          <SelectItem value="community">Community Service</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="level">Achievement Level *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="international">International</SelectItem>
                          <SelectItem value="national">National</SelectItem>
                          <SelectItem value="state">State</SelectItem>
                          <SelectItem value="university">University</SelectItem>
                          <SelectItem value="college">College</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div>
                    <Label htmlFor="title">Achievement Title *</Label>
                    <Input 
                      id="title" 
                      placeholder="e.g., First Prize in IEEE Programming Contest"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Describe your achievement, what you learned, and its impact..."
                      className="mt-1 min-h-[100px]"
                    />
                  </div>

                  {/* Event Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="organization">Organizing Body *</Label>
                      <Input 
                        id="organization" 
                        placeholder="e.g., IEEE, University, Company"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="date">Achievement Date *</Label>
                      <Input 
                        id="date" 
                        type="date"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input 
                        id="location" 
                        placeholder="City, State, Country"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="position">Position/Rank</Label>
                      <Input 
                        id="position" 
                        placeholder="e.g., 1st Prize, Gold Medal"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Tags and Skills */}
                  <div>
                    <Label htmlFor="skills">Related Skills/Tags</Label>
                    <Input 
                      id="skills" 
                      placeholder="e.g., Python, Machine Learning, Leadership (comma separated)"
                      className="mt-1"
                    />
                  </div>

                  {/* File Uploads */}
                  <div className="space-y-4">
                    <Label>Supporting Documents</Label>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                        <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                        <p className="text-sm font-medium mb-1">Certificate/Document</p>
                        <p className="text-xs text-muted-foreground">PDF, DOC up to 10MB</p>
                        <Input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                      </div>
                      
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                        <Image className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                        <p className="text-sm font-medium mb-1">Photos/Screenshots</p>
                        <p className="text-xs text-muted-foreground">JPG, PNG up to 5MB each</p>
                        <Input type="file" className="hidden" accept=".jpg,.jpeg,.png" multiple />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4 pt-4">
                    <Button type="submit" className="flex-1 hero-gradient">
                      <Upload className="mr-2 h-4 w-4" />
                      Submit for Verification
                    </Button>
                    <Button type="button" variant="outline">
                      Save Draft
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Guidelines */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="text-lg">Upload Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FileText className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Valid Documents</h4>
                    <p className="text-xs text-muted-foreground">Certificates, letters, official emails</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Faculty Verification</h4>
                    <p className="text-xs text-muted-foreground">All submissions reviewed within 48 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Blockchain Security</h4>
                    <p className="text-xs text-muted-foreground">Verified achievements are blockchain-secured</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Submissions */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="text-lg">Recent Submissions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { title: 'Microsoft Internship', status: 'Under Review', date: '2024-01-15' },
                  { title: 'IEEE Paper Award', status: 'Verified', date: '2024-01-10' },
                  { title: 'Cultural Dance Prize', status: 'Verified', date: '2024-01-08' },
                ].map((item, index) => (
                  <div key={index} className="p-3 border border-border rounded-lg">
                    <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.status === 'Verified' 
                          ? 'bg-success/20 text-success' 
                          : 'bg-warning/20 text-warning'
                      }`}>
                        {item.status}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="dashboard-card text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary mb-2">24</div>
                <p className="text-sm text-muted-foreground mb-3">Total Achievements</p>
                <div className="text-lg font-semibold text-success mb-1">21 Verified</div>
                <div className="text-sm text-warning">3 Pending</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementUpload;