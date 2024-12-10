import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WorkCarousel } from '@/components/work-carousel';
import { useState } from 'react';
import { WorkModal } from '@/components/work-modal';
import { ProjectModal } from '@/components/project-modal';
import { projects } from '@/lib/projects-data';

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  return (
    <section id="work" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background -z-10" />

      <div className="container px-4 md:px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient-primary">
            Our Work
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Explore our portfolio of AI-powered web applications and digital experiences
            that are transforming businesses across industries.
          </p>
        </motion.div>
      </div>

      <WorkCarousel onProjectSelect={setSelectedProject} />

      <div className="container px-4 md:px-6 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center space-y-6"
        >
          <p className="text-muted-foreground text-lg max-w-[600px] text-center">
            Ready to build something extraordinary? Let's create your next digital success story together.
          </p>
          <Button 
            size="lg" 
            className="gradient-primary"
            onClick={() => setIsProjectModalOpen(true)}
          >
            Start Your Project
            <ExternalLink className="ml-2 h-4 w-4 stroke-primary-foreground" />
          </Button>
        </motion.div>
      </div>

      {selectedProject && (
        <WorkModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      
      <ProjectModal 
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
      />
    </section>
  );
}