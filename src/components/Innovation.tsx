'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Torus } from '@react-three/drei'
import { motion, useScroll, useTransform } from 'framer-motion'
import * as THREE from 'three'

function InnovationSphere({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.7
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={0.5}>
      <Sphere ref={meshRef} position={position} args={[1]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.6}
          speed={speed}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

function TechRing({ position, rotation, color }: { position: [number, number, number], rotation: [number, number, number], color: string }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.01
      meshRef.current.rotation.x = rotation[0] + Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <Torus ref={meshRef} position={position} rotation={rotation} args={[2, 0.1, 16, 32]}>
      <MeshDistortMaterial color={color} distort={0.2} speed={3} metalness={0.9} roughness={0.1} />
    </Torus>
  )
}

function AIBrain() {
  const groupRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <group ref={groupRef}>
      <InnovationSphere position={[0, 0, 0]} color="#00ff88" speed={0.8} />
      <TechRing position={[0, 0, 0]} rotation={[0, 0, 0]} color="#0088ff" />
      <TechRing position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} color="#ff0088" />
      <TechRing position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]} color="#ffff00" />
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#0088ff" />
      
      <AIBrain />
      
      <InnovationSphere position={[-4, 2, -2]} color="#ff6b6b" speed={0.5} />
      <InnovationSphere position={[4, -1, -1]} color="#4ecdc4" speed={0.7} />
      <InnovationSphere position={[-2, -3, 1]} color="#ffd93d" speed={0.6} />
    </>
  )
}

export default function Innovation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2])

  const innovations = [
    {
      title: "AI-Powered Recommendations",
      description: "Machine learning algorithms that understand your preferences better than you do",
      icon: "🤖",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Augmented Reality Shopping",
      description: "Try before you buy with cutting-edge AR technology",
      icon: "🥽",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Blockchain Authenticity",
      description: "Every product verified through immutable blockchain records",
      icon: "🔗",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Quantum-Fast Delivery",
      description: "Revolutionary logistics powered by quantum computing algorithms",
      icon: "⚡",
      gradient: "from-yellow-500 to-orange-500"
    }
  ]

  return (
    <motion.div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 py-20 overflow-hidden"
      style={{ opacity }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          style={{ scale }}
        >
          <motion.h2 
            className="text-6xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            style={{ y }}
          >
            Innovation Hub
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Where tomorrow&apos;s technology meets today&apos;s shopping experience. 
            We&apos;re not just selling products – we&apos;re pioneering the future of commerce.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Innovation Cards */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {innovations.map((innovation, index) => (
              <motion.div
                key={innovation.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  x: 10,
                  transition: { duration: 0.3 }
                }}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/30 to-gray-700/30 backdrop-blur-sm border border-gray-600/20 hover:border-white/30 transition-all duration-500 overflow-hidden"
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${innovation.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex items-start space-x-6">
                  <motion.div 
                    className="text-5xl group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {innovation.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300 mb-3">
                      {innovation.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                      {innovation.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover Line Effect */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${innovation.gradient} group-hover:h-2 transition-all duration-300`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="h-[700px] rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 overflow-hidden"
          >
            <Canvas
              camera={{ position: [0, 0, 8], fov: 50 }}
            >
              <Scene />
            </Canvas>
          </motion.div>
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-gray-800/20 to-gray-700/20 backdrop-blur-sm border border-gray-600/20 rounded-3xl p-12"
        >
          <h3 className="text-4xl font-bold text-white mb-6">The Future is Now</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience shopping in ways you never thought possible. Our technology doesn&apos;t just show you products – 
            it creates an emotional connection that transforms how you discover, explore, and purchase.
          </p>
          
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 30px 60px rgba(139, 92, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
          >
            Experience the Future
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}