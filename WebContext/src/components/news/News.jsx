import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

const News = () => {
  const { news, getNews } = useContext(GlobalContext)

  useEffect(() => {
    getNews();
  }, []);

  const noticias = news.map((noticia, index) => {
      return (
        <div key={index}>
          <h1>{noticia.title}</h1>
        </div>
      );
  });
  return <div>{noticias}</div>;
};
export default News;