import {useHotels} from './hotels.tsx'

export default function App() {
	const hotels = useHotels()

	return (
		<main>
			<pre>{JSON.stringify(hotels, null, '\t')}</pre>
		</main>
	)
}
