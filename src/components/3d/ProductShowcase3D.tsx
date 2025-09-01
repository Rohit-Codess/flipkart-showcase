'use client'

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box, Text, OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

interface Product {
  id: string
  name: string
  price: number
  originalPrice: number
  discount: number
  rating: number
  image: string
  category: string
}

const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    price: 134900,
    originalPrice: 159900,
    discount: 15,
    rating: 4.8,
    image: '/products/iphone.jpg',
    category: 'Mobiles'
  },
  {
    id: '2',
    name: 'MacBook Air M2',
    price: 114900,
    originalPrice: 134900,
    discount: 15,
    rating: 4.9,
    image: '/products/macbook.jpg',
    category: 'Laptops'
  },
  {
    id: '3',
    name: 'Samsung Galaxy Watch 6',
    price: 31999,
    originalPrice: 39999,
    discount: 20,
    rating: 4.6,
    image: '/products/watch.jpg',
    category: 'Wearables'
  },
  {
    id: '4',
    name: 'Sony WH-1000XM5',
    price: 29990,
    originalPrice: 34990,
    discount: 14,
    rating: 4.7,
    image: '/products/headphones.jpg',
    category: 'Audio'
  }
]

function Product3D({ product, position, index }: { 
  product: Product, 
  position: [number, number, number],
  index: number 
}) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime + index) * 0.3
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + index) * 0.1
      
      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.1, 1.1, 1.1), 0.1)
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
      }
    }
  })

  const getProductShape = () => {
    switch (product.category) {
      case 'Mobiles':
        return <Box args={[0.5, 1, 0.05]} />
      case 'Laptops':
        return <Box args={[1.2, 0.8, 0.05]} />
      case 'Wearables':
        return <Box args={[0.6, 0.6, 0.1]} />
      case 'Audio':
        return <Box args={[0.8, 0.8, 0.3]} />
      default:
        return <Box args={[0.8, 0.8, 0.8]} />
    }
  }

  const getProductColor = () => {
    switch (product.category) {
      case 'Mobiles':
        return '#1a1a1a'
      case 'Laptops':
        return '#2d3748'
      case 'Wearables':
        return '#ffd700'
      case 'Audio':
        return '#4a5568'
      default:
        return '#666666'
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
        {getProductShape()}
        <meshStandardMaterial 
          color={getProductColor()} 
          metalness={0.8} 
          roughness={0.2}
          emissive={hovered ? getProductColor() : '#000000'}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </mesh>
      
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {product.name}
      </Text>
      
      <Text
        position={[0, -1.8, 0]}
        fontSize={0.15}
        color="#ffd700"
        anchorX="center"
        anchorY="middle"
      >
        ₹{product.price.toLocaleString()}
      </Text>
    </group>
  )
}

function ProductScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <pointLight position={[-10, 10, -10]} intensity={0.5} color="#ff6b6b" />
      <spotLight position={[0, 20, 0]} angle={0.3} penumbra={1} intensity={1.5} castShadow />
      
      {products.map((product, index) => (
        <Product3D
          key={product.id}
          product={product}
          position={[
            (index - 1.5) * 3,
            0,
            Math.sin(index) * 2
          ]}
          index={index}
        />
      ))}
      
      <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} />
      
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeGeometry args={[50, 50]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
    </>
  )
}

export default function ProductShowcase3D() {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-300">
            Experience our premium collection in stunning 3D
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-96 lg:h-[600px] rounded-2xl overflow-hidden"
        >
          <Canvas
            shadows
            camera={{ position: [0, 5, 12], fov: 60 }}
            className="bg-gradient-to-b from-black/20 to-black/40"
          >
            <ProductScene />
          </Canvas>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-400 rounded"></div>
              </div>
              
              <h3 className="text-white font-semibold text-lg mb-2">
                {product.name}
              </h3>
              
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-yellow-400 font-bold text-xl">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-gray-400 line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
                <span className="text-green-400 text-sm">
                  {product.discount}% off
                </span>
              </div>
              
              <div className="flex items-center space-x-1">
                <div className="flex text-yellow-400">
                  {'★'.repeat(Math.floor(product.rating))}
                </div>
                <span className="text-gray-300 text-sm">
                  ({product.rating})
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}