import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { addArticles, tags, user, post, UserInfo, userProfile } from './reducer.js';

const rootReducer = combineReducers({
	addArticles,
	tags,
	user,
	post,
	UserInfo,
	userProfile,
})

export const store = createStore(rootReducer)
