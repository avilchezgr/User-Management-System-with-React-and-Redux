import * as ActionTypes from './ActionTypes';


export const Users = (
	state = {
		isLoading: true,
		errMess: null,
		users: []
	}, action) => {
	switch(action.type){
		
			case ActionTypes.ADD_USER:	
			
				var user = action.payload;
				return {...state, users:state.users.concat(user)};
			case ActionTypes.MODIFY_USER:
			
				var user = action.payload;
				var array = state.users.slice();
				array = array.map(user =>{
					if(user.id === action.payload.id){
						user = action.payload;
					}
					return user;
				});
				
				return {...state, users: array};
				
			case ActionTypes.DELETE_USER:
			
				var id = action.payload;
				var array = state.users.slice();
				array = array.filter(user => user.id !== id);
				
				return {...state, users: array};
				
			case ActionTypes.ADD_USERS: 
			
				return {...state, isLoading: false, errMess: null, users : action.payload};
				
			case ActionTypes.USERS_LOADING:
			
				return {...state, isLoading: true, errMess: null, users: []};
				
			case ActionTypes.USERS_FAILED:
			
				return {...state, isLoading: false, errMess: action.payload, users: []};
				
			default:
			
				return state;
	}
}