import { PureComponent } from 'react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { coy } from "react-syntax-highlighter/dist/cjs/styles/prism"

class CodeHighlighter extends PureComponent {
  render() {
    const { language, value } = this.props

    return (
      <SyntaxHighlighter language={language} style={coy}>
        {value}
      </SyntaxHighlighter>
    )
  }
}

export default CodeHighlighter
