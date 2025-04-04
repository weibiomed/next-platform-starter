import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import MarkdownContent from '../../../../components/MarkdownContent';

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
  const { content } = matter(fileContent);
  return <MarkdownContent content={content} />;
}