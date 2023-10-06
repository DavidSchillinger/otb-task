import {useHotels} from './fetch.tsx'
import styles from './index.module.css'

export default function Hotels() {
	const hotels = useHotels()

	return (
		<main className={styles.main}>
			<pre style={{margin: 0}}>{JSON.stringify(hotels, null, '\t')}</pre>
		</main>
	)
}
