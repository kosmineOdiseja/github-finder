import { createContext, useReducer } from 'react';
import alertReducer  from './AlertReducer';
import ACTIONS from './AlertReducer'

console.log(ACTIONS, 'this is the actions');

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {

	const initialState = null; 
	
	const [state, dispatch] = useReducer(alertReducer, initialState);

	//set Alert function 
	const setAlert = ( msg, type ) => {
		dispatch({
			type: ACTIONS.SET_ALERT, 
			payload: { msg, type }

		})
		setTimeout(() => dispatch({ type: ACTIONS.REMOVE_ALERT }), 3000);
	}

	return (
		<AlertContext.Provider 
			value={{
				alert: state,
				setAlert,
			}} 
		>
		{children}
		</AlertContext.Provider>
	)
}

export default AlertContext;