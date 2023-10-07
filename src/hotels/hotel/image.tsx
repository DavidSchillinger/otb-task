import {ReactNode} from 'react'
import {HotelDetails} from '../fetch.tsx'
import classes from './image.module.css'

export type HotelImageWithButtonProps = {
	hotel: HotelDetails,
	children: ReactNode,
}

export function HotelImageWithButton(props: HotelImageWithButtonProps) {
	const {hotel, children} = props

	return (
		<div className={classes.details}>
			<img
				src={hotel.imageUrl}
				alt={hotel.name}
				className={classes.detailsImage}
			/>

			{children}
		</div>
	)
}

export type HotelImageButtonProps = {
	onClick: () => void,
	children: {
		text: ReactNode,
		icon: ReactNode,
	}
}

export function HotelImageButton(props: HotelImageButtonProps) {
	const {onClick, children: {text, icon}} = props

	return (
		<button
			type='button'
			onClick={onClick}
			className={classes.detailsButton}
		>
			<span className={classes.detailsButtonText}>
				{text}
			</span>

			<span className={classes.detailsButtonIcon}>
				{icon}
			</span>
		</button>
	)
}
