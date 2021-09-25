import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import AppHeader from 'src/components/app-header';
import AuthForm from 'src/components/auth-form';
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
            <Route path="/auth/:formType" exact component={AuthPage} />
            <Route exact path="/articles/page/:page" component={ArticleListPage} />
            <Route exact path="/article/:slug" component={ArticleSinglePage} />
            <Redirect to="/articles/page/1" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
