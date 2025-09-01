'use client'

import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box, Sphere, Text, Float, MeshWobbleMaterial, Html } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import * as THREE from 'three'

interface Deal {
  id: string
  title: string
  discount: string
  originalPrice: number
  salePrice: number
  timeLeft: string
  color: string
  productType: 'phone' | 'laptop' | 'watch' | 'headphones'
}

const deals: Deal[] = [
  {
    id: '1',
    title: 'iPhone 15 Pro',
    discount: '25% OFF',
    originalPrice: 134900,
    salePrice: 101175,
    timeLeft: '2:45:30',
    color: '#1a1a1a',
    productType: 'phone'
  },
  {
    id: '2',
    title: 'MacBook Pro',
    discount: '20% OFF',
    originalPrice: 199900,
    salePrice: 159920,
    timeLeft: '1:23:45',
    color: '#2d3748',
    productType: 'laptop'
  },
  {
    id: '3',
    title: 'Apple Watch',
    discount: '30% OFF',
    originalPrice: 45900,
    salePrice: 32130,
    timeLeft: '3:12:18',
    color: '#ffd700',
    productType: 'watch'
  },
  {
    id: '4',
    title: 'AirPods Pro',
    discount: '15% OFF',
    originalPrice: 24900,
    salePrice: 21165,
    timeLeft: '4:56:22',
    color: '#ff6b6b',
    productType: 'headphones'
  }
]

function Deal3DProduct({ deal, position, index }: { 
  deal: Deal, 
  position: [number, number, number],
  index: number 
}) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime + index) * 0.4
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + index) * 0.15
      
      if (clicked) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1)
      } else if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.15, 1.15, 1.15), 0.1)
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
      }
    }
  })

  const getProductShape = () => {
    switch (deal.productType) {
      case 'phone':
        return <Box args={[0.5, 1, 0.05]} />
      case 'laptop':
        return <Box args={[1.2, 0.8, 0.05]} />
      case 'watch':
        return <Box args={[0.6, 0.6, 0.1]} />
      case 'headphones':
        return <Sphere args={[0.4]} />
      default:
        return <Box args={[0.8, 0.8, 0.8]} />
    }
  }

  useEffect(() => {
    if (clicked) {
      const timer = setTimeout(() => setClicked(false), 500)
      return () => clearTimeout(timer)
    }
  }, [clicked])

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.2}>
      <group position={position}>
        <mesh
          ref={meshRef}
          castShadow
          receiveShadow
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={() => setClicked(true)}
        >
          {getProductShape()}
          <MeshWobbleMaterial 
            color={deal.color} 
            speed={hovered ? 3 : 1}
            factor={hovered ? 0.1 : 0.03}
          />
        </mesh>
        
        {/* Floating discount badge */}
        <Html position={[0, 1.2, 0]} center>
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: hovered ? 1.1 : 1
            }}
            transition={{ 
              rotate: { duration: 2, repeat: Infinity },
              scale: { duration: 0.2 }
            }}
            className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
          >
            {deal.discount}
          </motion.div>
        </Html>
        
        {/* Price display */}
        <Text
          position={[0, -1.2, 0]}
          fontSize={0.2}
          color="#ffd700"
          anchorX="center"
          anchorY="middle"
        >
          ₹{deal.salePrice.toLocaleString()}
        </Text>
        
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.15}
          color="#999"
          anchorX="center"
          anchorY="middle"
        >
          ₹{deal.originalPrice.toLocaleString()}
        </Text>
        
        {/* Floating particles around the product */}
        {[...Array(8)].map((_, i) => (
          <Float key={i} speed={3 + i} rotationIntensity={0.1} floatIntensity={0.1}>
            <Sphere 
              args={[0.02]} 
              position={[
                Math.sin(i * Math.PI / 4) * 1.5,
                Math.cos(i * Math.PI / 4) * 1.5,
                Math.sin(i * Math.PI / 6) * 0.5
              ]}
            >
              <meshStandardMaterial 
                color={deal.color}
                emissive={deal.color}
                emissiveIntensity={0.5}
              />
            </Sphere>
          </Float>
        ))}
      </group>
    </Float>
  )
}

function DealsScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={2} castShadow />
      <pointLight position={[-10, 10, -10]} intensity={1} color="#ff6b6b" />
      <pointLight position={[10, -10, 10]} intensity={1} color="#4ade80" />
      <spotLight position={[0, 20, 0]} angle={0.3} penumbra={1} intensity={2} castShadow />
      
      {deals.map((deal, index) => (
        <Deal3DProduct
          key={deal.id}
          deal={deal}
          position={[
            (index - 1.5) * 3.5,
            0,
            Math.sin(index * 0.5) * 2
          ]}
          index={index}
        />
      ))}
      
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial 
          color="#0a0a0a" 
          metalness={0.8} 
          roughness={0.2}
          opacity={0.9}
          transparent
        />
      </mesh>
    </>
  )
}

function CountdownTimer({ timeLeft }: { timeLeft: string }) {
  const [time, setTime] = useState(timeLeft)
  
  useEffect(() => {
    const timer = setInterval(() => {
      // Simulate countdown (in real app, calculate from actual end time)
      const [hours, minutes, seconds] = time.split(':').map(Number)
      let totalSeconds = hours * 3600 + minutes * 60 + seconds - 1
      
      if (totalSeconds < 0) totalSeconds = 0
      
      const newHours = Math.floor(totalSeconds / 3600)
      const newMinutes = Math.floor((totalSeconds % 3600) / 60)
      const newSeconds = totalSeconds % 60
      
      setTime(`${newHours}:${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`)
    }, 1000)
    
    return () => clearInterval(timer)
  }, [time])
  
  return (
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
      className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-mono"
    >
      {time}
    </motion.div>
  )
}

export default function FlashDeals3D() {
  const [selectedDeal, setSelectedDeal] = useState<string | null>(null)

  return (
    <div className="py-20 bg-gradient-to-br from-black via-gray-900 to-red-900 relative overflow-hidden">
      {/* Animated background effects */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl lg:text-7xl font-bold text-white mb-4"
            animate={{
              textShadow: [
                '0 0 20px #ef4444',
                '0 0 40px #ef4444, 0 0 60px #fbbf24',
                '0 0 20px #ef4444'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⚡ Flash Deals
          </motion.h2>
          <p className="text-xl text-gray-300 mb-8">
            Limited time offers with incredible 3D shopping experience
          </p>
          <motion.div
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-yellow-400 text-lg font-semibold"
          >
            🔥 Hurry! Deals ending soon
          </motion.div>
        </motion.div>

        {/* 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-96 lg:h-[600px] rounded-3xl overflow-hidden mb-16"
        >
          <Canvas
            shadows
            camera={{ position: [0, 5, 15], fov: 60 }}
            className="bg-gradient-to-b from-red-900/20 to-black/40"
          >
            <DealsScene />
          </Canvas>
        </motion.div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                selectedDeal === deal.id 
                  ? 'bg-gradient-to-br from-red-500/30 to-orange-500/30 shadow-2xl shadow-red-500/50' 
                  : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
              }`}
              onClick={() => setSelectedDeal(selectedDeal === deal.id ? null : deal.id)}
            >
              {/* Deal Badge */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg z-10"
              >
                {deal.discount}
              </motion.div>

              {/* Product placeholder */}
              <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 rounded-xl"
                  style={{ backgroundColor: deal.color }}
                />
                
                {/* Shimmer effect */}
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </div>

              <h3 className="text-white font-bold text-lg mb-2">{deal.title}</h3>
              
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-yellow-400 font-bold text-xl">
                  ₹{deal.salePrice.toLocaleString()}
                </span>
                <span className="text-gray-400 line-through text-sm">
                  ₹{deal.originalPrice.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Ends in:</span>
                <CountdownTimer timeLeft={deal.timeLeft} />
              </div>

              <AnimatePresence>
                {selectedDeal === deal.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-white/20"
                  >
                    <p className="text-gray-300 text-sm mb-3">
                      Limited stock available! Get this amazing deal before it&apos;s gone.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300"
                    >
                      Grab Deal Now!
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}