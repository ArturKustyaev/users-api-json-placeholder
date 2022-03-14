import classNames from 'classnames'
import { ButtonHTMLAttributes, FC, MouseEvent } from 'react'
import './Button.scss'

type ButtonVariantType = 'primary' | 'success'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	variant?: ButtonVariantType
	disabled?: boolean
	onClick?: (e: MouseEvent) => void
}

export const Button: FC<IButtonProps> = ({
	className,
	children,
	variant = 'primary',
	disabled,
	onClick,
	...rest
}): JSX.Element => {
	const classes = classNames('ui-button', className, {
		'ui-button--disabled': disabled,
		'ui-button--success': variant === 'success'
	})
	return (
		<button className={classes} disabled={disabled} onClick={onClick} {...rest}>
			{children}
		</button>
	)
}
