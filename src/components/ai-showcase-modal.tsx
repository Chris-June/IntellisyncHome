import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Brain, Sparkles, Bot, Code2, Network, Zap } from 'lucide-react';

const showcaseSteps = [
  {
    icon: Brain,
    title: "AI-First Philosophy",
    description: "Experience the pinnacle of innovation where AI isn't just a feature—it's the foundation. Every interaction becomes an opportunity for growth, every feature a gateway to unprecedented possibilities.",
    animation: "fade-right"
  },
  {
    icon: Bot,
    title: "Personalized Intelligence",
    description: "Witness the power of hyper-personalization as our AI orchestrates experiences that evolve with breathtaking precision, creating digital journeys that feel uniquely crafted for each user.",
    animation: "fade-left"
  },
  {
    icon: Network,
    title: "Seamless Integration",
    description: "Elevate your existing infrastructure with AI that weaves seamlessly into your digital ecosystem, amplifying capabilities and unlocking new realms of possibility.",
    animation: "fade-up"
  },
  {
    icon: Code2,
    title: "Innovative Solutions",
    description: "Harness the full spectrum of AI innovation to transform challenges into triumphs. From revolutionary customer experiences to profound data insights, we're redefining what's possible.",
    animation: "fade-down"
  }
];

export function AiShowcaseModal({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void;
}) {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="h-6 w-6 text-emerald-400" />
            Embark on a Journey of Digital Transformation
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-6 space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="flex items-start gap-4">
                {showcaseSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className={`flex-1 p-4 rounded-lg border border-border ${
                      currentStep === index ? 'bg-accent/50' : 'opacity-50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setCurrentStep(index)}
                  >
                    <step.icon className="h-8 w-8 mb-3 text-emerald-400" />
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center pt-4 border-t">
            <Button
              variant="outline"
              onClick={() => setCurrentStep((prev) => 
                prev === 0 ? showcaseSteps.length - 1 : prev - 1
              )}
            >
              Previous
            </Button>
            <div className="flex gap-1">
              {showcaseSteps.map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-1.5 w-8 rounded-full ${
                    currentStep === index ? 'bg-emerald-400' : 'bg-border'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setCurrentStep(index)}
                />
              ))}
            </div>
            <Button
              className="gradient-primary"
              onClick={() => setCurrentStep((prev) => 
                prev === showcaseSteps.length - 1 ? 0 : prev + 1
              )}
            >
              Next
              <Zap className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}