import Link from 'next/link'
import styles from './Header.module.css'

export default function Header({ fileContents }) {
	const headerPosition = fileContents.indexOf('#') + 2
	const headerEnd = fileContents.indexOf('\n', headerPosition)

	const headerText = fileContents.substring(headerPosition, headerEnd)

	return (
		<header className={styles.header}>
			<ul className={styles.nav}>
				<li><Link href="/"><a>Home</a></Link></li>
			</ul>

			<h1>{headerText}</h1>
		</header>
	)
}