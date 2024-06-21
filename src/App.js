import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ArticleDetail from './pages/articledetail/ArticleDetail';
import FavoriteArticle from './pages/favouritearticle/FavoriteArticle';
import Navbar from './components/navbar/navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/favorites" element={<FavoriteArticle />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
