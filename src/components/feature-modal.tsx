import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

interface FeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    userBenefit: string;
    businessValue: string;
  };
}

export function FeatureModal({ isOpen, onClose, feature }: FeatureModalProps) {
  const Icon = feature.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <Icon className="h-6 w-6 stroke-emerald-400" />
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
                  Why It Matters to You
                </h4>
                <p className="text-muted-foreground">{feature.userBenefit}</p>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-lg mb-2 text-gradient-secondary">
                  Our Commitment
                </h4>
                <p className="text-muted-foreground">{feature.businessValue}</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}