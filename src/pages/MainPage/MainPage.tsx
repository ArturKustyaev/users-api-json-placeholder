import { Sidebar, UserList } from 'components'
import { FC } from 'react'
import { Container } from 'ui-kit'
import './MainPage.scss'

export const MainPage: FC = () => {
	return (
		<div className='main-page'>
			<Container>
				<div className='main-page__inner'>
					<Sidebar />
					<UserList />
				</div>
			</Container>
		</div>
	)
}
