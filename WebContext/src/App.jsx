import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState'; 

import Home from './components/home/Home'; 
import News from './components/news/News';
import Form from './components/form/Form';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;