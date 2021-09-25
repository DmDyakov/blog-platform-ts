import axios from 'axios';
import { Article, DataType } from 'src/models/article.dto';

class RealWorldService {
  API_BASE = 'https://conduit.productionready.io/api';

  createConfig = (token?: string) => {
    return {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: token && `Token ${token}`,
      },
    };
  };

  getArticleList = (limit: number, offset: number, token?: string) =>
    axios.get(`${this.API_BASE}/articles/?limit=${limit}&offset=${offset}`, this.createConfig(token));

  getSelectedArticle = (slug: string, token: string) =>
    axios.get(`${this.API_BASE}/articles/${slug}`, this.createConfig(token));

  createArticle = (data: Article<DataType.CREATING>, token: string) =>
    axios.post(`${this.API_BASE}/articles`, data, this.createConfig(token));

  deleteArticle = (slug: string, token: string) =>
    axios.delete(`${this.API_BASE}/articles/${slug}`, this.createConfig(token));

  updateArticle = (slug: string, data: Article<DataType.UPDATING>, token: string) =>
    axios.put(`${this.API_BASE}/articles/${slug}`, data, this.createConfig(token));

  favoriteArticle = (favorited: boolean, slug: string, token: string) =>
    axios[`${!favorited ? 'post' : 'delete'}`](`${this.API_BASE}/articles/${slug}/favorite`, this.createConfig(token));

  //=============================

  registerUser = (data: any) => axios.post(`${this.API_BASE}/users`, data);

  authenticateUser = (data: any) => axios.post(`${this.API_BASE}/users/login`, data);

  getCurrentUser = (data: any, token: string) => axios.post(`${this.API_BASE}/user`, data, this.createConfig(token));

  updateUser = (data: any, token: string) => axios.put(`${this.API_BASE}/user`, data, this.createConfig(token));

  getProfile = (userName: string) => axios.get(`${this.API_BASE}/profiles/${userName}`);
}

export const realWorldService = new RealWorldService();
