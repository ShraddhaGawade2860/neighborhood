import React from 'react';
import '../favouritearticle/favoritearticle.css';

const FavoriteArticles = () => {
  const favoriteArticles = JSON.parse(localStorage.getItem('favorites')) || [];

  return (
    <div className="favorite-articles">
      <h2>Favorite Articles</h2>
      {favoriteArticles.length === 0 ? (
        <p>No favorite articles saved yet.</p>
      ) : (
        <ul>
          {favoriteArticles.map((article, index) => (
            <li key={index}>
              <h3>{article.title}</h3>
              <img src={article.urlToImage} alt={article.title} />
              <p>{article.content}</p>
              {article.urlToVideo && <video src={article.urlToVideo} controls />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteArticles;
