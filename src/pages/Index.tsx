import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import FloatingParticles from '@/components/FloatingParticles';
import VolumetricLight from '@/components/VolumetricLight';
import TypographyReveal from '@/components/TypographyReveal';
import EmailSignup from '@/components/EmailSignup';
import SocialIcons from '@/components/SocialIcons';
import LaunchingBadge from '@/components/LaunchingBadge';

// Lazy load 3D scene for performance
const Scene3D = lazy(() => import('@/components/Scene3D'));

function StaticFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div 
        className="w-48 h-48 rounded-full animate-pulse"
        style={{
          background: 'radial-gradient(circle, hsl(42 45% 60% / 0.2) 0%, transparent 70%)',
          boxShadow: '0 0 80px hsl(42 45% 50% / 0.3)',
        }}
      />
    </div>
  );
}

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(20 25% 7%) 0%, hsl(20 15% 4%) 50%, hsl(20 20% 6%) 100%)',
        }}
      />

      {/* Volumetric lighting effects */}
      <VolumetricLight />
      
      {/* Floating dust particles */}
      <FloatingParticles />

      {/* 3D Scene with logo */}
      <Suspense fallback={<StaticFallback />}>
        <Scene3D />
      </Suspense>

      {/* UI Content Overlay */}
      <div className="relative z-20 flex min-h-screen flex-col items-center px-6 py-12">
        {/* Spacer to push content below the 3D logo area */}
        <div className="flex-1 min-h-[45vh]" />

        {/* Center section - positioned below the 3D logo */}
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Main tagline */}
          <TypographyReveal delay={1}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide text-gold-gradient">
              Brew the Royal Tradition
            </h1>
          </TypographyReveal>

          {/* Subtitle */}
          <TypographyReveal delay={1.4}>
            <p className="max-w-lg font-body text-xl md:text-2xl text-foreground/80 leading-relaxed">
              Premium instant chai inspired by the heritage of royal Indian households.
            </p>
          </TypographyReveal>

          {/* Launching badge */}
          <LaunchingBadge />

          {/* Email signup */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="w-full max-w-md pt-4"
          >
            <EmailSignup />
          </motion.div>
        </div>

        {/* Bottom section - Social icons */}
        <div className="flex flex-col items-center gap-6 pt-12 pb-4">
          <SocialIcons />
          
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            className="font-body text-sm text-muted-foreground/50"
          >
            © 2026 Chai Culture. All rights reserved.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Index;
