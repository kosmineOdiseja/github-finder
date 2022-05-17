import { createContext, useReducer } from "react";
import  GithubReducer  from './GithubReducer'
import { ACTIONS } from './GithubReducer'

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {

	const InitialState =  {
		users: [],
		loading: false, 
	}

	const [state, dispach ] =useReducer(GithubReducer, InitialState);
	
	// get search results O
	const searchUsers = async (text) => {
		setLoading();

	const params = new URLSearchParams({
		q: 'text',
	});
		
		const response = await fetch(`${GITHUB_URL}/search/users?${params}`,
		{
			method: 'GET',
			headers: {
			'Content-Type': 'application/json',
			'Authorization': `token ${GITHUB_TOKEN}`
			}
		});

    const { items } = await response.json();

	dispach({
		type: ACTIONS.GET_USERS, 
		payload: items, 
	})
  }
// set Loading 
  const setLoading = () => dispach({
	  type: ACTIONS.SET_LOADING, 
	})
  


  return (
	<GithubContext.Provider
		value={{
			users: state.users, 
			loading: state.loading,
			searchUsers, 
		}}
	 >
		{children}
	</GithubContext.Provider>
  )
}

export default GithubContext;