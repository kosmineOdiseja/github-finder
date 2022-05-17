import { createContext, useReducer } from "react";
import  GithubReducer  from './GithubReducer'

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {

	const InitialState =  {
		users: [],
		loading: true, 
	}

	const [state, dispach ] =useReducer(GithubReducer, InitialState);

	const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `token ${GITHUB_TOKEN}`
          }
      });

    const data = await response.json();

	dispach({
		type: 'GET_USERS',
		payload: data
	})
  }

  return (
	<GithubContext.Provider
		value={{
			users: state.users, 
			loading: state.loading,
			fetchUsers, 
		}}
	 >
		{children}
	</GithubContext.Provider>
  )
}

export default GithubContext;