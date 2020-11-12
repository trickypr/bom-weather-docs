import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Text from '../../README.md'
import Header from '../components/header.jsx'
import MarkdownWithoutHeader from '../components/markdownWithoutHeader'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bom Weather Docs</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <Header fileContents={Text} />

      <main className={styles.main}>
        <MarkdownWithoutHeader md={Text} />
      </main>

      <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" /> 
    </div>
  )
}
