import {useEffect, useState} from 'react'

export type HotelDetails = {
	name: string,
	rating: number,
	location: string,
	imageUrl: string;
	description: string
}

export type HotelBooking = {
	startDate: string, // ISO8601
	durationDays: number,
	price: number,
	guestCount: HotelBookingGuestCount,
}

export type HotelBookingGuestCount = {
	adults: number,
	children: number,
	infants: number
}

export type Hotel = {
	id: string,
	hotel: HotelDetails,
	booking: HotelBooking,
	departureLocation: string
};

function fetchHotels(): Promise<Hotel[]> {
	// Just wanted to see if Vite does code splitting out of the box.
	return import('./data.json').then(module => module.default)
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
