import { IUser, UserItem } from 'components'
import { FC } from 'react'
import { Loader } from 'ui-kit'
import './UserList.scss'

export interface IUserListProps {
	users: Array<IUser>
}

export const UserList: FC<IUserListProps> = ({ users }): JSX.Element => {
	return (
		<div className='user-list'>
			<h2 className='user-list__title'>Список пользователей</h2>
			{users.length ? (
				<>
					<ul className='user-list__list'>
						{users.map(user => (
							<li className='user-list__item' key={user.id}>
								<UserItem user={user} />
							</li>
						))}
					</ul>
					<div className='user-list__users-count'>Найдено {users.length} пользователей</div>
				</>
			) : (
				<Loader />
			)}
		</div>
	)
}
