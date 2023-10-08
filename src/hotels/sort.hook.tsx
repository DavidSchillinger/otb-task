import {Hotel} from './fetch.tsx'
import {useMemo, useState} from 'react'
import {ascend, descend} from 'ramda'

export enum Sort {Name, Rating, Price}

export function useSort(hotels: Hotel[]) {
	const [activeSort, setActiveSort] = useState(Sort.Price)

	const comparator = useMemo(
		() => {
			switch (activeSort) {
			case Sort.Name:
				return ascend<Hotel>(({hotel}) => hotel.name)
			case Sort.Price:
				return descend<Hotel>(({booking}) => booking.price)
			case Sort.Rating:
				return descend<Hotel>(({hotel}) => hotel.rating)
			}
		},
		[activeSort],
	)

	const sortedHotels = useMemo(
		() => [...hotels].sort(comparator),
		[hotels, comparator],
	)

	return {activeSort, setActiveSort, sortedHotels}
}
