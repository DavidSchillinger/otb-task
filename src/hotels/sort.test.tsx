import {describe, expect, it, vi} from 'vitest'
import {render} from '@testing-library/react/pure'
import {userEvent} from '@testing-library/user-event'
import {SortControls} from './sort.tsx'
import {Sort} from './sort.hook.tsx'

vi.mock('@mui/icons-material', () => ({
	CurrencyPound: () => <div>CurrencyPound</div>,
	SortByAlpha: () => <div>SortByAlpha</div>,
	Star: () => <div>Star</div>,
}))

describe('SortControls', () => {
	it('should render', () => {
		const {getAllByRole} = render(
			<SortControls
				activeSort={Sort.Price}
				onClickSortAlphabetical={() => null}
				onClickSortRating={() => null}
				onClickSortPrice={() => null}
			/>,
		)

		const buttons = getAllByRole('button')
		expect(buttons).toHaveLength(3)

		buttons.forEach(button => {
			expect(button).toBeVisible()
		})
	})

	it('should call back on click', async () => {
		const onClickSortAlphabeticalSpy = vi.fn()
		const onClickSortRatingSpy = vi.fn()
		const onClickSortPriceSpy = vi.fn()

		const {getAllByRole} = render(
			<SortControls
				activeSort={Sort.Price}
				onClickSortAlphabetical={onClickSortAlphabeticalSpy}
				onClickSortRating={onClickSortRatingSpy}
				onClickSortPrice={onClickSortPriceSpy}
			/>,
		)

		const [alphabetical, price, rating] = getAllByRole('button')

		expect(onClickSortAlphabeticalSpy).not.toHaveBeenCalled()
		expect(onClickSortRatingSpy).not.toHaveBeenCalled()
		expect(onClickSortPriceSpy).not.toHaveBeenCalled()

		await userEvent.click(alphabetical)
		expect(onClickSortAlphabeticalSpy).toHaveBeenCalledOnce()

		await userEvent.click(price)
		expect(onClickSortPriceSpy).toHaveBeenCalledOnce()

		await userEvent.click(rating)
		expect(onClickSortRatingSpy).toHaveBeenCalledOnce()
	})
})
