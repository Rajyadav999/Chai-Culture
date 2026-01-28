import { motion } from 'framer-motion';

export default function LaunchingBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.8 }}
      className="inline-block"
    >
      <span className="glow-underline font-display text-sm tracking-[0.3em] uppercase text-primary/90">
        Launching Soon
      </span>
    </motion.div>
  );
}