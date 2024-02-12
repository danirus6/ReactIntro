import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

const News = () => {
  const { news, getNews } = useContext(GlobalContext)

  useEffect(() => {
    getNews();
  }, []);

  const noticia = news.map((noticia) => {
      return (
        <div key={noticia.id}>
          <h1>{noticia.title}</h1>
        </div>
      );
  });
  return <div>{noticia}</div>;
};

export default News;