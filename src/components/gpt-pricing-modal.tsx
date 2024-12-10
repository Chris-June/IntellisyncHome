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
import { Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { gptPricingTiers } from '@/lib/gpt-pricing-data';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface GptContactFormData {
  name: string;
  email: string;
  company: string;
  useCase: string;
  expectedUsage: string;
  customization: string;
}

interface GptPricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function GptContactForm({ 
  isOpen, 
  onClose, 
  selectedTier 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  selectedTier: typeof gptPricingTiers[0];
}) {
  const [formData, setFormData] = useState<GptContactFormData>({
    name: '',
    email: '',
    company: '',
    useCase: '',
    expectedUsage: '',
    customization: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Implement the email service for GPT inquiries
      toast.success('Thank you for your interest! We will contact you shortly.');
      onClose();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Get Started with {selectedTier.name}</DialogTitle>
          <DialogDescription>
            Tell us about your GPT model needs and we'll help you get started
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="useCase">Primary Use Case</Label>
              <Textarea
                id="useCase"
                placeholder="Describe how you plan to use your custom GPT model"
                value={formData.useCase}
                onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="expectedUsage">Expected Monthly Usage</Label>
              <Input
                id="expectedUsage"
                placeholder="Estimated number of interactions/queries per month"
                value={formData.expectedUsage}
                onChange={(e) => setFormData({ ...formData, expectedUsage: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="customization">Customization Requirements</Label>
              <Textarea
                id="customization"
                placeholder="Any specific customization needs or features you're looking for"
                value={formData.customization}
                onChange={(e) => setFormData({ ...formData, customization: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function GptPricingModal({ isOpen, onClose }: GptPricingModalProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<typeof gptPricingTiers[0] | null>(null);

  const handleOpenContactModal = (tier: typeof gptPricingTiers[0]) => {
    setSelectedTier(tier);
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
    setSelectedTier(null);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-auto">
          <DialogHeader className="pb-2">
            <DialogTitle className="text-2xl text-center">GPT Builder Pricing Plans</DialogTitle>
            <DialogDescription className="text-center text-lg">
              Choose the perfect plan for your custom AI needs
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 md:grid-cols-3 lg:gap-6 py-4">
            {gptPricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className={`relative h-full rounded-lg border bg-card p-4 shadow-sm ${
                  tier.highlighted ? 'border-primary' : 'border-border'
                }`}>
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                      Popular
                    </div>
                  )}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">{tier.name}</h3>
                    <div className="space-y-1">
                      {tier.price !== undefined && (
                        <p className="text-2xl font-bold">
                          ${tier.price}
                          <span className="text-sm font-normal text-muted-foreground">
                            /month
                          </span>
                        </p>
                      )}
                      {tier.isPopular && (
                        <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full">
                          Most Popular
                        </span>
                      )}
                      <p className="text-sm text-muted-foreground">
                        {tier.description}
                      </p>
                    </div>
                    <ul className="space-y-1.5">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 stroke-emerald-400" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${tier.highlighted ? 'gradient-primary' : ''}`}
                      variant={tier.highlighted ? 'default' : 'outline'}
                      onClick={() => {
                        if (tier.id === 'enterprise') {
                          handleOpenContactModal(tier);
                        } else {
                          window.location.href = 'https://intellisyncsolutions.io';
                        }
                      }}
                    >
                      {tier.id === 'enterprise' ? "Contact Sales" : "Get Started"}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {selectedTier && selectedTier.id === 'enterprise' && (
        <GptContactForm
          isOpen={isContactModalOpen}
          onClose={handleCloseContactModal}
          selectedTier={selectedTier}
        />
      )}
    </>
  );
}
