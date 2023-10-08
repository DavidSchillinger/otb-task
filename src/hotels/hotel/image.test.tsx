import {describe, expect, it, vi} from 'vitest'
import {render} from '@testing-library/react/pure'
import {HotelImageWithButton, HotelImageWithButtonProps} from './image.tsx'
import {ExpandLess, ExpandMore} from '@mui/icons-material'
import {userEvent} from '@testing-library/user-event'

vi.mock('@mui/icons-material', () => ({
	ExpandLess: vi.fn(() => <div>ExpandLess</div>),
	ExpandMore: vi.fn(() => <div>ExpandMore</div>),
}))

function setup(initialProps?: Partial<HotelImageWithButtonProps>) {
	return render(
		<HotelImageWithButton
			hotel={{imageUrl: '/', name: 'Foo'}}
			isExpanded={false}
			onClickToggle={() => null}
			{...initialProps}
		/>,
	)
}

describe('HotelImageWithButton', () => {
	it('should render correctly when isExpanded=false', () => {
		const {getByRole, getByText} = setup({isExpanded: false})

		expect(getByRole('img')).toBeVisible()
		expect(getByText('Read more')).toBeVisible()
		expect(ExpandMore).toHaveBeenCalledOnce()
	})

	it('should render correctly when isExpanded=true', async () => {
		const {getByRole, getByText} = setup({isExpanded: true})

		expect(getByRole('img')).toBeVisible()
		expect(getByText('Read less')).toBeVisible()
		expect(ExpandLess).toHaveBeenCalledOnce()
	})

	it('should callback on button click', async () => {
		const onClickToggle = vi.fn()
		const {getByRole} = setup({onClickToggle})

		expect(onClickToggle).not.toHaveBeenCalled()

		await userEvent.click(getByRole('button'))
		expect(onClickToggle).toHaveBeenCalledOnce()
	})
})
