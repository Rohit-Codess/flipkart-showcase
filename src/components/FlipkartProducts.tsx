'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Products } from '@/components/elements/Products'
import { ProductsMobiles } from '@/components/elements/ProductsMobiles'

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

        {/* Featured Mobile Brands Section - Interactive Product Showcase */}
        <motion.div 
          className="mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center text-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured Mobile Brands on <span className="text-blue-600">Flipkart</span>
          </motion.h3>
          
          {/* Interactive Mobile Products Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <ProductsMobiles />
          </motion.div>
          
        </motion.div>

        {/* Main Content - Two Column Layout like FlipkartHero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-black space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-black mb-4">
                Shop by Category
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Millions of Products
              </h3>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-black/70 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Discover millions of products across categories with unbeatable prices. 
              From smartphones to fashion, everything you need is just a click away.
            </motion.p>

            {/* Featured Categories Grid */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="group p-4 rounded-xl bg-white border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300 mb-2">
                      {category.icon}
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-black group-hover:text-blue-600 transition-colors duration-300 mb-1">
                      {category.name}
                    </h4>
                    <p className="text-xs text-yellow-600 font-semibold">
                      {category.offers.split(' +')[0]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 lg:gap-6"
            >
              <motion.a
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(255, 193, 7, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-bold text-base lg:text-lg shadow-xl hover:shadow-yellow-500/50 transition-all duration-300 inline-flex items-center justify-center" 
                href="https://www.flipkart.com/all-categories/pr?sid=search.flipkart.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Explore All Categories
              </motion.a>
              
              <motion.a
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(59, 130, 246, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-blue-500 text-blue-600 hover:text-blue-700 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base lg:text-lg hover:bg-blue-50 transition-all duration-300" 
                href="https://www.flipkart.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Shop Now
              </motion.a>
            </motion.div>

            {/* Product Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 lg:gap-8 pt-6 lg:pt-8"
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-500">200M+</div>
                <div className="text-xs sm:text-sm text-black/60">Products</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-500">80+</div>
                <div className="text-xs sm:text-sm text-black/60">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-500">24/7</div>
                <div className="text-xs sm:text-sm text-black/60">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Product Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-full h-[400px] sm:h-[500px] lg:h-[600px] order-1 lg:order-2 flex items-center justify-center"
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-50 to-white rounded-2xl lg:rounded-3xl border border-blue-200 shadow-xl p-4 sm:p-6 lg:p-8 flex items-center justify-center">
              <Products />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}