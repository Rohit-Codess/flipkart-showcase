'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Box, Cylinder, Environment } from '@react-three/drei'
import { motion, useScroll, useTransform } from 'framer-motion'
import * as THREE from 'three'

function TechStack({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* React Logo */}
      <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
        <Box args={[1, 1, 0.2]} position={[0, 2, 0]}>
          <MeshDistortMaterial color="#61dafb" distort={0.2} speed={3} metalness={0.3} roughness={0.7} />
        </Box>
      </Float>
      
      {/* Next.js Logo */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={0.8}>
        <Cylinder args={[0.8, 0.8, 0.3, 8]} position={[0, 0, 0]}>
          <MeshDistortMaterial color="#000000" distort={0.1} speed={2} metalness={0.9} roughness={0.1} />
        </Cylinder>
      </Float>
      
      {/* Three.js Sphere */}
      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[0.6]} position={[0, -2, 0]}>
          <MeshDistortMaterial color="#ff6b6b" distort={0.4} speed={4} metalness={0.5} roughness={0.5} />
        </Sphere>
      </Float>
    </group>
  )
}

function DataVisualization() {
  const points = useRef<THREE.Points>(null!)
  const particleCount = 200
  
  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 15
  }

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.03} 
        color="#ffffff" 
        transparent 
        opacity={0.8}
        sizeAttenuation={true}
      />
    </points>
  )
}

function Scene() {
  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#2874f0" />
      
      <TechStack position={[0, 0, 0]} />
      <DataVisualization />
      
      {/* Floating Tech Icons */}
      <Float speed={1} rotationIntensity={1} floatIntensity={0.5}>
        <Box args={[0.5, 0.5, 0.5]} position={[-4, 2, -2]}>
          <MeshDistortMaterial color="#ffd93d" distort={0.2} speed={2} />
        </Box>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[0.4]} position={[4, 1, -1]}>
          <MeshDistortMaterial color="#4ecdc4" distort={0.3} speed={3} />
        </Sphere>
      </Float>
    </>
  )
}

export default function TechShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const techSpecs = [
    {
      category: "Frontend",
      technologies: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS"],
      description: "Modern, responsive, and lightning-fast user interface",
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "3D Graphics",
      technologies: ["Three.js", "React Three Fiber", "Drei", "WebGL"],
      description: "Immersive 3D experiences with stunning visual effects",
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Animation",
      technologies: ["Framer Motion", "GSAP", "CSS Animations", "WebGL Shaders"],
      description: "Smooth, performant animations that captivate users",
      color: "from-green-500 to-teal-500"
    },
    {
      category: "Performance",
      technologies: ["SSR", "Code Splitting", "Lazy Loading", "CDN"],
      description: "Optimized for speed with modern web technologies",
      color: "from-yellow-500 to-orange-500"
    }
  ]

  const stats = [
    { label: "Load Time", value: "<2s", icon: "⚡" },
    { label: "3D Models", value: "50+", icon: "🎮" },
    { label: "Animations", value: "100+", icon: "✨" },
    { label: "Performance", value: "98%", icon: "🚀" }
  ]

  return (
    <motion.div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-900 py-20"
      style={{ opacity }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-6xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            style={{ y }}
          >
            Tech Stack
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Built with cutting-edge technologies to deliver an unparalleled user experience. 
            Every pixel is crafted with precision, every animation is optimized for performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: 45 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="h-[600px] rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 overflow-hidden"
          >
            <Canvas
              camera={{ position: [0, 0, 10], fov: 50 }}
            >
              <Scene />
            </Canvas>
          </motion.div>

          {/* Tech Categories */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {techSpecs.map((spec, index) => (
              <motion.div
                key={spec.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-700/30 backdrop-blur-sm border border-gray-600/20 hover:border-white/30 transition-all duration-300"
              >
                <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${spec.color} bg-clip-text text-transparent`}>
                  {spec.category}
                </h3>
                <p className="text-gray-400 mb-4">{spec.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {spec.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      className={`px-3 py-1 text-sm bg-gradient-to-r ${spec.color} text-white rounded-full font-medium cursor-pointer`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-700/40 backdrop-blur-sm border border-gray-600/20 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-gray-800/20 to-gray-700/20 backdrop-blur-sm border border-gray-600/20 rounded-3xl p-12"
        >
          <h3 className="text-4xl font-bold text-white mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Dive into a shopping experience that redefines what&apos;s possible. 
            Every interaction is designed to amaze, engage, and delight.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 30px 60px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
            >
              Start Exploring
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-12 py-4 rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              View Source Code
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}