import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { 
  Float, 
  Environment,
  Sparkles,
} from '@react-three/drei';
import * as THREE from 'three';  
import { TextureLoader } from 'three';
const logoTexture = new URL("../../assets/chai-culture-logo.png", import.meta.url).href;

function LogoMedallion() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Load texture with proper configuration
  const texture = useLoader(TextureLoader, logoTexture);
  
  // Configure texture
  useMemo(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
  }, [texture]);

  useFrame((state) => {
    if (groupRef.current) {
      // Very slow rotation - ceremonial, graceful
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.12;
      // Subtle floating movement
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.03;
    }
  });

  return (
    <Float speed={0.4} rotationIntensity={0.05} floatIntensity={0.2}>
      <group ref={groupRef}>
        {/* Main medallion with logo */}
        <mesh position={[0, 0.3, 0]}>
          <planeGeometry args={[3, 3]} />
          <meshStandardMaterial 
            map={texture}
            transparent
            alphaTest={0.1}
            metalness={0.2}
            roughness={0.6}
            envMapIntensity={0.4}
            side={THREE.DoubleSide}
          />
        </mesh>
        
        {/* Outer decorative gold ring */}
        <mesh position={[0, 0.3, -0.02]}>
          <ringGeometry args={[1.48, 1.55, 64]} />
          <meshStandardMaterial
            color="#c9a962"
            metalness={0.95}
            roughness={0.15}
            envMapIntensity={1.5}
            emissive="#c9a962"
            emissiveIntensity={0.05}
          />
        </mesh>
        
        {/* Inner gold accent ring */}
        <mesh position={[0, 0.3, -0.01]}>
          <ringGeometry args={[1.35, 1.4, 64]} />
          <meshStandardMaterial
            color="#d4b872"
            metalness={0.9}
            roughness={0.2}
            envMapIntensity={1.2}
          />
        </mesh>

        {/* Ambient glow backdrop */}
        <mesh position={[0, 0.3, -0.1]}>
          <circleGeometry args={[2, 64]} />
          <meshBasicMaterial
            color="#c9a962"
            transparent
            opacity={0.03}
          />
        </mesh>
      </group>
    </Float>
  );
}

function SteamParticles() {
  return (
    <Sparkles
      count={25}
      scale={[1.2, 1.5, 0.3]}
      size={1.2}
      speed={0.2}
      opacity={0.12}
      color="#d4b872"
      position={[0, 0.8, 0.3]}
    />
  );
}

function DustParticles() {
  return (
    <>
      <Sparkles
        count={80}
        scale={[12, 10, 6]}
        size={0.6}
        speed={0.1}
        opacity={0.25}
        color="#c9a962"
        position={[0, 0, -2]}
      />
      <Sparkles
        count={40}
        scale={[8, 8, 4]}
        size={1}
        speed={0.08}
        opacity={0.15}
        color="#ffd699"
        position={[0, 2, -1]}
      />
    </>
  );
}

function Lighting() {
  return (
    <>
      {/* Main warm key light from above-front */}
      <spotLight
        position={[0, 4, 4]}
        angle={0.5}
        penumbra={1}
        intensity={2}
        color="#ffd699"
      />
      
      {/* Rim lights for gold edge highlights */}
      <spotLight
        position={[-4, 2, -1]}
        angle={0.6}
        penumbra={0.8}
        intensity={1}
        color="#c9a962"
      />
      
      <spotLight
        position={[4, 2, -1]}
        angle={0.6}
        penumbra={0.8}
        intensity={1}
        color="#c9a962"
      />
      
      {/* Soft ambient fill */}
      <ambientLight intensity={0.3} color="#ffd699" />
      
      {/* Back glow */}
      <pointLight position={[0, 0, -4]} intensity={0.8} color="#c9a962" />
    </>
  );
}

function Scene() {
  return (
    <>
      <Lighting />
      <LogoMedallion />
      <SteamParticles />
      <DustParticles />
      <Environment preset="night" />
      <fog attach="fog" args={['#0f0d0b', 8, 20]} />
    </>
  );
}

function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div 
        className="w-32 h-32 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(42 45% 60% / 0.15) 0%, transparent 70%)',
          boxShadow: '0 0 60px hsl(42 45% 50% / 0.2)',
          animation: 'pulse 2s ease-in-out infinite',
        }}
      />
    </div>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: 'high-performance',
          }}
          dpr={[1, 2]}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
