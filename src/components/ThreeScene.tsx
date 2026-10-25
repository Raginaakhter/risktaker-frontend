'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function Particles({ count = 1100 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = Math.random() * 18 + 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi) - 2;

      const pick = Math.random();
      if (pick > 0.75) {
        // crimson pink
        colors[i * 3] = 0.76;
        colors[i * 3 + 1] = 0.09;
        colors[i * 3 + 2] = 0.36;
      } else if (pick > 0.4) {
        // gold
        colors[i * 3] = 0.83;
        colors[i * 3 + 1] = 0.63;
        colors[i * 3 + 2] = 0.09;
      } else {
        // jade
        colors[i * 3] = 0.18;
        colors[i * 3 + 1] = 0.65;
        colors[i * 3 + 2] = 0.5;
      }
    }
    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.03;
    ref.current.rotation.x = Math.sin(t * 0.1) * 0.08;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.55}
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  );
}

function SoftRing({ radius, tube, rotationSpeed, tilt, color, opacity }: { radius: number; tube: number; rotationSpeed: number; tilt: [number, number, number]; color: string; opacity: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = tilt[0] + Math.sin(t * 0.25) * 0.08;
    ref.current.rotation.y = tilt[1] + t * rotationSpeed;
    ref.current.rotation.z = tilt[2];
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, tube, 24, 128]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

function Scene() {
  const { camera } = useThree();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    camera.position.x = Math.sin(t * 0.08) * 0.3;
    camera.position.y = Math.cos(t * 0.12) * 0.2;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <Particles count={1100} />
      <group position={[0, 0, -1]}>
        <SoftRing radius={2.4} tube={0.012} rotationSpeed={0.1} tilt={[Math.PI / 3, 0, 0]} color="#D4A017" opacity={0.35} />
        <SoftRing radius={3.3} tube={0.01} rotationSpeed={-0.07} tilt={[Math.PI / 2.5, Math.PI / 4, 0]} color="#C2185B" opacity={0.28} />
        <SoftRing radius={4.2} tube={0.008} rotationSpeed={0.05} tilt={[Math.PI / 4, 0, Math.PI / 6]} color="#2FA780" opacity={0.22} />
      </group>
    </>
  );
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 7], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 10%, rgba(251,248,242,0.4) 55%, rgba(251,248,242,0.9) 100%)'
        }}
      />
    </div>
  );
}
