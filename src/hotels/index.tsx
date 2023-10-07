import styles from './index.module.css'
import {useHotels} from './fetch.tsx'
import {SortControls} from './sort.tsx'

export default function Hotels() {
	const hotels = useHotels()

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<SortControls
					onClickSortAlphabetical={() => null}
					onClickSortRating={() => null}
					onClickSortPrice={() => null}
				/>

				<pre style={{margin: 0, overflow: 'auto'}}>
					{JSON.stringify(hotels, null, '\t')}
				</pre>
			</div>
		</main>
	)
}
