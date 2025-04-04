
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
      const { data } = matter(fileContent);
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
    <div className="max-w-3xl mx-auto py-8 px-4 prose prose-dark">
      <h1>產品與服務</h1>
      <ul>
        {sorted.map(post => (
          <li key={post.slug}>
            <h2><Link href={`/services/${post.slug}`}>{post.title}</Link></h2>
            <p className="text-sm text-gray-400">{post.date}</p>
            <p>{post.intro}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
