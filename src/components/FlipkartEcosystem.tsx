'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function FlipkartEcosystem() {
  const ecosystemServices = [
    {
      title: "Flipkart Pay Later",
      description: "Shop now, pay later in easy EMIs",
      icon: "💰",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Flipkart Grocery",
      description: "Fresh groceries delivered in 90 minutes",
      icon: "🥬",
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Flipkart Travel",
      description: "Book flights and hotels at best prices",
      icon: "✈️",
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Flipkart Health+",
      description: "Medicines and health products",
      icon: "💊",
      color: "from-purple-400 to-pink-500"
    }
  ]

  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16">
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
                  >
                    Complete <span className="text-blue-600">Flipkart</span> Ecosystem
                  </motion.h2>
                  
                </motion.div>

        {/* Ecosystem Services - Mobile Optimized */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {ecosystemServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                y: -2,
                transition: { duration: 0.3 }
              }}
              className="group bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-500"
            >
              <div className="text-center">
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-black mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-black/70 leading-relaxed group-hover:text-black transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* App Download Section - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 p-6 sm:p-8 lg:p-12"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
          </div>

          <div className="relative text-center text-white">
            {/* Title */}
            <motion.a 
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 lg:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              
            >
              Download Flipkart App
            </motion.a>
            
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-10"
            >
              <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-2 sm:mb-3">
                Get exclusive app-only deals, faster checkout, and personalized recommendations.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white/80">
                Download now and get ₹100 off on your first order!
              </p>
            </motion.div>
            
            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                className="group bg-white text-blue-600 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base lg:text-lg shadow-xl hover:shadow-white/30 transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto"
              >
                {/* <span className="text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300">📱</span> */}
                <a href="https://www.flipkart.com/mobile-apps?otracker=ch_vn_mobile_apps" target="_blank" rel="noopener noreferrer">Download App</a>
              </motion.button>
              
              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base lg:text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 w-full sm:w-auto" href="https://www.flipkart.com/" target="_blank" rel="noopener noreferrer"
              >
                Continue on Web
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}