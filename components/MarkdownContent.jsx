import ReactMarkdown from 'react-markdown';

export default function MarkdownContent({ content }) {
  return (
    <div className="prose prose-dark max-w-3xl mx-auto py-8 px-4">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}