'use client'

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box, Sphere, Cylinder, Torus } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

interface CategoryItem {
  name: string
  icon: string
  color: string
  shape: 'box' | 'sphere' | 'cylinder' | 'torus'
  deals: string
}

const categories: CategoryItem[] = [
  {
    name: 'Electronics',
    icon: '📱',
    color: '#3b82f6',
    shape: 'box',
    deals: 'Up to 80% Off'
  },
  {
    name: 'Fashion',
    icon: '👕',
    color: '#ec4899',
    shape: 'sphere',
    deals: 'Min 50% Off'
  },
  {
    name: 'Home & Kitchen',
    icon: '🏠',
    color: '#10b981',
    shape: 'cylinder',
    deals: 'Up to 70% Off'
  },
  {
    name: 'Sports',
    icon: '⚽',
    color: '#f59e0b',
    shape: 'sphere',
    deals: 'Min 40% Off'
  },
  {
    name: 'Books',
    icon: '📚',
    color: '#8b5cf6',
    shape: 'box',
    deals: 'Up to 90% Off'
  },
  {
    name: 'Beauty',
    icon: '💄',
    color: '#ef4444',
    shape: 'torus',
    deals: 'Min 30% Off'
  }
]

function Category3D({ category, position, index }: { 
  category: CategoryItem, 
  position: [number, number, number],
  index: number 
}) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5 + index
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime + index) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + index) * 0.2
      
      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1)
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
      }
    }
  })

  const getShape = () => {
    switch (category.shape) {
      case 'sphere':
        return <Sphere args={[0.8]} />
      case 'cylinder':
        return <Cylinder args={[0.6, 0.6, 1.2]} />
      case 'torus':
        return <Torus args={[0.6, 0.3]} />
      default:
        return <Box args={[1, 1, 1]} />
    }
  }

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {getShape()}
        <meshStandardMaterial 
          color={category.color} 
          metalness={0.6} 
          roughness={0.3}
          emissive={category.color}
          emissiveIntensity={hovered ? 0.3 : 0.1}
        />
      </mesh>
      
      {/* Floating particles around each category */}
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.sin(i * 2) * 2,
            Math.cos(i * 3) * 1.5,
            Math.sin(i * 1.5) * 1.5
          ]}
        >
          <Sphere args={[0.05]} />
          <meshStandardMaterial 
            color={category.color}
            emissive={category.color}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  )
}

function CategoriesScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <pointLight position={[-10, 10, -10]} intensity={0.5} color="#ff6b6b" />
      <pointLight position={[0, -10, 10]} intensity={0.5} color="#4ade80" />
      <spotLight position={[0, 20, 0]} angle={0.3} penumbra={1} intensity={2} castShadow />
      
      {categories.map((category, index) => {
        const angle = (index / categories.length) * Math.PI * 2
        const radius = 4
        return (
          <Category3D
            key={category.name}
            category={category}
            position={[
              Math.cos(angle) * radius,
              0,
              Math.sin(angle) * radius
            ]}
            index={index}
          />
        )
      })}
      
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeGeometry args={[30, 30]} />
        <shadowMaterial opacity={0.4} />
      </mesh>
    </>
  )
}

export default function Categories3D() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-300">
            Explore our diverse range of products in stunning 3D
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-96 lg:h-[500px]"
          >
            <Canvas
              shadows
              camera={{ position: [0, 8, 12], fov: 60 }}
              className="rounded-2xl"
            >
              <CategoriesScene />
            </Canvas>
          </motion.div>

          {/* Category List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-white/20 backdrop-blur-sm shadow-2xl'
                    : 'bg-white/10 backdrop-blur-sm hover:bg-white/15'
                }`}
                onClick={() => setSelectedCategory(
                  selectedCategory === category.name ? null : category.name
                )}
              >
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                    style={{ backgroundColor: category.color + '40' }}
                  >
                    {category.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-xl mb-1">
                      {category.name}
                    </h3>
                    <p className="text-yellow-400 font-medium">
                      {category.deals}
                    </p>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: selectedCategory === category.name ? 90 : 0 }}
                    className="text-white text-2xl"
                  >
                    →
                  </motion.div>
                </div>
                
                {selectedCategory === category.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-white/20"
                  >
                    <p className="text-gray-300">
                      Discover amazing deals and premium quality products in {category.name.toLowerCase()}.
                      Shop now and save big!
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-3 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Shop Now
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}