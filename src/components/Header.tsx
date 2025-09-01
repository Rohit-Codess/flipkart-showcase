'use client'

import { useState } from 'react'
import { Search, ShoppingCart, User, Menu } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#2874f0] shadow-lg relative z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="text-white font-bold text-2xl">
              Flipkart
            </div>
            <div className="text-yellow-400 text-xs italic">
              Explore Plus
            </div>
          </motion.div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for Products, Brands and More"
                className="w-full px-4 py-2 pl-12 rounded-sm border-none focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors"
            >
              <User className="h-5 w-5" />
              <span>Login</span>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Become a Seller
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-yellow-400"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-blue-600"
          >
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for Products, Brands and More"
                  className="w-full px-4 py-2 pl-12 rounded-sm border-none focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="flex items-center space-x-2 text-white hover:text-yellow-400">
                <User className="h-5 w-5" />
                <span>Login</span>
              </button>
              <button className="flex items-center space-x-2 text-white hover:text-yellow-400">
                <ShoppingCart className="h-5 w-5" />
                <span>Cart</span>
              </button>
              <button className="text-left text-white hover:text-yellow-400">
                Become a Seller
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}