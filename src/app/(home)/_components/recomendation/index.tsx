import Image from 'next/image'
import React from 'react'

const Recommendation = () => {
    return (
        <section className="mt-12">
            <div className="flex items-center justify-between mb-6">
                <div className="border-l-4 border-blue-500 pl-4">
                    <h2 className="text-xl font-bold text-gray-900">Rekomendasi Untuk Anda</h2>
                </div>

                <div className="relative">
                    <input
                        type="text"
                        placeholder="Cari disini..."
                        className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {/* <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" /> */}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Recommendation articles */}
                {[
                    "Pj. Gubernur Adhiy Tekankan Pelayanan Berkualitas saat Sharing Session di RSUD Dr...",
                    "Flypass Bonanza dan Heli Bell 505 Warnai Tupdik dan Wing Day 11 Perwira Penerbang T...",
                    "Perwira Penerbangan TNI AL Raih Gelar 'Double Degree di PSL Université Paris",
                    "Bank Jatim QRIS Ramadan Vaganza Resmi Dibuka Selama Sepekan",
                    "PLN Sukses Lakukan Pemeliharaan Off 2 tahunan PMT GISTET 500KV Gresik",
                    "Bantu Pertahanan di Indonesia, Profesor ITS Ciptakan Bahan Antiradar",
                    "BKD Jatim Bersama BNN Gelar Tes Narkoba Bagi Pegawai Non ASN",
                    "Bank Indonesia Prediksi Ekonomi Jatim 2024 Tumbuh Lebih Tinggi",
                ].map((title, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                    >
                        <Image
                            src="/images/recommendations.png"
                            alt="Article thumbnail"
                            width={300}
                            height={200}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-sm font-semibold text-gray-900 mb-3 line-clamp-2">{title}</h3>
                            <div className="flex items-center space-x-2 text-xs text-gray-500">
                                <span className="bg-red-100 text-red-600 px-2 py-1 rounded">Nasional</span>
                                <span>22 Jan 2024</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-8">
                <p className="text-sm text-gray-600">Showing 1 to 10 of 97 results</p>

                <div className="flex items-center space-x-2">
                    <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">← Previous</button>
                    <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded">1</button>
                    <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">2</button>
                    <span className="px-2 text-gray-400">...</span>
                    <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">8</button>
                    <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">9</button>
                    <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">Next →</button>
                </div>
            </div>
        </section>
    )
}

export default Recommendation