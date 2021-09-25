import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Article from 'src/components/article';
import ErrorMessage from 'src/components/error-message';
import { ArticleData } from 'src/models/article.dto';
import { realWorldService } from 'src/services/real-world-service';
import 'antd/dist/antd.css';

const token = '';

const ArticleSinglePage = () => {
  const [articleData, setArticleData] = useState<ArticleData>();
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState<boolean>(false);

  const params = useParams<{ slug: string }>();

  useEffect(() => {
    setLoading(true);
    realWorldService
      .getSelectedArticle(params.slug, token)
      .then(({ data: { article } }) => {
        setArticleData(article);
      })
      .catch(() => setError('Ошибка'))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <>
      <Spin tip={'Loading...'} spinning={isLoading && !error} style={{ margin: '100px 0' }} />
      {articleData && <Article {...articleData} />}

      {error && <ErrorMessage error={error} />}
    </>
  );
};

export default ArticleSinglePage;
