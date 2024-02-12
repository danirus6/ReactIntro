import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenido a Mi Página de Noticias</h1>
        <div className="links">
        <nav>
        <Link to="/news" className="home-link">Ver Noticias</Link>
        <Link to="/form" className="home-link">Crear Noticia</Link>
        </nav>
      </div>
    </div>
  );
};

export default Home;