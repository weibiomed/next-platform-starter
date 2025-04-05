import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import MarkdownContent from '@/components/MarkdownContent';

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content/services');
  const files = await fs.readdir(dir);
  return files.map((filename) => ({
    slug: filename.replace(/\\.md$/, ''),
  }));
}

export default async function ServicesPost({ params }) {
  const filePath = path.join(process.cwd(), 'content/services', `${params.slug}`);
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const { content, data } = matter(fileContent); // ✅ 取出 data

  return (
    <div className="prose prose-dark max-w-3xl mx-auto py-8 px-4">
      {/* ✅ 顯示標題與簡介 */}
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      {data.intro && <p className="text-lg text-gray-500 mb-6">{data.intro}</p>}

      {/* ✅ 顯示主內容 */}
      <MarkdownContent content={content} />
    </div>
  );
}
