'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'

// Dynamically import Flipkart-specific components only
const FlipkartHero = dynamic(() => import('@/components/FlipkartHero'), {
  ssr: false,
  loading: () => <Loading />
})

const FlipkartProducts = dynamic(() => import('@/components/FlipkartProducts'), {
  ssr: false,
  // loading: () => <div className="h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100" />
})

const FlipkartOffers = dynamic(() => import('@/components/FlipkartOffers'), {
  ssr: false,
})

const FlipkartShopping = dynamic(() => import('@/components/FlipkartShopping'), {
  ssr: false,
  // loading: () => <div className="h-screen bg-gradient-to-br from-green-50 via-blue-100 to-indigo-100" />
})

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Suspense fallback={<Loading />}>
        <FlipkartHero />
        <FlipkartProducts />
        <FlipkartOffers />
        <FlipkartShopping />
      </Suspense>
    </div>
  );
}
