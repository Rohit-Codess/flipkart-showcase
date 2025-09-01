'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Box, Sphere, Text, Environment } from '@react-three/drei'
import { motion, useScroll, useTransform } from 'framer-motion'
import * as THREE from 'three'

// 3D Sale Tags and Offer Boxes
function SaleTag3D({ position, color, discount }: { position: [number, number, number], color: string, discount: string }) {
  const meshRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 2) * 0.3
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.5) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 3) * 0.2
    }
  })

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={1}>
      <group ref={meshRef} position={position}>
        {/* Sale Tag Shape */}
        <Box args={[1.5, 0.8, 0.1]} castShadow>
          <MeshDistortMaterial color={color} distort={0.2} speed={4} metalness={0.3} roughness={0.7} />
        </Box>
        {/* Discount Text */}
        <Text
          position={[0, 0, 0.06]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {discount}
        </Text>
      </group>
    </Float>
  )
}

function OfferBox3D({ position, color, offer }: { position: [number, number, number], color: string, offer: string }) {
  const meshRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.2) * 0.2
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 2) * 0.15
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.8}>
      <group ref={meshRef} position={position}>
        {/* Offer Box */}
        <Box args={[2, 1.2, 0.3]} castShadow>
          <MeshDistortMaterial color={color} distort={0.1} speed={2} metalness={0.6} roughness={0.4} />
        </Box>
        {/* Flipkart Logo */}
        <Box args={[1.5, 0.2, 0.05]} position={[0, 0.4, 0.16]}>
          <meshStandardMaterial color="#2874f0" />
        </Box>
        {/* Offer Text */}
        <Text
          position={[0, 0, 0.16]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {offer}
        </Text>
      </group>
    </Float>
  )
}

function CoinEffect({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 2
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 4) * 0.1
    }
  })

  return (
    <Float speed={4} rotationIntensity={3} floatIntensity={0.5}>
      <group ref={meshRef} position={position}>
        {/* Coin */}
        <Sphere args={[0.3, 32, 16]} castShadow>
          <MeshDistortMaterial color="#ffd700" distort={0.1} speed={3} metalness={0.9} roughness={0.1} />
        </Sphere>
        {/* Rupee Symbol */}
        <Text
          position={[0, 0, 0.31]}
          fontSize={0.2}
          color="#2874f0"
          anchorX="center"
          anchorY="middle"
        >
          ₹
        </Text>
      </group>
    </Float>
  )
}

function OffersScene() {
  return (
    <>
      <Environment preset="studio" />
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#ff6b00" />
      <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} intensity={3} castShadow />
      
      <SaleTag3D position={[-3, 2, 0]} color="#ff4444" discount="80% OFF" />
      <SaleTag3D position={[3, 1, -1]} color="#ff6b00" discount="70% OFF" />
      <SaleTag3D position={[0, -1, 2]} color="#ff0066" discount="60% OFF" />
      
      <OfferBox3D position={[-2, -2, 1]} color="#2874f0" offer="BIG BILLION DAYS" />
      <OfferBox3D position={[2, 2, -2]} color="#ff6b00" offer="SUPER SAVER DEALS" />
      
      <CoinEffect position={[-1, 3, 1]} />
      <CoinEffect position={[1, -3, -1]} />
      <CoinEffect position={[3, 0, 1]} />
      
      {/* Ground plane for shadows */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
        <planeGeometry args={[30, 30]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
    </>
  )
}

export default function FlipkartOffers() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const offers = [
    {
      title: "Big Billion Days",
      description: "India's biggest shopping festival with unbeatable deals",
      discount: "Up to 80% Off",
      extra: "+ Extra 10% Bank Discount",
      color: "from-red-500 to-orange-600",
      icon: "🎉"
    },
    {
      title: "Super Saver Days",
      description: "Everyday low prices on millions of products",
      discount: "Min 40% Off",
      extra: "+ Free Delivery",
      color: "from-blue-500 to-indigo-600",
      icon: "💰"
    },
    {
      title: "Electronics Sale",
      description: "Latest gadgets at incredible prices",
      discount: "Up to 75% Off",
      extra: "+ No Cost EMI",
      color: "from-purple-500 to-pink-600",
      icon: "📱"
    },
    {
      title: "Fashion Fiesta",
      description: "Trending styles for every occasion",
      discount: "Min 50% Off",
      extra: "+ Buy 2 Get 1 Free",
      color: "from-green-500 to-teal-600",
      icon: "👕"
    }
  ]

  const stats = [
    { label: "Active Deals", value: "10,000+", icon: "🔥" },
    { label: "Categories", value: "80+", icon: "🛍️" },
    { label: "Daily Visitors", value: "50M+", icon: "👥" },
    { label: "Savings", value: "₹5000 Cr+", icon: "💸" }
  ]

  return (
    <motion.div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-orange-50 via-red-100 to-pink-100 py-12 sm:py-16 lg:py-20"
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
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 sm:mb-6 gradient-flipkart-text"
            style={{ y }}
          >
            Flipkart Offers
          </motion.h2>
          
          {/* Live Deals Counter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-8 bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full inline-block font-bold text-sm sm:text-base lg:text-lg shadow-xl animate-pulse-glow"
          >
            🔥 LIVE NOW - 10,000+ Deals Active
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          
          {/* 3D Offers Scene - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-[350px] sm:h-[450px] lg:h-[600px] rounded-2xl lg:rounded-3xl bg-white/80 backdrop-blur-sm border border-orange-200 shadow-xl lg:shadow-2xl overflow-hidden order-2 lg:order-1"
          >
            <Canvas
              camera={{ position: [0, 0, 10], fov: 50 }}
              shadows
              gl={{ 
                antialias: false,
                alpha: true,
                powerPreference: "high-performance"
              }}
              className="performance-optimize"
            >
              <OffersScene />
            </Canvas>
          </motion.div>

          {/* Offer Categories */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
          >
            {offers.map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  x: 5,
                  transition: { duration: 0.3 }
                }}
                className="group p-4 sm:p-6 rounded-xl lg:rounded-2xl bg-white/90 backdrop-blur-sm border border-orange-200 hover:border-red-400 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-2xl sm:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {offer.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${offer.color} bg-clip-text text-transparent mb-1 sm:mb-2 truncate`}>
                      {offer.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition-colors duration-300 mb-2 sm:mb-3 line-clamp-2">
                      {offer.description}
                    </p>
                    <div className="space-y-1">
                      <div className="text-base sm:text-lg font-bold text-red-600">
                        {offer.discount}
                      </div>
                      <div className="text-xs sm:text-sm text-green-600 font-semibold">
                        {offer.extra}
                      </div>
                    </div>
                  </div>
                </div>
                
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`h-1 bg-gradient-to-r ${offer.color} rounded-full mt-3 sm:mt-4`}
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
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(239, 68, 68, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-red-500 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl lg:rounded-2xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-red-500/50 transition-all duration-300 btn-hover-lift"
              >
                Explore All Offers
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Flipkart Stats - Mobile Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20"
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
              className="text-center p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl bg-white/90 backdrop-blur-sm border border-orange-200 hover:border-red-400 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4">{stat.icon}</div>
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-red-600 mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Flipkart Programs - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Flipkart Plus Membership</h3>
          <p className="text-sm sm:text-base lg:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Join Flipkart Plus for free delivery, early access to sales, 
            exclusive deals, and priority customer support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <motion.button
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 30px 60px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-blue-600 px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:bg-gray-100 transition-all duration-300 btn-hover-lift"
            >
              Join Flipkart Plus
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-white text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}