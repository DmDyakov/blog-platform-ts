import React from 'react';
import { FormType, Input } from 'src/typings/authForm';
import { Lang } from 'src/typings/language';
import ContentBlock from '../content-block';

import classes from './auth-form.module.scss';
import { labels } from './constants';

const lang = Lang.EN;

interface AuthFormProps {
  formType: FormType;
  title: string;
  notice: string;
  btnText: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ formType, title, notice, btnText, children: link }) => {
  const inputIds = {
    [FormType.SIGNUP]: [Input.USERNAME, Input.EMAIL, Input.PASSWORD, Input.REPEATEPASSWORD],
    [FormType.SIGNIN]: [Input.EMAIL, Input.PASSWORD],
    [FormType.EDIT]: [Input.USERNAME, Input.EMAIL, Input.NEWPASSWORD, Input.AVATAR],
  };

  const inputs = inputIds[formType].map((id) => (
    <div className={classes.inputContainer} key={`${FormType.SIGNUP}-${id}`}>
      <label htmlFor={id} className={`${classes.label}`}>
        {labels[id][lang]}
      </label>
      <input
        id={id}
        className={`${classes.input}`}
        type={id.includes('password') ? 'password' : id.includes('email') ? 'email' : 'text'}
        placeholder={labels[id][lang]}
      />
      <span className={classes.errorMessageStyle}></span>
    </div>
  ));

  const iAgreeTo = formType === FormType.SIGNUP && (
    <div>
      <fieldset className={classes.fieldset}>
        <input className={`${classes.checkbox}`} id="iAgreeTo" type="checkbox" />
        <label className={`${classes.labelIAgreeTo}`} htmlFor="iAgreeTo">
          {labels.iAgreeTo[lang]}
        </label>
      </fieldset>
      <div className={`${classes.errorMessageStyle}`}>{}</div>
    </div>
  );

  const submitButton = (
    <button className={classes.btn} type="submit">
      {btnText}
    </button>
  );

  const handleSubmit = () => console.log('submit');

  return (
    <ContentBlock>
      <div className={classes.wrapper}>
        <form noValidate>
          <h3 className={classes.title}>{title}</h3>
          {inputs}
          {iAgreeTo}
          {submitButton}
          {notice}
          <span className={classes.link}>{link}</span>
        </form>
      </div>
    </ContentBlock>
  );
};

export default AuthForm;
