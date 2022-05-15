import React from 'react'

const Footer = () => {
const FooterYear = new Date().getFullYear()
  return (
	<footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>

		<p>
			Copyright &copy; {FooterYear}
		</p>

	</footer>
  )
}

export default Footer