import { FormType } from 'src/typings/authForm';
import { Lang } from 'src/typings/language';

export const titleData = {
  [FormType.SIGNUP]: {
    [Lang.EN]: 'Create new account',
    [Lang.RU]: 'Создать новый аккаунт',
  },
  [FormType.SIGNIN]: {
    [Lang.EN]: 'Sign In',
    [Lang.RU]: 'Войти',
  },
  [FormType.EDIT]: {
    [Lang.EN]: 'Edit Profile',
    [Lang.RU]: 'Редактировать профиль',
  },
};

export const noticeData = {
  [FormType.SIGNUP]: {
    [Lang.EN]: 'Already have an account?',
    [Lang.RU]: 'Создать новый аккаунт?',
  },
  [FormType.SIGNIN]: {
    [Lang.EN]: 'Don’t have an account?',
    [Lang.RU]: 'Нет аккаунта?',
  },
  [FormType.EDIT]: {
    [Lang.EN]: '',
    [Lang.RU]: '',
  },
};

export const btnTextData = {
  [FormType.SIGNUP]: {
    [Lang.EN]: 'Create',
    [Lang.RU]: 'Создать',
  },
  [FormType.SIGNIN]: {
    [Lang.EN]: 'Login',
    [Lang.RU]: 'Войти',
  },
  [FormType.EDIT]: {
    [Lang.EN]: 'Save',
    [Lang.RU]: 'Сохранить',
  },
};

export const linkData = {
  [FormType.SIGNUP]: {
    [Lang.EN]: 'Sign In',
    [Lang.RU]: 'Войти',
    link: FormType.SIGNIN,
  },
  [FormType.SIGNIN]: {
    [Lang.EN]: 'Sign Up',
    [Lang.RU]: 'Создать',
    link: FormType.SIGNUP,
  },
  [FormType.EDIT]: {
    [Lang.EN]: '',
    [Lang.RU]: '',
    link: '',
  },
};
