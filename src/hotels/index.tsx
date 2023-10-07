import styles from './index.module.css'
import {useHotels} from './fetch.tsx'
import {SortControls} from './sort.tsx'

export default function Hotels() {
	const hotels = useHotels()

	return (
		<main className={styles.main}>
			<SortControls
				onClickSortAlphabetical={() => null}
				onClickSortRating={() => null}
				onClickSortPrice={() => null}
			/>

			<pre style={{margin: 0}}>{JSON.stringify(hotels, null, '\t')}</pre>
		</main>
	)
}
