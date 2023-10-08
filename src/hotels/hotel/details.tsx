import {Hotel} from '../fetch.tsx'

export type HotelAndBookingDetailsProps = {option: Hotel}

export function HotelAndBookingDetails(props: HotelAndBookingDetailsProps) {
	const {option} = props

	return (
		<div>
			<h1>
				{option.hotel.name}
			</h1>
		</div>
	)
}
