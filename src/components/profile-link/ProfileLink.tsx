import React, { useState } from 'react';
import { format } from 'date-fns';
import defaultAvatar from '../../assets/img/profile-icn.svg';

import classes from './profile-link.module.scss';

interface ProfileLinkProps {
  username: string;
  createdAt?: string;
  image: string | null;
}

const ProfileLink = ({ username, createdAt, image }: ProfileLinkProps) => {
  const [onErrorAvatarImg, setOnErrorAvatarImg] = useState('');

  return (
    <div className={classes.profileLink}>
      <div className={classes.profileData}>
        <div className={classes.userName}>{username}</div>
        <div className={classes.creationDate}>{createdAt && format(new Date(createdAt), 'MMM d, yyyy')}</div>
      </div>
      <div className={classes.avatarContainer}>
        <img
          className={classes.avatar}
          src={onErrorAvatarImg || image || defaultAvatar}
          alt="avatar"
          onError={() => setOnErrorAvatarImg(defaultAvatar)}
        />
      </div>
    </div>
  );
};

export default React.memo(ProfileLink);
