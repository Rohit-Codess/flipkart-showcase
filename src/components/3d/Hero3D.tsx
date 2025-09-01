'use client'

import React from 'react'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box, Sphere, Torus } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// 3D Product Components
function RotatingPhone({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1
    }
  })

  return (
    <group position={position}>
      <Box ref={meshRef} args={[0.5, 1, 0.05]} castShadow receiveShadow>
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </Box>
      <Box position={[0, 0.35, 0.03]} args={[0.3, 0.5, 0.01]}>
        <meshStandardMaterial color="#0066ff" emissive="#003388" />
      </Box>
    </group>
  )
}

function RotatingLaptop({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.15
    }
  })

  return (
    <group position={position} ref={meshRef}>
      <Box args={[1.2, 0.8, 0.05]} position={[0, 0, 0]} castShadow>
        <meshStandardMaterial color="#2d3748" metalness={0.9} roughness={0.1} />
      </Box>
      <Box args={[1.1, 0.7, 0.02]} position={[0, 0, 0.04]}>
        <meshStandardMaterial color="#000000" emissive="#1a202c" />
      </Box>
      <Box args={[1.2, 0.05, 0.8]} position={[0, -0.4, -0.4]}>
        <meshStandardMaterial color="#4a5568" metalness={0.7} roughness={0.3} />
      </Box>
    </group>
  )
}

function RotatingSpeaker({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.4
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 2.5) * 0.1
    }
  })

  return (
    <group position={position} ref={meshRef}>
      <Sphere args={[0.6]} castShadow>
        <meshStandardMaterial color="#ff6b6b" metalness={0.3} roughness={0.7} />
      </Sphere>
      <Sphere args={[0.3]} position={[0, 0, 0.4]}>
        <meshStandardMaterial color="#333" />
      </Sphere>
      <Sphere args={[0.15]} position={[0, 0, 0.5]}>
        <meshStandardMaterial color="#666" />
      </Sphere>
    </group>
  )
}

function FloatingWatch({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.2) * 0.2
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 3) * 0.08
    }
  })

  return (
    <group position={position} ref={meshRef}>
      <Torus args={[0.4, 0.05, 16, 32]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#ffd700" metalness={0.9} roughness={0.1} />
      </Torus>
      <Box args={[0.3, 0.4, 0.05]} castShadow>
        <meshStandardMaterial color="#000" emissive="#333" />
      </Box>
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b6b" />
      <spotLight position={[0, 20, 0]} angle={0.3} penumbra={1} intensity={2} castShadow />
      
      <RotatingPhone position={[-3, 1, 0]} />
      <RotatingLaptop position={[3, 0, 0]} />
      <RotatingSpeaker position={[0, -1, 2]} />
      <FloatingWatch position={[-2, -2, 1]} />
      
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.2} />
      </mesh>
    </>
  )
}

export default function Hero3D() {
  return (
    <div className="relative h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white space-y-6"
            >
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Roundtrip booking offers!
              </motion.h1>
              
              <motion.p 
                className="text-2xl lg:text-4xl font-semibold text-yellow-400"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Up to ₹3,500 Off
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Book now
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
                >
                  USE CODE: ROUNDTRIP
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-colors"
                >
                  Explore Products
                </motion.button>
              </motion.div>
            </motion.div>

            {/* 3D Scene */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-96 lg:h-[500px]"
            >
              <Canvas
                shadows
                camera={{ position: [0, 0, 8], fov: 50 }}
                className="rounded-2xl"
              >
                <Scene />
              </Canvas>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-20 h-20 bg-yellow-400 rounded-full opacity-20"
        />
        
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-40 left-10 w-16 h-16 bg-pink-400 rounded-full opacity-20"
        />
      </div>
    </div>
  );
}