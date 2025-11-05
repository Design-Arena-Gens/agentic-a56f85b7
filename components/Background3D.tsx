'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Suspense } from 'react';

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#764ba2"
        attach="material"
        distort={0.5}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'linear-gradient(180deg, #0a0a1a 0%, #1a0a2e 50%, #0a0a1a 100%)' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#667eea" />
          <pointLight position={[10, 10, 5]} intensity={0.5} color="#f093fb" />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a1a]/90" />
    </div>
  );
};

export default Background3D;
