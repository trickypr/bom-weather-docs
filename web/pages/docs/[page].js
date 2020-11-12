import ReactMarkdown from 'react-markdown'
import Head from 'next/head'

import styles from '../../styles/Home.module.css'
import Header from '../../components/header'

export default function Page({ md, title }) {
  return (
		<div>
			<Head>
				<title>{title} | Bom Weather Docs</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header fileContents={md} />

			<main className={styles.main}>
				<ReactMarkdown>{ md }</ReactMarkdown>
			</main>
		</div>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { page } = ctx.params
	const content = await import(`../../../docs/${page}.md`)
	
	const headerPosition = content.indexOf('#') + 2
	const headerEnd = content.indexOf('\n', headerPosition)

	const headerText = fileContents.substring(headerPosition, headerEnd)
	const markdown = content.substring(headerEnd)

  return {
    props: {
			title: headerText,
			md: markdown
    },
  }
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const blogs = glob.sync('../../../docs/**/*.md')

  //remove path and extension to leave filename only
  const blogSlugs = blogs.map(file =>
    file
      .split('/')[1]
      .replace(/ /g, '-')
      .slice(0, -3)
      .trim()
  )

  // create paths with `slug` param
  const paths = blogSlugs.map(slug => `/docs/${slug}`)

  return {
    paths,
    fallback: false,
  }
}

