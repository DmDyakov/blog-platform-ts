import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ArticleList from './ArticleList';

const articleList = [
  {
    slug: 'string',
    title: 'string',
    description: 'string',
    body: 'string',
    tagList: ['string', 'string'],
    createdAt: '2012-01-26T13:51:50.417-07:00',
    updatedAt: '2012-01-26T13:51:50.417-07:00',
    favorited: true,
    favoritesCount: 1,
    author: {
      username: 'string',
      bio: 'string',
      image: 'string',
      following: true,
    },
  },
];

it('ArticleList renders', () => {
  render(
    <BrowserRouter>
      <ArticleList list={articleList} />
    </BrowserRouter>
  );
  expect(screen.getByRole('list')).toBeCalled();
});
