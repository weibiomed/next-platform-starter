import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import MarkdownContent from '@/components/MarkdownContent';

export default async function AboutPage() {
  const filePath = path.join(process.cwd(), 'content/about/index.md');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const { content } = matter(fileContent);
  return <MarkdownContent content={content} />;
}