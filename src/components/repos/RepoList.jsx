import React from 'react'
import ReposItem from './ReposItem'

const RepoList = ({ repos }) =>{
  console.log(repos, 'this is repos from the ReposList')
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
      <div className='card-body'>
        <h2 className='text-3xl my-4 font-bold card-title'>
          Latest Repositories
        </h2>
        {repos.map((repo) => (
          <ReposItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  )
}


export default RepoList