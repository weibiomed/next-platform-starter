import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content/home/index.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);

  return {
    props: {
      frontmatter: data
    }
  };
}

export default function HomePage({ frontmatter }) {
  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      <section>
        <h1 className="mb-4 text-3xl font-bold">{frontmatter.title}</h1>
        <p className="mb-6 text-lg">{frontmatter.intro}</p>
      </section>
    </div>
  );
}