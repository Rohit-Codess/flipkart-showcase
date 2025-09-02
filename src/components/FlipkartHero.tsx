'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card'

// Flipkart Product Cards for 3D effect
function FlipkartProductCards() {
  return (
    <CardContainer className="inter-var w-full h-full">
      <CardBody className="bg-gradient-to-br from-white/10 to-blue-500/20 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-4 sm:p-6 border backdrop-blur-sm overflow-hidden">
        
        {/* Flipkart Logo */}
        <CardItem
          translateZ="50"
          className="text-lg sm:text-xl font-bold text-black dark:text-white mb-3 sm:mb-4"
        >
          <div className="flex items-center space-x-2">
            <Image 
              src="/logo.png" 
              alt="Flipkart Logo" 
              width={24} 
              height={24} 
              className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
            />
            <span className="text-base sm:text-lg">Flipkart</span>
          </div>
        </CardItem>

        {/* 3D Product Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 flex-1 mb-3 sm:mb-4">
          {/* Phone */}
          <CardItem translateZ="100" rotateX={5} rotateY={-5} className="w-full">
            <div className="bg-black/80 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center h-24 sm:h-32">
              <div className="text-2xl sm:text-4xl mb-1 sm:mb-2">📱</div>
              <div className="text-white text-xs sm:text-sm font-medium">Smartphones</div>
              <div className="text-blue-400 text-xs">Starting ₹8,999</div>
            </div>
          </CardItem>

          {/* Laptop */}
          <CardItem translateZ="80" rotateX={-5} rotateY={5} className="w-full">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center h-24 sm:h-32">
              <div className="text-2xl sm:text-4xl mb-1 sm:mb-2">💻</div>
              <div className="text-white text-xs sm:text-sm font-medium">Laptops</div>
              <div className="text-yellow-400 text-xs">Starting ₹25,999</div>
            </div>
          </CardItem>

          {/* Headphones */}
          <CardItem translateZ="60" rotateX={5} rotateY={5} className="w-full">
            <div className="bg-gradient-to-br from-red-500 to-orange-600 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center h-24 sm:h-32">
              <div className="text-2xl sm:text-4xl mb-1 sm:mb-2">🎧</div>
              <div className="text-white text-xs sm:text-sm font-medium">Audio</div>
              <div className="text-yellow-300 text-xs">Starting ₹599</div>
            </div>
          </CardItem>

          {/* Watch */}
          <CardItem translateZ="120" rotateX={-5} rotateY={-5} className="w-full">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center h-24 sm:h-32">
              <div className="text-2xl sm:text-4xl mb-1 sm:mb-2">⌚</div>
              <div className="text-black text-xs sm:text-sm font-medium">Smartwatch</div>
              <div className="text-black text-xs">Starting ₹1,499</div>
            </div>
          </CardItem>
        </div>

        {/* Call to Action */}
        <CardItem
          translateZ="80"
          rotateX={10}
          className="w-full"
        >
          <a className="block w-full bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 sm:py-3 rounded-lg font-semibold text-center cursor-pointer transition-all duration-300 text-xs sm:text-sm" href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer">
            Explore Flipkart Products
          </a>
        </CardItem>

      </CardBody>
    </CardContainer>
  );
}

export default function FlipkartHero() {
  return (
    <div 
      className="relative min-h-screen bg-white overflow-hidden"
    >
      {/* Flipkart Brand Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-black space-y-6 lg:space-y-8 order-2 lg:order-1"
            >
              {/* Flipkart Logo */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center space-x-3 sm:space-x-4 mb-6 lg:mb-8"
              >
                <div className="bg-blue-500 p-2 sm:p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-lg">
                  <Image 
                    src="/logo.png" 
                    alt="Flipkart Logo" 
                    width={48} 
                    height={48} 
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">Flipkart</h1>
                  <p className="text-blue-600 text-sm sm:text-base font-medium">The Big Billion Days</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold leading-tight text-black">
                  Experience Products in
                </h2>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Stunning 3D
                </h3>
              </motion.div>
              
              <motion.p 
                className="text-base sm:text-lg lg:text-xl xl:text-2xl text-black/70 leading-relaxed"
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
                    boxShadow: "0 20px 40px rgba(255, 193, 7, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-bold text-base lg:text-lg shadow-xl hover:shadow-yellow-500/50 transition-all duration-300 btn-hover-lift inline-flex items-center justify-center" href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer"
                >
                  Shop Now
                </motion.a>
                
                <motion.a
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "rgba(59, 130, 246, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-blue-500 text-blue-600 hover:text-blue-700 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base lg:text-lg hover:bg-blue-50 transition-all duration-300" href="https://www.flipkart.com/all-categories/pr?sid=search.flipkart.com" target="_blank" rel="noopener noreferrer"
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

            {/* 3D Product Cards - Interactive Experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="w-full h-[400px] sm:h-[500px] lg:h-[600px] order-1 lg:order-2 flex items-center justify-center"
            >
              <div className="w-full max-w-lg h-full">
                <FlipkartProductCards />
              </div>
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