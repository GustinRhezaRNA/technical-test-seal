import { useNews } from '@/hooks/useNews';
import { Dot, Search } from 'lucide-react'
import Image from 'next/image'
import React, { useMemo, useState } from 'react'

const Recommendation = () => {

    const { data: news, isLoading, isError } = useNews();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const { currentNews, indexOfFirstItem, indexOfLastItem } = useMemo(() => {
        if (!news) return { currentNews: [], indexOfFirstItem: 0, indexOfLastItem: 0 };

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentNews = news.slice(indexOfFirstItem, indexOfLastItem);

        return { currentNews, indexOfFirstItem, indexOfLastItem };
    }, [news, currentPage]);



    if (isLoading) {
        return <p className="text-center text-gray-500">Memuat berita...</p>;
    }

    if (isError) {
        return <p className="text-center text-red-500">Gagal memuat berita.</p>;
    }

    if (!news || !Array.isArray(news)) {
        return <p className="text-center text-gray-500">Berita tidak tersedia.</p>;
    }

    const totalPages = Math.ceil(news.length / itemsPerPage);

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
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentNews.map((n, index) => (
                    <a
                        key={index}
                        href={n.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow block"
                    >
                        <Image
                            src={n.thumbnail}
                            alt="Article thumbnail"
                            width={300}
                            height={200}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                                {n.title}
                            </h3>
                            <div className="flex items-center space-x-2 text-xs text-gray-500">
                                <span className="inline text-blue-400 m-0 font-semibold">Nasional</span>
                                <Dot className="text-center text-slate-300" />
                                <span>{new Date(n.pubDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                            </div>
                        </div>
                    </a>
                ))}

            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-8">
                <p className="text-sm text-gray-600">
                    Menampilkan {indexOfFirstItem + 1} – {Math.min(indexOfLastItem, news.length)} dari {news.length} berita
                </p>

                <div className="flex items-center space-x-2">
                    {/* Previous */}
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`px-3 py-1 text-sm rounded ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        ← Previous
                    </button>

                    {/* Page 1 */}
                    <button
                        onClick={() => setCurrentPage(1)}
                        className={`px-3 py-1 text-sm rounded ${currentPage === 1 ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                        1
                    </button>

                    {/* Page 2 */}
                    {totalPages >= 2 && (
                        <button
                            onClick={() => setCurrentPage(2)}
                            className={`px-3 py-1 text-sm rounded ${currentPage === 2 ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                        >
                            2
                        </button>
                    )}

                    {/* Ellipsis */}
                    {currentPage > 4 && <span className="px-2 text-gray-400">...</span>}

                    {/* Dynamic pages (around currentPage) */}
                    {Array.from({ length: 3 }, (_, i) => {
                        const page = currentPage - 1 + i;
                        if (page > 2 && page < totalPages - 1) {
                            return (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`px-3 py-1 text-sm rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                                >
                                    {page}
                                </button>
                            );
                        }
                        return null;
                    })}

                    {/* Ellipsis */}
                    {currentPage < totalPages - 3 && <span className="px-2 text-gray-400">...</span>}

                    {/* Page totalPages - 1 */}
                    {totalPages > 3 && (
                        <button
                            onClick={() => setCurrentPage(totalPages - 1)}
                            className={`px-3 py-1 text-sm rounded ${currentPage === totalPages - 1 ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                        >
                            {totalPages - 1}
                        </button>
                    )}

                    {/* Page totalPages */}
                    {totalPages > 2 && (
                        <button
                            onClick={() => setCurrentPage(totalPages)}
                            className={`px-3 py-1 text-sm rounded ${currentPage === totalPages ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                        >
                            {totalPages}
                        </button>
                    )}

                    {/* Next */}
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-1 text-sm rounded ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Next →
                    </button>
                </div>
            </div>

        </section>
    )
}

export default Recommendation