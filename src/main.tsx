import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Hotels from './hotels'
import 'modern-normalize/modern-normalize.css'
import './main.module.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Hotels/>
	</StrictMode>,
)
