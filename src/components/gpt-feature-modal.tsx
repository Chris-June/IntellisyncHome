import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { LucideIcon } from 'lucide-react';

interface GptFeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature: {
    title: string;
    description: string;
    icon: LucideIcon;
    builderBenefit: string;
    companyValue: string;
    personalMessage: string;
  };
}

export function GptFeatureModal({ isOpen, onClose, feature }: GptFeatureModalProps) {
  const Icon = feature.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <Icon className="h-8 w-8 stroke-emerald-400" />
            <DialogTitle className="text-2xl">{feature.title}</DialogTitle>
          </div>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh]">
          <div className="space-y-6 pr-6">
            <DialogDescription className="text-base leading-relaxed">
              {feature.description}
            </DialogDescription>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-gradient-primary">
                  Why It Matters to GPT Builders
                </h4>
                <p className="text-muted-foreground">{feature.builderBenefit}</p>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-lg mb-2 text-gradient-secondary">
                  Our Commitment
                </h4>
                <p className="text-muted-foreground">{feature.companyValue}</p>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-lg mb-2 text-gradient-primary">
                  Unleash Your Creativity
                </h4>
                <p className="text-muted-foreground italic">
                  {feature.personalMessage}
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
