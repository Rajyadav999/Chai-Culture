import { motion } from 'framer-motion';

const socialLinks = [
  { 
    name: 'Instagram', 
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="4" strokeWidth="1.5"/>
        <circle cx="18" cy="6" r="1" fill="currentColor"/>
      </svg>
    )
  },
  { 
    name: 'Twitter', 
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="1.5" d="M4 4l6.5 8L4 20h2l5-6 4 6h6l-7-9 5.5-7h-2l-4.5 5.5L9 4H4z"/>
      </svg>
    )
  },
  { 
    name: 'Facebook', 
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    )
  },
];

export default function SocialIcons() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2.5 }}
      className="flex items-center gap-4"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.href}
          aria-label={link.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.5 + index * 0.15 }}
          className="social-icon"
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
}
