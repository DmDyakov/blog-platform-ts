import { ArticleFormType } from 'src/typings/articleForm';
import { Lang } from 'src/typings/language';

export const formTitle = {
  [ArticleFormType.CREATE]: {
    [Lang.EN]: 'Create new article',
    [Lang.RU]: 'Создать новую статью',
  },
  [ArticleFormType.EDIT]: {
    [Lang.EN]: 'Edit article',
    [Lang.RU]: 'Редактировать статью',
  },
};

export const articleTitleLabel = {
  [Lang.EN]: 'Title',
  [Lang.RU]: 'Заголовок статьи',
};

export const shortDescLabel = {
  [Lang.EN]: 'Short description',
  [Lang.RU]: 'Короткое описание',
};

export const textAreaLabel = {
  [Lang.EN]: 'Text',
  [Lang.RU]: 'Текст',
};

export const tagFieldsetTitle = {
  [Lang.EN]: 'Tags',
  [Lang.RU]: 'Теги',
};

export const tagPlaceholder = {
  [Lang.EN]: 'new tag...',
  [Lang.RU]: 'введите новый тег...',
};

export const submitBtnText = {
  [Lang.EN]: 'Send',
  [Lang.RU]: 'Отправить',
};

export const deleteBtnText = {
  [Lang.EN]: 'Delete',
  [Lang.RU]: 'Удалить',
};

export const addTagBtnText = {
  [Lang.EN]: 'Add tag',
  [Lang.RU]: 'Добавить тег',
};
