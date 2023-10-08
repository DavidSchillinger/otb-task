import {useEffect, useState} from 'react'
import classes from './index.module.css'
import {Hotel} from '../fetch.tsx'
import {HotelImageWithButton} from './image.tsx'
import {HotelDescription} from './description.tsx'

export type HotelCardProps = {
	option: Hotel,
}

export function HotelCard(props: HotelCardProps) {
	const {option} = props

	const [isExpanded, setIsExpanded] = useState(false)

	useEffect(() => {
		console.log(option)
	}, [option])

	return (
		<article className={classes.card}>
			<HotelImageWithButton
				hotel={option.hotel}
				isExpanded={isExpanded}
				onClickToggle={() => setIsExpanded(c => !c)}
			/>

			<div>Details placeholder</div>

			<HotelDescription isVisible={isExpanded}>
				{option.hotel.description}
			</HotelDescription>
		</article>
	)
}
