import React from 'react';
import { useLocation, useParams } from 'react-router';
import { ArticleFormType, Input } from 'src/typings/articleForm';
import { Lang } from 'src/typings/language';

import ArticleForm from '../../components/article-form';
import * as constants from './constants';

const lang = Lang.RU;

const ArticleEditingPage = () => {
  const { formType } = useParams<{ formType: ArticleFormType }>();

  const inputsData = [
    { id: Input.TITLE, label: constants.articleTitleLabel[lang] },
    { id: Input.SHORT_DESCRIPTION, label: constants.shortDescLabel[lang] },
    { id: Input.TEXT_AREA, label: constants.textAreaLabel[lang] },
  ];

  const tagConstantsData = {
    tagFieldsetTitle: constants.tagFieldsetTitle[lang],
    tagPlaceholder: constants.tagPlaceholder[lang],
    submitBtnText: constants.submitBtnText[lang],
    deleteBtnText: constants.deleteBtnText[lang],
    addTagBtnText: constants.addTagBtnText[lang],
  };

  return (
    <>
      <ArticleForm
        formType={formType}
        formTitle={constants.formTitle[formType][lang]}
        inputsData={inputsData}
        tagConstantsData={tagConstantsData}
      />
    </>
  );
};
export default ArticleEditingPage;
