import { userApi } from 'api/usersApi'
import { AxiosResponse } from 'axios'
import { IUser, Sidebar, UserProfile } from 'components'
import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Loader } from 'ui-kit'
import './UserPage.scss'

export const UserPage: FC = () => {
	const [user, setUser] = useState<IUser>()
	const { id } = useParams<string>()

	useEffect(() => {
		id &&
			userApi.fetchUserById(id).then((response: AxiosResponse<IUser>) => {
				setUser(response.data)
			})
	}, [])

	return (
		<div className='user-page'>
			<Container>
				<div className='user-page__inner'>
					<Sidebar />
					{user ? <UserProfile user={user} /> : <Loader />}
				</div>
			</Container>
		</div>
	)
}
