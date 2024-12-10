import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Documentation() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6 p-8"
      >
        <Construction className="h-24 w-24 stroke-emerald-400 mx-auto" />
        <h1 className="text-4xl font-bold tracking-tighter text-gradient-primary">
          Under Construction
        </h1>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          We're working hard to bring you comprehensive documentation. Check back soon!
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link to="/">
            Return Home
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
