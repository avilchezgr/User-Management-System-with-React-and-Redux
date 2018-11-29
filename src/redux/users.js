import * as ActionTypes from './ActionTypes';

var user;
var array;

export const Users = (
	state = {
		isLoading: true,
		errMess: null,
		users: [],
		formSubmitting: false,
		errorSubmitting: null
	}, action) => {
	switch(action.type){
		
			case ActionTypes.ADD_USER:	
			
				 user = action.payload;
				return {...state, formSubmitting: false, errorSubmitting: null ,users: state.users.concat(user)};
			case ActionTypes.MODIFY_USER:
			
				 user = action.payload;
				 array = state.users.slice();
				array = array.map(user =>{
					if(user.id === action.payload.id){
						user = action.payload;
					}
					return user;
				});
				
				return {...state, users: array, errorSubmitting: null ,formSubmitting: false};
				
			case ActionTypes.DELETE_USER:
			
				var id = action.payload;
				array = state.users.slice();
				array = array.filter(user => user.id !== id);
				
				return {...state, users: array, errorSubmitting: null, formSubmitting: false};
				
			case ActionTypes.ADD_USERS: 
			
				return {...state, isLoading: false, errMess: null, users : action.payload, errorSubmitting: null , formSubmitting: false};
				
			case ActionTypes.USERS_LOADING:
			
				return {...state, isLoading: true, errMess: null, users: [], formSubmitting: false};
				
			case ActionTypes.USERS_FAILED:
			
				return {...state, isLoading: false, errMess: action.payload, users: [], formSubmitting: false, errorSubmitting: null };
			
			case ActionTypes.WAITING_SUBMIT_USER:
				return {...state, isLoading: false, formSubmitting: true, errorSubmitting: null};
				
			case ActionTypes.ERROR_WHILE_SUBMITTING:
				return {...state, formSubmitting: false, errorSubmitting: action.payload};
				
			default:
			
				return state;
	}
}