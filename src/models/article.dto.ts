import { Profile } from './user.dto';

export type Tags = [] | Array<string>;

export enum DataType {
  SINGLE,
  CREATING,
  UPDATING,
  MULTIPLY,
}

export interface ArticleData {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: Tags;
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Profile;
}

export interface ArticleCreatingData {
  title: string;
  description: string;
  body: string;
  tagList?: Tags;
}

export interface ArticleUpdatingData {
  title?: string;
  description?: string;
  body?: string;
}

export type Article<T> = T extends DataType.SINGLE
  ? {
      article: ArticleData;
    }
  : T extends DataType.CREATING
  ? {
      article: ArticleCreatingData;
    }
  : T extends DataType.UPDATING
  ? {
      article: ArticleUpdatingData;
    }
  : T extends DataType.MULTIPLY
  ? {
      articles: Array<ArticleData>;
      articlesCount: number;
    }
  : never;
