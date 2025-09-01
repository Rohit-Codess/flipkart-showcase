'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, MeshDistortMaterial, Box, Sphere } from '@react-three/drei'
import { motion, useScroll, useTransform } from 'framer-motion'
import * as THREE from 'three'

interface Product3DProps {
  position: [number, number, number]
  rotation: [number, number, number]
  color: string
  type: 'phone' | 'laptop' | 'headphones' | 'watch'
}

function Product3D({ position, rotation, color, type }: Product3DProps) {
  const meshRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1
    }
  })

  const renderProduct = () => {
    switch (type) {
      case 'phone':
        return (
          <>
            <Box args={[0.8, 1.6, 0.1]} castShadow>
              <MeshDistortMaterial color={color} distort={0.1} speed={2} metalness={0.8} roughness={0.2} />
            </Box>
            <Box args={[0.6, 1.2, 0.05]} position={[0, 0, 0.06]}>
              <meshStandardMaterial color="#000000" />
            </Box>
          </>
        )
      case 'laptop':
        return (
          <>
            <Box args={[2, 1.4, 0.1]} position={[0, 0, 0]} castShadow>
              <MeshDistortMaterial color={color} distort={0.1} speed={1.5} metalness={0.9} roughness={0.1} />
            </Box>
            <Box args={[1.8, 1.2, 0.05]} position={[0, 0, 0.06]}>
              <meshStandardMaterial color="#1a1a1a" />
            </Box>
            <Box args={[2, 0.1, 1]} position={[0, -0.7, -0.5]}>
              <MeshDistortMaterial color={color} distort={0.05} speed={1} metalness={0.7} roughness={0.3} />
            </Box>
          </>
        )
      case 'headphones':
        return (
          <>
            <Sphere args={[0.4]} position={[-0.6, 0, 0]} castShadow>
              <MeshDistortMaterial color={color} distort={0.2} speed={3} metalness={0.5} roughness={0.5} />
            </Sphere>
            <Sphere args={[0.4]} position={[0.6, 0, 0]} castShadow>
              <MeshDistortMaterial color={color} distort={0.2} speed={3} metalness={0.5} roughness={0.5} />
            </Sphere>
            <Box args={[1.4, 0.1, 0.1]} position={[0, 0.5, 0]}>
              <MeshDistortMaterial color={color} distort={0.1} speed={2} metalness={0.8} roughness={0.2} />
            </Box>
          </>
        )
      case 'watch':
        return (
          <>
            <Box args={[0.8, 1, 0.2]} castShadow>
              <MeshDistortMaterial color={color} distort={0.1} speed={2} metalness={0.9} roughness={0.1} />
            </Box>
            <Box args={[0.6, 0.8, 0.05]} position={[0, 0, 0.13]}>
              <meshStandardMaterial color="#000000" />
            </Box>
          </>
        )
      default:
        return <Box args={[1, 1, 1]} />
    }
  }

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <group ref={meshRef} position={position} rotation={rotation}>
        {renderProduct()}
      </group>
    </Float>
  )
}

function InteractiveProducts() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#2874f0" />
      
      <Product3D position={[-4, 2, 0]} rotation={[0, 0, 0]} color="#2874f0" type="phone" />
      <Product3D position={[4, 1, -2]} rotation={[0, Math.PI / 4, 0]} color="#ff6b6b" type="laptop" />
      <Product3D position={[0, -2, 1]} rotation={[0, -Math.PI / 4, 0]} color="#4ecdc4" type="headphones" />
      <Product3D position={[-2, -1, 2]} rotation={[0, Math.PI / 2, 0]} color="#ffd93d" type="watch" />
      
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  )
}

export default function ProductExperience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const products = [
    { name: "Smartphones", description: "Latest technology in your palm", icon: "📱" },
    { name: "Laptops", description: "Power meets portability", icon: "💻" },
    { name: "Audio", description: "Immersive sound experience", icon: "🎧" },
    { name: "Wearables", description: "Smart technology you wear", icon: "⌚" }
  ]

  return (
    <motion.div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 py-20"
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
            className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            style={{ y }}
          >
            Products That Amaze
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience products like never before. Our 3D visualization technology 
            lets you explore every detail, angle, and feature in stunning clarity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-[600px] rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 overflow-hidden"
          >
            <Canvas
              camera={{ position: [0, 0, 10], fov: 50 }}
              shadows
            >
              <InteractiveProducts />
            </Canvas>
          </motion.div>

          {/* Product Categories */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  x: 20,
                  transition: { duration: 0.3 }
                }}
                className="group p-8 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-6">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {product.description}
                    </p>
                  </div>
                </div>
                
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300"
                />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(40, 116, 240, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
              >
                Explore All Categories
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Interactive Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { title: "360° View", description: "Rotate and explore from every angle", icon: "🔄" },
            { title: "AR Preview", description: "See how products fit in your space", icon: "📸" },
            { title: "Real-time Specs", description: "Interactive product specifications", icon: "📊" }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-700/30 backdrop-blur-sm border border-gray-600/20 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}