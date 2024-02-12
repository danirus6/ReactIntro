const newsReducer = (state, action) => {
	switch (action.type) {
	  case 'GET_NEWS':
		return {
		  ...state,
		  news: [...state.news, ...action.payload],
		};
	  case 'ADD_NEWS':
		const updatedNews = [action.payload];
		
		localStorage.setItem('News', JSON.stringify(updatedNews));
		return {
		  ...state,
		  news: updatedNews,
		};
	  default:
		return state;
	}
  };
  
  export default newsReducer;