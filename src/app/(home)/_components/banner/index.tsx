import Image from 'next/image'
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
            <div className="bg-white backdrop-blur-sm rounded-lg p-2 transform rotate-5">
              <Image
                src={"/assets/museum-brawijaya.webp"}
                alt="Banner Image"
                width={100}
                height={60}
              />
              <p className="text-xs mt-1">Museum Brawijaya</p>
            </div>
            <div className="bg-white backdrop-blur-sm rounded-lg p-1 transform rotate-6">
              <Image
                src={"/assets/kayoetangan.png"}
                alt="Banner Image"
                width={100}
                height={60}
              />
              <p className="text-xs mt-1">Kayutangan</p>
            </div>
            <div className="bg-white backdrop-blur-sm rounded-lg p-2 transform -rotate-7">
              <Image
                src={"/assets/bonbin.jpg"}
                alt="Banner Image"
                width={100}
                height={60}
              />
              <p className="text-xs mt-1">Kebun Binatang</p>
            </div>
          </div>
        </div>

      </div>
      {/* Pagination dots */}
      <div className="flex justify-center space-x-2 mt-8">
        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
        <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
        <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
      </div>
    </section>
  )
}

export default Banner