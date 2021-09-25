import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import AppHeader from 'src/components/app-header';
import ArticleListPage from 'src/pages/article-list-page';

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <Router>
        <Switch>
          <Route path="/articles/page/:page" component={ArticleListPage} />
          <Redirect to="/articles/page/1" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
