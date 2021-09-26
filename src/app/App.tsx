import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import AppHeader from 'src/components/app-header';
import ArticleEditingPage from 'src/pages/article-editing-page';
import ArticleListPage from 'src/pages/article-list-page';
import ArticleSinglePage from 'src/pages/article-single-page';
import AuthPage from 'src/pages/auth-page';

import classes from './app.module.scss';

const App = () => {
  return (
    <div className="app">
      <Router>
        <AppHeader />
        <div className={classes.page}>
          <Switch>
            <Route exact path="/auth/:formType" component={AuthPage} />
            <Route exact path="/articles/page/:pageNumber" component={ArticleListPage} />
            <Route exact path="/article/:slug" component={ArticleSinglePage} />
            <Route exact path="/article/edit/:slug" component={ArticleEditingPage} />
            <Route exact path="/article/edit/new" component={ArticleEditingPage} />
            <Redirect to="/article/edit/new" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
