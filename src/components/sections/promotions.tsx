import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Gift, Star, Timer, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { WaitlistModal } from '@/components/waitlist-modal';

export default function Promotions() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<string | undefined>();

  return (
    <section id="promotions" className="py-16 bg-gradient-to-b from-background to-background/50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient-primary">
            Extraordinary Offers Await
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Be the first to unlock game-changing AI innovations and exclusive benefits
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              icon: Gift,
              title: "Launch Celebration",
              description: "Early adopters will receive exclusive access to premium features and personalized AI consultation sessions.",
              timing: "Coming Spring 2024"
            },
            {
              icon: Star,
              title: "Enterprise Innovation",
              description: "Revolutionary AI integration packages with custom model training and dedicated support teams.",
              timing: "Coming Summer 2024"
            },
            {
              icon: Sparkles,
              title: "AI Pioneer Program",
              description: "Join our exclusive beta testing program and shape the future of AI-powered web solutions.",
              timing: "Coming Fall 2024"
            }
          ].map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative h-full transform transition-transform hover:-translate-y-1 hover:shadow-lg border-gradient">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-emerald-50/10 rounded-lg" />
                <CardContent className="relative p-6 space-y-4">
                  <offer.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold">{offer.title}</h3>
                  <p className="text-muted-foreground">{offer.description}</p>
                  <div className="flex items-center gap-2 text-sm text-emerald-400">
                    <Timer className="h-4 w-4" />
                    <span>{offer.timing}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full mt-4"
                    onClick={() => {
                      setSelectedOffer(offer.title);
                      setIsWaitlistOpen(true);
                    }}
                >
                    Express Interest
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Want to be notified when these offers go live? Join our waitlist for exclusive early access.
          </p>
          <Button 
            className="gradient-primary mt-4"
            onClick={() => {
              setSelectedOffer(undefined);
              setIsWaitlistOpen(true);
            }}
          >
            Join Waitlist
          </Button>
        </motion.div>
      </div>
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => {
          setIsWaitlistOpen(false);
          setSelectedOffer(undefined);
        }}
        preselectedOffer={selectedOffer}
      />
    </section>
  );
}
