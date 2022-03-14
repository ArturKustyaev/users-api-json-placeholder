import { FC } from 'react'
import { Button } from 'ui-kit'
import './Sidebar.scss'

export const Sidebar: FC = (): JSX.Element => {
	return (
		<div className='sidebar'>
			<h2 className='sidebar__title'>Сортировка</h2>
			<div className='sidebar__order'>
				<Button className='sidebar__button'>по городу</Button>
				<Button className='sidebar__button'>по компании</Button>
			</div>
		</div>
	)
}
