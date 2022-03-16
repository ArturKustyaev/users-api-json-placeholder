import classNames from 'classnames'
import { ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import './Input.scss'

export interface IInputProps extends HTMLAttributes<HTMLInputElement> {
	className?: string
	name?: string
	type?: string
	disabled?: boolean
	error?: string
}

export const Input = forwardRef(
	(
		{ className, name, error, disabled, ...rest }: IInputProps,
		ref: ForwardedRef<HTMLInputElement>
	): JSX.Element => {
		const classes = classNames('ui-input', className, {
			'ui-input--error': error
		})

		return (
			<input className={classes} name={name} type='text' ref={ref} disabled={disabled} {...rest} />
		)
	}
)

Input.displayName = 'Input'
