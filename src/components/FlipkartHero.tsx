'use client'

import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, Box, Environment } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import Image from 'next/image'
import LoadingFallback from './LoadingFallback'

// Optimized Flipkart Product 3D Models with reduced complexity
function FlipkartPhone({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.05
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.3}>
      <group ref={meshRef} position={position}>
        {/* Phone Body - Simplified */}
        <Box args={[1, 2, 0.1]}>
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
        </Box>
        {/* Screen */}
        <Box args={[0.85, 1.7, 0.02]} position={[0, 0, 0.06]}>
          <meshStandardMaterial color="#2874f0" emissive="#1e5dc8" emissiveIntensity={0.2} />
        </Box>
        {/* Home Button */}
        <Sphere args={[0.05]} position={[0, -0.7, 0.06]}>
          <meshStandardMaterial color="#ffffff" />
        </Sphere>
      </group>
    </Float>
  )
}

function FlipkartLaptop({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 1) * 0.08
    }
  })

  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={0.5}>
      <group ref={meshRef} position={position}>
        {/* Laptop Screen - Simplified */}
        <Box args={[2.5, 1.8, 0.1]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="#2d3748" metalness={0.7} roughness={0.3} />
        </Box>
        {/* Display */}
        <Box args={[2.3, 1.6, 0.02]} position={[0, 0.5, 0.06]}>
          <meshStandardMaterial color="#000000" />
        </Box>
        {/* Flipkart Site Preview */}
        <Box args={[2.1, 0.3, 0.01]} position={[0, 1, 0.07]}>
          <meshStandardMaterial color="#2874f0" />
        </Box>
        {/* Keyboard Base - Simplified */}
        <Box args={[2.5, 0.1, 1.8]} position={[0, -0.9, -0.9]}>
          <meshStandardMaterial color="#4a5568" metalness={0.5} roughness={0.5} />
        </Box>
      </group>
    </Float>
  )
}

function FlipkartHeadphones({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.05
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
      <group ref={meshRef} position={position}>
        {/* Left Ear Cup - Simplified */}
        <Sphere args={[0.6]} position={[-0.8, 0, 0]}>
          <meshStandardMaterial color="#ff6b6b" metalness={0.2} roughness={0.8} />
        </Sphere>
        {/* Right Ear Cup - Simplified */}
        <Sphere args={[0.6]} position={[0.8, 0, 0]}>
          <meshStandardMaterial color="#ff6b6b" metalness={0.2} roughness={0.8} />
        </Sphere>
        {/* Headband */}
        <Box args={[1.8, 0.15, 0.15]} position={[0, 0.7, 0]}>
          <meshStandardMaterial color="#333333" metalness={0.6} roughness={0.4} />
        </Box>
      </group>
    </Float>
  )
}

function FlipkartWatch({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.05
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.8) * 0.06
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.4}>
      <group ref={meshRef} position={position}>
        {/* Watch Face - Simplified */}
        <Box args={[0.8, 1, 0.3]}>
          <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.2} />
        </Box>
        {/* Screen */}
        <Box args={[0.6, 0.8, 0.02]} position={[0, 0, 0.16]}>
          <meshStandardMaterial color="#000000" />
        </Box>
        {/* Digital Display */}
        <Box args={[0.5, 0.2, 0.01]} position={[0, 0.2, 0.17]}>
          <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.3} />
        </Box>
      </group>
    </Float>
  )
}

// Optimized Scene with reduced lighting for better performance
function Scene() {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-3, -3, -3]} intensity={0.3} color="#2874f0" />
      
      <FlipkartPhone position={[-4, 1, 0]} />
      <FlipkartLaptop position={[4, 0, -1]} />
      <FlipkartHeadphones position={[0, -2, 2]} />
      <FlipkartWatch position={[-2, -1, 1]} />
    </>
  )
}

export default function FlipkartHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: -(e.clientY / window.innerHeight) * 2 + 1
    })
  }

  return (
    <div 
      className="relative min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Flipkart Brand Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-white space-y-6 lg:space-y-8 order-2 lg:order-1"
            >
              {/* Flipkart Logo */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center space-x-3 sm:space-x-4 mb-6 lg:mb-8"
              >
                <div className="bg-white p-2 sm:p-3 lg:p-4 rounded-xl lg:rounded-2xl">
                  <Image 
                    src="/logo.png" 
                    alt="Flipkart Logo" 
                    width={48} 
                    height={48} 
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Flipkart</h1>
                  <p className="text-blue-200 text-sm sm:text-base">The Big Billion Days</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold leading-tight">
                  Experience Products in
                </h2>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Stunning 3D
                </h3>
              </motion.div>
              
              <motion.p 
                className="text-base sm:text-lg lg:text-xl xl:text-2xl text-blue-100 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Explore millions of products with interactive 3D models. 
                From smartphones to fashion, see every detail before you buy.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4 lg:gap-6"
              >
                <motion.a
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(255, 165, 0, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-semibold text-base lg:text-lg shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 btn-hover-lift inline-flex items-center justify-center" href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer"
                >
                  Shop Now
                </motion.a>
                
                <motion.a
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "rgba(255, 255, 255, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-white text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-semibold text-base lg:text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300" href="https://www.flipkart.com/all-categories/pr?sid=search.flipkart.com" target="_blank" rel="noopener noreferrer"
                >
                  Explore Categories
                </motion.a>
              </motion.div>

              {/* Flipkart Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="grid grid-cols-3 gap-4 lg:gap-8 pt-6 lg:pt-8"
              >
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">500M+</div>
                  <div className="text-xs sm:text-sm text-blue-200">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-400">200M+</div>
                  <div className="text-xs sm:text-sm text-blue-200">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400">80+</div>
                  <div className="text-xs sm:text-sm text-blue-200">Categories</div>
                </div>
              </motion.div>
            </motion.div>

            {/* 3D Product Scene - Optimized for Performance */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] perspective-500 lg:perspective-1000 order-1 lg:order-2"
              style={{
                transform: `rotateX(${mousePosition.y * 1}deg) rotateY(${mousePosition.x * 1}deg)`
              }}
            >
              <Suspense fallback={<LoadingFallback />}>
                <Canvas
                  camera={{ position: [0, 0, 8], fov: 50 }}
                  className="rounded-2xl lg:rounded-3xl bg-gradient-to-br from-white/10 to-blue-500/20 backdrop-blur-sm border border-white/20"
                  gl={{ 
                    antialias: false,
                    alpha: true,
                    powerPreference: "high-performance",
                    stencil: false,
                    depth: true
                  }}
                  dpr={[1, 1.5]} // Limit pixel ratio for better performance
                  performance={{ min: 0.5 }} // Adaptive performance
                >
                  <Scene />
                </Canvas>
              </Suspense>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Flipkart Elements - Optimized animations */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 8, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-12 h-12 lg:w-16 lg:h-16 bg-yellow-400 rounded-full items-center justify-center opacity-80 hidden sm:flex"
      >
        <span className="text-lg lg:text-2xl">🛒</span>
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0],
          scale: [1, 0.95, 1]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-40 left-20 w-10 h-10 lg:w-14 lg:h-14 bg-orange-500 rounded-full items-center justify-center opacity-80 hidden sm:flex"
      >
        <span className="text-base lg:text-xl">📱</span>
      </motion.div>

      {/* Mobile-friendly Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-1 sm:mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}