/* eslint-disable react/prop-types */
import { FC } from 'react';

import ProfileLink from '../profile-link';
// import ReactMarkdown from 'react-markdown';

import classes from './article.module.scss';
import { ArticleData } from 'src/models/article.dto';
import ContentBlock from '../content-block';
import { Link } from 'react-router-dom';

type ArticleProps = ArticleData & {
  noShadow?: boolean;
  isActiveLink?: boolean;
  isPreview?: boolean;
};

const Article: FC<ArticleProps> = ({
  children,
  slug,
  title,
  description,
  tagList,
  body,
  createdAt,
  favorited,
  favoritesCount,
  noShadow,
  author: { username, image },
  isActiveLink,
  isPreview,
}) => {
  const tagFieldsetTitle = tagList.map((tagItem) => (
    <button key={Math.floor(Math.random() * 1e7)} className={classes.tag} type="button">
      {tagItem}
    </button>
  ));

  const bodyContainer = !isPreview && (
    <div className={classes.body}>
      {/* <ReactMarkdown>{body}</ReactMarkdown> */}
      {body}
    </div>
  );

  return (
    <ContentBlock>
      <div className={classes.header}>
        <div>
          <div className={classes.titleContainer}>
            <Link to={`/article/${slug}`}>
              <h3 className={classes.title}>{title}</h3>
            </Link>
            {/* {favoriteBox} */}
          </div>
          <div className={classes.tagsGroup}>{tagFieldsetTitle}</div>
        </div>
        <ProfileLink username={username} createdAt={createdAt} image={image} />
      </div>
      <div className={classes.previewContent}>
        <p className={classes.text}>{description}</p>
        {children}
      </div>
      {bodyContainer}
    </ContentBlock>
  );
};

export default Article;
