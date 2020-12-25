import ReactMarkdown from 'react-markdown'
import toc from 'remark-toc'
import glob from 'glob'
import Head from 'next/head'

import styles from '../../styles/Home.module.css'
import Header from '../../components/header'
import renderer from '../../components/renderer'

export default function Page({ md, title, raw }) {
  return (
    <div>
      <Head>
        <title>{title} | Bom Weather Docs</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <Header fileContents={raw} />

      <main className={styles.main}>
        <ReactMarkdown renderers={renderer} allowDangerousHtml={true} plugins={[toc]}>{md}</ReactMarkdown>
      </main>

      <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
    </div>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { page } = ctx.params
  const { default: content } = await import(`../../../docs/${page}.md`)

  const headerPosition = content.indexOf('#') + 2
  const headerEnd = content.indexOf('\n', headerPosition)

  const headerText = content.substring(headerPosition, headerEnd)
  const markdown = content.substring(headerEnd)

  return {
    props: {
      title: headerText,
      md: markdown,
      raw: content
    },
  }
}

export async function getStaticPaths() {
  const docsPath = '../docs/'

  //get all .md files in the posts dir
  const docsFiles = glob.sync(`${docsPath}**/*.md`)

  //remove path and extension to leave filename only
  const docsURLs = docsFiles.map(file =>
    file
      .replace(docsPath, '')
      .replace(' ', '-')
      .slice(0, -3)
      .trim()
  )

  // create paths with `slug` param
  const paths = docsURLs.map(slug => `/docs/${slug}`)

  return {
    paths,
    fallback: false,
  }
}

