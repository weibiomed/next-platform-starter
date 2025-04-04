import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0b0d14] text-gray-300 py-10 px-4 mt-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h2 className="text-white text-lg font-semibold mb-2">Wei Biomed Co. Ltd</h2>
          <p> </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">網站導覽</h3>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:text-cyan-400">首頁</Link></li>
            <li><Link href="/about" className="hover:text-cyan-400">關於我們</Link></li>
            <li><Link href="/services" className="hover:text-cyan-400">產品與服務</Link></li>
            <li><Link href="/news" className="hover:text-cyan-400">最新消息</Link></li>
            <li><Link href="/contact" className="hover:text-cyan-400">聯絡我們</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">聯絡資訊</h3>
          <p>Email: info@weibiomed.com</p>
          <p>電話: 04-xxxx-xxxx</p>
          <p>地址: （請填寫公司地址）</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Wei Biomed Co. Ltd. All rights reserved.
      </div>
    </footer>
  );
}