import React from 'react'
import {FaHome } from 'react-icons/fa'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
	<div className='hero'>
		<div className='text-center hero-content'>
			<div className='max-w-lg'>
				<h1 className='text-8xl font-bold mb-8'> Ooops! </h1>
				<p className='text-5xl font-bold mb-8'> 404 - Page not found </p>
				<Link to='/' className='text btn-ghost btn-sm rounded-btn'>
					<FaHome className='inline pr-2 text-3xl' />
					Home
				</Link>
			</div>
		</div>
	</div>
  )
}

export default NotFound