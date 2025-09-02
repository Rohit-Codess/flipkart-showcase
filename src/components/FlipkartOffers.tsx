'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Offers } from '@/components/elements/Offers'

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
            Flipkart Offers
          </motion.h2>
          
          {/* Live Deals Counter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-8 bg-yellow-500 text-black px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg inline-block font-bold text-sm sm:text-base lg:text-lg shadow-xl animate-pulse-glow"
          >
            🔥 LIVE NOW - 10,000+ Deals Active
          </motion.div>
        </motion.div>

        {/* Main Offers Showcase - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl lg:rounded-3xl border border-yellow-200 shadow-xl overflow-hidden">
            <div className="h-[400px] sm:h-[500px] lg:h-[600px] w-full">
              <Offers />
            </div>
          </div>
        </motion.div>

        {/* Offers Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20"
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
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group p-4 sm:p-6 rounded-xl lg:rounded-2xl bg-white border border-gray-200 hover:border-yellow-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="text-2xl sm:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {offer.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2 truncate">
                    {offer.title}
                  </h3>
                  <p className="text-sm sm:text-base text-black/70 group-hover:text-black transition-colors duration-300 mb-2 sm:mb-3 line-clamp-2">
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
              boxShadow: "0 20px 40px rgba(239, 68, 68, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl shadow-xl hover:shadow-red-500/50 transition-all duration-300"
            href="https://www.flipkart.com/offers-store"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore All Offers
          </motion.a>
        </motion.div>

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
              <div className="text-xs sm:text-sm lg:text-base text-black/60">{stat.label}</div>
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
            <motion.a
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 30px 60px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-blue-600 px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:bg-gray-100 transition-all duration-300 btn-hover-lift" href="https://www.flipkart.com/plus" target="_blank" rel="noopener noreferrer"
            >
              Join Flipkart Plus
            </motion.a>
            
            <motion.a
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-white text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300" href="https://www.flipkart.com/pages/plus-tnc" target="_blank" rel="noopener noreferrer"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}