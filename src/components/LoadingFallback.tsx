'use client'

import { motion } from 'framer-motion'

export default function LoadingFallback() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-white/5 to-blue-500/10 backdrop-blur-sm border border-white/20 rounded-2xl lg:rounded-3xl">
      <div className="text-center space-y-4">
        {/* Flipkart Loading Animation */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl flex items-center justify-center"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
            <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
          </svg>
        </motion.div>
        
        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="text-white/80 text-sm font-medium"
        >
          Loading 3D Experience...
        </motion.div>
        
        {/* Loading Dots */}
        <div className="flex space-x-1 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -8, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-2 h-2 bg-orange-400 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  )
}