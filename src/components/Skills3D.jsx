import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

// 3D Skill Cube Component
function SkillCube({ position, color, label, delay }) {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time * 0.5 + delay) * 0.2;
    meshRef.current.rotation.y = Math.cos(time * 0.3 + delay) * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position}>
        <RoundedBox ref={meshRef} args={[1, 1, 1]} radius={0.1} smoothness={4}>
          <meshStandardMaterial
            color={color}
            metalness={0.8}
            roughness={0.2}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </RoundedBox>
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </group>
    </Float>
  );
}

// Particle Network
function ParticleNetwork() {
  const points = useRef();
  const lines = useRef();

  const particleCount = 100;
  const positions = React.useMemo(() => {
    const temp = [];
    for (let i = 0; i < particleCount; i++) {
      temp.push(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      );
    }
    return new Float32Array(temp);
  }, []);

  useFrame((state) => {
    points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#8b5cf6"
          sizeAttenuation
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}

// Main 3D Skills Scene
export default function Skills3D() {
  const skills = [
    { label: 'React', position: [-3, 2, 0], color: '#61dafb', delay: 0 },
    { label: 'Node.js', position: [-1, 2, -1], color: '#68a063', delay: 0.5 },
    { label: 'Python', position: [1, 2, 0], color: '#3776ab', delay: 1 },
    { label: 'AI/ML', position: [3, 2, -1], color: '#ff6b6b', delay: 1.5 },
    { label: 'TypeScript', position: [-2, 0, 1], color: '#3178c6', delay: 2 },
    { label: 'Three.js', position: [0, 0, 0], color: '#ffffff', delay: 2.5 },
    { label: 'MongoDB', position: [2, 0, 1], color: '#47a248', delay: 3 },
    { label: 'TailwindCSS', position: [-3, -2, 0], color: '#06b6d4', delay: 3.5 },
    { label: 'Docker', position: [-1, -2, -1], color: '#2496ed', delay: 4 },
    { label: 'AWS', position: [1, -2, 0], color: '#ff9900', delay: 4.5 },
    { label: 'Git', position: [3, -2, -1], color: '#f05032', delay: 5 },
  ];

  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 60 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.5} />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1} color="#3b82f6" />

      <ParticleNetwork />
      
      {skills.map((skill, index) => (
        <SkillCube
          key={index}
          position={skill.position}
          color={skill.color}
          label={skill.label}
          delay={skill.delay}
        />
      ))}
    </Canvas>
  );
}
