import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { UploadDialog } from '@/components/UploadDialog';
import { 
  User, 
  Award, 
  TrendingUp, 
  Calendar, 
  BookOpen, 
  Target,
  Bell,
  Download,
  QrCode,
  CheckCircle
} from 'lucide-react';

const StudentDashboard = () => {
  const [achievements, setAchievements] = useState([
    { id: 1, title: 'Best Paper Award - IEEE Conference', status: 'Verified', date: '2024-01-15', type: 'Academic' },
    { id: 2, title: 'Summer Internship - Microsoft', status: 'Pending', date: '2024-01-10', type: 'Professional' },
    { id: 3, title: 'Cultural Fest Winner - Dance Competition', status: 'Verified', date: '2024-01-08', type: 'Cultural' },
  ]);

  const [stats, setStats] = useState({
    totalAchievements: 24,
    verifiedAchievements: 21,
    pendingAchievements: 3,
    attendance: 94,
    cgpa: 8.7
  });

  const handleNewAchievement = (newAchievement: any) => {
    setAchievements(prev => [newAchievement, ...prev]);
    setStats(prev => ({
      ...prev,
      totalAchievements: prev.totalAchievements + 1,
      pendingAchievements: prev.pendingAchievements + 1
    }));
  };

  const verifiedCount = achievements.filter(a => a.status === 'Verified').length;
  const pendingCount = achievements.filter(a => a.status === 'Pending').length;

  // Calculate performance based on achievements
  const academicPerformance = achievements.filter(a => a.type === 'Academic').length * 5 + 70;
  const technicalSkills = achievements.filter(a => a.type === 'Technical' || a.type === 'Professional').length * 4 + 75;
  const culturalSkills = achievements.filter(a => a.type === 'Cultural').length * 6 + 65;

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Student Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Priya Sharma</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="dashboard-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-foreground">{achievements.length}</div>
                <Award className="h-6 w-6 text-primary" />
              </div>
              <p className="text-xs text-success mt-1">+{pendingCount} pending</p>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-foreground">94%</div>
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
              <Progress value={94} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">CGPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-foreground">8.7</div>
                <Target className="h-6 w-6 text-accent" />
              </div>
              <p className="text-xs text-success mt-1">Above average</p>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Approvals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-foreground">{pendingCount}</div>
                <Bell className="h-6 w-6 text-warning" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Awaiting faculty review</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Achievements */}
            <Card className="achievement-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Recent Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.slice(0, 3).map((achievement, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${
                        achievement.status === 'Verified' ? 'bg-success/20' : 'bg-warning/20'
                      }`}>
                        <CheckCircle className={`h-4 w-4 ${
                          achievement.status === 'Verified' ? 'text-success' : 'text-warning'
                        }`} />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.type} • {achievement.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        achievement.status === 'Verified' 
                          ? 'bg-success/20 text-success' 
                          : 'bg-warning/20 text-warning'
                      }`}>
                        {achievement.status}
                      </span>
                      {achievement.status === 'Verified' && (
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          PDF
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
                
                <UploadDialog onUpload={handleNewAchievement} />
              </CardContent>
            </Card>

            {/* Performance Analytics */}
            <Card className="achievement-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  <span>Performance Analytics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Academic Performance</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Academic Excellence</span>
                          <span>{Math.min(academicPerformance, 100)}%</span>
                        </div>
                        <Progress value={Math.min(academicPerformance, 100)} />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Technical Skills</span>
                          <span>{Math.min(technicalSkills, 100)}%</span>
                        </div>
                        <Progress value={Math.min(technicalSkills, 100)} />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Cultural Activities</span>
                          <span>{Math.min(culturalSkills, 100)}%</span>
                        </div>
                        <Progress value={Math.min(culturalSkills, 100)} />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Skill Development</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Total Verified</span>
                          <span>{verifiedCount}</span>
                        </div>
                        <Progress value={(verifiedCount / achievements.length) * 100} className="bg-success/20" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Pending Review</span>
                          <span>{pendingCount}</span>
                        </div>
                        <Progress value={(pendingCount / achievements.length) * 100} className="bg-warning/20" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Profile Completion</span>
                          <span>{Math.round((verifiedCount / (verifiedCount + pendingCount)) * 100)}%</span>
                        </div>
                        <Progress value={(verifiedCount / (verifiedCount + pendingCount)) * 100} className="bg-accent/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card className="dashboard-card text-center">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-1">Priya Sharma</h3>
                <p className="text-muted-foreground text-sm mb-4">B.Tech Computer Science • 3rd Year</p>
                <div className="space-y-2">
                  <Button size="sm" variant="outline" className="w-full">
                    <QrCode className="mr-2 h-4 w-4" />
                    Digital ID
                  </Button>
                  <Button size="sm" className="w-full safety-gradient">
                    <Download className="mr-2 h-4 w-4" />
                    Portfolio PDF
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  View Scholarships
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Check Attendance
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </Button>
              </CardContent>
            </Card>

            {/* Mentorship Recommendations */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <h4 className="font-medium text-sm text-accent mb-1">Software Engineering Track</h4>
                  <p className="text-xs text-muted-foreground">Based on your technical achievements</p>
                </div>
                <div className="p-3 bg-success/10 rounded-lg border border-success/20">
                  <h4 className="font-medium text-sm text-success mb-1">Research Mentorship</h4>
                  <p className="text-xs text-muted-foreground">Connect with Dr. Smith for AI research</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;