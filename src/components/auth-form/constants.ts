import { Input } from 'src/typings/authForm';
import { Lang } from 'src/typings/language';

export const labels = {
  [Input.USERNAME]: {
    [Lang.EN]: 'Username',
    [Lang.RU]: 'Имя пользователя',
  },
  [Input.EMAIL]: {
    [Lang.EN]: 'Email address',
    [Lang.RU]: 'Email адрес',
  },
  [Input.PASSWORD]: {
    [Lang.EN]: 'Password',
    [Lang.RU]: 'Пароль',
  },
  [Input.REPEATEPASSWORD]: {
    [Lang.EN]: 'Repeat password',
    [Lang.RU]: 'Повторите пароль',
  },
  [Input.NEWPASSWORD]: {
    [Lang.EN]: 'New password',
    [Lang.RU]: 'Новый пароль',
  },
  [Input.AVATAR]: {
    [Lang.EN]: 'Avatar image (url)',
    [Lang.RU]: 'Картинка аватара (url)',
  },
  iAgreeTo: {
    [Lang.EN]: 'I agree to the processing of my personal information',
    [Lang.RU]: 'Я согласен с обработкой моих персональных данных',
  },
};
