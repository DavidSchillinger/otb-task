import {describe, expect, it} from 'vitest'
import {act, renderHook} from '@testing-library/react/pure'
import {Sort, useSort} from './sort.hook.tsx'
import {Hotel} from './fetch.tsx'

const hotels: Hotel[] = [
	{
		hotel: {name: 'Foo', rating: 5},
		booking: {price: 500},
	} as Hotel,
	{
		hotel: {name: 'Bar', rating: 3},
		booking: {price: 1000},
	} as Hotel,
	{
		hotel: {name: 'Baz', rating: 1},
		booking: {price: 100},
	} as Hotel,
]

describe('useSort', () => {
	it('should render', () => {
		const {result} = renderHook(() => useSort(hotels))

		expect(result.current.activeSort).toBe(Sort.Price) // Default
		expect(result.current.setActiveSort).toBeTypeOf('function')
		expect(result.current.sortedHotels).toEqual([
			hotels[1], // 1000
			hotels[0], // 500
			hotels[2], // 100
		])
	})

	const cases = [
		{sort: Sort.Name, sorted: [hotels[1], hotels[2], hotels[0]]},
		{sort: Sort.Price, sorted: [hotels[1], hotels[0], hotels[2]]},
		{sort: Sort.Rating, sorted: [hotels[0], hotels[1], hotels[2]]},
	]

	it.each(cases)('should be possible to sort by $sort', ({sort, sorted}) => {
		const {result} = renderHook(() => useSort(hotels))

		act(() => {
			result.current.setActiveSort(sort)
		})

		expect(result.current.sortedHotels).toEqual(sorted)
	})
})
