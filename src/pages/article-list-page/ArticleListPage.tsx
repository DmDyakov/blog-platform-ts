import React, { useEffect, useState } from 'react';
import { Spin, Pagination } from 'antd';

import classes from './article-list-page.module.scss';

import { realWorldService } from 'src/services/real-world-service';
import Article from 'src/components/article';
import { ArticleData } from 'src/models/article.dto';

import 'antd/dist/antd.css';
import ErrorMessage from 'src/components/error-message';
import { useHistory, useParams } from 'react-router';
import ArticleList from 'src/components/article-list';
import FriendList from 'src/components/form-example/FormExample';

interface ArticleListPageProps {
  page: string;
}

const ArticleListPage = ({ page }: ArticleListPageProps) => {
  const [articleList, setArticleList] = useState<ArticleData[]>([]);
  const [articlesCount, setArticlesCount] = useState<number>(0);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState<boolean>(false);

  const history = useHistory();
  const params = useParams<{ pageNumber: string }>();

  const limit = 5;
  const offset = limit * (+params.pageNumber - 1);

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
  }, [params.pageNumber]);

  const changePage = (pageNumber: number) => {
    history.push(`/articles/page/${pageNumber}`);
  };

  const pagination = !error && (
    <Pagination
      style={{ marginBottom: '1em' }}
      current={+params.pageNumber || 1}
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
        {articleList && !error && <ArticleList list={articleList} />}
      </Spin>
      {pagination}

      <svg className="{className}">
        <rect onMouseOver={console.log} x="0" y="0" width="30" height="30" fill="purple" />
        <rect onClick={(e) => console.log(e.target)} x="20" y="5" width="30" height="30" fill="blue" />
        <rect className="fff" x="40" y="10" width="30" height="30" fill="green" />
        <rect x="60" y="15" width="30" height="30" fill="yellow" />
        <rect x="80" y="20" width="30" height="30" fill="red" />
      </svg>
      <svg>
        <circle cx="25" cy="25" r="20" fill="green" stroke-width="5" stroke="rgb(150,110,200)" />
        <circle cx="250" cy="32" r="30" fill="yellow" stroke-width="3" stroke="rgb(50,90,150)" />
        <line x1="50" y1="30" x2="250" y2="0" stroke-width="3" stroke="red" />
        <rect width="30" height="20" fill="orange" stroke-width="1" stroke="rgb(0,0,0)" />
        <polygon points="100,140 250,118 170,60 " fill="blue" stroke-width="1" stroke="rgb(0,0,0)" />
        <polygon points="40,100 100,100 100,150 40,150" fill="red" stroke-width="2" stroke="rgb(100,250,110)" />
      </svg>

      <FriendList />
    </div>
  );
};

export default ArticleListPage;
