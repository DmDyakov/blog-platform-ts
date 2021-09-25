import React, { useEffect, useState } from 'react';
import { Spin, Pagination } from 'antd';

import classes from './article-list-page.module.scss';

import { realWorldService } from 'src/services/real-world-service';
import ArticlePreview from 'src/components/article-preview';
import { ArticleData } from 'src/models/article.dto';

import 'antd/dist/antd.css';
import ErrorMessage from 'src/components/error-message';
import { useHistory } from 'react-router';

interface ArticleListPageProps {
  page: string;
}

const ArticleListPage = ({ page }: ArticleListPageProps) => {
  const [articleList, setArticleList] = useState<ArticleData[]>([]);
  const [articlesCount, setArticlesCount] = useState<number>(0);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState<boolean>(false);

  const history = useHistory();

  const limit = 5;
  const offset = limit * (+page - 1);

  useEffect(() => {
    setLoading(true);
    realWorldService
      .getArticleList(limit, offset)
      .then(({ data: { articles, articlesCount } }) => {
        setArticleList(articles);
        setArticlesCount(articlesCount);
      })
      .catch(() => setError('Ошибка'))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const changePage = (pageNumber: number) => {
    history.push(`/articles/page/${pageNumber}`);
  };

  const previewArticleList =
    articleList &&
    !error &&
    articleList.map(({ slug, ...article }: ArticleData) => (
      <ArticlePreview key={slug} slug={slug} {...article} isActiveLink />
    ));

  const pagination = !error && (
    <Pagination
      style={{ marginBottom: '1em' }}
      current={+page || 1}
      showSizeChanger={false}
      disabled={articlesCount <= limit}
      hideOnSinglePage={articlesCount === 0}
      defaultPageSize={limit}
      size="small"
      total={articlesCount}
      onChange={changePage}
    />
  );

  return (
    <div className={classes.container}>
      {error && <ErrorMessage error={error} />}
      <Spin
        tip={`${articleList.length ? 'Loading...' : ''} `}
        spinning={isLoading && !error}
        style={!articleList.length ? { margin: '100px 0' } : undefined}
      >
        {previewArticleList}
      </Spin>
      {pagination}
    </div>
  );
};

export default ArticleListPage;
