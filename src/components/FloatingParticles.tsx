import { useMemo } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  left: string;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

export default function FloatingParticles() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 10,
      duration: 12 + Math.random() * 8,
      size: 1 + Math.random() * 2,
      opacity: 0.2 + Math.random() * 0.4,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: particle.left,
            bottom: '-10px',
            width: particle.size,
            height: particle.size,
            opacity: 0,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.sin(particle.id) * 30],
            opacity: [0, particle.opacity, particle.opacity, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
