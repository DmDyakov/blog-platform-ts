import { FormType } from 'src/typings/authForm';
import { Lang } from 'src/typings/language';

export const titleData = {
  [FormType.SIGN_UP]: {
    [Lang.EN]: 'Create new account',
    [Lang.RU]: 'Создать новый аккаунт',
  },
  [FormType.SIGN_IN]: {
    [Lang.EN]: 'Sign In',
    [Lang.RU]: 'Войти',
  },
  [FormType.EDIT_PROFILE]: {
    [Lang.EN]: 'Edit Profile',
    [Lang.RU]: 'Редактировать профиль',
  },
};

export const noticeData = {
  [FormType.SIGN_UP]: {
    [Lang.EN]: 'Already have an account?',
    [Lang.RU]: 'Создать новый аккаунт?',
  },
  [FormType.SIGN_IN]: {
    [Lang.EN]: 'Don’t have an account?',
    [Lang.RU]: 'Нет аккаунта?',
  },
  [FormType.EDIT_PROFILE]: {
    [Lang.EN]: '',
    [Lang.RU]: '',
  },
};

export const btnTextData = {
  [FormType.SIGN_UP]: {
    [Lang.EN]: 'Create',
    [Lang.RU]: 'Создать',
  },
  [FormType.SIGN_IN]: {
    [Lang.EN]: 'Login',
    [Lang.RU]: 'Войти',
  },
  [FormType.EDIT_PROFILE]: {
    [Lang.EN]: 'Save',
    [Lang.RU]: 'Сохранить',
  },
};

export const linkData = {
  [FormType.SIGN_UP]: {
    [Lang.EN]: 'Sign In',
    [Lang.RU]: 'Войти',
    link: FormType.SIGN_IN,
  },
  [FormType.SIGN_IN]: {
    [Lang.EN]: 'Sign Up',
    [Lang.RU]: 'Создать',
    link: FormType.SIGN_UP,
  },
  [FormType.EDIT_PROFILE]: {
    [Lang.EN]: '',
    [Lang.RU]: '',
    link: '',
  },
};
