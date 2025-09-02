'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Shopping } from '@/components/elements/Shopping'

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
            Why Shop with Flipkart?
          </motion.h2>
          
        </motion.div>

        {/* Main Shopping Experience - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl lg:rounded-3xl border border-yellow-200 shadow-xl overflow-hidden">
            <div className="h-[400px] sm:h-[500px] lg:h-[600px] w-full">
              <Shopping />
            </div>
          </div>
        </motion.div>

        {/* Service Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20"
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
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group p-4 sm:p-6 rounded-xl lg:rounded-2xl bg-white border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-black group-hover:text-blue-600 transition-colors duration-300 mb-1 sm:mb-2 truncate">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-black/70 group-hover:text-black transition-colors duration-300 line-clamp-2">
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
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.a
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(255, 193, 7, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl shadow-xl hover:shadow-yellow-500/50 transition-all duration-300" 
            href="https://www.flipkart.com/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Start Shopping Now
          </motion.a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24 lg:mt-32"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-black mb-8 sm:mb-12">
            Trusted by Millions across <span className="text-blue-600">India</span>
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
                <div className="text-sm sm:text-base text-black/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}