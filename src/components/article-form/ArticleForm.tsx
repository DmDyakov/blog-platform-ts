import React, { useState } from 'react';
import { ArticleFormType, Input } from 'src/typings/articleForm';
import { BtnDesign } from 'src/typings/button';

import Button from '../button';
import ContentBlock from '../content-block';

import classes from './article-form.module.scss';

interface InputData {
  id: Input;
  label: string;
}

interface TagConstantsData {
  tagFieldsetTitle: string;
  tagPlaceholder: string;
  submitBtnText: string;
  deleteBtnText: string;
  addTagBtnText: string;
}

interface ArticleFormProps {
  formType: ArticleFormType;
  formTitle: string;
  inputsData: Array<InputData>;
  tagConstantsData: TagConstantsData;
}

const currentTags = [
  { tagText: 'tag1', tagId: '1' },
  { tagText: 'tag2', tagId: '2' },
];

const ArticleForm = ({
  formType,
  formTitle,
  inputsData,
  tagConstantsData: { tagFieldsetTitle, tagPlaceholder, submitBtnText, deleteBtnText, addTagBtnText },
}: ArticleFormProps) => {
  const [value, setValue] = useState('');

  const inputs = inputsData.map(({ id, label }) => {
    //@ts-ignore
    const inputAttributes = { id, placeholder: label, onChange: (event) => setValue(event.target.value) };
    return (
      <div key={`${formType}-${id}`}>
        <label htmlFor={id} className={classes.label}>
          {label}
        </label>
        {id !== Input.TEXT_AREA ? (
          <input className={`${classes.input}`} {...inputAttributes} />
        ) : (
          <textarea className={`${classes.textArea}`} {...inputAttributes} />
        )}
        <div className={classes.messageError}></div>
      </div>
    );
  });

  const tags = currentTags.map(({ tagText, tagId }, idx, list) => (
    <div key={tagId} className={classes.tagContainer}>
      <div className={classes.wrap}>
        <input id={tagId} className={`${classes.input}`} placeholder={tagPlaceholder} defaultValue={tagText} />
      </div>
      <Button design={BtnDesign.delete} type="button">
        {deleteBtnText}
      </Button>
      <Button {...{ isHidden: idx !== list.length - 1 }} design={BtnDesign.addTag} type="button">
        {addTagBtnText}
      </Button>
    </div>
  ));

  const handleSubmit = () => console.log('submit');
  const handleDeleteTag = () => console.log('delete tag');
  const handleAddTag = () => console.log('add tag');

  return (
    <ContentBlock>
      <div className={`${classes.wrapper}`}>
        <form noValidate onSubmit={handleSubmit}>
          <h3 className={classes.title}>{formTitle}</h3>
          {inputs}
          <fieldset className={classes.taglistFieldset}>
            {/* <label className={classes.label}> */}
            {tagFieldsetTitle}
            {tags}
            {/* </label> */}
          </fieldset>
          <div className={classes.wrap}>
            <Button type="submit" design={BtnDesign.SUBMIT}>
              {submitBtnText}
            </Button>
          </div>
        </form>
      </div>
    </ContentBlock>
  );
};

export default ArticleForm;
