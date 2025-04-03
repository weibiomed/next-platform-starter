import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

export default async function Page() {
  const filePath = path.join(process.cwd(), 'content/home/index.md');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const { data } = matter(fileContent);

  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      <section>
        <h1 className="mb-4 text-3xl font-bold">{data.title}</h1>
        <p className="mb-6 text-lg">{data.intro}</p>
      </section>
    </div>
  );
}

