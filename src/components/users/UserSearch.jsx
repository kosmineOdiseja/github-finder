import React, { useState, useContext } from 'react'
import GithubContext  from '../../context/github/GithubContext';


const UserSearch = () => {

	const [text, setText ] = useState('');

	const { users, searchUsers, clearUsers } = useContext(GithubContext);

	const handleChange = (e) => {
		setText(e.target.value);
	}

	const handleSubmit = (e) => {
		// because it's a form submit, we need to prevent the default behavior of the form		
		// that means we we want to get all value of the form at the same time
		e.preventDefault();
		if ( text === '' ) {
			alert('Please enter something')
		} else {
			searchUsers(text);
			setText('');
		}
	}

  return (
  <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                placeholder='Search'
				value={text}
				onChange={handleChange}
              />
              <button
                type='submit'
                className='absolute top-2 right-5 rounded-l-none w-39 btn btn-md'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
			{ users.length > 0 && (
			<div>
				<button
					className='btn btn-ghost btn-lg'
					onClick={clearUsers}
				>
					Clear
				</button>
			</div>
			)}
    </div>
  )
}

export default UserSearch