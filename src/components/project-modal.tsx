  import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sendContactEmail } from '@/lib/email-service';
import { toast } from 'sonner';

const projectTypes = [
  "Mobile App Development",
  "Custom Software Solution",
  "AI/ML Integration",
  "Data Analytics Platform",
  "Enterprise System",
  "IoT Solution",
  "Other"
] as const;

const budgetRanges = [
  "Under $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+"
] as const;

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    projectType: '',
    budgetRange: '',
    timeline: '',
    projectDescription: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await sendContactEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `
Company: ${formData.companyName}
Project Type: ${formData.projectType}
Budget Range: ${formData.budgetRange}
Timeline: ${formData.timeline}
Description: ${formData.projectDescription}
        `.trim(),
        selectedAddOns: [],
        selectedTier: {
          name: 'Project Inquiry',
          price: 0
        },
        subject: `New Project Inquiry: ${formData.projectType}`,
        type: 'project'
      });
      
      toast.success('Thank you for your inquiry! We\'ll be in touch soon.');
      onClose();
      setFormData({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        projectType: '',
        budgetRange: '',
        timeline: '',
        projectDescription: '',
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-2xl">Start Your Project</DialogTitle>
            <DialogDescription>
              Tell us about your project idea and we'll help bring it to life.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-6 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company/Organization</Label>
                <Input
                  id="company"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="projectType">Project Type</Label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                >
                  <SelectTrigger id="projectType">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <Select
                  value={formData.budgetRange}
                  onValueChange={(value) => setFormData({ ...formData, budgetRange: value })}
                >
                  <SelectTrigger id="budget">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline">Desired Timeline</Label>
              <Input
                id="timeline"
                placeholder="e.g., 3 months, by Q4 2024"
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Project Description</Label>
              <Textarea
                id="description"
                placeholder="Tell us about your project goals, features, and any specific requirements..."
                className="h-32"
                value={formData.projectDescription}
                onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                required
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
