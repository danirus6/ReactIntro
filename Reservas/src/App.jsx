import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Reserve from './components/Reserve'; 
import Footer from './components/Footer'; 

const App = () => {
  return (
    <Router>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Reserve" element={<Reserve />} />
      </Routes>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Reserve">Reserve</Link></li>

        </ul>
      </nav>
      <Footer />
    </Router>
  );
};

export default App;
