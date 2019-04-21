export function addArticles (state = [], action){
  switch (action.type) {
  	case "ADD_ARTICLES":
  		return { articles: action.data,	loading: action.loading };
  	default:
  		return state;
  }
}

export function tags (state=[], action){
	switch (action.type) {
		case "ADD_TAGS":
			return action.tags;
		default:
			return state;
	}
}

export function user(state=[], action) {
	switch (action.type) {
		case "ADD_USER":
			return action.user;
		case "FAVORITE_ARTICLE":
			return action.data;
		default:
			return state;
	}
}

export function post (state=[], action){
	// console.log(state,"state", action,"action" , "in post reducer");
	switch (action.type) {
		case "SHOW_POST":
			return action.post;
		default:
			return state;
	}
}

export function UserInfo(state = null, action) {
	// console.log(state, action)
	switch(action.type) {
		case 'ADD_USER_INFO':
			return {
				...state,
				...action.payload
			}
		default:
			return state;
	}
}

export function userProfile (state=[], action){
	// console.log(state,"state", action,"action" , "in post reducer");
	switch (action.type) {
		case "MY_ARTICLES":
			return {...state, ...action.articles};
		case "MY_PROFILE":
			return {...state, ...action.user};
		case "MY_FAVORITE_ARTICLES":
			return {...state, ...action.articles};
		default:
			return state;
	}
}


