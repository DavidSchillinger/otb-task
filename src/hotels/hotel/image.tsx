import {ReactNode} from 'react'
import classes from './image.module.css'
import {ExpandLess, ExpandMore} from '@mui/icons-material'

export type HotelImageWithButtonProps = {
	hotel: {imageUrl: string, name: string},
	isExpanded: boolean,
	onClickToggle: () => void,
}

export function HotelImageWithButton(props: HotelImageWithButtonProps) {
	const {hotel, isExpanded, onClickToggle} = props

	return (
		<div className={classes.container}>
			<img
				src={hotel.imageUrl}
				alt={hotel.name}
				className={classes.image}
			/>

			<HotelImageButton onClick={onClickToggle}>
				{/* Minor UX suggestion here: Use up/down arrows similar to MUI accordion. */}
				{/* This avoids the button looking a little like a "play" button when collapsed. */}
				{/* I wouldn't normally write this as a comment in the code, I'd ask a UX/UI designer. */}
				{{
					text: <span><b>{isExpanded ? 'Read less' : 'Read more'}</b> about this hotel</span>,
					icon: isExpanded ? <ExpandLess fontSize='large'/> : <ExpandMore fontSize='large'/>,
				}}
			</HotelImageButton>
		</div>
	)
}

type HotelImageButtonProps = {
	onClick: () => void,
	children: {
		text: ReactNode,
		icon: ReactNode,
	}
}

function HotelImageButton(props: HotelImageButtonProps) {
	const {onClick, children: {text, icon}} = props

	return (
		<button
			type='button'
			onClick={onClick}
			className={classes.button}
			aria-hidden // This can be hidden because the description always "shows" for SRs.
		>
			<span className={classes.buttonText}>
				{text}
			</span>

			<span className={classes.buttonIcon}>
				{icon}
			</span>
		</button>
	)
}
