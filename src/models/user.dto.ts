export interface User {
  user: {
    email: string;
    token: string;
    username: string;
    bio: string | null;
    image: string | null;
  };
}

export interface Profile {
  username: string;
  bio: string | null;
  image: string | null;
  following: boolean;
}

export interface ProfileDataRespose {
  profile: Profile;
}

export interface UserDataRespose {
  profile: Profile;
}
