import Profile from "./profile.dto";

export interface Article {
  article: {
    slug: string,
    title: string,
    description: string,
    body: string,
    tagList: Tags,
    createdAt: string,
    updatedAt: string,
    favorited: boolean,
    favoritesCount: number,
    author: Profile
  }
}

export type Tags = string[];







