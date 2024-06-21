import { combineReducers } from 'redux';

// Reducer to handle articles
const articlesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ARTICLES':
      return action.articles;
    default:
      return state;
  }
};

// Reducer to handle category
const categoryReducer = (state = 'general', action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return action.category;
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  articles: articlesReducer,
  category: categoryReducer
});

export default rootReducer;
