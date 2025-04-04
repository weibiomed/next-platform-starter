import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export default async function AboutPage() {
  const filePath = path.join(process.cwd(), 'content/about/index.md');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 prose">
      <h1>{data.title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}