import React from 'react';
import { Link } from 'react-router-dom';
import { FormType } from 'src/typings/authForm';
import { Lang } from 'src/typings/language';
import Button from '../button';
import ProfileLink from '../profile-link';
import classes from './app-header.module.scss';
import { createArticle, logo, logOut, signIn, signUp } from './constants';

//============from store

const lang = Lang.EN;
const isLogin = false;
const username = 'username';
const image = '';

//============from store

const AppHeader = () => {
  const profileLink = isLogin && username && <ProfileLink username={username} image={image} />;

  const signInBtn = !isLogin && (
    <Link to={`/auth/${FormType.SIGNIN}`}>
      <Button type="button" design={signIn.design}>
        {signIn[lang]}
      </Button>
    </Link>
  );

  const signUpBtn = !isLogin && (
    <Link to={`/auth/${FormType.SIGNUP}`}>
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
    <Button type="button" design={createArticle.design}>
      {createArticle[lang]}
    </Button>
  );

  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}>
        <span>{logo}</span>
      </div>
      {signInBtn}
      {createArticleBtn}
      {profileLink}
      {signUpBtn}
      {logOutBtn}
    </div>
  );
};

export default AppHeader;
