'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const categories = [
  {
    name: 'Minutes',
    icon: '/icons/minutes.png',
    bgColor: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    isNew: true
  },
  {
    name: 'Mobiles & Tablets',
    icon: '/icons/mobile.png',
    bgColor: 'bg-gradient-to-br from-blue-400 to-purple-500'
  },
  {
    name: 'Fashion',
    icon: '/icons/fashion.png',
    bgColor: 'bg-gradient-to-br from-pink-400 to-red-500'
  },
  {
    name: 'Electronics',
    icon: '/icons/electronics.png',
    bgColor: 'bg-gradient-to-br from-indigo-400 to-blue-500'
  },
  {
    name: 'Home & Furniture',
    icon: '/icons/furniture.png',
    bgColor: 'bg-gradient-to-br from-green-400 to-teal-500'
  },
  {
    name: 'TVs & Appliances',
    icon: '/icons/appliances.png',
    bgColor: 'bg-gradient-to-br from-purple-400 to-indigo-500'
  },
  {
    name: 'Flight Bookings',
    icon: '/icons/flight.png',
    bgColor: 'bg-gradient-to-br from-cyan-400 to-blue-500'
  },
  {
    name: 'Beauty, Food..',
    icon: '/icons/beauty.png',
    bgColor: 'bg-gradient-to-br from-pink-400 to-purple-500'
  },
  {
    name: 'Grocery',
    icon: '/icons/grocery.png',
    bgColor: 'bg-gradient-to-br from-green-400 to-blue-500'
  }
]

export default function CategoryNavigation() {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 overflow-x-auto scrollbar-hide">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="flex flex-col items-center space-y-2 min-w-[100px] cursor-pointer group relative"
            >
              {category.isNew && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded-full text-[10px] font-bold z-10">
                  NEW
                </div>
              )}
              
              <motion.div 
                className={`w-16 h-16 rounded-full ${category.bgColor} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                whileHover={{ rotate: 5 }}
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Image 
                    src={category.icon}
                    alt={category.name}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </motion.div>
              
              <span className="text-sm font-medium text-gray-800 text-center group-hover:text-blue-600 transition-colors">
                {category.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}