import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { addArticles, tags, user } from './reducer.js';

const rootReducer = combineReducers({
	addArticles,
	tags,
	user,
})

export const store = createStore(rootReducer)
