import React from 'react';
import { BtnDesign } from 'src/typings/button';

import Button from '../button';
import ContentBlock from '../content-block';

import classes from './article-form.module.scss';

interface ArticleFormProps {
  headerText: string;
}

const ArticleForm = ({ headerText }: ArticleFormProps) => {
  const inputs = <></>;
  const tagFields = <></>;

  const handleSubmit = () => console.log('submit');

  return (
    <ContentBlock>
      <div className={`${classes.wrapper}`}>
        <form noValidate onSubmit={handleSubmit}>
          <h3 className={classes.title}>{headerText}</h3>
          {inputs}
          <fieldset className={classes.taglistFieldset}>
            <label className={classes.label}>
              Tags
              {tagFields}
            </label>
          </fieldset>
          <div className={classes.wrap}>
            <Button type="submit" design={BtnDesign.save}>
              Send
            </Button>
          </div>
        </form>
      </div>
    </ContentBlock>
  );
};

export default ArticleForm;
