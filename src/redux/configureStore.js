import {createStore, combineReducers, applyMiddleware} from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { Users} from './users';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			form: reduxFormReducer,
			users: Users
		}),applyMiddleware(thunk, logger)
	);
	
	return store;
}