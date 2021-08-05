import Link from 'next/link'

export default function MdLink({ href, children }) {
  if (href) {
    if (href.startsWith('./')) {
      return (
       <Link href={href.replace('.md', '')}><a>{ children }</a></Link>
      )
    }
  }

  return (
    <a href={href}>{children}</a>
  )
}