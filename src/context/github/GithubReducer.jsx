const githubReducer = ( state, action ) => {
	// you can use if statement, but the problem is that you have to a lot of if statements 
	// so convention it is to use switch statement
	switch ( action.type ) {

		case 'GET_USERS':
			return {
				...state,
				users: action.payload, 
				loading: false, 
			}
		default: 
		return state;
	}
}

export default githubReducer;