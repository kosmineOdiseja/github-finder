import React, { useContext, useEffect } from 'react'
import LoadingAnimation from '../assets/images/loadingAnimation.gif'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'


const UsersResults = () => {

  const { users, loading, fetchUsers } = useContext(GithubContext)

	useEffect(() => {
    fetchUsers()
  },[]); 
  
  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {
          users.map((user) => (
            <UserItem user={user} key={user.id} />
          ))
        }
      </div>
    )
  } else {
    return (
      <img  className="flex items-center justify-center "src={LoadingAnimation} alt='loading animation' />
    )
  }
}

export default UsersResults