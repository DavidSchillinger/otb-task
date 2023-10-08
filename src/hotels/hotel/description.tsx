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
		<div className={isVisible ? classes.description : `${classes.description} ${classes.srOnly}`}>
			<h2 className={classes.descriptionHeading}>
				Overview
			</h2>

			<p className={classes.descriptionContent}>
				{children}
			</p>
		</div>
	)
}
