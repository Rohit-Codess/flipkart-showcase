'use client'

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box, Sphere, Cylinder, Torus, Float, MeshWobbleMaterial, MeshDistortMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// Animated 3D Products with more realistic shapes
function AnimatedSmartphone({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null!)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group 
        ref={groupRef} 
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        {/* Phone Body */}
        <Box args={[0.5, 1, 0.05]} castShadow receiveShadow>
          <MeshWobbleMaterial 
            color="#1a1a1a" 
            speed={hovered ? 2 : 0.5}
            factor={hovered ? 0.1 : 0.02}
          />
        </Box>
        
        {/* Screen */}
        <Box position={[0, 0.1, 0.03]} args={[0.4, 0.8, 0.01]}>
          <meshStandardMaterial 
            color="#0066ff" 
            emissive="#003388"
            emissiveIntensity={hovered ? 0.5 : 0.2}
          />
        </Box>
        
        {/* Camera */}
        <Sphere position={[0.15, 0.4, 0.04]} args={[0.03]}>
          <meshStandardMaterial color="#333" />
        </Sphere>
      </group>
    </Float>
  )
}

function AnimatedLaptop({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null!)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <group 
        ref={groupRef} 
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Laptop Base */}
        <Box args={[1.2, 0.05, 0.8]} position={[0, -0.4, -0.4]} castShadow>
          <MeshDistortMaterial 
            color="#4a5568" 
            speed={hovered ? 3 : 1}
            distort={hovered ? 0.1 : 0.05}
          />
        </Box>
        
        {/* Screen */}
        <Box args={[1.2, 0.8, 0.05]} position={[0, 0, 0]} castShadow>
          <meshStandardMaterial color="#2d3748" metalness={0.9} roughness={0.1} />
        </Box>
        
        {/* Display */}
        <Box args={[1.1, 0.7, 0.02]} position={[0, 0, 0.04]}>
          <meshStandardMaterial 
            color="#000000" 
            emissive="#1a202c"
            emissiveIntensity={hovered ? 0.3 : 0.1}
          />
        </Box>
      </group>
    </Float>
  )
}

function AnimatedHeadphones({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null!)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.4
    }
  })

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.4}>
      <group 
        ref={groupRef} 
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Headband */}
        <Torus args={[0.7, 0.05]} rotation={[0, 0, 0]}>
          <MeshWobbleMaterial 
            color="#ff6b6b" 
            speed={hovered ? 4 : 1}
            factor={hovered ? 0.15 : 0.05}
          />
        </Torus>
        
        {/* Left Speaker */}
        <Sphere args={[0.25]} position={[-0.6, 0, 0]}>
          <meshStandardMaterial color="#333" />
        </Sphere>
        
        {/* Right Speaker */}
        <Sphere args={[0.25]} position={[0.6, 0, 0]}>
          <meshStandardMaterial color="#333" />
        </Sphere>
      </group>
    </Float>
  )
}

function AnimatedWatch({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null!)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.2) * 0.2
    }
  })

  return (
    <Float speed={3} rotationIntensity={0.8} floatIntensity={0.6}>
      <group 
        ref={groupRef} 
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Watch Face */}
        <Cylinder args={[0.3, 0.3, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
          <MeshDistortMaterial 
            color="#ffd700" 
            speed={hovered ? 2 : 0.5}
            distort={hovered ? 0.1 : 0.02}
          />
        </Cylinder>
        
        {/* Screen */}
        <Cylinder args={[0.25, 0.25, 0.02]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.04]}>
          <meshStandardMaterial 
            color="#000" 
            emissive="#333"
            emissiveIntensity={hovered ? 0.5 : 0.2}
          />
        </Cylinder>
        
        {/* Strap */}
        <Torus args={[0.4, 0.03]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.1]}>
          <meshStandardMaterial color="#444" />
        </Torus>
      </group>
    </Float>
  )
}

function AnimatedGameConsole({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null!)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.4
    }
  })

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.3}>
      <group 
        ref={groupRef} 
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Console Body */}
        <Box args={[1, 0.3, 0.8]} castShadow>
          <MeshWobbleMaterial 
            color="#000000" 
            speed={hovered ? 3 : 1}
            factor={hovered ? 0.08 : 0.02}
          />
        </Box>
        
        {/* Controller */}
        <Box args={[0.4, 0.1, 0.25]} position={[0, 0.3, 0.5]}>
          <meshStandardMaterial color="#4a5568" />
        </Box>
        
        {/* Buttons */}
        {[-0.1, 0.1].map((x, i) => (
          <Sphere key={i} args={[0.02]} position={[x, 0.35, 0.6]}>
            <meshStandardMaterial 
              color={hovered ? '#ff6b6b' : '#666'} 
              emissive={hovered ? '#ff3333' : '#000'}
              emissiveIntensity={hovered ? 0.3 : 0}
            />
          </Sphere>
        ))}
      </group>
    </Float>
  )
}

