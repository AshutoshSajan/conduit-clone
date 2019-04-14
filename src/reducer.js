export function addArticles (state = [], action){
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