import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = ``

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}