import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { addArticles, tags, user, post } from './reducer.js';

const rootReducer = combineReducers({
	addArticles,
	tags,
	user,
	post,
})

export const store = createStore(rootReducer)
