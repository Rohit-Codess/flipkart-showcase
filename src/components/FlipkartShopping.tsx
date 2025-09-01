'use client'

import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Box, Environment, Cylinder } from '@react-three/drei'
import { motion, useScroll, useTransform } from 'framer-motion'
import * as THREE from 'three'
import LoadingFallback from './LoadingFallback'

// Optimized 3D Shopping Components
function ShoppingCart3D({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.06
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.3}>
      <group ref={meshRef} position={position}>
        <Box args={[1.5, 1, 1.2]}>
          <meshStandardMaterial color="#2874f0" metalness={0.7} roughness={0.3} />
        </Box>
        <Box args={[0.1, 0.8, 0.1]} position={[-0.8, 0.4, 0]}>
          <meshStandardMaterial color="#333333" />
        </Box>
        <Cylinder args={[0.2, 0.2, 0.1, 8]} position={[0.5, -0.7, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#444444" />
        </Cylinder>
        <Cylinder args={[0.2, 0.2, 0.1, 8]} position={[0.5, -0.7, -0.5]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#444444" />
        </Cylinder>
      </group>
    </Float>
  )
}

function DeliveryTruck3D({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 1) * 0.2
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 2) * 0.04
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.2}>
      <group ref={meshRef} position={position}>
        <Box args={[2.5, 1.2, 1]}>
          <meshStandardMaterial color="#ff6b00" metalness={0.5} roughness={0.5} />
        </Box>
        <Box args={[0.8, 1, 1]} position={[-1.65, 0.1, 0]}>
          <meshStandardMaterial color="#ff6b00" metalness={0.5} roughness={0.5} />
        </Box>
        {[-0.8, 0.8].map((x, i) => (
          <Cylinder key={i} args={[0.3, 0.3, 0.2, 8]} position={[x, -0.8, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color="#222222" />
          </Cylinder>
        ))}
      </group>
    </Float>
  )
}

function PaymentCard3D({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.05
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.4}>
      <group ref={meshRef} position={position}>
        <Box args={[2, 1.2, 0.05]}>
          <meshStandardMaterial color="#1e40af" metalness={0.8} roughness={0.2} />
        </Box>
        <Box args={[1.8, 0.15, 0.01]} position={[0, 0.4, 0.03]}>
          <meshStandardMaterial color="#ffd700" />
        </Box>
      </group>
    </Float>
  )
}

function GiftBox3D({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.2
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2.5) * 0.08
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <group ref={meshRef} position={position}>
        <Box args={[1, 1, 1]}>
          <meshStandardMaterial color="#dc2626" metalness={0.2} roughness={0.8} />
        </Box>
        <Box args={[0.1, 1.2, 0.1]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#ffd700" />
        </Box>
        <Box args={[1.2, 0.1, 0.1]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#ffd700" />
        </Box>
      </group>
    </Float>
  )
}

// Optimized Scene
function ShoppingScene() {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.4} />
      <directionalLight position={[8, 8, 5]} intensity={0.8} />
      <pointLight position={[-8, -8, -5]} intensity={0.3} color="#2874f0" />
      
      <ShoppingCart3D position={[-3, 1, 0]} />
      <DeliveryTruck3D position={[2, -1, -1]} />
      <PaymentCard3D position={[0, 2, 1]} />
      <GiftBox3D position={[-1, -2, 2]} />
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
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const services = [
    {
      title: "Free Delivery",
      description: "Free delivery on orders above ₹499",
      icon: "🚚",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Easy Returns",
      description: "7-day easy return & exchange",
      icon: "🔄",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Secure Payments",
      description: "100% secure payment protection",
      icon: "🔒",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "24/7 Support",
      description: "Round the clock customer support",
      icon: "🎧",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <motion.div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100 py-12 sm:py-16 lg:py-20"
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
            Why Shop with Flipkart?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
          >
            Experience the joy of shopping with India&apos;s most trusted e-commerce platform. 
            From lightning-fast delivery to secure payments, we&apos;ve got you covered.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Service Features */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 order-2 lg:order-1"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  x: 5,
                  transition: { duration: 0.3 }
                }}
                className="group p-4 sm:p-6 rounded-xl lg:rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    {service.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-1 sm:mb-2 truncate">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition-colors duration-300 line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`h-1 bg-gradient-to-r ${service.color} rounded-full mt-3 sm:mt-4 group-hover:h-2 transition-all duration-300`}
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
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl lg:rounded-2xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-green-500/50 transition-all duration-300" href="https://www.flipkart.com/" target="_blank" rel="noopener noreferrer"
              >
                Start Shopping Now
              </motion.a>
            </motion.div>
          </motion.div>

          {/* 3D Shopping Scene */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl lg:rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl lg:shadow-2xl overflow-hidden order-1 lg:order-2"
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
                dpr={[1, 1.5]}
                performance={{ min: 0.5 }}
              >
                <ShoppingScene />
              </Canvas>
            </Suspense>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24 lg:mt-32"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            Trusted by Millions across <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">India</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { label: "Happy Customers", value: "500M+" },
              { label: "Cities Covered", value: "20,000+" },
              { label: "Daily Orders", value: "5M+" },
              { label: "Delivery Partners", value: "50,000+" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-lg text-center border border-gray-100"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}