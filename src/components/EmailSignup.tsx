import { useState } from 'react';
import { motion } from 'framer-motion';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-gold rounded-lg px-8 py-4 text-center"
      >
        <p className="font-body text-lg text-primary">
          Thank you. You'll be the first to know.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className={`
          relative flex items-center glass rounded-lg overflow-hidden
          transition-all duration-500
          ${isFocused ? 'shadow-gold' : ''}
        `}
        style={{
          border: isFocused 
            ? '1px solid hsl(42 45% 60% / 0.6)' 
            : '1px solid hsl(42 45% 60% / 0.15)',
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Enter your email"
          className="
            flex-1 bg-transparent px-5 py-4 
            font-body text-lg text-foreground
            placeholder:text-muted-foreground/60
            focus:outline-none
          "
          required
        />
        <button
          type="submit"
          className="
            px-6 py-4 font-body text-base tracking-wide
            text-primary hover:text-primary/80
            transition-colors duration-300
            border-l border-primary/20
          "
        >
          Notify Me
        </button>
      </motion.div>
    </form>
  );
}
