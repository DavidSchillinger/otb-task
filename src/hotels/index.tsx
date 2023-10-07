import styles from './index.module.css'
import {useHotels} from './fetch.tsx'
import {SortControls} from './sort.tsx'
import {HotelCard} from './hotel'

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

				{/*
					Should really have proper loading indication here,
					error handling, maybe Suspense and/or ErrorBoundary.
				*/}
				{hotels === 'PENDING' ? 'Loading...' : (
					<div className={styles.hotels}>
						{hotels.map(hotel => (
							<HotelCard key={hotel.id} option={hotel}/>
						))}
					</div>
				)}
			</div>
		</main>
	)
}
