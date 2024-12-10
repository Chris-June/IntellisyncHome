import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { submitWaitlistEntry } from '@/lib/waitlist-service';
import { toast } from 'sonner';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedOffer?: string;
}

export function WaitlistModal({ isOpen, onClose, preselectedOffer }: WaitlistModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interests: [] as string[],
  });

  const interestOptions = [
    { id: 'ai-integration', label: 'AI Integration' },
    { id: 'custom-development', label: 'Custom Development' },
    { id: 'consulting', label: 'AI Consulting' },
    { id: 'automation', label: 'Business Automation' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitWaitlistEntry({
        ...formData,
        source: preselectedOffer ? 'offer' : 'waitlist',
        specificOffer: preselectedOffer,
      });

      toast.success(
        preselectedOffer
          ? "Thank you for your interest! We'll notify you when this offer goes live."
          : "You've been added to our waitlist! We'll keep you updated on exclusive offers."
      );
      onClose();
    } catch (error) {
      toast.error('Failed to join waitlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {preselectedOffer ? 'Express Interest' : 'Join Our Waitlist'}
          </DialogTitle>
          <DialogDescription>
            {preselectedOffer
              ? 'Be the first to know when this exclusive offer becomes available.'
              : 'Get early access to our upcoming AI innovations and special offers.'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="company">Company (Optional)</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label>Areas of Interest</Label>
              <div className="grid grid-cols-2 gap-4">
                {interestOptions.map((interest) => (
                  <div key={interest.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={interest.id}
                      checked={formData.interests.includes(interest.id)}
                      onCheckedChange={(checked) => {
                        setFormData({
                          ...formData,
                          interests: checked
                            ? [...formData.interests, interest.id]
                            : formData.interests.filter((i) => i !== interest.id),
                        });
                      }}
                    />
                    <Label htmlFor={interest.id} className="text-sm">
                      {interest.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full gradient-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Join Now'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}