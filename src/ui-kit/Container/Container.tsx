import classNames from 'classnames'
import { FC, HTMLAttributes, ReactNode } from 'react'
import './Container.scss'

interface IContainerProps extends HTMLAttributes<HTMLDListElement> {
	className?: string
	children?: ReactNode
}

export const Container: FC<IContainerProps> = ({ className, children }): JSX.Element => {
	return <div className={classNames('ui-container', className)}>{children}</div>
}
