/* eslint-disable react/prop-types */
import { FC } from 'react';

import ProfileLink from '../profile-link';

import classes from './article-preview.module.scss';
import { ArticleData } from 'src/models/article.dto';
import ContentBlock from '../content-block';

type ArticlePreviewProps = ArticleData & {
  body?: string;
  noShadow?: boolean;
  isActiveLink?: boolean;
};

const ArticlePreview: FC<ArticlePreviewProps> = ({
  children,
  slug,
  title,
  description,
  tagList,
  createdAt,
  favorited,
  favoritesCount,
  noShadow,
  author: { username, image },
  isActiveLink,
}) => {
  const tags = tagList.map((tagItem) => (
    <button key={Math.floor(Math.random() * 1e7)} className={classes.tag} type="button">
      {tagItem}
    </button>
  ));

  return (
    <ContentBlock>
      <div className={classes.header}>
        <div>
          <div className={classes.titleContainer}>
            <h3 className={classes.title}>{title}</h3>
            {/* {favoriteBox} */}
          </div>
          <div className={classes.tagsGroup}>{tags}</div>
        </div>
        <ProfileLink username={username} createdAt={createdAt} image={image} />
      </div>
      <div className={classes.content}>
        <p className={classes.text}>{description}</p>
        {children}
      </div>
    </ContentBlock>
  );
};

export default ArticlePreview;
