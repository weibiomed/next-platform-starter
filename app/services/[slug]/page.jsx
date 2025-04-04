import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content/services');
  const files = await fs.readdir(dir);
  return files.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export default async function ServicePost({ params }) {
  const filePath = path.join(process.cwd(), 'content/services', `${params.slug}.md`);
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return (
    <div className="prose prose-dark max-w-3xl mx-auto py-8 px-4">
      <h1>{data.title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}