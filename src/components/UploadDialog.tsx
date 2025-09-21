import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Award, FileText, Image } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface UploadDialogProps {
  onUpload: (achievement: any) => void;
}

export function UploadDialog({ onUpload }: UploadDialogProps) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    level: '',
    description: '',
    organization: '',
    date: '',
    position: '',
    files: [] as File[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.category) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const newAchievement = {
      id: Date.now(),
      title: formData.title,
      category: formData.category,
      level: formData.level,
      description: formData.description,
      organization: formData.organization,
      date: formData.date,
      position: formData.position,
      status: 'Pending',
      uploadDate: new Date().toISOString().split('T')[0],
      files: formData.files.length
    };

    onUpload(newAchievement);
    
    toast({
      title: "Achievement Uploaded",
      description: "Your achievement has been submitted for verification.",
    });

    setFormData({
      title: '',
      category: '',
      level: '',
      description: '',
      organization: '',
      date: '',
      position: '',
      files: []
    });
    
    setOpen(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({ ...prev, files: [...prev.files, ...files] }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full hero-gradient professional-button">
          <Award className="mr-2 h-4 w-4" />
          Add New Achievement
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Upload className="h-5 w-5 text-primary" />
            <span>Upload New Achievement</span>
          </DialogTitle>
          <DialogDescription>
            Submit your achievement for faculty verification and blockchain certification.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Achievement Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="e.g., First Prize in Programming Contest"
                required
              />
            </div>
            <div>
              <Label htmlFor="category">Category *</Label>
              <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Academic">Academic</SelectItem>
                  <SelectItem value="Technical">Technical</SelectItem>
                  <SelectItem value="Cultural">Cultural</SelectItem>
                  <SelectItem value="Sports">Sports</SelectItem>
                  <SelectItem value="Internship">Internship</SelectItem>
                  <SelectItem value="Community">Community Service</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="level">Level</Label>
              <Select value={formData.level} onValueChange={(value) => setFormData(prev => ({ ...prev, level: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="International">International</SelectItem>
                  <SelectItem value="National">National</SelectItem>
                  <SelectItem value="State">State</SelectItem>
                  <SelectItem value="University">University</SelectItem>
                  <SelectItem value="College">College</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="date">Achievement Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="organization">Organizing Body</Label>
            <Input
              id="organization"
              value={formData.organization}
              onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
              placeholder="e.g., IEEE, Microsoft, University Name"
            />
          </div>

          <div>
            <Label htmlFor="position">Position/Rank</Label>
            <Input
              id="position"
              value={formData.position}
              onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
              placeholder="e.g., 1st Prize, Gold Medal, Internship Completion"
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Describe your achievement, what you learned, and its impact..."
              className="min-h-[80px]"
            />
          </div>

          <div>
            <Label>Supporting Documents</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors">
                <FileText className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm font-medium mb-1">Certificate/Document</p>
                <p className="text-xs text-muted-foreground mb-2">PDF, DOC up to 10MB</p>
                <Input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="text-xs"
                />
              </div>
              
              <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors">
                <Image className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm font-medium mb-1">Photos</p>
                <p className="text-xs text-muted-foreground mb-2">JPG, PNG up to 5MB</p>
                <Input
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  multiple
                  onChange={handleFileChange}
                  className="text-xs"
                />
              </div>
            </div>
            {formData.files.length > 0 && (
              <p className="text-sm text-muted-foreground mt-2">
                {formData.files.length} file(s) selected
              </p>
            )}
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" className="flex-1 hero-gradient professional-button">
              <Upload className="mr-2 h-4 w-4" />
              Submit Achievement
            </Button>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}