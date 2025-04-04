import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default async function ServicesList() {
  const dir = path.join(process.cwd(), 'content/services');
  const files = await fs.readdir(dir);
  const services = await Promise.all(
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

  return (
    <div className="prose prose-dark max-w-3xl mx-auto py-8 px-4">
      <h1>產品與服務</h1>
      <ul>
        {services.map(service => (
          <li key={service.slug}>
            <h2><Link href={`/services/${service.slug}`}>{service.title}</Link></h2>
            <p>{service.intro}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}