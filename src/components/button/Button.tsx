import React from 'react';
import { BtnDesign } from 'src/typings/button';

import classes from './button.module.scss';

interface ButtonProps {
  children: string;
  design: BtnDesign;
  btnAction?: () => void;
  type: 'button' | 'submit';
  isHidden?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children: btnText, design, btnAction, type, isHidden }) => (
  <button
    className={`${classes.btn} ${classes[design]} ${isHidden ? classes.hidden : ''}`}
    type={type}
    onClick={btnAction}
  >
    {btnText}
  </button>
);

export default Button;
