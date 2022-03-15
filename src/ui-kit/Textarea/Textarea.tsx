import classNames from 'classnames'
import { FC, InputHTMLAttributes, ReactNode } from 'react'
import './Textarea.scss'

interface ITextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
	className?: string
	disabled?: boolean
	label?: string
	labelClassName?: string
}

export const Textarea: FC<ITextareaProps> = ({
	className,
	disabled,
	label,
	labelClassName,
	...rest
}): JSX.Element => {
	const classes = classNames('ui-textarea', className, {
		'ui-textarea--disabled': disabled
	})

	return (
		<>
			{label && <label className={classNames('ui-textarea__label', labelClassName)}>{label}</label>}
			<textarea className={classes} disabled={disabled} {...rest} />
		</>
	)
}
