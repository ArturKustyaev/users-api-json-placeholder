import classNames from 'classnames'
import { FC, HTMLAttributes, ReactNode } from 'react'
import './Container.scss'

interface IContainerProps extends HTMLAttributes<HTMLDivElement> {
	className?: string
	children?: ReactNode
}

export const Container: FC<IContainerProps> = ({ className, children, ...rest }): JSX.Element => {
	return (
		<div className={classNames('ui-container', className)} {...rest}>
			{children}
		</div>
	)
}
