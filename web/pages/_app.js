import '../styles/globals.css'

import style from '../styles/Footer.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <footer className={style.footer}>
        <p>This page is open source. You can <a href="https://github.com/trickypr/bom-weather-docs">improve it</a>.</p>
      </footer>
    </>
  )
}

export default MyApp
