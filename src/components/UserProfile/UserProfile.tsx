import { yupResolver } from '@hookform/resolvers/yup'
import { IUser } from 'components'
import { FC, FocusEvent, useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Textarea } from 'ui-kit'
import { FormField } from 'ui-kit/FormField/FormField'
import * as yup from 'yup'
import './UserProfile.scss'

interface UserProfileProps {
	user: IUser
}

export interface IUserProfileForm {
	name: string
	username: string
	email: string
	street: string
	city: string
	zipcode: string
	phone: string
	website: string
}

const schema = yup.object().shape({
	name: yup
		.string()
		.matches(/^([^0-9]*)$/, 'field must not contain numbers')
		.required('Enter name'),
	username: yup.string().required('Enter username'),
	email: yup.string().email('Invalid email').required('Enter email'),
	street: yup.string().required('	Enter your name'),
	city: yup
		.string()
		.matches(/^([^0-9]*)$/, 'field must not contain numbers')
		.required('Enter city'),
	zipcode: yup
		.string()
		.matches(/^([0-9-]*)$/, 'field must not contain letters')
		.required('Enter zipcode'),
	phone: yup.string().required('Enter phone'),
	website: yup.string().required('Enter website')
})

export const UserProfile: FC<UserProfileProps> = ({ user }): JSX.Element => {
	const userInfo = {
		name: user.name,
		username: user.username,
		email: user.email,
		street: user.address.street,
		city: user.address.city,
		zipcode: user.address.zipcode,
		phone: user.phone,
		website: user.website
	}

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IUserProfileForm>({
		defaultValues: userInfo,
		resolver: yupResolver(schema)
	})

	const [isFocused, setIsFocused] = useState({
		name: false,
		username: false,
		email: false,
		street: false,
		city: false,
		zipcode: false,
		phone: false,
		website: false
	})

	const [isDisabled, setIsdisabled] = useState<boolean>(true)

	const activateEditHandler = () => {
		setIsdisabled(false)
	}

	const onSubmit = (data: IUserProfileForm) => {
		console.log(data)
	}

	const focusHandler = (e: FocusEvent<HTMLInputElement>) => {
		setIsFocused({ ...isFocused, [e.target.name]: true })
	}

	const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
		setIsFocused({ ...isFocused, [e.target.name]: false })
	}

	return (
		<div className='user-profile'>
			<div className='user-profile__top'>
				<h2 className='user-profile__title'>Профиль пользователя</h2>
				<Button onClick={activateEditHandler}>Редактировать</Button>
			</div>
			<form className='user-profile-form' onSubmit={handleSubmit(onSubmit)}>
				<div className='user-profile-form__inputs'>
					<FormField
						className='user-profile-form__input'
						label='Name'
						name='name'
						register={register}
						error={errors.name && errors.name.message}
						isFocused={isFocused.name}
						isDisabled={isDisabled}
						onFocus={focusHandler}
						onBlur={blurHandler}
					/>
					<FormField
						className='user-profile-form__input'
						label='User name'
						name='username'
						register={register}
						error={errors.username && errors.username.message}
						isFocused={isFocused.username}
						isDisabled={isDisabled}
						onFocus={focusHandler}
						onBlur={blurHandler}
					/>
					<FormField
						className='user-profile-form__input'
						label='E-mail'
						name='email'
						register={register}
						error={errors.email && errors.email.message}
						isFocused={isFocused.email}
						isDisabled={isDisabled}
						onFocus={focusHandler}
						onBlur={blurHandler}
					/>
					<FormField
						className='user-profile-form__input'
						label='Street'
						name='street'
						register={register}
						error={errors.street && errors.street.message}
						isFocused={isFocused.street}
						isDisabled={isDisabled}
						onFocus={focusHandler}
						onBlur={blurHandler}
					/>
					<FormField
						className='user-profile-form__input'
						label='City'
						name='city'
						register={register}
						error={errors.city && errors.city.message}
						isFocused={isFocused.city}
						isDisabled={isDisabled}
						onFocus={focusHandler}
						onBlur={blurHandler}
					/>
					<FormField
						className='user-profile-form__input'
						label='Zip code'
						name='zipcode'
						register={register}
						error={errors.zipcode && errors.zipcode.message}
						isFocused={isFocused.zipcode}
						isDisabled={isDisabled}
						onFocus={focusHandler}
						onBlur={blurHandler}
					/>
					<FormField
						className='user-profile-form__input'
						label='Phone'
						name='phone'
						register={register}
						error={errors.phone && errors.phone.message}
						isFocused={isFocused.phone}
						isDisabled={isDisabled}
						onFocus={focusHandler}
						onBlur={blurHandler}
					/>
					<FormField
						className='user-profile-form__input'
						label='Website'
						name='website'
						register={register}
						error={errors.website && errors.website.message}
						isFocused={isFocused.name}
						isDisabled={isDisabled}
						onFocus={focusHandler}
						onBlur={blurHandler}
					/>
					{/* <Textarea
						className='user-profile-form__textarea'
						label='Comment'
						name='comment'
						disabled={isDisabled}
						value={userInfo.comment}
						//onChange={changeCommentHandler}
					/> */}
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
