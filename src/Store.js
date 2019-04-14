import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { addArticles, tags } from './reducer.js';

const rootReducer = combineReducers({
	addArticles,
	tags,
})

export const store = createStore(rootReducer)
