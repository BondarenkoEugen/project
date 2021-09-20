import React from 'react';

import greatWork from '../../images/great-work.svg';
import Button from '../Button/Button';
import style from './StartMenu.module.css';

export interface StartMenuProps {
  /** Callback when the button is clicked */
  onClick: () => void;
}

function StartMenu({ onClick }: StartMenuProps) {
  return (
    <div className={style.container}>
      <img className={style.mainImg} src={greatWork} alt="greatWork" />
      <div className={style.textBlock}>
        <span className={style.text}>Who wants to be a millionaire?</span>
        <Button onClick={onClick}>
          <span>Start</span>
        </Button>
      </div>
      <div className={style.background} />
    </div>
  );
}

export default StartMenu;
