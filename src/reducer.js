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
	console.log(state,"state", action,"action" , "in user reducer")
	switch (action.type) {
		case "ADD_USER":
			return action.user;
		case "FAVORITE_ARTICLE":
			return action.data;
		default:
			return state;
	}
}

