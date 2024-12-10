import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';

export default function Cta() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background to-background -z-10" />

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-8"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient-primary">
            Ready to Revolutionize Your Digital Presence?
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Experience the power of AI-driven web solutions tailored to your needs.
            Start your journey with IntelliSync today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="pricing" smooth>
              <Button size="lg" className="gradient-primary">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}