import {useEffect} from 'react'
import {Hotel} from '../fetch.tsx'
import {ExpandMore} from '@mui/icons-material'
import {HotelImageButton, HotelImageWithButton} from './image.tsx'

export type HotelCardProps = {
	option: Hotel,
}

export function HotelCard(props: HotelCardProps) {
	const {option} = props

	useEffect(() => {
		console.log(option)
	}, [option])

	return (
		<article>
			<HotelImageWithButton hotel={option.hotel}>
				<HotelImageButton onClick={() => null}>
					{{
						text: <span><b>Read more</b> about this hotel</span>,
						icon: <ExpandMore fontSize='large'/>,
					}}
				</HotelImageButton>
			</HotelImageWithButton>
		</article>
	)
}
