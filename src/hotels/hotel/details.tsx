import classes from './details.module.css'
import {Hotel, HotelBooking, HotelBookingGuestCount} from '../fetch.tsx'
import {Star} from '@mui/icons-material'

export type HotelAndBookingDetailsProps = {option: Hotel}

export function HotelAndBookingDetails(props: HotelAndBookingDetailsProps) {
	const {option: {booking, hotel, departureLocation}} = props

	return (
		<div className={classes.details}>
			<h1 className='sr-only'>hotel and booking details</h1>

			<div>
				<h2 className={classes.heading}>
					<span className='sr-only'>name:</span>
					{hotel.name}
				</h2>

				<div className={classes.location}>
					<span className='sr-only'>location:</span>
					{hotel.location}
				</div>
			</div>

			<div className={classes.rating}>
				<span className='sr-only'>star rating: {hotel.rating}</span>
				{/* MUI icons are aria-hidden already, so nothing more to do here :) */}
				{Array.from(Array(hotel.rating)).map((_, index) => (
					<Star key={index} fontSize='small'/>
				))}
			</div>

			<div className={classes.booking}>
				<Guests guests={booking.guestCount}/>
				<DateAndDuration booking={booking}/>
				<DepartureLocation location={departureLocation}/>
			</div>

			<BookButton price={booking.price}/>
		</div>
	)
}

function Guests(props: {guests: HotelBookingGuestCount}) {
	const {guests: {adults, children, infants}} = props

	// I'd want to speak to UX/UI about this, I think consistent conjunction list formatting would be nice here
	// (such as in Intl.ListFormat), so that we use "," and "&" naturally regardless of which count follows which.

	return (
		<div>
			<span className='sr-only'>guests</span>
			<span><b>{adults}</b> {adults === 1 ? 'Adult' : 'Adults'}</span>
			{!children ? null : <span>, <b>{children}</b> {children === 1 ? 'child' : 'children'}</span>}
			{!infants ? null : <span> & <b>{infants}</b> {infants === 1 ? 'infant' : 'infants'}</span>}
		</div>
	)
}

// This format doesn't completely match the designs, but it's automatically locale-aware.
// Intl is super easy to use and is built into the browser natively.
// I'd want to discuss if we're happy with a minor format change like this.

const shortDate = new Intl.DateTimeFormat(undefined, {dateStyle: 'long'})

const formatDate = (iso8601: string) => {
	const date = Date.parse(iso8601)
	return shortDate.format(date)
}

function DateAndDuration(props: {booking: HotelBooking}) {
	const {booking} = props

	return (
		<div>
			<span className='sr-only'>date and duration of stay</span>
			<b>{formatDate(booking.startDate)}</b> for <b>{booking.durationDays} days</b>
		</div>
	)
}

function DepartureLocation(props: {location: string}) {
	const {location} = props

	return (
		<div>
			<span className='sr-only'>departure location</span>
			{/* Should this use an uppercase D? lowercase feels a bit odd to me */}
			<span>departing from <b>{location}</b></span>
		</div>
	)
}

const currencyGBP = new Intl.NumberFormat(undefined, {style: 'currency', currency: 'GBP'})

function BookButton(props: {price: number}) {
	const {price} = props

	return (
		<button
			type='button'
			onClick={() => null}
			className={classes.bookButton}
		>
			Book now <br/>
			{currencyGBP.format(price)}
		</button>
	)
}
