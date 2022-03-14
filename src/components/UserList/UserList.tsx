import { userApi } from 'api/userApi'
import { AxiosResponse } from 'axios'
import UserItem from 'components/UserItem'
import { IUser } from 'components/UserItem/types'
import { FC, useEffect, useState } from 'react'
import { Loader } from 'ui-kit'
import './UserList.scss'

export const UserList: FC = (): JSX.Element => {
	const [users, setUsers] = useState<Array<IUser>>([])

	useEffect(() => {
		userApi.fetchUsers().then((response: AxiosResponse<Array<IUser>>) => {
			setUsers(response.data)
		})
	}, [])

	return (
		<div className='user-list'>
			<h2 className='user-list__title'>Список пользователей</h2>
			{users.length ? (
				users.map(user => <UserItem className={'user-list__user'} key={user.id} user={user} />)
			) : (
				<Loader />
			)}
		</div>
	)
}
