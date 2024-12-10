import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { projects } from '@/lib/projects-data';
import { cn } from '@/lib/utils';

interface WorkCarouselProps {
  onProjectSelect: (project: typeof projects[0]) => void;
}

export function WorkCarousel({ onProjectSelect }: WorkCarouselProps) {
  const [width, setWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  // Duplicate projects array for infinite scroll effect
  const duplicatedProjects = [...projects, ...projects];

  return (
    <motion.div
      ref={carousel}
      className="cursor-grab overflow-hidden"
      whileTap={{ cursor: "grabbing" }}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex gap-4 px-4 md:px-6"
        initial={{ x: 0 }}
        animate={{ x: isDragging ? undefined : [-width/2, 0] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 50,
            ease: "linear",
          },
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {duplicatedProjects.map((project, index) => (
          <motion.div
            key={index}
            className={cn(
              "relative min-w-[300px] md:min-w-[400px] h-[400px] rounded-xl overflow-hidden",
              "group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            )}
            onClick={() => onProjectSelect(project)}
            whileHover={{ y: -5 }}
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}