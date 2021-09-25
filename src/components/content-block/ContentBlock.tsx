import React from 'react';

import classes from './content-block.module.scss';

const ContentBlock: React.FC = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default ContentBlock;
