'use client'

import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Box, Sphere, Environment, OrbitControls } from '@react-three/drei'
import { motion, useScroll, useTransform } from 'framer-motion'
import * as THREE from 'three'
import LoadingFallback from './LoadingFallback'

// Optimized Product Components with reduced complexity
function SmartphoneProduct({ position, color }: { position: [number, number, number], color: string }) {
  const meshRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.03
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.2}>
      <group ref={meshRef} position={position}>
        {/* Phone Body - Simplified */}
        <Box args={[0.8, 1.6, 0.08]}>
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </Box>
        {/* Screen */}
        <Box args={[0.7, 1.4, 0.01]} position={[0, 0, 0.05]}>
          <meshStandardMaterial color="#000000" />
        </Box>
        {/* Brand Logo Area */}
        <Box args={[0.6, 0.2, 0.005]} position={[0, 0.5, 0.051]}>
          <meshStandardMaterial color="#2874f0" emissive="#1e40af" emissiveIntensity={0.1} />
        </Box>
      </group>
    </Float>
  )
}

function LaptopProduct({ position, color }: { position: [number, number, number], color: string }) {
  const meshRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 1) * 0.05
    }
  })

  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={0.3}>
      <group ref={meshRef} position={position}>
        {/* Laptop Screen - Simplified */}
        <Box args={[2, 1.4, 0.08]} position={[0, 0.3, 0]}>
          <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
        </Box>
        {/* Display */}
        <Box args={[1.8, 1.2, 0.01]} position={[0, 0.3, 0.045]}>
          <meshStandardMaterial color="#1a1a1a" />
        </Box>
        {/* Flipkart Logo on Screen */}
        <Box args={[1.6, 0.2, 0.005]} position={[0, 0.7, 0.05]}>
          <meshStandardMaterial color="#2874f0" />
        </Box>
        {/* Keyboard - Simplified */}
        <Box args={[2, 0.08, 1.4]} position={[0, -0.7, -0.7]}>
          <meshStandardMaterial color="#666666" metalness={0.5} roughness={0.5} />
        </Box>
      </group>
    </Float>
  )
}

function HeadphonesProduct({ position, color }: { position: [number, number, number], color: string }) {
  const meshRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.04
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={meshRef} position={position}>
        {/* Left Ear Cup - Simplified */}
        <Sphere args={[0.5]} position={[-0.6, 0, 0]}>
          <meshStandardMaterial color={color} metalness={0.3} roughness={0.7} />
        </Sphere>
        {/* Right Ear Cup - Simplified */}
        <Sphere args={[0.5]} position={[0.6, 0, 0]}>
          <meshStandardMaterial color={color} metalness={0.3} roughness={0.7} />
        </Sphere>
        {/* Headband */}
        <Box args={[1.4, 0.12, 0.12]} position={[0, 0.6, 0]}>
          <meshStandardMaterial color="#333333" metalness={0.6} roughness={0.4} />
        </Box>
      </group>
    </Float>
  )
}

function WatchProduct({ position, color }: { position: [number, number, number], color: string }) {
  const meshRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.05
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.04
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
      <group ref={meshRef} position={position}>
        {/* Watch Face - Simplified */}
        <Box args={[0.6, 0.8, 0.2]}>
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </Box>
        {/* Screen */}
        <Box args={[0.5, 0.7, 0.01]} position={[0, 0, 0.11]}>
          <meshStandardMaterial color="#000000" />
        </Box>
        {/* Digital Display */}
        <Box args={[0.4, 0.15, 0.005]} position={[0, 0.15, 0.12]}>
          <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.3} />
        </Box>
      </group>
    </Float>
  )
}

// Optimized Scene with reduced lighting for better performance
function ProductScene() {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.4} />
      <directionalLight position={[8, 8, 5]} intensity={0.8} />
      <pointLight position={[-8, -8, -5]} intensity={0.3} color="#2874f0" />
      
      <SmartphoneProduct 
        position={[-3, 2, 0]} 
        color="#1e3a8a" 
      />
      <LaptopProduct 
        position={[3, 1, -2]} 
        color="#374151" 
      />
      <HeadphonesProduct 
        position={[0, -1, 2]} 
        color="#dc2626" 
      />
      <WatchProduct 
        position={[-2, -2, 1]} 
        color="#059669" 
      />
      
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.2} />
    </>
  )
}

export default function FlipkartProducts() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const categories = [
    { 
      name: "Mobiles & Tablets", 
      description: "Latest smartphones with 3D product views", 
      icon: "📱",
      offers: "Up to 80% off + Exchange offers",
      products: "50 Lakhs+ products"
    },
    { 
      name: "Electronics", 
      description: "Laptops, TVs, cameras with 360° preview", 
      icon: "💻",
      offers: "Huge discounts + No Cost EMI",
      products: "10 Lakhs+ products"
    },
    { 
      name: "Fashion", 
      description: "Try clothes virtually with AR technology", 
      icon: "👕",
      offers: "Min 40% off + Free delivery",
      products: "2 Crore+ products"
    },
    { 
      name: "Home & Furniture", 
      description: "Visualize furniture in your space", 
      icon: "🏠",
      offers: "Up to 75% off + Installation",
      products: "50 Lakhs+ products"
    }
  ]

  const featuredBrands = [
    { name: "Apple", discount: "Up to 70% off", letter: "A", color: "from-gray-600 to-gray-800" },
    { name: "Samsung", discount: "Up to 70% off", letter: "S", color: "from-blue-500 to-blue-700" },
    { name: "OnePlus", discount: "Up to 70% off", letter: "O", color: "from-red-500 to-red-700" },
    { name: "Xiaomi", discount: "Up to 70% off", letter: "X", color: "from-orange-500 to-orange-700" },
    { name: "Vivo", discount: "Up to 60% off", letter: "V", color: "from-purple-500 to-purple-700" },
    { name: "Oppo", discount: "Up to 65% off", letter: "O", color: "from-green-500 to-green-700" },
    { name: "Realme", discount: "Up to 55% off", letter: "R", color: "from-yellow-500 to-yellow-700" },
    { name: "Motorola", discount: "Up to 50% off", letter: "M", color: "from-indigo-500 to-indigo-700" },
  ]

  return (
    <motion.div 
      ref={containerRef}
      className="min-h-screen bg-white py-12 sm:py-16 lg:py-20"
      style={{ opacity }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 sm:mb-6 text-black"
            style={{ y }}
          >
            Shop by Category
          </motion.h2>
          
          {/* Flipkart Offers Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-8 bg-yellow-500 text-black px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg inline-block font-bold text-sm sm:text-base lg:text-lg shadow-lg"
          >
            🎉 Big Billion Days LIVE - Up to 80% Off + Extra 10% Bank Discount
          </motion.div>
        </motion.div>

        {/* Featured Brands Section - Mobile Optimized */}
        <motion.div 
          className="mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured Brands on <span className="text-blue-600">Flipkart</span>
          </motion.h3>
          
          {/* Horizontal Scrolling Brands */}
          <div className="relative">
            <div className="flex overflow-x-auto scrollbar-hide gap-3 sm:gap-4 pb-4 snap-x snap-mandatory px-1">
              {featuredBrands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group flex-shrink-0 w-36 sm:w-44 lg:w-48 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 snap-center"
                >
                  <div className="text-center">
                    {/* Brand Circle */}
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto mb-2 sm:mb-3 lg:mb-4 rounded-full bg-gradient-to-r ${brand.color} flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {brand.letter}
                    </div>
                    
                    {/* Brand Name */}
                    <h4 className="text-sm sm:text-base lg:text-lg font-bold text-black mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors duration-300 truncate">
                      {brand.name}
                    </h4>
                    
                    {/* Discount */}
                    <p className="text-xs sm:text-sm lg:text-base text-green-600 font-semibold">
                      {brand.discount}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center mt-3 sm:mt-4">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-xs sm:text-sm text-black/50 flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full"
              >
                <span>👈</span> Scroll to see more brands <span>👉</span>
              </motion.p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* 3D Product Scene - Optimized for Performance */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl lg:rounded-3xl bg-blue-50 border border-blue-200 shadow-xl lg:shadow-2xl overflow-hidden order-2 lg:order-1"
          >
            <Suspense fallback={<LoadingFallback />}>
              <Canvas
                camera={{ position: [0, 0, 10], fov: 50 }}
                gl={{ 
                  antialias: false,
                  alpha: true,
                  powerPreference: "high-performance",
                  stencil: false
                }}
                dpr={[1, 1.5]} // Limit pixel ratio for better performance
                performance={{ min: 0.5 }} // Adaptive performance
              >
                <ProductScene />
              </Canvas>
            </Suspense>
          </motion.div>

          {/* Product Categories */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  x: 5,
                  transition: { duration: 0.3 }
                }}
                className="group p-4 sm:p-6 rounded-xl lg:rounded-2xl bg-white border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-2xl sm:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {category.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-black group-hover:text-blue-600 transition-colors duration-300 mb-1 sm:mb-2 truncate">
                      {category.name}
                    </h3>
                    <p className="text-sm sm:text-base text-black/70 group-hover:text-black transition-colors duration-300 mb-2 line-clamp-2">
                      {category.description}
                    </p>
                    <div className="space-y-1">
                      <div className="text-xs sm:text-sm text-yellow-600 font-semibold">
                        {category.offers}
                      </div>
                      <div className="text-xs sm:text-sm text-black/60">
                        {category.products}
                      </div>
                    </div>
                  </div>
                </div>
                
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3 sm:mt-4 group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300"
                />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-4 sm:pt-6"
            >
              <motion.a
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(255, 193, 7, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg shadow-xl hover:shadow-yellow-500/50 transition-all duration-300 btn-hover-lift" href="https://www.flipkart.com/all-categories/pr?sid=search.flipkart.com" target="_blank" rel="noopener noreferrer"
              >
                Explore All Categories
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}