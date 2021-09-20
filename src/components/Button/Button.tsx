import React from 'react';

import style from './Button.module.css';

export interface ButtonProps {
  /** Content to display inside the button */
  children: React.ReactNode;
  /** Callback when button is clicked */
  onClick?: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button className={style.button} onClick={onClick} type="button">
      {children}
    </button>
  );
}

export default Button;
