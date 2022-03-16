import { userApi } from 'api'
import { AxiosResponse } from 'axios'
import { IUser, Sidebar, UserList } from 'components'
import { FC, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Container } from 'ui-kit'
import './MainPage.scss'

export const MainPage: FC = (): JSX.Element => {
	const [users, setUsers] = useState<Array<IUser>>([])
	const [params] = useSearchParams()

	useEffect(() => {
		userApi.fetchUsers(params.get('_sort')).then((response: AxiosResponse<Array<IUser>>) => {
			setUsers(response.data)
		})
	}, [params])

	return (
		<div className='main-page'>
			<Container>
				<div className='main-page__inner'>
					<Sidebar />
					<UserList users={users} />
				</div>
			</Container>
		</div>
	)
}
