import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Search, 
  Filter, 
  Calendar,
  MapPin,
  GraduationCap,
  DollarSign,
  Clock,
  Users,
  Award,
  ExternalLink,
  Heart
} from 'lucide-react';

const scholarships = [
  {
    id: 1,
    title: 'National Merit Scholarship for Girls in STEM',
    organization: 'Department of Science & Technology, GoI',
    amount: '₹50,000/year',
    deadline: '2024-03-15',
    category: 'STEM',
    eligibility: 'Girls pursuing B.Tech/B.Sc in Science & Engineering',
    description: 'Supporting girls education in Science, Technology, Engineering and Mathematics fields.',
    applicationUrl: 'https://dst.gov.in/scholarships',
    tags: ['Girls', 'STEM', 'Government', 'Engineering'],
    featured: true
  },
  {
    id: 2,
    title: 'AICTE Pragati Scholarship',
    organization: 'All India Council for Technical Education',
    amount: '₹30,000/year + ₹2,000 books',
    deadline: '2024-02-28',
    category: 'Technical',
    eligibility: 'Girls in technical education (Diploma/Degree)',
    description: 'Promoting girls technical education across India.',
    applicationUrl: 'https://aicte-india.org/scholarships',
    tags: ['Technical', 'Girls', 'Diploma', 'Degree'],
    featured: true
  },
  {
    id: 3,
    title: 'Post Matric Scholarship SC/ST',
    organization: 'Ministry of Tribal Affairs',
    amount: '₹8,200-12,000/month',
    deadline: '2024-04-30',
    category: 'Social',
    eligibility: 'SC/ST students for post-matriculation studies',
    description: 'Financial assistance for students from Scheduled Castes and Scheduled Tribes.',
    applicationUrl: 'https://tribal.gov.in/scholarships',
    tags: ['SC/ST', 'Post-Matric', 'Government', 'Social'],
    featured: false
  },
  {
    id: 4,
    title: 'Kishore Vaigyanik Protsahan Yojana (KVPY)',
    organization: 'Indian Institute of Science',
    amount: '₹5,000-7,000/month + contingency',
    deadline: '2024-09-30',
    category: 'Research',
    eligibility: 'Students pursuing basic sciences',
    description: 'Encouraging students for research career in basic sciences.',
    applicationUrl: 'https://kvpy.iisc.ernet.in/',
    tags: ['Research', 'Basic Sciences', 'IISc', 'Fellowship'],
    featured: false
  },
  {
    id: 5,
    title: 'Maulana Azad National Fellowship',
    organization: 'University Grants Commission',
    amount: '₹25,000/month + contingency',
    deadline: '2024-12-31',
    category: 'Minority',
    eligibility: 'Minority community students for M.Phil/PhD',
    description: 'Supporting research scholars from minority communities.',
    applicationUrl: 'https://ugc.ac.in/scholarships',
    tags: ['Minority', 'M.Phil', 'PhD', 'Research', 'UGC'],
    featured: false
  },
  {
    id: 6,
    title: 'Central Sector Scheme Merit Scholarship',
    organization: 'Department of Higher Education',
    amount: '₹12,000/year',
    deadline: '2024-10-31',
    category: 'Merit',
    eligibility: 'Top 2% in Class XII from recognized boards',
    description: 'Merit-based scholarship for higher education.',
    applicationUrl: 'https://scholarships.gov.in/',
    tags: ['Merit', 'Class XII', 'Higher Education', 'Government'],
    featured: false
  }
];

const ScholarshipPortal = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'STEM', 'Technical', 'Social', 'Research', 'Minority', 'Merit'];

  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesSearch = scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || scholarship.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const formatDeadline = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Expired';
    if (diffDays === 0) return 'Today!';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays <= 7) return `${diffDays} days left`;
    return `${Math.ceil(diffDays / 7)} weeks left`;
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Scholarship Portal</h1>
          <p className="text-muted-foreground">
            Discover government scholarships, fellowships, and financial aid opportunities
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="achievement-card mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search scholarships..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "hero-gradient" : ""}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="dashboard-card text-center">
            <CardContent className="pt-6">
              <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">{scholarships.length}</div>
              <p className="text-sm text-muted-foreground">Active Scholarships</p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card text-center">
            <CardContent className="pt-6">
              <DollarSign className="h-8 w-8 text-success mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">₹2.5Cr+</div>
              <p className="text-sm text-muted-foreground">Total Fund Available</p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">15,000+</div>
              <p className="text-sm text-muted-foreground">Students Benefited</p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card text-center">
            <CardContent className="pt-6">
              <Clock className="h-8 w-8 text-warning mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">6</div>
              <p className="text-sm text-muted-foreground">Deadlines This Month</p>
            </CardContent>
          </Card>
        </div>

        {/* Featured Scholarships */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
            <Award className="h-6 w-6 text-primary mr-2" />
            Featured Opportunities
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {scholarships.filter(s => s.featured).map((scholarship) => (
              <Card key={scholarship.id} className="card-hover border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="safety-gradient text-white">Featured</Badge>
                    <div className="text-right">
                      <div className="text-lg font-bold text-success">{scholarship.amount}</div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDeadline(scholarship.deadline)}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{scholarship.title}</CardTitle>
                  <p className="text-muted-foreground">{scholarship.organization}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{scholarship.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-sm mb-2">Eligibility:</h4>
                    <p className="text-sm text-muted-foreground">{scholarship.eligibility}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {scholarship.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full hero-gradient">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Scholarships */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
            <BookOpen className="h-6 w-6 text-accent mr-2" />
            All Scholarships ({filteredScholarships.length})
          </h2>
          
          <div className="space-y-4">
            {filteredScholarships.map((scholarship) => (
              <Card key={scholarship.id} className="card-hover">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{scholarship.title}</h3>
                        {scholarship.featured && (
                          <Badge className="safety-gradient text-white ml-2">Featured</Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{scholarship.organization}</p>
                      <p className="text-sm text-muted-foreground mb-3">{scholarship.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {scholarship.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="mb-3">
                        <h4 className="font-medium text-sm text-muted-foreground mb-1">Amount</h4>
                        <div className="text-lg font-bold text-success">{scholarship.amount}</div>
                      </div>
                      <div className="mb-3">
                        <h4 className="font-medium text-sm text-muted-foreground mb-1">Deadline</h4>
                        <div className="text-sm flex items-center">
                          <Calendar className="h-3 w-3 mr-1 text-warning" />
                          {formatDeadline(scholarship.deadline)}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm text-muted-foreground mb-1">Category</h4>
                        <Badge variant="secondary">{scholarship.category}</Badge>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-center space-y-2">
                      <Button className="hero-gradient">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Apply
                      </Button>
                      <Button variant="outline" size="sm">
                        <Heart className="mr-2 h-3 w-3" />
                        Save
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredScholarships.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No scholarships found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria or browse all categories</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScholarshipPortal;