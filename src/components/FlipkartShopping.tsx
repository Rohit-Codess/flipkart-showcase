'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Box, Sphere, Text, Environment, Cylinder } from '@react-three/drei'
import { motion, useScroll, useTransform } from 'framer-motion'
import * as THREE from 'three'

// 3D Shopping Cart and Delivery Elements
function ShoppingCart3D({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <group ref={meshRef} position={position}>
        {/* Cart Body */}
        <Box args={[1.5, 1, 1.2]} castShadow>
          <MeshDistortMaterial color="#2874f0" distort={0.05} speed={2} metalness={0.8} roughness={0.2} />
        </Box>
        {/* Cart Handle */}
        <Box args={[0.1, 0.8, 0.1]} position={[-0.8, 0.4, 0]}>
          <meshStandardMaterial color="#333333" />
        </Box>
        {/* Wheels */}
        <Cylinder args={[0.2, 0.2, 0.1, 16]} position={[0.5, -0.7, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#444444" />
        </Cylinder>
        <Cylinder args={[0.2, 0.2, 0.1, 16]} position={[0.5, -0.7, -0.5]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#444444" />
        </Cylinder>
        {/* Flipkart Logo on Cart */}
        <Text
          position={[0, 0, 0.61]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Flipkart
        </Text>
      </group>
    </Float>
  )
}

function DeliveryTruck3D({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 1.5) * 0.3
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 3) * 0.05
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.3}>
      <group ref={meshRef} position={position}>
        {/* Truck Body */}
        <Box args={[2.5, 1.2, 1]} castShadow>
          <MeshDistortMaterial color="#ff6b00" distort={0.02} speed={1.5} metalness={0.6} roughness={0.4} />
        </Box>
        {/* Truck Cabin */}
        <Box args={[0.8, 1, 1]} position={[-1.65, 0.1, 0]}>
          <MeshDistortMaterial color="#ff6b00" distort={0.02} speed={1.5} metalness={0.6} roughness={0.4} />
        </Box>
        {/* Wheels */}
        {[-0.8, 0.8].map((x, i) => (
          <Cylinder key={i} args={[0.3, 0.3, 0.2, 16]} position={[x, -0.8, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color="#222222" />
          </Cylinder>
        ))}
        {/* Flipkart Delivery Logo */}
        <Text
          position={[0, 0, 0.51]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Flipkart
        </Text>
        <Text
          position={[0, -0.3, 0.51]}
          fontSize={0.1}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Delivery
        </Text>
      </group>
    </Float>
  )
}

function PaymentCard3D({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.2) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2.5) * 0.08
    }
  })

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={0.6}>
      <group ref={meshRef} position={position}>
        {/* Credit Card */}
        <Box args={[2, 1.2, 0.05]} castShadow>
          <MeshDistortMaterial color="#1e40af" distort={0.02} speed={1} metalness={0.9} roughness={0.1} />
        </Box>
        {/* Card Chip */}
        <Box args={[0.3, 0.25, 0.02]} position={[-0.5, 0.2, 0.03]}>
          <meshStandardMaterial color="#ffd700" />
        </Box>
        {/* Card Number Simulation */}
        <Box args={[1.5, 0.1, 0.01]} position={[0.2, 0, 0.03]}>
          <meshStandardMaterial color="#ffffff" />
        </Box>
        <Box args={[1.2, 0.1, 0.01]} position={[0.1, -0.2, 0.03]}>
          <meshStandardMaterial color="#ffffff" />
        </Box>
        {/* Bank Logo Area */}
        <Text
          position={[0.5, -0.4, 0.03]}
          fontSize={0.08}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          FLIPKART PAY
        </Text>
      </group>
    </Float>
  )
}

function GiftBox3D({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.8
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 3) * 0.12
    }
  })

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={0.8}>
      <group ref={meshRef} position={position}>
        {/* Gift Box */}
        <Box args={[1, 1, 1]} castShadow>
          <MeshDistortMaterial color="#dc2626" distort={0.1} speed={2} metalness={0.3} roughness={0.7} />
        </Box>
        {/* Ribbon */}
        <Box args={[1.1, 0.15, 1.1]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#ffd700" />
        </Box>
        <Box args={[0.15, 1.1, 1.1]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#ffd700" />
        </Box>
        {/* Bow */}
        <Sphere args={[0.2]} position={[0, 0.7, 0]}>
          <meshStandardMaterial color="#ffd700" />
        </Sphere>
      </group>
    </Float>
  )
}

