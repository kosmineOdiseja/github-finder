import { createContext, useReducer } from "react";
import  GithubReducer  from './GithubReducer'
import { ACTIONS } from './GithubReducer'

console.log(ACTIONS, 'this is actions object from githubReducer');

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {

	const InitialState =  {
		users: [],
		loading: false, 
	}

	const [state, dispach ] =useReducer(GithubReducer, InitialState);

	// get initial users ( testing purposes )
	const fetchUsers = async () => {
		setLoading();
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
		type: ACTIONS.GET_USERS, 
		payload: data
	})
  }

  const setLoading = () => {
	dispach({
	  type: ACTIONS.SET_LOADING, 
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