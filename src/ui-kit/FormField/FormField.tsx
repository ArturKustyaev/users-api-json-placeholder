import classNames from 'classnames'
import { FocusEvent } from 'react'
import { Path, UseFormRegister } from 'react-hook-form'
import { Input } from 'ui-kit'
import Textarea from 'ui-kit/Textarea'
import './FormField.scss'

export type FormFieldType = 'text' | 'textarea'

export interface IFormFieldProps<T> {
	className?: string
	name: Path<T>
	label: string
	type?: FormFieldType
	error?: string
	isDisabled?: boolean
	isFocused?: boolean
	register?: UseFormRegister<T>
	onFocus?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
	onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export const FormField = <T,>({
	className,
	name,
	label,
	type = 'text',
	error,
	isDisabled,
	isFocused,
	register,
	onFocus,
	onBlur
}: IFormFieldProps<T>): JSX.Element => {
	return (
		<div
			className={classNames('ui-form-field', className, {
				'ui-form-field--focused': isFocused
			})}
		>
			<label className='ui-form-field__label' htmlFor={name}>
				{label}
			</label>

			{type === 'text' && (
				<>
					<Input
						name={name}
						type={type}
						error={error}
						{...(register ? register(name) : register)}
						disabled={isDisabled}
						onFocus={onFocus}
						onBlur={onBlur}
					/>
					{error && <div className='ui-form-field__error-message'>{error}</div>}
				</>
			)}
			{type === 'textarea' && (
				<>
					<Textarea
						name={name}
						error={error}
						{...(register ? register(name) : register)}
						disabled={isDisabled}
						onFocus={onFocus}
						onBlur={onBlur}
					/>
					{error && <div className='ui-form-field__error-message'>{error}</div>}
				</>
			)}
		</div>
	)
}
