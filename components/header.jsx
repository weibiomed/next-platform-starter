'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0b0d14] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Wei Biomed</h1>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-cyan-300">首頁</Link>
          <Link href="/about" className="hover:text-cyan-300">關於我們</Link>
          <Link href="/services" className="hover:text-cyan-300">產品與服務</Link>
          <Link href="/news" className="hover:text-cyan-300">最新消息</Link>
          <Link href="/contact" className="hover:text-cyan-300">聯絡我們</Link>
        </nav>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0b0d14] px-4 pb-4 space-y-2">
          <Link href="/" className="block hover:text-cyan-300">首頁</Link>
          <Link href="/about" className="block hover:text-cyan-300">關於我們</Link>
          <Link href="/services" className="block hover:text-cyan-300">產品與服務</Link>
          <Link href="/news" className="block hover:text-cyan-300">最新消息</Link>
          <Link href="/contact" className="block hover:text-cyan-300">聯絡我們</Link>
        </div>
      )}
    </header>
  );
}