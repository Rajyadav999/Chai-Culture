import { motion } from 'framer-motion';

interface TypographyRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function TypographyReveal({ 
  children, 
  delay = 0,
  className = '' 
}: TypographyRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
