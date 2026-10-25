'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function PinkKnot() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * 0.25;
    ref.current.rotation.y = t * 0.18;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={ref} position={[-2.4, 0.6, 0]}>
        <torusKnotGeometry args={[0.6, 0.22, 128, 32]} />
        <MeshWobbleMaterial
          color="#C2185B"
          factor={0.35}
          speed={1.2}
          metalness={0.4}
          roughness={0.3}
        />
      </mesh>
    </Float>
  );
}

function GoldSphere() {
  return (
    <Float speed={1.1} rotationIntensity={0.6} floatIntensity={1.6}>
      <mesh position={[0, -0.4, -0.5]}>
        <sphereGeometry args={[0.95, 64, 64]} />
        <MeshDistortMaterial
          color="#D4A017"
          distort={0.35}
          speed={1.8}
          metalness={0.75}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function JadeIcosahedron() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * 0.3;
    ref.current.rotation.z = Math.sin(t * 0.4) * 0.3;
  });
  return (
    <Float speed={1.6} rotationIntensity={0.3} floatIntensity={1.3}>
      <mesh ref={ref} position={[2.4, 0.8, -0.2]}>
        <icosahedronGeometry args={[0.75, 0]} />
        <meshStandardMaterial
          color="#2FA780"
          metalness={0.5}
          roughness={0.35}
          flatShading
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 4, 4]} intensity={1.1} color="#FFF4C9" />
      <directionalLight position={[-4, -2, 2]} intensity={0.4} color="#C2185B" />
      <pointLight position={[0, 2, 2]} intensity={0.5} color="#2FA780" />

      <PinkKnot />
      <GoldSphere />
      <JadeIcosahedron />
    </>
  );
}

export default function ThreeShowcase() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
