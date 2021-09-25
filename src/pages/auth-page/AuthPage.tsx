import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import AuthForm from 'src/components/auth-form';
import { FormType } from 'src/typings/authForm';
import { Lang } from 'src/typings/language';

import { btnTextData, linkData, noticeData, titleData } from './constants';

const lang = Lang.EN;

const AuthPage = () => {
  const { formType } = useParams<{ formType: FormType }>();

  return (
    <AuthForm
      formType={formType}
      title={titleData[formType][lang]}
      notice={noticeData[formType][lang]}
      btnText={btnTextData[formType][lang]}
    >
      <Link to={`/auth/${linkData[formType].link}`}>{linkData[formType][lang]}</Link>
    </AuthForm>
  );
};

export default AuthPage;
