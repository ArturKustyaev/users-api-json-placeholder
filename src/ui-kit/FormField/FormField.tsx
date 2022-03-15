import classNames from 'classnames'
import { FC, FocusEvent } from 'react'
import { Input } from 'ui-kit'
import './FormField.scss'

export interface IFormFieldProps {
	className?: string
	error?: string
	label?: string
	name?: string
	register?: (ref: any) => void
	isDisabled: boolean
	isFocused?: boolean
	onBlur?: (event: FocusEvent<HTMLInputElement>) => void
	onFocus?: (event: FocusEvent<HTMLInputElement>) => void
}

export const FormField: FC<IFormFieldProps> = ({
	className,
	label,
	name,
	register,
	error,
	isDisabled,
	isFocused,
	onBlur,
	onFocus
}) => {
	return (
		<div
			className={classNames('ui-form-field', className, {
				'ui-form-field--focused': isFocused
			})}
		>
			<label className='ui-form-field__label' htmlFor={name}>
				{label}
			</label>

			<>
				<Input
					error={error}
					name={name}
					{...(register ? register(name) : register)}
					disabled={isDisabled}
					onFocus={onFocus}
					onBlur={onBlur}
				/>
				{error && <div className='ui-form-field__error-message'>{error}</div>}
			</>
		</div>
	)
}
