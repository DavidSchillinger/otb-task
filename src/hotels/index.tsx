import styles from './index.module.css'
import {Hotel, useHotels} from './fetch.tsx'
import {SortControls} from './sort.tsx'
import {HotelCard} from './hotel'
import {Sort, useSort} from './sort.hook.tsx'

export default function Hotels() {
	const hotels = useHotels()

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				{/*
					In reality, we'd want proper loading indication here,
					error handling, maybe Suspense and/or ErrorBoundary.
				*/}
				{hotels === 'PENDING' ? null : (
					<Loaded hotels={hotels}/>
				)}
			</div>
		</main>
	)
}

function Loaded(props: {hotels: Hotel[]}) {
	const {hotels} = props

	const {activeSort, setActiveSort, sortedHotels} = useSort(hotels)

	return (
		<div className={styles.container}>
			<SortControls
				activeSort={activeSort}
				onClickSortAlphabetical={() => setActiveSort(Sort.Name)}
				onClickSortRating={() => setActiveSort(Sort.Rating)}
				onClickSortPrice={() => setActiveSort(Sort.Price)}
			/>

			<div className={styles.hotels}>
				{sortedHotels.map(hotel => (
					<HotelCard key={hotel.id} option={hotel}/>
				))}
			</div>
		</div>
	)
}
