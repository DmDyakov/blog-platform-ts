import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import AppHeader from 'src/components/app-header';
import Home from 'src/components/multi-step-form/MultiStepForm';
import ArticleEditingPage from 'src/pages/article-editing-page';
import ArticleListPage from 'src/pages/article-list-page';
import ArticleSinglePage from 'src/pages/article-single-page';
import AuthPage from 'src/pages/auth-page';
import { ArticleFormType } from 'src/typings/articleForm';
import { FormType } from 'src/typings/authForm';

import classes from './app.module.scss';

const App = () => {
  return (
    <div className="app">
      <Router>
        <AppHeader />
        <div className={classes.page}>
          <Switch>
            <Route
              exact
              path={`/auth/:formType(${FormType.SIGN_IN}|${FormType.SIGN_UP}|${FormType.EDIT_PROFILE})`}
              component={AuthPage}
            />
            <Route exact path="/articles/page/:pageNumber" component={ArticleListPage} />
            <Route exact path="/article/:slug" component={ArticleSinglePage} />
            <Route
              exact
              path={`/article/editing/:formType(${ArticleFormType.CREATE}|${ArticleFormType.EDIT})`}
              component={ArticleEditingPage}
            />
            <Redirect to={`/articles/page/1`} />
          </Switch>
        </div>
      </Router>
      <Home />
      <select>
        <option value="grapefruit">Грейпфрут</option>
        <option value="lime">Лайм</option>
        <option selected value="coconut">
          Кокос
        </option>
        <option value="mango">Манго</option>
      </select>
    </div>
  );
};

export default App;
