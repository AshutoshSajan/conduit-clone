export function addArticles (state = [], action){
	// console.log(state, action, "in reducer");
  switch (action.type) {
  	case "ADD_ARTICLES":
  		return action.data;
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
	console.log(state, action, "in user reducer");
	switch (action.type) {
		case "ADD_USER":
			return action.user;
		default:
			return state;
	}
}

