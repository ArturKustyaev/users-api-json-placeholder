import classNames from 'classnames'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import './Button.scss'

export type ButtonVariantType = 'primary' | 'success'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	variant?: ButtonVariantType
	children?: ReactNode
}

export const Button: FC<IButtonProps> = ({
	className,
	children,
	variant = 'primary',
	disabled,
	...rest
}): JSX.Element => {
	const classes = classNames('ui-button', className, {
		'ui-button--disabled': disabled,
		'ui-button--success': variant === 'success'
	})
	return (
		<button className={classes} disabled={disabled} {...rest}>
			{children}
		</button>
	)
}
