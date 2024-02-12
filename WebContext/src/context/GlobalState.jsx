import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
  news: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Cargar noticias de la API del New York Times
  const getNews = async () => {
    try {
      const response = await axios.get(
        'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=Wd9fRmTqg5FxbSYpKaKPLZLk954zsReI'
      );
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
      const News = JSON.parse(localStorage.getItem('News')) || [];
    
      News.forEach(newsItem => {
        
        dispatch({
          type: 'ADD_NEWS',
          payload: newsItem,
        });
      });
      await getNews();
    };

    loadInitialData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        news: state.news,
        getNews,
        addNews
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
