import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './homepage.css';

const HomePage = () => {
  const category = useSelector(state => state.category);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&pageSize=10&apiKey=c0878b7e06224f1a9e56a1c9fab61deb`)
      .then(response => {
        dispatch({ type: 'SET_ARTICLES', articles: response.data.articles });
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [category, page, dispatch]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading articles</p>;

  return (
    <div className="home-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="articles-grid">
        {filteredArticles.map((article, index) => (
          <div key={index} className="article">
            {article.urlToImage ? (
              <img src={article.urlToImage} alt={article.title} />
            ) : (
              <div className="no-image"></div>
            )}
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <Link to={`/article/${index}`}>Read more</Link>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
        <span>Page {page}</span>
        <button onClick={() => setPage(page + 1)} disabled={articles.length < 10}>Next</button>
      </div>
    </div>
  );
};

export default HomePage;