function ShoppingScene() {
  return (
    <>
      <Environment preset="apartment" />
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#2874f0" />
      <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} intensity={2} castShadow />
      
      <ShoppingCart3D position={[-3, 1, 0]} />
      <DeliveryTruck3D position={[2, 0, -1]} />
      <PaymentCard3D position={[0, -2, 1]} />
      <GiftBox3D position={[-1, 2, 2]} />
      
      {/* Ground plane */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
        <planeGeometry args={[30, 30]} />
        <shadowMaterial opacity={0.2} />
      </mesh>
    </>
  )
}

export default function FlipkartShopping() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const features = [
    {
      title: "Easy Shopping Experience",
      description: "Browse millions of products with intuitive search and filters",
      icon: "🛒",
      benefit: "Save 50% time in finding products",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Fastest Delivery",
      description: "Same day, next day, and express delivery options available",
      icon: "🚚",
      benefit: "Delivery in 6 hours with Flipkart Quick",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Secure Payments",
      description: "Multiple payment options with bank-level security",
      icon: "💳",
      benefit: "100% payment protection guarantee",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Quality Assurance",
      description: "Flipkart Assured products with quality guarantee",
      icon: "✅",
      benefit: "7-day replacement policy",
      color: "from-purple-500 to-pink-600"
    }
  ]

  const services = [
    { name: "Flipkart Pay Later", description: "Shop now, pay later in easy EMIs", icon: "💰" },
    { name: "Flipkart Grocery", description: "Fresh groceries delivered in 90 minutes", icon: "🥬" },
    { name: "Flipkart Travel", description: "Book flights and hotels at best prices", icon: "✈️" },
    { name: "Flipkart Health+", description: "Medicines and health products", icon: "🏥" }
  ]

  return (
    <motion.div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-green-50 via-blue-100 to-indigo-100 py-12 sm:py-16 lg:py-20"
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
            Flipkart Experience
          </motion.h2>
          
          {/* Experience Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full inline-block font-bold text-sm sm:text-base lg:text-lg animate-pulse-glow"
          >
            🌟 Trusted by 500 Million+ Indians
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          
          {/* 3D Shopping Scene - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-[350px] sm:h-[450px] lg:h-[600px] rounded-2xl lg:rounded-3xl bg-white/80 backdrop-blur-sm border border-blue-200 shadow-xl lg:shadow-2xl overflow-hidden order-2 lg:order-1"
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
              <ShoppingScene />
            </Canvas>
          </motion.div>

          {/* Shopping Features */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  x: 5,
                  transition: { duration: 0.3 }
                }}
                className="group p-4 sm:p-6 rounded-xl lg:rounded-2xl bg-white/90 backdrop-blur-sm border border-blue-200 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-2xl sm:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent mb-1 sm:mb-2 truncate`}>
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition-colors duration-300 mb-2 line-clamp-2">
                      {feature.description}
                    </p>
                    <div className="text-xs sm:text-sm text-green-600 font-semibold">
                      ✨ {feature.benefit}
                    </div>
                  </div>
                </div>
                
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`h-1 bg-gradient-to-r ${feature.color} rounded-full mt-3 sm:mt-4`}
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
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl lg:rounded-2xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-blue-500/50 transition-all duration-300 btn-hover-lift"
              >
                Start Shopping Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Flipkart Services - Mobile Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            Complete <span className="gradient-flipkart-text">Flipkart Ecosystem</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-blue-100 hover:border-blue-300"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{service.icon}</div>
                <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-2">{service.name}</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Download Flipkart App</h3>
          <p className="text-sm sm:text-base lg:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Get exclusive app-only deals, faster checkout, and personalized recommendations. 
            Download now and get ₹100 off on your first order!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <motion.button
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 30px 60px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-indigo-600 px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3 btn-hover-lift"
            >
              📱 Download App
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-white text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              Continue on Web
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}