import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import MarkdownContent from '@/components/MarkdownContent';

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content/services');
  const files = await fs.readdir(dir);
  return files.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export default async function ServicesPost({ params }) {
  const filePath = path.join(process.cwd(), 'content/services', `${params.slug}.md`);

  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { content, data } = matter(fileContent);

    return (
      <div className="prose prose-dark max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        {data.intro && <p className="text-lg text-gray-500 mb-6">{data.intro}</p>}
        <MarkdownContent content={content} />
      </div>
    );
  } catch (error) {
    console.error("❌ 無法讀取檔案:", filePath, error);
    return <div className="text-red-600 p-4">無法讀取服務內容檔案。</div>;
  }
}