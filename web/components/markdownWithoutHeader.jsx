import ReactMarkdown from 'react-markdown'

export default function markdownWithoutHeader({ md }) {
	const headerPosition = md.indexOf('#') + 2
	const headerEnd = md.indexOf('\n', headerPosition)

	const markdown = md.substring(headerEnd)

	return (
		<ReactMarkdown>{markdown}</ReactMarkdown>
	)
}