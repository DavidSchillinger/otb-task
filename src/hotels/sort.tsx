import classes from './sort.module.css'
import {CurrencyPound, SortByAlpha, Star} from '@mui/icons-material'
import {ReactNode} from 'react'

export type SortControlsProps = {
	onClickSortAlphabetical: () => void;
	onClickSortRating: () => void;
	onClickSortPrice: () => void;
}

export function SortControls(props: SortControlsProps) {
	const {onClickSortAlphabetical, onClickSortRating, onClickSortPrice} = props

	return (
		<div className={classes.controls}>
			<SortButton onClick={onClickSortAlphabetical}>
				{{
					text: <span>sort <b>alphabetically</b></span>,
					icon: <SortByAlpha/>,
				}}
			</SortButton>

			<SortButton onClick={onClickSortPrice}>
				{{
					text: <span>sort by <b>price</b></span>,
					icon: <CurrencyPound/>,
				}}
			</SortButton>

			<SortButton onClick={onClickSortRating}>
				{{
					text: <span>sort by <b>star rating</b></span>,
					icon: <Star/>,
				}}
			</SortButton>
		</div>
	)
}

type SortButtonProps = {
	onClick: () => void,
	children: {
		text: ReactNode,
		icon: ReactNode,
	}
}

function SortButton(props: SortButtonProps) {
	const {onClick, children: {text, icon}} = props

	return (
		<button
			type='button'
			onClick={onClick}
			className={classes.button}
		>
			<span className={classes.text}>
				{text}
			</span>

			<span className={classes.icon}>
				{icon}
			</span>
		</button>
	)
}
