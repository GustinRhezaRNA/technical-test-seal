'use client'

import Carousel from "./_components/carousel"
import Popular from "./_components/popular"
import Recommendation from "./_components/recomendation"
import Banner from "./_components/banner"

export default function Component() {

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Carousel />
        <Popular />
        <Recommendation />
        <Banner />
      </main>
    </div>
  )
}
