import Image from 'next/image'
import React from 'react'
import { Calendar, ChevronLeft, ChevronRight, MoveUpRight } from 'lucide-react'
import Link from 'next/link'

const Carousel = () => {
    return (
        <div className="bg-white rounded-lg overflow-hidden">
            <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                        <div className="text-sm font-medium text-slate-500">Headline</div>

                        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                            Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3 Kualifikasi
                        </h1>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang Timnas Indonesia pindah dari Stadion
                            Utama Gelora Bung Karno (GBK) apabila lolos ke putaran ketiga Kualifikasi Piala Dunia 2026.
                        </p>

                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <Calendar className='w-4 h-4 mr-2' /> 22 Januari 2024
                        </div>

                        <Link
                            href="#"
                            className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium text-sm"
                        >
                            Baca Selengkapnya
                            <MoveUpRight className="ml-1 w-4 h-4" />
                        </Link>
                    </div>

                    {/* Featured Image */}
                    <div className="lg:order-last">
                        <Image
                            src="/images/football-match.png"
                            alt="Football match between Indonesian national team players"
                            width={600}
                            height={400}
                            className="w-full h-64 lg:h-80 object-cover rounded-lg"
                        />
                    </div>
                </div>


                {/* Pagination */}
                <div className=" px-6 py-4">
                    <div className="flex items-center justify-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                            <ChevronLeft className="w-4 h-4" />
                        </button>

                        <div className="flex space-x-1">
                            <button className="w-8 h-8 text-sm text-gray-600 hover:bg-gray-100 rounded">1</button>
                            <span className="w-8 h-8 text-sm text-gray-400 flex items-center justify-center">dari</span>
                            <button className="w-8 h-8 text-sm text-gray-600 hover:bg-gray-100 rounded">5</button>
                        </div>

                        <button className="p-2 text-gray-400 hover:text-gray-600">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Carousel