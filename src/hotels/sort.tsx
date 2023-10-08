import classes from './sort.module.css'
import {CurrencyPound, SortByAlpha, Star} from '@mui/icons-material'
import {ReactNode} from 'react'
import {Sort} from './sort.hook.tsx'

export type SortControlsProps = {
	activeSort: Sort;
	onClickSortAlphabetical: () => void;
	onClickSortRating: () => void;
	onClickSortPrice: () => void;
}

export function SortControls(props: SortControlsProps) {
	const {activeSort, onClickSortAlphabetical, onClickSortRating, onClickSortPrice} = props

	return (
		<div className={classes.controls}>
			<SortButton
				onClick={onClickSortAlphabetical}
				isActive={activeSort === Sort.Name}
			>
				{{
					text: <span>sort <b>alphabetically</b></span>,
					icon: <SortByAlpha/>,
				}}
			</SortButton>

			<SortButton
				onClick={onClickSortPrice}
				isActive={activeSort === Sort.Price}
			>
				{{
					text: <span>sort by <b>price</b></span>,
					icon: <CurrencyPound/>,
				}}
			</SortButton>

			<SortButton
				onClick={onClickSortRating}
				isActive={activeSort === Sort.Rating}
			>
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
	isActive: boolean,
	children: {
		text: ReactNode,
		icon: ReactNode,
	}
}

function SortButton(props: SortButtonProps) {
	const {onClick, children: {text, icon}, isActive} = props

	return (
		<button
			type='button'
			onClick={onClick}
			className={isActive ? `${classes.button} ${classes.activeButton}` : classes.button}
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
