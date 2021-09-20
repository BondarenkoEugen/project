import classNames from 'classnames';
import React from 'react';

import gameConfig from '../../gameConfig.json';
import ProgressTab from './components/ProgressTab/ProgressTab';
import style from './Progress.module.css';

export interface ProgressProps {
  /** Index of current card */
  cardIndex: number;
  /** Whether or not the menu is active */
  active: boolean;
}

function Progress({ cardIndex, active }: ProgressProps) {
  return (
    <div className={classNames(style.container, { [style.active]: active })}>
      <div className={style.menuBlock}>
        <div className={style.buttonsContainer}>
          {gameConfig.money.map((reward, index) => (
            <div className={style.buttonWrapper}>
              <ProgressTab active={cardIndex === index}>
                <span
                  className={classNames(
                    style.rewardButtonContent,
                    { [style.reachedLevel]: cardIndex > index },
                    { [style.currentLevel]: cardIndex === index },
                  )}
                >
                  $
                  {reward}
                </span>
              </ProgressTab>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Progress;
