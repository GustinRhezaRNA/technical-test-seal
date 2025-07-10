import { useNews } from '@/hooks/useNews'
import { Dot } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Popular = () => {

    const { data: news, isLoading, isError } = useNews();

    if (isLoading) {
        return <p className="text-center text-gray-500">Memuat berita...</p>;
    }

    if (isError) {
        return <p className="text-center text-red-500">Gagal memuat berita.</p>;
    }

    if (!news || !Array.isArray(news)) {
        return <p className="text-center text-gray-500">Berita tidak tersedia.</p>;
    }

    const popularArticles = news.slice(0, 3);


    return (
        <section className="mt-12">
            <div className="border-l-4 border-blue-500 pl-4 mb-6">
                <h2 className="text-xl font-bold text-gray-900">Berita Terpopuler</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {popularArticles.map((n, index) => (
                    <div key={index} className="flex space-x-4  bg-white rounded-lg p-4 min-h-[120px] items-center">
                        {/* <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                {index + 1}
                            </div>
                        </div> */}
                        <div className="flex-shrink-0 relative">
                            <Image
                                src={n.thumbnail}
                                alt="News thumbnail"
                                width={100}
                                height={100}
                                className="w-28 h-24 object-cover rounded"
                            />
                            <div className="absolute -top-3 -left-3">
                                <span className="inline-flex items-center rounded-full px-2.5 py-1 bg-slate-800  text-xs font-medium text-white shadow-sm">
                                    {index + 1}
                                </span>
                            </div>
                        </div>
                        <div className="flex-1 ml-4">
                            <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                                {n.title}
                            </h3>
                            <div className="flex items-center space-x-2 text-xs text-gray-500">
                                <span className='inline text-blue-400 m-0 font-semibold'>Nasional </span>
                                <Dot className='text-center text-slate-300' /> {new Date(n.pubDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Popular