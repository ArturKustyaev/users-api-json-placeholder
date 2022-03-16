import { IUser } from 'components'
import UserForm from 'components/UserForm'
import { FC, useState } from 'react'
import { Button } from 'ui-kit'
import './UserProfile.scss'

interface UserProfileProps {
	user: IUser
}

export const UserProfile: FC<UserProfileProps> = ({ user }): JSX.Element => {
	const userData = {
		name: user.name,
		username: user.username,
		email: user.email,
		street: user.address.street,
		city: user.address.city,
		zipcode: user.address.zipcode,
		phone: user.phone,
		website: user.website
	}

	const [isDisabled, setIsdisabled] = useState<boolean>(true)

	const activateEditHandler = () => {
		setIsdisabled(false)
	}

	return (
		<div className='user-profile'>
			<div className='user-profile__top'>
				<h2 className='user-profile__title'>Профиль пользователя</h2>
				<Button onClick={activateEditHandler}>Редактировать</Button>
			</div>
			<UserForm userData={userData} isDisabled={isDisabled} />
		</div>
	)
}
