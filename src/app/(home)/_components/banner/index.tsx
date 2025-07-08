import React from 'react'

const Banner = () => {
  return (
        <section className="mt-12">
          <div className="bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2">
                Petualangan Edukatif bersama
                <br />
                Malang Mbois City Tour!
              </h2>
              <p className="text-emerald-100 mb-6">
                Petualangan Edukatif bersama Malang
                <br />
                Mbois City Tour!
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
              <div className="flex space-x-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 transform rotate-12">
                  <div className="w-16 h-12 bg-white/30 rounded"></div>
                  <p className="text-xs mt-1">Museum Brawijaya</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 transform -rotate-6">
                  <div className="w-16 h-12 bg-white/30 rounded"></div>
                  <p className="text-xs mt-1">Kayutangan</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 transform rotate-3">
                  <div className="w-16 h-12 bg-white/30 rounded"></div>
                  <p className="text-xs mt-1">Kebun Binatang</p>
                </div>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center space-x-2 mt-8">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </section>
  )
}

export default Banner