function AnimatedTablet({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null!)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.2
      groupRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.4) * 0.3
    }
  })

  return (
    <Float speed={2.2} rotationIntensity={0.5} floatIntensity={0.4}>
      <group 
        ref={groupRef} 
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Tablet Body */}
        <Box args={[0.8, 1.2, 0.03]} castShadow>
          <MeshDistortMaterial 
            color="#2d3748" 
            speed={hovered ? 2 : 0.8}
            distort={hovered ? 0.05 : 0.01}
          />
        </Box>
        
        {/* Screen */}
        <Box args={[0.7, 1.1, 0.01]} position={[0, 0, 0.02]}>
          <meshStandardMaterial 
            color="#000" 
            emissive="#1a365d"
            emissiveIntensity={hovered ? 0.4 : 0.1}
          />
        </Box>
        
        {/* Home Button */}
        <Sphere args={[0.03]} position={[0, -0.5, 0.03]}>
          <meshStandardMaterial color="#666" />
        </Sphere>
      </group>
    </Float>
  )
}

function EnhancedScene() {
  return (
    <>
      {/* Enhanced Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={2} castShadow color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ff6b6b" />
      <pointLight position={[0, 20, 0]} intensity={1.5} color="#4ade80" />
      <spotLight 
        position={[0, 25, 0]} 
        angle={0.3} 
        penumbra={1} 
        intensity={3} 
        castShadow 
        color="#ffd700"
      />
      
      {/* Products arranged in a dynamic formation */}
      <AnimatedSmartphone position={[-4, 2, 0]} />
      <AnimatedLaptop position={[4, 1, -2]} />
      <AnimatedHeadphones position={[0, -1, 3]} />
      <AnimatedWatch position={[-3, -2, 2]} />
      <AnimatedGameConsole position={[3, -1, 4]} />
      <AnimatedTablet position={[-1, 3, -1]} />
      
      {/* Additional floating elements */}
      {[...Array(15)].map((_, i) => (
        <Float key={i} speed={Math.random() * 2 + 1} rotationIntensity={0.2} floatIntensity={0.1}>
          <Sphere 
            args={[0.05]} 
            position={[
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 15
            ]}
          >
            <meshStandardMaterial 
              color={['#ff6b6b', '#4ade80', '#3b82f6', '#ffd700', '#8b5cf6'][Math.floor(Math.random() * 5)]}
              emissive={['#ff6b6b', '#4ade80', '#3b82f6', '#ffd700', '#8b5cf6'][Math.floor(Math.random() * 5)]}
              emissiveIntensity={0.3}
            />
          </Sphere>
        </Float>
      ))}
      
      {/* Ground with reflections */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.8} 
          roughness={0.2}
          opacity={0.8}
          transparent
        />
      </mesh>
    </>
  )
}

export default function EnhancedHero3D() {
  return (
    <div className="relative h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(72, 222, 128, 0.3) 0%, transparent 50%)
            `,
            backgroundSize: '100% 100%'
          }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Enhanced Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h1 className="text-6xl lg:text-8xl font-bold leading-tight mb-4">
                  <motion.span
                    animate={{
                      textShadow: [
                        '0 0 20px #ffd700',
                        '0 0 40px #ffd700, 0 0 60px #ff6b6b',
                        '0 0 20px #ffd700'
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    Experience
                  </motion.span>
                  <br />
                  <motion.span
                    className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                  >
                    3D Shopping
                  </motion.span>
                </h1>
              </motion.div>
              
              <motion.p 
                className="text-2xl lg:text-3xl font-light text-gray-200 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Immerse yourself in the future of e-commerce with our stunning 3D product showcase
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Explore Now</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: '#ffd700'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Watch Demo
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Enhanced 3D Scene */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="h-96 lg:h-[600px] relative"
            >
              <Canvas
                shadows
                camera={{ position: [0, 0, 12], fov: 60 }}
                className="rounded-3xl"
                gl={{ antialias: true, alpha: true }}
              >
                <EnhancedScene />
              </Canvas>
              
              {/* Overlay Effects */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-40"
          style={{
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: ['#ff6b6b', '#4ade80', '#3b82f6', '#ffd700', '#8b5cf6'][Math.floor(Math.random() * 5)]
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            rotate: [0, 360],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  )
}