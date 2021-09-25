import React from 'react';
import AppHeader from 'src/components/app-header';
import ArticleListPage from 'src/pages/article-list-page';

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <ArticleListPage />
    </div>
  );
};

export default App;
