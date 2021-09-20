import React from 'react';

import gameConfig from '../../gameConfig.json';
import greatWork from '../../images/great-work.svg';
import Button from '../Button/Button';
import style from './EndMenu.module.css';

export interface EndMenuProps {
  /** Index of current card */
  cardIndex: number;
  /** Callback when button is clicked */
  onClick: () => void;
}

function EndMenu({ cardIndex, onClick }: EndMenuProps) {
  return (
    <div className={style.container}>
      <img className={style.mainImg} src={greatWork} alt="greatWork" />
      <div className={style.textBlock}>
        <span className={style.inscription}>Total score:</span>
        <span className={style.title}>
          {cardIndex > 0
            ? `$${gameConfig.money[cardIndex - 1]} earned`
            : '$0 earned'}
        </span>
        <Button onClick={onClick}>
          <span>Try again</span>
        </Button>
      </div>
    </div>
  );
}

export default EndMenu;
