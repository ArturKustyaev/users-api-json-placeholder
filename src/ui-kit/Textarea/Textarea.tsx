import classNames from 'classnames'
import { ForwardedRef, forwardRef, TextareaHTMLAttributes } from 'react'
import './Textarea.scss'

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string
	name?: string
	disabled?: boolean
	error?: string
}

export const Textarea = forwardRef(
	(
		{ className, name, error, disabled, ...rest }: ITextareaProps,
		ref: ForwardedRef<HTMLTextAreaElement>
	): JSX.Element => {
		const classes = classNames('ui-textarea', className, {
			'ui-textarea--error': error
		})

		return (
			<textarea
				className={classes}
				name={name}
				ref={ref}
				disabled={disabled}
				{...rest}
			/>
		)
	}
)
