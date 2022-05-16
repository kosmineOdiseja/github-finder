import React, { useEffect, useState } from 'react'
import LoadingAnimation from '../assets/images/loadingAnimation.gif'
import UserItem from './UserItem'


const UsersResults = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {

    fetchUsers()
  }); 
  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}`
          }
      });

    const data = await response.json();
    setUsers(data)
    setLoading(false)
  }
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