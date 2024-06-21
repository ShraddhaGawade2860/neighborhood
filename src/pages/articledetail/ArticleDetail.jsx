import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../articledetail/articledetail.css';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = useSelector(state => state.articles[id]);
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);

  const addToFavorites = () => {
    console.log('Add to Favorites clicked');
    const currentFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!currentFavorites.some(fav => fav.id === article.id)) {
      currentFavorites.push(article);
      localStorage.setItem('favorites', JSON.stringify(currentFavorites));
      setIsAddedToFavorites(true);
      setTimeout(() => setIsAddedToFavorites(false), 3000);
    } else {
      console.log('Article already in favorites');
    }
  };

  if (!article) return <p>Article not found</p>;

  return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
      {article.urlToVideo && <video src={article.urlToVideo} controls />}
      <button onClick={addToFavorites}>Add to Favorites</button>
      {isAddedToFavorites && <div className="notification">Article added to favorites!</div>}
    </div>
  );
};

export default ArticleDetail;
