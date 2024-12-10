import { Check, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from 'react';
import { ContactModal } from '@/components/contact-modal';
import { pricingTiers } from '@/lib/pricing-data';
import type { PricingTier } from '@/lib/gpt-pricing-data';
import { ParticleBackground } from "@/components/ui/particle-background";

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);

  const handleOpenModal = (tier: typeof pricingTiers[0]) => {
    setSelectedTier({
      id: tier.id,
      name: tier.name,
      price: tier.price,
      description: tier.description,
      features: tier.features.map(f => f.name),
      highlighted: tier.highlighted,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTier(null);
  };

  return (
    <section id="pricing" className="py-24 bg-muted/50 relative overflow-hidden min-h-[600px]">
      <ParticleBackground />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient-primary">
              Simple Transparent Honest
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Experience the unparalleled power of our AI solutions. Every plan comes with a one-time setup fee and ongoing monthly maintenance to ensure your AI stays optimized for maximum performance. Choose the perfect plan for your needs and watch your business thrive like never before.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 items-stretch">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.id}
                className={`relative flex flex-col h-full transform transition-all duration-200 hover:scale-[1.02] ${
                  tier.highlighted ? 'border-primary shadow-lg ring-2 ring-primary/20' : ''
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription className="mt-2">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="text-3xl font-bold">
                        ${tier.buildCost}
                        <span className="text-sm font-normal ml-1">build fee</span>
                      </div>
                      <div className="text-2xl font-bold text-muted-foreground">
                        ${tier.price}
                        <span className="text-sm font-normal ml-1">/month</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {tier.features.map((feature, index) => (
                        <Popover key={`${tier.id}-feature-${index}`}>
                          <PopoverTrigger asChild>
                            <div className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                              <div className="flex items-start justify-between gap-1.5 flex-1 min-w-0">
                                <span className="text-sm leading-6 truncate">{feature.name}</span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-4 w-4 p-0"
                                >
                                  <Info className="h-3.5 w-3.5 text-muted-foreground" />
                                  <span className="sr-only">More info about {feature.name}</span>
                                </Button>
                              </div>
                            </div>
                          </PopoverTrigger>
                          <PopoverContent 
                            side="right"
                            align="start"
                            className="w-[300px]"
                          >
                            <div className="space-y-2">
                              <h4 className="font-medium text-sm">{feature.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {feature.description}
                              </p>
                            </div>
                          </PopoverContent>
                        </Popover>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button
                    className="w-full"
                    onClick={() => handleOpenModal(tier)}
                    variant={tier.highlighted ? 'default' : 'outline'}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              <span className="font-medium">Note:</span> All plans include our one-time build fee and monthly maintenance. Additional add-ons and customizations are available upon request.
            </p>
          </div>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} selectedTier={selectedTier} />
    </section>
  );
}