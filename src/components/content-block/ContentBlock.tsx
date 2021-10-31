import React from 'react';

import classes from './content-block.module.scss';

const ContentBlock: React.FC = (props) => {
  return (
    <div draggable={true} onDrag={console.log} className={classes.container}>
      {props.children}
    </div>
  );
};

export default ContentBlock;
