'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

function FloatingCube({ position, color, rotationSpeed }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed[0];
      meshRef.current.rotation.y += rotationSpeed[1];
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
  });

  return (
    <group position={position}>
      <Box ref={meshRef} args={[0.8, 0.8, 0.8]}>
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </Box>
    </group>
  );
}

function CubeScene() {
  const cubes = [
    { position: [-3, 0, 0], color: '#4F8CFF', rotationSpeed: [0.01, 0.02] },
    { position: [-1, 0.5, -1], color: '#00D4FF', rotationSpeed: [0.02, 0.01] },
    { position: [1, -0.5, 0.5], color: '#7C5CFC', rotationSpeed: [0.015, 0.025] },
    { position: [3, 0.3, -0.5], color: '#4F8CFF', rotationSpeed: [0.02, 0.015] },
  ];

  return (
    <group>
      {cubes.map((cube, i) => (
        <FloatingCube key={i} {...cube} />
      ))}
    </group>
  );
}

export default function FloatingCubes3D() {
  return (
    <div className="w-full h-[300px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00D4FF" />
        <CubeScene />
      </Canvas>
    </div>
  );
}
