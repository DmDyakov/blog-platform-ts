import { Profile } from './user.dto';

export default interface Comment {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: Profile;
}
