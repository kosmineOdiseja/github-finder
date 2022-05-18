export const ACTIONS = {
	GET_USERS: 'GET_USERS',
	SET_LOADING: 'SET_LOADING',
	CLEAR_USERS: 'CLEAR_USERS',
}

const githubReducer = ( state, action ) => {

	// you can use if statement, but the problem is that you have to a lot of if statements 
	// so convention it is to use switch statement
	switch ( action.type ) {

		case ACTIONS.GET_USERS: 
			return {
				...state,
				users: action.payload, 
				loading: false, 
			}
		case ACTIONS.SET_LOADING: 
			return {
				...state,
				loading: true,
			}
		case ACTIONS.CLEAR_USERS:
			return {
				...state,
				users: [],
			}
		default: 
		return state;
	}
}

export default githubReducer;