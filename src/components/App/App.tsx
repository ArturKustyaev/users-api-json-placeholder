import { MainPage, UserPage } from 'pages'
import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'

export const App: FC = (): JSX.Element => {
	return (
		<BrowserRouter>
			<div className='app'>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/:id' element={<UserPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}
