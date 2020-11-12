import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Text from '../../README.md'
import Header from '../components/header.jsx'
import MarkdownWithoutHeader from '../components/markdownWithoutHeader'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header fileContents={Text} />

      <main className={styles.main}>
        <MarkdownWithoutHeader md={Text} />
      </main>
    </div>
  )
}
