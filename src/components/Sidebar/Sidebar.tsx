import { FC, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'ui-kit'
import './Sidebar.scss'

export const Sidebar: FC = (): JSX.Element => {
	const navigate = useNavigate()

	const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
		navigate(`?_sort=${e.currentTarget.name}`)
	}

	return (
		<div className='sidebar'>
			<h2 className='sidebar__title'>Сортировка</h2>
			<div className='sidebar__order'>
				<Button className='sidebar__button' name='address.city' onClick={clickHandler}>
					по городу
				</Button>
				<Button className='sidebar__button' name='company.name' onClick={clickHandler}>
					по компании
				</Button>
			</div>
		</div>
	)
}
