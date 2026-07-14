'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

function NeuralNode({ position, color }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[0.1, 16, 16]}>
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </Sphere>
  );
}

function NeuralConnection({ start, end, color }) {
  const points = useMemo(() => [new THREE.Vector3(...start), new THREE.Vector3(...end)], [start, end]);
  
  return (
    <Line
      points={points}
      color={color}
      lineWidth={1}
      transparent
      opacity={0.3}
    />
  );
}

function NeuralNetwork() {
  const nodes = useMemo(() => {
    const nodeList = [];
    const layers = 5;
    const nodesPerLayer = 6;
    const colors = ['#4F8CFF', '#00D4FF', '#7C5CFC'];
    
    for (let layer = 0; layer < layers; layer++) {
      for (let i = 0; i < nodesPerLayer; i++) {
        nodeList.push({
          position: [
            (layer - layers / 2) * 2,
            (i - nodesPerLayer / 2) * 1.5,
            Math.random() * 2 - 1
          ],
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    }
    return nodeList;
  }, []);

  const connections = useMemo(() => {
    const conn = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.7) {
          conn.push({
            start: nodes[i].position,
            end: nodes[j].position,
            color: nodes[i].color
          });
        }
      }
    }
    return conn;
  }, [nodes]);

  return (
    <group>
      {connections.map((conn, i) => (
        <NeuralConnection key={`conn-${i}`} {...conn} />
      ))}
      {nodes.map((node, i) => (
        <NeuralNode key={`node-${i}`} {...node} />
      ))}
    </group>
  );
}

export function NeuralNetwork3D() {
  return (
    <div className="absolute inset-0 opacity-40">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <NeuralNetwork />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
