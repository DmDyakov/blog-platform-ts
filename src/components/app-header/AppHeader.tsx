import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleFormType } from 'src/typings/articleForm';
import { FormType } from 'src/typings/authForm';
import { Lang } from 'src/typings/language';
import Button from '../button';
import ProfileLink from '../profile-link';
import classes from './app-header.module.scss';
import { createArticle, logo, logOut, signIn, signUp } from './constants';

//============from store

const lang = Lang.EN;
const isLogin = true;
const username = 'username';
const image = '';

//============from store

const AppHeader = () => {
  const profileLink = isLogin && username && <ProfileLink username={username} image={image} />;

  const signInBtn = !isLogin && (
    <Link to={`/auth/${FormType.SIGN_IN}`}>
      <Button type="button" design={signIn.design}>
        {signIn[lang]}
      </Button>
    </Link>
  );

  const signUpBtn = !isLogin && (
    <Link to={`/auth/${FormType.SIGN_UP}`}>
      <Button type="button" design={signUp.design}>
        {signUp[lang]}
      </Button>
    </Link>
  );

  const logOutBtn = isLogin && (
    <Link to="/">
      <Button type="button" design={logOut.design}>
        {logOut[lang]}
      </Button>
    </Link>
  );

  const createArticleBtn = isLogin && (
    <Link to={`/article/editing/${ArticleFormType.CREATE}`}>
      <Button type="button" design={createArticle.design}>
        {createArticle[lang]}
      </Button>
    </Link>
  );

  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}>
        <Link to={`/`}>
          <span>{logo}</span>
        </Link>
      </div>
      {signInBtn}
      {createArticleBtn}
      {profileLink}
      {signUpBtn}
      {logOutBtn}
    </div>
  );
};

export default React.memo(AppHeader);
