import { yupResolver } from '@hookform/resolvers/yup'
import { FC, FocusEvent, HTMLAttributes, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, FormField } from 'ui-kit'
import { schema } from './schema'
import './UserForm.scss'

export interface IUserFormFields {
	name: string
	username: string
	email: string
	street: string
	city: string
	zipcode: string
	phone: string
	website: string
	comment?: string
}

export interface IUserFormProps extends HTMLAttributes<HTMLFormElement> {
	userData: IUserFormFields
	isDisabled: boolean
}

export const UserForm: FC<IUserFormProps> = ({ userData, isDisabled, ...rest }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IUserFormFields>({
		defaultValues: userData,
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
		website: false,
		comment: false
	})

	const onSubmit = (data: IUserFormFields) => {
		console.log(JSON.stringify(data))
	}

	const focusHandler = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setIsFocused({ ...isFocused, [e.target.name]: true })
	}

	const blurHandler = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setIsFocused({ ...isFocused, [e.target.name]: false })
	}

	return (
		<form className='user-form' onSubmit={handleSubmit(onSubmit)}>
			<div className='user-form__inputs'>
				<FormField
					className='user-form__input'
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
					className='user-form__input'
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
					className='user-form__input'
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
					className='user-form__input'
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
					className='user-form__input'
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
					className='user-form__input'
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
					className='user-form__input'
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
					className='user-form__input'
					label='Website'
					name='website'
					register={register}
					error={errors.website && errors.website.message}
					isFocused={isFocused.name}
					isDisabled={isDisabled}
					onFocus={focusHandler}
					onBlur={blurHandler}
				/>
				<FormField
					className='user-form__textarea'
					label='Comment'
					name='comment'
					type='textarea'
					register={register}
					error={errors.comment && errors.comment.message}
					isFocused={isFocused.comment}
					isDisabled={isDisabled}
					onFocus={focusHandler}
					onBlur={blurHandler}
				/>
			</div>
			<div className='user-form__actions'>
				<Button className='user-form__button' variant='success' type='submit' disabled={isDisabled}>
					Отправить
				</Button>
			</div>
		</form>
	)
}
