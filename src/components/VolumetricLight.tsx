export default function VolumetricLight() {
  return (
    <>
      {/* Central radial glow */}
      <div 
        className="absolute inset-0 pointer-events-none z-5"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 40%, hsl(35 40% 20% / 0.3) 0%, transparent 60%)',
        }}
      />
      
      {/* Volumetric light rays from top */}
      <div className="light-rays opacity-60" />
      
      {/* Warm vignette */}
      <div 
        className="absolute inset-0 pointer-events-none z-5"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, hsl(20 25% 3% / 0.9) 100%)',
        }}
      />
      
      {/* Subtle ambient color overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-5 mix-blend-soft-light"
        style={{
          background: 'radial-gradient(circle at 50% 30%, hsl(42 45% 60% / 0.1) 0%, transparent 50%)',
        }}
      />
    </>
  );
}