import {useHotels} from './hotels.tsx'
import styles from './App.module.css'

export default function App() {
	const hotels = useHotels()

	return (
		<main className={styles.main}>
			<pre style={{margin: 0}}>{JSON.stringify(hotels, null, '\t')}</pre>
		</main>
	)
}
