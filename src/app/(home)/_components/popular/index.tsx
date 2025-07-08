import { Dot } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Popular = () => {
    return (
        <section className="mt-12">
            <div className="border-l-4 border-blue-500 pl-4 mb-6">
                <h2 className="text-xl font-bold text-gray-900">Berita Terpopuler</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Article 1 */}
                <div className="flex space-x-4 bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            1
                        </div>
                    </div>
                    <div className="flex-1">
                        <Image
                            src="/images/popular-news.png"
                            alt="News thumbnail"
                            width={100}
                            height={60}
                            className="w-full h-16 object-cover rounded mb-3"
                        />
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                            Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?
                        </h3>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                            Politik <Dot className='text-center' /> 22 Jan 2024
                        </div>
                    </div>
                </div>

                {/* Article 2 */}
                <div className="flex space-x-4 bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            2
                        </div>
                    </div>
                    <div className="flex-1">
                        <Image
                            src="/images/popular-news.png"
                            alt="News thumbnail"
                            width={100}
                            height={60}
                            className="w-full h-16 object-cover rounded mb-3"
                        />
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                            Daftar 6 Lahan Tambang Jatah Ormas Agama, NU Dapat Bekas Grup Bakrie
                        </h3>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <span className="bg-red-100 text-red-600 px-2 py-1 rounded">Nasional</span>
                            <span>22 Jan 2024</span>
                        </div>
                    </div>
                </div>

                {/* Article 3 */}
                <div className="flex space-x-4 bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            3
                        </div>
                    </div>
                    <div className="flex-1">
                        <Image
                            src="/images/popular-news.png"
                            alt="News thumbnail"
                            width={100}
                            height={60}
                            className="w-full h-16 object-cover rounded mb-3"
                        />
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                            Kementerian BUMN Mulai Uji Coba Pegawai Kerja 4 Hari Sepekan
                        </h3>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <span className="bg-red-100 text-red-600 px-2 py-1 rounded">Nasional</span>
                            <span>22 Jan 2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Popular