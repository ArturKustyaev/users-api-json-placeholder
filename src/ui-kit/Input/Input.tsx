import classNames from 'classnames'
import { FC, InputHTMLAttributes, ReactNode } from 'react'
import './Input.scss'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	wrapperClassName?: string
	className?: string
	children?: ReactNode
	disabled?: boolean
	label?: string
	labelClassName?: string
}

export const Input: FC<IInputProps> = ({
	wrapperClassName,
	className,
	children,
	disabled,
	label,
	labelClassName,
	...rest
}): JSX.Element => {
	const classes = classNames('ui-input', className, {
		'ui-input--disabled': disabled
	})

	return (
		<span className={classNames('ui-input-wrapper', wrapperClassName)}>
			{label && <label className={classNames('ui-input__label', labelClassName)}>{label}</label>}
			<input className={classes} disabled={disabled} type='text' {...rest} />
			{children}
		</span>
	)
}
