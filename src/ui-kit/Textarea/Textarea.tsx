import classNames from 'classnames'
import { FC, InputHTMLAttributes, ReactNode } from 'react'
import './Textarea.scss'

interface ITextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
	wrapperClassName?: string
	className?: string
	children?: ReactNode
	disabled?: boolean
	label?: string
	labelClassName?: string
}

export const Textarea: FC<ITextareaProps> = ({
	wrapperClassName,
	className,
	children,
	disabled,
	label,
	labelClassName,
	...rest
}): JSX.Element => {
	const classes = classNames('ui-textarea', className, {
		'ui-textarea--disabled': disabled
	})

	return (
		<span className={classNames('ui-textarea-wrapper', wrapperClassName)}>
			{label && <label className={classNames('ui-textarea__label', labelClassName)}>{label}</label>}
			<textarea className={classes} disabled={disabled} {...rest} />
			{children}
		</span>
	)
}
