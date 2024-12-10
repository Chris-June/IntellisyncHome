import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { BadgeCheck } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  value: {
    title: string;
    description: string;
    longDescription: string;
    impact: string;
    implementation: string;
  };
}

export function AboutModal({ isOpen, onClose, value }: AboutModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg gradient-primary p-2.5">
              <BadgeCheck className="h-full w-full text-primary-foreground" />
            </div>
            <DialogTitle className="text-2xl">{value.title}</DialogTitle>
          </div>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh]">
          <div className="space-y-6 pr-6">
            <DialogDescription className="text-base leading-relaxed">
              {value.longDescription}
            </DialogDescription>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-gradient-primary">
                  Impact on Our Clients
                </h4>
                <p className="text-muted-foreground">{value.impact}</p>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-lg mb-2 text-gradient-secondary">
                  How We Implement This Value
                </h4>
                <p className="text-muted-foreground">{value.implementation}</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}