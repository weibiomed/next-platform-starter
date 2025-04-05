import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default async function ServicesList() {
  const dir = path.join(process.cwd(), 'content/services');
  const files = await fs.readdir(dir);
  const posts = await Promise.all(
    files.map(async (filename) => {
      const fileContent = await fs.readFile(path.join(dir, filename), 'utf-8');
      const { content, data } = matter(fileContent); // ✅ 取出 data
      return {
        slug: filename.replace(/\.md$/, ''),
        title: data.title,
        intro: data.intro,
        date: data.date
      };
    })
  );
  const sorted = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
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