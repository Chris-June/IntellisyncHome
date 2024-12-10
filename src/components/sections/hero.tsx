import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { AiShowcaseModal } from '@/components/ai-showcase-modal';
import { Link } from 'react-scroll';

export default function Hero() {
  const [isShowcaseOpen, setIsShowcaseOpen] = useState(false);

  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-background to-background/0 -z-10" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-4"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none text-gradient-primary">
              Unleash Digital Excellence with
              <br />
              AI-Powered Innovation
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Transform your digital presence into a masterpiece of innovation. We forge revolutionary AI-powered platforms that transcend conventional boundaries, turning visionary ideas into reality. Whether you're a pioneer seeking to revolutionize your industry or a dreamer ready to make your mark, our cutting-edge solutions amplify your potential and catalyze extraordinary growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex space-x-4"
          >
            <Link to="features" smooth>
              <Button size="lg" className="gradient-primary">
                Explore Our Solutions
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setIsShowcaseOpen(true)}
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
      <AiShowcaseModal 
        isOpen={isShowcaseOpen}
        onClose={() => setIsShowcaseOpen(false)}
      />
    </section>
  );
}