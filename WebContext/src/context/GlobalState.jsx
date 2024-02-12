import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  news: [],
};

export const GlobalContext = createContext(initialState);

const appReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_SAVED_NEWS':
      return {
        ...state,
        news: [...action.payload, ...state.news],
      };
    case 'GET_NEWS':
      const newsFromAPI = action.payload.filter(apiNews => !state.news.some(news => news.id === apiNews.id));
      return {
        ...state,
        news: [...state.news, ...newsFromAPI],
      };
    case 'ADD_NEWS':
      const updatedNews = [action.payload, ...state.news];
      localStorage.setItem('News', JSON.stringify(updatedNews));
      return {
        ...state,
        news: updatedNews,
      };
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const getNews = async () => {
    try {
      const response = await axios.get('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=Wd9fRmTqg5FxbSYpKaKPLZLk954zsReI');
      dispatch({
        type: 'GET_NEWS',
        payload: response.data.results,
      });
    } catch (error) {
      console.error("Error fetching news from API:", error);
    }
  };

  const addNews = (newArticle) => {
    const newsWithId = { ...newArticle, id: Date.now() };
    dispatch({
      type: 'ADD_NEWS',
      payload: newsWithId,
    });
  };

  useEffect(() => {
    const loadInitialData = async () => {
      const storedNews = JSON.parse(localStorage.getItem('News')) || [];
      if (storedNews.length > 0) {
        dispatch({
          type: 'LOAD_SAVED_NEWS',
          payload: storedNews,
        });
      }
      await getNews();
    };

    loadInitialData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        news: state.news,
        getNews,
        addNews,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
