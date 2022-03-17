import classNames from 'classnames'
import { FC, HTMLAttributes } from 'react'
import './Loader.scss'

interface ILoaderProps extends HTMLAttributes<HTMLDivElement> {
	className?: string
}

export const Loader: FC<ILoaderProps> = ({ className, ...rest }): JSX.Element => {
	return (
		<div className='ui-loader-wrapper'>
			<div className={classNames('ui-loader', className)} {...rest}></div>
		</div>
	)
}
