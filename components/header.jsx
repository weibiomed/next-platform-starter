import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Wei Biomed</h1>
        <nav className="space-x-6">
          <Link href="/" className="hover:underline">首頁</Link>
          <Link href="/about" className="hover:underline">關於我們</Link>
          <Link href="/services" className="hover:underline">產品與服務</Link>
          <Link href="/news" className="hover:underline">最新消息</Link>
          <Link href="/contact" className="hover:underline">聯絡我們</Link>
        </nav>
      </div>
    </header>
  );
}