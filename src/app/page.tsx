'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'

// Optimized dynamic imports with better loading strategies
const FlipkartHero = dynamic(() => import('@/components/FlipkartHero'), {
  ssr: false,
  loading: () => <Loading />
})

const FlipkartProducts = dynamic(() => import('@/components/FlipkartProducts'), {
  ssr: false,
  loading: () => <div className="h-16 bg-gradient-to-r from-blue-50 to-purple-50 animate-pulse" />
})

const FlipkartOffers = dynamic(() => import('@/components/FlipkartOffers'), {
  ssr: false,
  loading: () => <div className="h-16 bg-gradient-to-r from-orange-50 to-red-50 animate-pulse" />
})

const FlipkartShopping = dynamic(() => import('@/components/FlipkartShopping'), {
  ssr: false,
  loading: () => <div className="h-16 bg-gradient-to-r from-green-50 to-blue-50 animate-pulse" />
})

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Load hero immediately */}
      <FlipkartHero />
      
      {/* Load other sections progressively */}
      <Suspense fallback={<div className="h-16 bg-gradient-to-r from-blue-50 to-purple-50 animate-pulse" />}>
        <FlipkartProducts />
      </Suspense>
      
      <Suspense fallback={<div className="h-16 bg-gradient-to-r from-orange-50 to-red-50 animate-pulse" />}>
        <FlipkartOffers />
      </Suspense>
      
      <Suspense fallback={<div className="h-16 bg-gradient-to-r from-green-50 to-blue-50 animate-pulse" />}>
        <FlipkartShopping />
      </Suspense>
    </div>
  );
}
