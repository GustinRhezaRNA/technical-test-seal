import Image from 'next/image'
import React from 'react'
import {nav as navItems} from '@/constants/nav'
import Link from 'next/link'

const Navigation = () => {
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <Image
                            src="/assets/logo-berita.png"
                            alt="Berita Kini Logo"
                            width={40}
                            height={40}
                            className="w-10 h-10 "
                        />
                        <span className="text-xl font-semibold text-gray-900">Berita Kini</span>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href="#"
                                className={`px-3 py-2 text-sm font-medium transition-colors ${item.active ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navigation