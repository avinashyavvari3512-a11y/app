'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

function LocationMarker({ position, label, color }) {
  return (
    <group position={position}>
      <Sphere args={[0.05, 16, 16]}>
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={1}
        />
      </Sphere>
      <Html distanceFactor={10}>
        <div className="text-xs text-white bg-black/50 px-2 py-1 rounded whitespace-nowrap">
          {label}
        </div>
      </Html>
    </group>
  );
}

function Globe() {
  const meshRef = useRef();
  const pointsRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.002;
    }
  });

  const points = [];
  const radius = 2;
  for (let lat = -90; lat <= 90; lat += 10) {
    for (let lon = -180; lon <= 180; lon += 10) {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      
      const x = -(radius * Math.sin(phi) * Math.cos(theta));
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);
      
      points.push(x, y, z);
    }
  }

  const locations = [
    { 
      position: [1.2, 0.8, 1.2], 
      label: 'Detroit, MI', 
      color: '#4F8CFF' 
    },
    { 
      position: [1.5, 1.0, 0.5], 
      label: 'Cambridge, MA', 
      color: '#00D4FF' 
    },
    { 
      position: [-0.8, -0.5, 1.8], 
      label: 'Bangalore, India', 
      color: '#7C5CFC' 
    },
  ];

  return (
    <group>
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <meshStandardMaterial 
          color="#0a0a0a"
          wireframe={false}
          transparent
          opacity={0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.length / 3}
            array={new Float32Array(points)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#4F8CFF"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      {locations.map((loc, i) => (
        <LocationMarker key={i} {...loc} />
      ))}
    </group>
  );
}

export default function Globe3D() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Globe />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
