'use client'

import { motion } from 'framer-motion'
import { Star, Truck, Shield, Headphones, RotateCcw } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Free delivery on orders above ₹499',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: '100% secure payment methods',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round the clock customer support',
    color: 'from-purple-400 to-violet-500'
  },
  {
    icon: RotateCcw,
    title: 'Easy Returns',
    description: '7 days easy return policy',
    color: 'from-orange-400 to-red-500'
  }
]

const testimonials = [
  {
    name: 'Rahul Sharma',
    rating: 5,
    comment: 'Amazing shopping experience! Fast delivery and great quality products.',
    location: 'Mumbai'
  },
  {
    name: 'Priya Patel',
    rating: 5,
    comment: 'Love the variety and the prices. Flipkart never disappoints!',
    location: 'Delhi'
  },
  {
    name: 'Amit Kumar',
    rating: 4,
    comment: 'Excellent customer service and hassle-free returns.',
    location: 'Bangalore'
  }
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Features Section */}
      <div className="py-16 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Flipkart?
            </h2>
            <p className="text-gray-400 text-lg">
              Experience the best of online shopping with our premium services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:shadow-2xl transition-all duration-300`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-400 text-lg">
              Join millions of satisfied customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Flipkart</h3>
              <p className="text-gray-400 mb-4">
                India&apos;s leading e-commerce marketplace with an extensive collection of products across categories.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                  <motion.div
                    key={social}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
                  >
                    <span className="text-sm font-bold">{social[0].toUpperCase()}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About Us', 'Careers', 'Press', 'Flipkart Stories', 'Investor Relations'].map((link) => (
                  <li key={link}>
                    <motion.a
                      whileHover={{ x: 5, color: '#60a5fa' }}
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Help */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Help</h4>
              <ul className="space-y-2">
                {['Customer Care', 'Track Your Order', 'Returns & Refunds', 'FAQ', 'Terms & Conditions'].map((link) => (
                  <li key={link}>
                    <motion.a
                      whileHover={{ x: 5, color: '#60a5fa' }}
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to get special offers and updates
              </p>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Flipkart. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <motion.a whileHover={{ color: '#60a5fa' }} href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</motion.a>
              <motion.a whileHover={{ color: '#60a5fa' }} href="#" className="hover:text-blue-400 transition-colors">Terms of Service</motion.a>
              <motion.a whileHover={{ color: '#60a5fa' }} href="#" className="hover:text-blue-400 transition-colors">Cookies</motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}