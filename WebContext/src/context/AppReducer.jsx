const news = (state, action) => {
	
	switch (action.type) {
		case 'LOAD_SAVED_NEWS':
    		return {
      			...state,
      			news: [...action.payload, ...state.news],
    		};
		case 'GET_NEWS':
			return {
				...state,
				news: action.payload,
			};
		case 'ADD_NEWS':
      const updatedNews = [action.payload, ...state.news];
      localStorage.setItem('News', JSON.stringify(updatedNews));
      return {
        ...state,
        news: updatedNews,
      };
		default:
			return state
	}
}
export default news