import {useEffect, useState} from 'react'
import {Hotel} from '../fetch.tsx'
import {HotelImageWithButton} from './image.tsx'

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
		<article>
			<HotelImageWithButton
				hotel={option.hotel}
				isExpanded={isExpanded}
				onClickToggle={() => setIsExpanded(c => !c)}
			/>
		</article>
	)
}
