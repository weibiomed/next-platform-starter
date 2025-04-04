import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0b0d14] text-white">
      {/* Hero Section */}
      <section className="py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          引領智慧醫療的未來
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          我們致力於整合人工智慧與醫學影像技術，開發更高效、更準確的診斷工具，推動精準醫療實踐。
        </p>
        <Link href="/services">
          <span className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition">
            了解我們的產品
          </span>
        </Link>
      </section>

      {/* Company Mission Section */}
      <section className="bg-[#101218] py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">我們的使命</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            透過深度學習與臨床專業的結合，開發具臨床價值的 AI 模型，協助醫師提升診斷準確性與效率，
            並推動智慧醫療科技落地應用。
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 px-4">
        <h3 className="text-2xl mb-6">準備好與我們合作了嗎？</h3>
        <Link href="/contact">
          <span className="inline-block bg-white text-black hover:bg-gray-200 font-semibold py-3 px-6 rounded-lg transition">
            聯絡我們
          </span>
        </Link>
      </section>
    </div>
  );
}