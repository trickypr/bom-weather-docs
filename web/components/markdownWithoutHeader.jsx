import ReactMarkdown from 'react-markdown'
import renderer from './renderer'

export default function markdownWithoutHeader({ md }) {
	const headerPosition = md.indexOf('#') + 2
	const headerEnd = md.indexOf('\n', headerPosition)

	const markdown = md.substring(headerEnd)

	return (
		<ReactMarkdown renderers={renderer} >{markdown}</ReactMarkdown>
	)
}