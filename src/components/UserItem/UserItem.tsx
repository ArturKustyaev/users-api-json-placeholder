import classNames from 'classnames'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IUser } from './types'
import './UserItem.scss'

interface IUserItemProps {
	className?: string
	user: IUser
}

export const UserItem: FC<IUserItemProps> = ({ className, user }): JSX.Element => {
	return (
		<div className={classNames('user-item', className)}>
			{
				<div className='user-item__inner'>
					<ul className='user-item__info'>
						<li className='user-item__name'>
							ФИО:
							<span className='user-item__value'>{user.name}</span>
						</li>
						<li className='user-item__name'>
							город
							<span className='user-item__value'>{user.address.city}</span>
						</li>
						<li className='user-item__name'>
							компания
							<span className='user-item__value'>{user.company.name}</span>
						</li>
					</ul>
					<div className='user-item__actions'>
						<Link to={`/${user.id}`} className='user-item__link'>
							Подробнее
						</Link>
					</div>
				</div>
			}
		</div>
	)
}
