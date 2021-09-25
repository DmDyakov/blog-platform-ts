import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import AppHeader from 'src/components/app-header';
import ArticleListPage from 'src/pages/article-list-page';
import ArticleSinglePage from 'src/pages/article-single-page';

import classes from './app.module.scss';

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <div className={classes.page}>
        <Router>
          <Switch>
            <Route exact path="/articles/page/:page" component={ArticleListPage} />
            <Route exact path="/article/:slug" component={ArticleSinglePage} />
            <Redirect to="/articles/page/1" />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
