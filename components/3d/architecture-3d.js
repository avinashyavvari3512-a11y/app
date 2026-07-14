'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Line, Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function ArchNode({ position, color, label, type = 'box' }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group position={position}>
      {type === 'box' ? (
        <Box ref={meshRef} args={[1, 1, 1]}>
          <meshStandardMaterial 
            color={color}
            emissive={color}
            emissiveIntensity={0.4}
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
      ) : (
        <Sphere ref={meshRef} args={[0.5, 32, 32]}>
          <meshStandardMaterial 
            color={color}
            emissive={color}
            emissiveIntensity={0.4}
            metalness={0.8}
            roughness={0.2}
          />
        </Sphere>
      )}
      <Html distanceFactor={8}>
        <div className="text-xs text-white bg-black/70 px-3 py-1 rounded-lg whitespace-nowrap font-semibold">
          {label}
        </div>
      </Html>
    </group>
  );
}

function DataConnection({ start, end, color }) {
  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  
  return (
    <Line
      points={points}
      color={color}
      lineWidth={2}
      transparent
      opacity={0.6}
    />
  );
}

function DataPlatformArchitecture() {
  const nodes = [
    { position: [0, 3, 0], color: '#4F8CFF', label: 'Data Sources', type: 'sphere' },
    { position: [0, 1.5, 0], color: '#00D4FF', label: 'Azure ADF', type: 'box' },
    { position: [0, 0, 0], color: '#7C5CFC', label: 'Databricks', type: 'box' },
    { position: [0, -1.5, 0], color: '#4F8CFF', label: 'Delta Lake', type: 'box' },
    { position: [0, -3, 0], color: '#00D4FF', label: 'Analytics', type: 'sphere' },
  ];

  const connections = [
    { start: [0, 3, 0], end: [0, 1.5, 0], color: '#4F8CFF' },
    { start: [0, 1.5, 0], end: [0, 0, 0], color: '#00D4FF' },
    { start: [0, 0, 0], end: [0, -1.5, 0], color: '#7C5CFC' },
    { start: [0, -1.5, 0], end: [0, -3, 0], color: '#4F8CFF' },
  ];

  return (
    <group>
      {connections.map((conn, i) => (
        <DataConnection key={`conn-${i}`} {...conn} />
      ))}
      {nodes.map((node, i) => (
        <ArchNode key={`node-${i}`} {...node} />
      ))}
    </group>
  );
}

export default function Architecture3D() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [5, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00D4FF" />
        <DataPlatformArchitecture />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
