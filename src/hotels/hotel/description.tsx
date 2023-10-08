import {ReactNode} from 'react'
// Uses classes from index, so we can co-locate all grid styles.
import classes from './index.module.css'

export type HotelDescriptionProps = {
	children: ReactNode,
	isVisible: boolean,
}

export function HotelDescription(props: HotelDescriptionProps) {
	const {children, isVisible} = props

	return (
		// Alternatively we could conditionally render the entire block, but avoiding the expand/collapse
		// complexity entirely seemed like it could be an improvement for a11y. I'd want to discuss/research this.
		<div className={isVisible ? classes.description : `${classes.description} sr-only`}>
			<h2 className={classes.descriptionHeading}>
				Overview
			</h2>

			<p className={classes.descriptionContent}>
				{children}
			</p>
		</div>
	)
}
