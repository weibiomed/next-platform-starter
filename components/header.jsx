import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">Wei Biomed</h1>
        <nav className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600">首頁</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">關於我們</Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600">產品與服務</Link>
          <Link href="/news" className="text-gray-700 hover:text-blue-600">最新消息</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">聯絡我們</Link>
        </nav>
      </div>
    </header>
  );
}