import React from 'react';
import { ArticleData } from 'src/models/article.dto';
import Article from '../article';

interface ArticleListProps {
  list: Array<ArticleData>;
}

const ArticleList = ({ list }: ArticleListProps) => {
  const previewArticleList = list.map(({ slug, ...restArticle }: ArticleData) => (
    <Article isPreview key={slug} slug={slug} {...restArticle} isActiveLink />
  ));

  return <>{previewArticleList}</>;
};

export default ArticleList;
