import {useEffect, useState} from 'react'

export type Hotel = {
	id: string,
	hotel: {
		name: string,
		rating: number,
		location: string,
		description: string
	},
	booking: {
		startDate: string, // ISO8601
		durationDays: number,
		price: number, // float
		guestCount: {
			adults: number,
			children: number,
			infants: number
		}
	},
	departureLocation: string
};

function fetchHotels(): Promise<Hotel[]> {
	// Just wanted to see if Vite does code splitting out of the box.
	return import('./hotels.json').then(module => module.default)
}

// This should really handle idle and error states, possibly refetch and do caching etc.
// In reality, we'd probably use a library like react-query (or similar), that does it for us.
export function useHotels(): 'PENDING' | Hotel[] {
	const [state, setState] = useState<'PENDING' | Hotel[]>('PENDING')

	useEffect(() => {
		fetchHotels().then(setState)
	}, [])

	return state
}
