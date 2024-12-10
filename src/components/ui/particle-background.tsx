import { useCallback } from "react";
import type { Engine } from "@tsparticles/engine";
import { Particles, IParticlesProps } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

interface CustomParticlesDensity {
  enable: boolean;
  factor: number;
}

interface ExtendedParticlesProps extends IParticlesProps {
  particlesInit?: (engine: Engine) => Promise<void>;
}

export function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions: ExtendedParticlesProps = {
    id: "tsparticles",
    particlesInit: particlesInit,
    className: "absolute inset-0 -z-10",
    options: {
      background: {
        opacity: 0
      },
      fullScreen: false,
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: {
            enable: true
          },
        },
        modes: {
          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#3b82f6",
        },
        links: {
          color: "#3b82f6",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            factor: 800,
          } as CustomParticlesDensity,
          value: 80,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }
  };

  return <Particles {...particlesOptions} />;
}
