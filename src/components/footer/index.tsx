import React from 'react'
import Link from 'next/link'
import { Send, Youtube, Instagram, Facebook } from 'lucide-react'
import Image from 'next/image'

const index = () => {
  return (
    <footer className="bg-slate-700 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Copyright */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/assets/logo-berita.png"
                alt="Berita Kini Logo"
                width={40}
                height={40}
                className="w-10 h-10 "
              />
              <span className="text-xl font-semibold">Berita Kini</span>
            </div>
            <p className="text-sm text-gray-300">© 2023 Berita Kini. All Rights Reserved.</p>

            <div>
              <h4 className="font-semibold mb-3">Ikuti Kami</h4>
              <div className="flex space-x-3">
                <Youtube className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
                <Facebook className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Telusuri */}
          <div>
            <h4 className="font-semibold mb-4">Telusuri</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Kesehatan
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Otomotif
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Politik
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Olahraga
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Nasional
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Internasional
                </Link>
              </li>
            </ul>
          </div>

          {/* Bantuan */}
          <div>
            <h4 className="font-semibold mb-4">Bantuan</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white">
                  Kontak Kami
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Laporan Pembajakan
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Kebijakan
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Berlangganan Berita Terbaru</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Masukan email"
                className="flex-1 px-3 py-2 bg-white border border-slate-500 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-r-lg">
                <Send className="w-4 h-4" />  
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default index