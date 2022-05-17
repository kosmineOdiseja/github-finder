import React from 'react'
import UsersResults from '../components/users/UsersResults'
import UserSearch from '../components/users/UserSearch'

const home = () => {
  return (
	<>
		<UserSearch />
		<UsersResults />
	</>
  )
}

export default home