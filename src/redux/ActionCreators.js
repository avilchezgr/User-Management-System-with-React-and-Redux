import {baseUrl} from '../shared/baseUrl';
import * as ActionTypes from './ActionTypes';
import {reset} from 'redux-form';

export const postUser = (firstName, lastName, age, email) => (dispatch) => {
	
	dispatch(submittingForm());
	const newUser = {
		name: firstName,
		lastName: lastName,
		age: age,
		email: email
	}
	
	
	
	return fetch(baseUrl + 'users', {
		method:'POST',
		body: JSON.stringify(newUser),
		headers:{
			'Content-Type': 'application/json'
		},
		credentials: 'same-origin'
	})
	.then(response => {
		if(response.ok) {
			return response;
		}else{
			var error = new Error("Error " + response.status+ ": " + response.statusText);
			error.response = response;
			throw error;
		}
	},
	error => {
		var errmess = new Error(error.message);
		throw errmess
	})
	.then(response => response.json())
	.then( user => dispatch(addUser(user)))
	.catch(error => {
		console.log('Post User',error.message);
		dispatch(errorWhileSubmitting("Error While Posting a new User"));
	});
	
};

export const modifyUser = (id, firstName, lastName, age, email) => (dispatch) => {
	
	dispatch(submittingForm());
	
	const existingUser = {
		id: id,
		name: firstName,
		lastName: lastName,
		age: age,
		email: email
	}
	
	return fetch(baseUrl + 'users/'+existingUser.id, {
		method:'PUT',
		body: JSON.stringify(existingUser),
		headers:{
			'Content-Type': 'application/json'
		},
		credentials: 'same-origin'
	})
	.then(response => {
		if(response.ok) {
			return response;
		}else{
			var error = new Error("Error " + response.status+ ": " + response.statusText);
			error.response = response;
			throw error;
		}
	},
	error => {
		var errmess = new Error(error.message);
		throw errmess
	})
	.then(response => response.json())
	.then(response =>{ dispatch(modUser(existingUser))})
	.catch(error => {
		dispatch(errorWhileSubmitting("Error While Modifying User"));
		console.log('Modify User',error.message);
	});
	
};

export const delUser = (id) =>({
	type: ActionTypes.DELETE_USER,
	payload: id
})

export const deleteUser = (id) => (dispatch) => {
	
	dispatch(submittingForm());
	return fetch(baseUrl + 'users/'+id, {method:'DELETE'})
		.then(response => {
			if(response.ok) {
				return response;
			}else{
				var error = new Error("Error " + response.status+ ": " + response.statusText);
				error.response = response;
				console.log("hay un 404");
				throw error;
			}
		}, error => {
			var errmess = new Error(error.message);
			throw errmess
		})
		.then(response =>{
			dispatch(delUser(id));
		}) 
		.catch(error => {
			dispatch(errorWhileSubmitting("Error While Deleting an User"));
			console.log('Delete User',error.message);
	});
		
};



export const modUser = (user) => ({
	type: ActionTypes.MODIFY_USER,
	payload: user
});


export const addUsers = (users) => ({
	type: ActionTypes.ADD_USERS,
	payload: users
});
export const usersFailed = (errmess) => ({
	type: ActionTypes.USERS_FAILED,
	payload: errmess
});

export const fetchUsers = () => (dispatch) =>{
	dispatch(usersLoading(true));
	
	return fetch(baseUrl + 'users')
	.then(response => {
		if(response.ok) {
			return response;
		}else{
			var error = new Error("Error " + response.status+ ": " + response.statusText);
			error.response = response;
			throw error;
		}
	},
	error => {
		var errmess = new Error(error.message);
		throw errmess
	})
	.then(response => response.json())
	.then(users => dispatch(addUsers(users)))
	.catch(error => dispatch(usersFailed(error.message)));
	
};
export const usersLoading = () => ({
	type: ActionTypes.USERS_LOADING
});
export const addUser = (user) => ({
	type: ActionTypes.ADD_USER,
	payload: user
})
export const resetForm = (formName) => (dispatch) => {
	dispatch(reset(formName));
}
export const submittingForm = () => ({
	type: ActionTypes.WAITING_SUBMIT_USER
});
export const errorWhileSubmitting = (errorMess) => ({
	type: ActionTypes.ERROR_WHILE_SUBMITTING,
	payload: errorMess
});
