import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { projects } from '@/lib/projects-data';

interface WorkModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: typeof projects[0];
}

export function WorkModal({ isOpen, onClose, project }: WorkModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh]">
          <div className="space-y-6">
            <div
              className="w-full h-[300px] rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            />

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-gradient-primary">
                  Project Overview
                </h4>
                <p className="text-muted-foreground">{project.description}</p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 text-gradient-secondary">
                  Key Features
                </h4>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 text-gradient-accent">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                {project.liveUrl && (
                  <Button className="gradient-primary" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      View Live
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}