import { IUser } from 'components/UserItem/types'
import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { Button, Input, Textarea } from 'ui-kit'
import './UserProfile.scss'

interface UserProfileProps {
	user: IUser
}

export const UserProfile: FC<UserProfileProps> = ({ user }): JSX.Element => {
	const [isDisabled, setIsdisabled] = useState<boolean>(true)
	const [userInfo, setUserInfo] = useState<IUser>({
		id: user.id,
		name: user.name,
		username: user.username,
		email: user.email,
		address: {
			street: user.address.street,
			city: user.address.city,
			zipcode: user.address.zipcode
		},
		phone: user.phone,
		website: user.website,
		company: {
			name: user.company.name
		},
		comment: ''
	})

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
	}

	const changeAddressHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setUserInfo({ ...userInfo, address: { ...userInfo.address, [e.target.name]: e.target.value } })
	}

	const changeCommentHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setUserInfo({ ...userInfo, comment: e.target.value })
	}

	const activateEditHandler = () => {
		setIsdisabled(false)
	}

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(userInfo)
	}

	return (
		<div className='user-profile'>
			<div className='user-profile__top'>
				<h2 className='user-profile__title'>Профиль пользователя</h2>
				<Button onClick={activateEditHandler}>Редактировать</Button>
			</div>
			<form className='user-profile-form' onSubmit={submitHandler}>
				<div className='user-profile-form__inputs'>
					<Input
						wrapperClassName='user-profile-form__input'
						label='Name'
						name='name'
						value={userInfo.name}
						disabled={isDisabled}
						onChange={changeHandler}
					/>
					<Input
						wrapperClassName='user-profile-form__input'
						label='User name'
						name='username'
						value={userInfo.username}
						disabled={isDisabled}
						onChange={changeHandler}
					/>
					<Input
						wrapperClassName='user-profile-form__input'
						label='E-mail'
						name='email'
						value={userInfo.email}
						disabled={isDisabled}
						onChange={changeHandler}
					/>
					<Input
						wrapperClassName='user-profile-form__input'
						label='Street'
						name='street'
						value={userInfo.address.street}
						disabled={isDisabled}
						onChange={changeAddressHandler}
					/>
					<Input
						wrapperClassName='user-profile-form__input'
						label='City'
						name='city'
						value={userInfo.address.city}
						disabled={isDisabled}
						onChange={changeAddressHandler}
					/>
					<Input
						wrapperClassName='user-profile-form__input'
						label='Zip code'
						name='zipcode'
						value={userInfo.address.zipcode}
						disabled={isDisabled}
						onChange={changeAddressHandler}
					/>
					<Input
						wrapperClassName='user-profile-form__input'
						label='Phone'
						name='phone'
						value={userInfo.phone}
						disabled={isDisabled}
						onChange={changeHandler}
					/>
					<Input
						wrapperClassName='user-profile-form__input'
						label='Website'
						name='website'
						value={userInfo.website}
						disabled={isDisabled}
						onChange={changeHandler}
					/>
					<Textarea
						label='Comment'
						name='comment'
						disabled={isDisabled}
						value={userInfo.comment}
						onChange={changeCommentHandler}
					/>
				</div>
				<div className='user-profile-form__actions'>
					<Button
						className='user-profile-form__button'
						variant='success'
						type='submit'
						disabled={isDisabled}
					>
						Отправить
					</Button>
				</div>
			</form>
		</div>
	)
}
