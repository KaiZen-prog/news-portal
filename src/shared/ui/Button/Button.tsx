import React, {ButtonHTMLAttributes} from 'react';
import {classNames} from 'shared/lib';
import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    theme,
    children,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
