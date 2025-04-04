import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content/news');
  const files = await fs.readdir(dir);
  return files.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export default async function NewsPost({ params }) {
  const filePath = path.join(process.cwd(), 'content/news', `${params.slug}.md`);
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 prose">
      <h1>{data.title}</h1>
      <p className="text-sm text-gray-400">{data.date}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}