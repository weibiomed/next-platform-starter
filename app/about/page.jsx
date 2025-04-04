import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import MarkdownContent from '@/components/MarkdownContent';

export default async function AboutPage() {
  const filePath = path.join(process.cwd(), 'content/about/index.md');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const { content, data } = matter(fileContent);  // ← 修正這一行

  return (
    <div className="prose prose-dark max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-lg mb-6">{data.intro}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
